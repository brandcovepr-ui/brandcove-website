"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CreativesHero from "@/images/CreativesHero.png";

// ─── Apply steps ─────────────────────────────────────────────────────────────
const steps = [
  {
    number: "01",
    title: "Submit your application",
    description:
      "Tell us about your craft, your experience, and the kind of brands you want to work with. Takes less than 5 minutes.",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    title: "Get vetted by our team",
    description:
      "We review every application manually. If you're a fit, you'll hear back within 3 business days.",
    rotate: "rotate-0",
  },
  {
    number: "03",
    title: "Start getting hired",
    description:
      "Your profile goes live and founders start reaching out. You choose who you work with.",
    rotate: "rotate-2",
  },
];

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  {
    title: "Vetted founders only",
    description:
      "Every brand on BrandCove is reviewed before they can reach out. No time-wasters.",
  },
  {
    title: "Transparent, fair pay",
    description:
      "Founders post budgets upfront. No negotiating in the dark or racing to the bottom.",
  },
  {
    title: "You set the terms",
    description:
      "Pick your availability, your rate, and which projects excite you. You're in control.",
  },
  {
    title: "No bidding wars",
    description:
      "Founders come to you directly. Your work speaks — you don't have to fight for attention.",
  },
  {
    title: "Built for six roles",
    description:
      "We focus on six essential creative roles so your profile reaches the exact founders who need your skill.",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is it free to join as a creative?",
    a: "Yes — applying and maintaining your profile on BrandCove is completely free. We only charge founders.",
  },
  {
    q: "How long does the vetting process take?",
    a: "We aim to review all applications within 3 business days. You'll receive an email either way.",
  },
  {
    q: "What roles do you accept?",
    a: "We currently accept Graphic Designers, Social Media Managers, Web Designers, Customer Service Specialists, Sales Representatives, and Creative Assistants.",
  },
  {
    q: "Can I be on BrandCove and other platforms?",
    a: "Absolutely. BrandCove is not an exclusive platform — work with whoever you'd like.",
  },
  {
    q: "How do founders contact me?",
    a: "Founders send you a direct inquiry through your profile. You decide whether to respond and move forward.",
  },
  {
    q: "What if a project doesn't work out?",
    a: "You're always free to decline or end a project. We ask that you communicate clearly with the founder.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 bg-white rounded-md px-4 py-5 mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-editorial text-base lg:text-lg text-gray-900">
          {q}
        </span>
        <span className="text-gray-400 text-xl shrink-0 leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="font-sans text-sm text-gray-500 leading-relaxed mt-3 max-w-2xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function CreativesPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-screen">
          {/* Left */}
          <div className="max-w-lg py-20 pt-32 flex flex-col justify-center">
            <span className="inline-block font-sans text-xs font-semibold tracking-widest text-maroon/60 uppercase mb-6 border border-maroon/20 rounded-full px-3 py-1 w-fit">
              For Creatives
            </span>
            <h1 className="font-editorial text-4xl lg:text-6xl font-normal text-black leading-tight">
              Get{" "}
              <span className="font-script text-rose italic">Paid</span>
            </h1>
            <h1 className="font-editorial text-4xl lg:text-6xl font-normal text-black leading-tight mb-6">
              to create your way.
            </h1>
            <p className="font-sans text-base text-black/70 leading-relaxed mb-10">
              Join a curated network of creative talent. No bidding wars, no
              chasing invoices — just founders who need exactly what you do.
            </p>
            <button className="bg-maroon text-cream font-sans font-medium px-7 py-3.5 rounded-full hover:bg-maroon/90 transition-colors text-sm w-fit">
              Apply to join
            </button>
          </div>

          {/* Right — hero image: half screen on desktop, full width on mobile */}
          <div className="relative w-full h-[80vh] lg:h-auto">
            <Image
              src={CreativesHero}
              alt="Creative professional"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── From apply to hired ──────────────────────────────────────────── */}
      <section className="bg-cream py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center align center flex-col">
          <div className="mb-20">
            <span className="font-sans text-xs font-semibold tracking-widest text-maroon/60 text-center uppercase">
              The Process
            </span>
            <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-gray-900 mt-2">
              From apply to{" "}
              <span className="font-script text-rose italic">hired.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-16">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`${step.rotate} bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 transition-transform hover:rotate-0 duration-300`}
              >
                <span className="font-script text-5xl text-black block mb-4">
                  {step.number}
                </span>
                <h3 className="font-editorial text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div>
            <button className="border-2 border-maroon text-maroon font-sans font-medium px-7 py-3.5 rounded-full hover:bg-maroon hover:text-white transition-colors text-sm">
              Apply as a creative
            </button>
          </div>
        </div>
      </section>

      {/* ── Built for creatives ──────────────────────────────────────────── */}
      <section className="bg-maroon py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left — sticky heading */}
            <div className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-32">
                <span className="font-sans text-xs font-semibold tracking-widest text-cream/60 uppercase">
                  Why BrandCove
                </span>
                <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-white mt-2">
                  Built for{" "}
                  <span className="font-script text-rose italic">
                    Creatives.
                  </span>
                </h2>
              </div>
            </div>

            {/* Right — stacked feature cards */}
            <div className="flex-1 flex flex-col gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl px-8 py-6"
                >
                  <h3 className="font-editorial text-xl text-gray-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="font-sans text-xs font-semibold tracking-widest text-center text-maroon/60 uppercase">
              Questions
            </span>
            <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-center text-gray-900 mt-2">
              FAQ
            </h2>
          </div>

          <div>
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-cream py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-steel-blue rounded-3xl px-10 py-20 text-center">
            <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-black max-w-2xl mx-auto leading-tight ">
              Let's find {" "}
            </h2>
            <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-black max-w-2xl mx-auto leading-tight">
              your next
              <span className="font-script italic text-white"> role</span>{" "}
              
            </h2>
            <p className="font-sans text-sm text-black/60 leading-relaxed mb-10">Explore a wide range of opportunities now available</p>
            <button className="bg-maroon text-white font-sans font-medium px-8 py-3.5 rounded-full hover:bg-maroon/90 transition-colors text-sm">
              Get started
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
