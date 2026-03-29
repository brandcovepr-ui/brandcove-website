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
          <span className="font-sans text-xs font-semibold tracking-widest text-maroon/60 uppercase">
            Customers
          </span>
          <h2 className="font-editorial text-4xl lg:text-5xl font-regular text-gray-900 mt-2">
            Founders{" "}
            <span className="font-script text-rose italic">love</span>{" "}
            BrandCove.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-2xl p-6 flex flex-col justify-between gap-8 ${
                t.featured
                  ? "bg-white border border-black/10 shadow-sm"
                  : "bg-white/60 border border-black/5"
              }`}
            >
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full ${t.bg} flex items-center justify-center shrink-0`}
                >
                  <span className="font-serif text-xs font-bold text-gray-500">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-gray-900 leading-tight">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-gray-400">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
