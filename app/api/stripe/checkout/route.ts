import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const data = await request.json();
  const priceId = data.priceId;
  const userId = data.userId;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${request.headers.get("origin")!}/success`,
    cancel_url: request.headers.get("origin")!,
    subscription_data: {
      metadata: {
        userId,
      },
    },
    // automatic_tax: { enabled: true },
  });

  return NextResponse.json(session.url);
}
