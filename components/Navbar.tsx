export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <span className="font-serif font-bold text-xl text-gray-900">
          <a href="/">
            BrandCove.
          </a>
        </span>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/creatives"
            className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            For creatives
          </a>
          <a
            href="#how-it-works"
            className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            How it works
          </a>
          <a
            href="/pricing"
            className="font-sans text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Pricing
          </a>
        </div>

        {/* CTA */}
        <button className="bg-maroon text-white font-sans text-sm font-medium px-5 py-2.5 rounded-full hover:bg-maroon/90 transition-colors">
          Get started
        </button>
      </div>
    </nav>
  );
}
