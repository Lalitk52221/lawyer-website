"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Smith <span className="text-amber-600">&</span> Associates
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-amber-600 transition-colors font-medium"
          >
            Book Consultation
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium">
              {link.name}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-center font-medium"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}