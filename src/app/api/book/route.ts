import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, phone, practiceArea, date, time, message } = body;

    if (!name || !email || !phone || !practiceArea || !date || !time) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const appointment = await Appointment.create({
      name, email, phone, practiceArea, date, time, message,
      status: "pending",
      paymentStatus: "unpaid",
      amount: 75,
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: { name: `Legal Consultation - ${practiceArea}` },
            unit_amount: 7500, // $75.00 CAD in cents
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book/success?appointment_id=${appointment._id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/book`,
      metadata: { appointmentId: appointment._id.toString() },
    });

    appointment.stripeSessionId = session.id;
    await appointment.save();

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}