import mongoose, { Schema, models } from "mongoose";

const AppointmentSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    practiceArea: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    message: { type: String },
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
    paymentStatus: { type: String, enum: ["unpaid", "paid"], default: "unpaid" },
    stripeSessionId: { type: String },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.Appointment || mongoose.model("Appointment", AppointmentSchema);