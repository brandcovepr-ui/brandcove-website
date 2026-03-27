"use client";

import Image from "next/image";

const talentCards = [
  {
    id: 1,
    name: "Amara M.",
    role: "Social Media Manager",
    platform: "Instagram",
    rating: 4.8,
    reviews: 24,
    bg: "bg-amber-100",
    initials: "AM",
  },
  {
    id: 2,
    name: "Jordan K.",
    role: "Graphic Designer",
    platform: "Behance",
    rating: 4.9,
    reviews: 31,
    bg: "bg-rose-100",
    initials: "JK",
  },
  {
    id: 3,
    name: "Priya S.",
    role: "Web Designer",
    platform: "Dribbble",
    rating: 5.0,
    reviews: 18,
    bg: "bg-violet-100",
    initials: "PS",
  },
  {
    id: 4,
    name: "Marcus T.",
    role: "Sales Representative",
    platform: "LinkedIn",
    rating: 4.7,
    reviews: 42,
    bg: "bg-sky-100",
    initials: "MT",
  },
  {
    id: 5,
    name: "Chloe R.",
    role: "Creative Assistant",
    platform: "TikTok",
    rating: 4.9,
    reviews: 15,
    bg: "bg-emerald-100",
    initials: "CR",
  },
  {
    id: 6,
    name: "Demi A.",
    role: "Customer Service",
    platform: "Zendesk",
    rating: 4.8,
    reviews: 27,
    bg: "bg-orange-100",
    initials: "DA",
  },
];

function TalentCard({
  name,
  role,
  platform,
  rating,
  reviews,
  bg,
  initials,
}: (typeof talentCards)[0]) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-black/5 w-52 flex-shrink-0">
      {/* Platform badge */}
      <span className="inline-block bg-cream text-gray-600 font-sans text-xs px-2.5 py-1 rounded-full mb-3">
        {platform}
      </span>
      {/* Avatar */}
      <div
        className={`w-full h-32 ${bg} rounded-xl mb-3 flex items-center justify-center`}
      >
        <span className="font-serif text-2xl font-bold text-gray-500">
          {initials}
        </span>
      </div>
      {/* Info */}
      <p className="font-sans font-semibold text-sm text-gray-900">{name}</p>
      <p className="font-sans text-xs text-gray-500 mb-2">{role}</p>
      <div className="flex items-center gap-1">
        <span className="text-amber-400 text-xs">★</span>
        <span className="font-sans text-xs font-medium text-gray-800">
          {rating}
        </span>
        <span className="font-sans text-xs text-gray-400">
          · {reviews} reviews
        </span>
      </div>
    </div>
  );
}

function ScrollColumn({
  cards,
  speed,
  offset,
}: {
  cards: typeof talentCards;
  speed: string;
  offset: boolean;
}) {
  const doubled = [...cards, ...cards];
  return (
    <div className="scroll-column overflow-hidden h-[520px] flex flex-col">
      <div
        className={`flex flex-col gap-4 ${speed} ${offset ? "mt-[-60px]" : ""}`}
        style={{ willChange: "transform" }}
      >
        {doubled.map((card, i) => (
          <TalentCard key={`${card.id}-${i}`} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const col1 = talentCards.slice(0, 3).concat(talentCards.slice(3));
  const col2 = [...talentCards].reverse();

  return (
    <section className="bg-cream min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="max-w-lg">
          <span className="inline-block font-sans text-xs font-semibold tracking-widest text-maroon uppercase mb-6 border border-maroon/30 rounded-full px-3 py-1">
            Curated Creative Talent
          </span>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-00 leading-tight mb-6">
            Hire the{" "}
            <span className="font-script text-maroon italic">Talent</span> you
            need.
          </h1>
          <p className="font-sans text-base text-gray-600 leading-relaxed mb-10">
            A curated marketplace of the six creative roles every early-stage
            founder needs. Vetted talent. No noise. Just the right hire.
          </p>
          <button className="bg-maroon text-white font-sans font-medium px-7 py-3.5 rounded-full hover:bg-maroon/90 transition-colors text-sm">
            Get started
          </button>
        </div>

        {/* Right — scrolling talent cards */}
        <div className="hidden lg:flex gap-4 justify-end overflow-hidden">
          <ScrollColumn
            cards={col1}
            speed="animate-scroll-up"
            offset={false}
          />
          <ScrollColumn
            cards={col2}
            speed="animate-scroll-up-slow"
            offset={true}
          />
        </div>
      </div>
    </section>
  );
}
