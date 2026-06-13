import Link from "next/link";
import { Scale, ShieldCheck, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Trusted Legal Counsel for Individuals & Businesses in Toronto
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Over 20 years of experience in civil litigation, family law, real estate, and corporate matters across Canada.
            </p>
            <div className="flex gap-4">
              <Link href="/book" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold flex items-center gap-2">
                Book a Consultation <ArrowRight size={18} />
              </Link>
              <Link href="/practice-areas" className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg font-semibold">
                Our Services
              </Link>
            </div>
          </div>
          <div className="bg-slate-800 rounded-2xl h-80 flex items-center justify-center text-gray-500">
            [Hero Image / Lawyer Photo]
          </div>
        </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Scale className="mx-auto text-amber-600 mb-4" size={36} />
            <h3 className="text-2xl font-bold">20+ Years</h3>
            <p className="text-gray-600">of Legal Experience</p>
          </div>
          <div>
            <ShieldCheck className="mx-auto text-amber-600 mb-4" size={36} />
            <h3 className="text-2xl font-bold">500+ Cases</h3>
            <p className="text-gray-600">Successfully Resolved</p>
          </div>
          <div>
            <Users className="mx-auto text-amber-600 mb-4" size={36} />
            <h3 className="text-2xl font-bold">1000+ Clients</h3>
            <p className="text-gray-600">Served Across Ontario</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Legal Advice?</h2>
        <p className="text-gray-600 mb-8">Schedule a consultation with our team today — quick, confidential, and professional.</p>
        <Link href="/book" className="bg-slate-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors">
          Book Your Appointment
        </Link>
      </section>
    </>
  );
}