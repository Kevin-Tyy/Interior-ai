import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "https://interior-ai-lyart.vercel.app",
    cancel_url: "https://interior-ai-lyart.vercel.app",
    // automatic_tax: { enabled: true },
  });

  return NextResponse.json(session.url);
}
