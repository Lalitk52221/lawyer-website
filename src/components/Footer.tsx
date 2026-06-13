import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Smith & Associates</h3>
          <p className="text-sm text-gray-400">
            Providing trusted legal representation across Ontario for over 20 years.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
            <li><Link href="/practice-areas" className="hover:text-amber-500">Practice Areas</Link></li>
            <li><Link href="/work" className="hover:text-amber-500">Our Work</Link></li>
            <li><Link href="/book" className="hover:text-amber-500">Book a Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={16} /> 123 Bay Street, Toronto, ON</li>
            <li className="flex items-center gap-2"><Phone size={16} /> +1 (416) 555-0123</li>
            <li className="flex items-center gap-2"><Mail size={16} /> contact@smithlaw.ca</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Smith & Associates. All rights reserved.
      </div>
    </footer>
  );
}