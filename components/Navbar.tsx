"use client";

import { useState } from "react";

const links = [
  { label: "For talents", href: "/creatives" },
  { label: "About us", href: "/about-us" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact us", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto bg-[#FFFFFF] rounded-xl shadow-md px-6">
        {/* Main bar */}
        <div className="h-14 flex items-center justify-between">
          {/* Logo */}
          <span className="font-serif font-regular text-2xl text-black">
            <a href="/">BrandCove.</a>
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-black/90 hover:text-black transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA — desktop only */}
            <button className="hidden md:block bg-maroon text-white font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-maroon/90 transition-colors">
              Get started
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-5 bg-black transition-transform duration-200 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-black transition-transform duration-200 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-200 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-black/70 hover:text-black transition-colors px-2 py-2.5 rounded-lg hover:bg-gray-100"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <button className="w-full bg-maroon text-white font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-maroon/90 transition-colors">
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
