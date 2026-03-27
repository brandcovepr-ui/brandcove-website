"use client";

import { useState } from "react";

const roles = [
  "Graphic Designer",
  "Social Media Manager",
  "Web Designer",
  "Customer Service",
  "Sales Representative",
  "Creative Assistant",
];

const talents = [
  {
    id: 1,
    name: "Amara M.",
    role: "Web Designer",
    description: "Grew three DTC brands from 0 to 50K followers in under 8 months.",
    tags: ["Instagram", "TikTok", "Growth"],
    bg: "bg-amber-200",
    initials: "AM",
  },
  {
    id: 2,
    name: "Jordan K.",
    role: "Graphic Designer",
    description: "Designed brand identities for 20+ startups across SaaS and e-commerce.",
    tags: ["Figma", "Branding", "Print"],
    bg: "bg-rose-200",
    initials: "JK",
  },
  {
    id: 3,
    name: "Priya S.",
    role: "Social Media Manager",
    description: "Scaled a B2C newsletter from 0 to 30K subscribers in 6 months.",
    tags: ["Content", "Analytics", "Paid"],
    bg: "bg-violet-200",
    initials: "PS",
  },
  {
    id: 4,
    name: "Marcus T.",
    role: "Sales Representative",
    description: "Closed $500K ARR in outbound for two early-stage SaaS companies.",
    tags: ["Outbound", "CRM", "SaaS"],
    bg: "bg-sky-200",
    initials: "MT",
  },
  {
    id: 5,
    name: "Chloe R.",
    role: "Creative Assistant",
    description: "Supported 4 founder teams with content calendars and creative ops.",
    tags: ["Notion", "Canva", "Ops"],
    bg: "bg-emerald-200",
    initials: "CR",
  },
  {
    id: 6,
    name: "Demi A.",
    role: "Customer Service",
    description: "Maintained 98% CSAT across 3 DTC brands with 10K+ monthly tickets.",
    tags: ["Zendesk", "Email", "Chat"],
    bg: "bg-orange-200",
    initials: "DA",
  },
];

export default function TalentGrid() {
  const [activeRole, setActiveRole] = useState("Graphic Designer");

  const filtered = activeRole
    ? talents.filter((t) => t.role === activeRole)
    : talents;

  const displayed = filtered.length >= 6 ? filtered : talents;

  return (
    <section id="creatives" className="bg-maroon py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans text-xs font-semibold tracking-widest text-cream/70 uppercase mb-4 border border-cream/20 rounded-full px-3 py-1">
            The Core Six
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            Discover our{" "}
            <span className="font-script text-cream/80 italic">vetted</span>{" "}
            creatives.
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`font-sans text-sm px-4 py-2 rounded-full border transition-colors ${
                activeRole === role
                  ? "bg-cream text-maroon border-cream"
                  : "bg-transparent text-white border-white/20 hover:border-white/50"
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Talent grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((talent) => (
            <div
              key={talent.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
            >
              {/* Avatar */}
              <div
                className={`w-full h-44 ${talent.bg} rounded-xl mb-4 flex items-center justify-center`}
              >
                <span className="font-serif text-4xl font-bold text-gray-500">
                  {talent.initials}
                </span>
              </div>
              {/* Info */}
              <p className="font-sans font-semibold text-white text-base">
                {talent.name}
              </p>
              <p className="font-sans text-xs text-white/50 uppercase tracking-wider mb-2">
                {talent.role}
              </p>
              <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
                {talent.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {talent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
