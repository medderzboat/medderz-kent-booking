import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { boatType, date } = req.body;
    const amount = boatType === "1-2 man" ? 7500 : 15000; // in pence

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{
        price_data: {
          currency: "gbp",
          product_data: {
            name: `${boatType} boat hire on ${date}`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/booking`,
    });

    res.status(200).json({ id: session.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
