"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSent(true);
    setLoading(false);
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
      <p className="text-gray-600 text-center mb-12">
        Have a question? Send us a message and we'll get back to you within 24 hours.
      </p>

      {sent ? (
        <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
          Thank you! Your message has been sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="name" required placeholder="Full Name" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <input name="email" type="email" required placeholder="Email Address" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <input name="phone" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <textarea name="message" required placeholder="Your Message" rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3" />
          <button disabled={loading} className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors w-full">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}