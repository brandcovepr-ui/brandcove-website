const testimonials = [
  {
    id: 1,
    quote:
      "Your problem was never meant to create financial instability. Provide your solution without breaking the bank.",
    name: "Funke Lawal",
    handle: "@funkelawal",
    role: "Founder, Oore Studio",
    bg: "bg-amber-100",
    initials: "FL",
  },
  {
    id: 2,
    quote:
      "Imagine a solution without breaking the bank. Well, imagine no more — BrandCove does just that.",
    name: "Funke Lawal",
    handle: "@funkelawal",
    role: "Founder, Oore Studio",
    bg: "bg-rose-100",
    initials: "FL",
    featured: true,
  },
  {
    id: 3,
    quote:
      "Your problem was never meant to create financial instability. Provide your solution without breaking the bank.",
    name: "Funke Lawal",
    handle: "@funkelawal",
    role: "Founder, Oore Studio",
    bg: "bg-violet-100",
    initials: "FL",
  },
];

export default function CustomersSection() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <span className="font-sans text-xs font-semibold tracking-widest text-[#DC516B] uppercase">
            Customers
          </span>
          <h2 className="font-editorial text-4xl lg:text-5xl font-regular text-gray-900 mt-2 tracking-tight">
            Founders{" "}
            <span className="font-script text-rose italic">love</span>{" "}
            BrandCove.
          </h2>
        </div>

        {/* Testimonial cards — different sizes */}
        <div className="flex flex-col sm:flex-row gap-5 items-stretch">
          {/* Small card */}
          <div className="flex-none sm:w-[28%] bg-white border border-maroon/30 rounded-2xl p-6 flex flex-col justify-between gap-8 shadow-sm">
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              {testimonials[0].quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full ${testimonials[0].bg} flex items-center justify-center shrink-0`}
              >
                <span className="font-serif text-xs font-bold text-gray-500">
                  {testimonials[0].initials}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-gray-900 leading-tight">
                  {testimonials[0].name}
                </p>
                <p className="font-sans text-xs text-gray-400">{testimonials[0].handle}</p>
              </div>
            </div>
          </div>

          {/* Featured large card */}
          <div className="flex-1 bg-white border border-maroon/40 rounded-2xl p-10 flex flex-col justify-between gap-10 shadow-xl">
            <p className="font-sans text-base text-gray-700 leading-relaxed">
              {testimonials[1].quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-full ${testimonials[1].bg} flex items-center justify-center shrink-0`}
              >
                <span className="font-serif text-sm font-bold text-gray-500">
                  {testimonials[1].initials}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-gray-900 leading-tight">
                  {testimonials[1].name}
                </p>
                <p className="font-sans text-xs text-gray-400">{testimonials[1].handle}</p>
              </div>
            </div>
          </div>

          {/* Medium card */}
          <div className="flex-none sm:w-[28%] bg-white border border-maroon/30 rounded-2xl p-6 flex flex-col justify-between gap-8 shadow-md">
            <p className="font-sans text-sm text-gray-600 leading-relaxed">
              {testimonials[2].quote}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full ${testimonials[2].bg} flex items-center justify-center shrink-0`}
              >
                <span className="font-serif text-xs font-bold text-gray-500">
                  {testimonials[2].initials}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-gray-900 leading-tight">
                  {testimonials[2].name}
                </p>
                <p className="font-sans text-xs text-gray-400">{testimonials[2].handle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
