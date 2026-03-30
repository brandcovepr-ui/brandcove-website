const links = {
  Platform: ["Browse Talents", "For Creatives", "How it works", "Pricing"],
  Roles: [
    "Social Media Manager",
    "Customer Service",
    "Web Design",
    "Sales",
    "Operations Manager",
  ],
  Company: ["About", "Careers", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-maroon text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-editorial font-bold text-2xl block mb-3 tracking-[-0.02em] text-white">
              BrandCove.
            </span>
            <p className="font-poppins text-sm text-white/[0.88] leading-relaxed max-w-xs tracking-[-0.02em]">
              The curated marketplace for founders who need creative talent —
              fast.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-poppins text-xs font-semibold tracking-[-0.02em] uppercase text-white/40 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-poppins text-sm text-white/[0.88] hover:text-white transition-colors tracking-[-0.02em]"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 font-poppins text-xs text-white/50 tracking-[-0.02em]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-end">
            <span className="font-poppins text-xs text-white/50 tracking-[-0.02em]">
              Designed by{" "}
              <span className="text-white/[0.88]">Studio —</span>
            </span>
            <span className="font-poppins text-xs text-white/50 tracking-[-0.02em]">
              © 2026 All rights Reserved. BrandCove.
            </span>
            {/* Instagram icon */}
            <a
              href="https://www.instagram.com/brandcove.pr?igsh=M2Rla3VzeWp2cmlw"
              aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
