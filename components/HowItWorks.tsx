const steps = [
  {
    number: "01",
    title: "Browse Curated Talent",
    description:
      "Explore our hand-picked roster of vetted creatives across six essential roles. Every profile is reviewed before going live.",
    rotate: "-rotate-2",
  },
  {
    number: "02",
    title: "Review Their Profile",
    description:
      "Dig into portfolios, past results, skill tags, and verified ratings from founders just like you.",
    rotate: "rotate-0",
  },
  {
    number: "03",
    title: "Send an Inquiry",
    description:
      "Reach out directly. No middlemen, no bidding wars — just a simple message to kick things off.",
    rotate: "rotate-2",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block font-sans text-xs font-semibold tracking-widest text-maroon uppercase mb-4 border border-maroon/30 rounded-full px-3 py-1">
            The Process
          </span>
          <h2 className="font-editorial text-4xl lg:text-5xl font-normal text-gray-900">
            Hire in{" "}
            <span className="font-script text-rose italic">three</span> steps.
          </h2>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`${step.rotate} bg-white border-2 border-dashed border-gray-200 rounded-2xl p-8 transition-transform hover:rotate-0 duration-300`}
            >
              <span className="font-script text-5xl font-regular text-black block mb-4">
                {step.number}
              </span>
              <h3 className="font-editorial text-xl font-regular text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="border-2 border-maroon text-maroon font-sans font-medium px-7 py-3.5 rounded-full hover:bg-maroon hover:text-white transition-colors text-sm">
            Find your next talents
          </button>
        </div>
      </div>
    </section>
  );
}
