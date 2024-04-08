import Stripe from "stripe";
import prisma from "@/prisma/client";


const find_package = (plan: string) => {
  switch (plan) {
    case process.env.YEARLY_COMPANY_PACK!: {
      return "YEARLY_COMPANY_PACK";
    }
    case process.env.YEARLY_PROFESSIONAL_PACK!: {
      return "YEARLY_PROFESSIONAL_PACK";
    }
    case process.env.YEARLY_STARTER_PACK!: {
      return "YEARLY_STARTER_PACK";
    }
    case process.env.MONTHLY_COMPANY_PACK!: {
      return "MONTHLY_COMPANY_PACK";
    }
    case process.env.MONTHLY_PROFESSIONAL_PACK!: {
      return "MONTHLY_PROFESSIONAL_PACK";
    }
    case process.env.MONTHLY_STARTER_PACK!: {
      return "MONTHLY_STARTER_PACK";
    }
    default: {
      return null;
    }
  }
};

export async function POST(req: Request) {
  let event;

  try {
    const body = await req.text();
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
    const signature = req.headers.get("stripe-signature") as string;

    event = Stripe.webhooks.constructEvent(body, signature!, endpointSecret!);
  } catch (err) {
    console.log(err);
    return new Response("Webhook error", { status: 400 });
  }

  console.log(event.type);
  console.log("Success!!!!");

  switch (event.type) {
    case "customer.subscription.created": {
      const subscription = event.data.object;
      console.log(subscription.metadata?.userId);

      await prisma.account.update({
        where: {
          clerkUserId: subscription.metadata.userId as string,
        },
        data: {
          status: "ACTIVE",
          package: find_package(subscription.items.data[0].plan.id),
          stripeCustomerId: subscription.customer as string,
        },
      });
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
          clerkUserId: subscription.metadata.userId!,
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
