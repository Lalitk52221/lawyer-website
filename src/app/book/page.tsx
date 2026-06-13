"use client";

import { useState } from "react";

const practiceAreas = ["Family Law", "Real Estate Law", "Civil Litigation", "Corporate Law", "Wills & Estates", "Immigration Law"];
const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

export default function Book() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.url) {
      window.location.href = result.url; // redirect to Stripe Checkout
    } else {
      setError(result.error || "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Book a Consultation</h1>
      <p className="text-gray-600 text-center mb-12">
        A $75 CAD consultation fee is required to secure your appointment.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input name="name" required placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        <input name="email" type="email" required placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
        <input name="phone" required placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" />

        <select name="practiceArea" required className="w-full border border-gray-300 rounded-lg px-4 py-3">
          <option value="">Select Practice Area</option>
          {practiceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input name="date" type="date" required min={new Date().toISOString().split("T")[0]} className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <select name="time" required className="w-full border border-gray-300 rounded-lg px-4 py-3">
            <option value="">Select Time</option>
            {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <textarea name="message" placeholder="Briefly describe your case (optional)" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3" />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button disabled={loading} className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors w-full">
          {loading ? "Redirecting to payment..." : "Proceed to Payment ($75 CAD)"}
        </button>
      </form>
    </section>
  );
}