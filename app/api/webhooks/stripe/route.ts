import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import prisma from "@/prisma/client";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    event = Stripe.webhooks.constructEvent(req.body, signature!, endpointSecret!);

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
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err}`);
    return;
  }
}
