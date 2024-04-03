import Stripe from "stripe";
import prisma from "@/prisma/client";

export async function POST(req: Request) {
  let event;

  try {
    const body = await req.text();
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const signature = req.headers.get("stripe-signature") as string;
    console.log(signature);
    console.log(body);
    console.log(endpointSecret);

    event = Stripe.webhooks.constructEvent(body, signature!, endpointSecret!);
  } catch (err) {
    console.log(err);
    return new Response("Webhook error", { status: 400 });
  }
  switch (event.type) {
    case "customer.subscription.created": {
      const subscription = event.data.object;

      await prisma.account.update({
        where: {
          clerkUserId: subscription.metadata.userId,
        },
        data: {
          status: "ACTIVE",
          package: "MONTHLY_SUBSCRIPTION",
          stripeCustomerId: subscription.customer as string,
        },
      });
      break;
    }

    case "checkout.session.completed": {
      const payment = event.data.object;

      if (payment.mode === "payment") {
        await prisma.account.update({
          where: {
            clerkUserId: payment.metadata!.userId,
          },
          data: {
            status: "ACTIVE",
            package: "LIFETIME",
          },
        });
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object;

      if (subscription.cancel_at_period_end) {
        await prisma.account.update({
          where: {
            clerkUserId: subscription.metadata.userId,
          },
          data: {
            status: "CANCELLED",
          },
        });
      } else {
        await prisma.account.update({
          where: {
            clerkUserId: subscription.metadata.userId,
          },
          data: {
            status: "ACTIVE",
          },
        });
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object;

      await prisma.account.update({
        where: {
          clerkUserId: subscription.metadata.userId,
        },
        data: {
          status: "INACTIVE",
          package: null,
          stripeCustomerId: null,
        },
      });

      break;
    }
  }
  // Return a 200 response to acknowledge receipt of the event

  return new Response("Success", { status: 200 });
}
