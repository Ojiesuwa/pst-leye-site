export default function ProductServices() {
  return (
    <div className="bg-white text-gray-800 font-sans h-[calc(100svh-60px)] overflow-y-auto">
      {/* Hero Section */}
      <section className="relative bg-[url('/products-hero.jpg')] bg-cover bg-center py-32 px-6 text-center">
        <div className="absolute inset-0 bg-pink-700"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            Our Products & Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 animate-fade-in delay-100">
            Quality materials and expert construction services tailored to your
            needs
          </p>
          <div className="mt-8 animate-fade-in delay-200">
            <a
              href="#services"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section
        id="services"
        className="py-20 px-6 max-w-7xl mx-auto animate-slide-up"
      >
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">What we provide</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Offer</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Block Products */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/blocks.jpg"
                alt="Blocks"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">
                    We produce and supply 4", 6", and 9" blocks—both hand-molded
                    and vibrated, perfect for all construction needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                Blocks
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  4" Blocks
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  6" Blocks
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  9" Blocks
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Hand-molded
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Vibrated
                </span>
              </div>
            </div>
          </div>

          {/* Construction Materials */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/materials.jpg"
                alt="Materials"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">
                    Suppliers of sharp sand, plaster sand, granite, iron rods,
                    paving stones, cabes, and more for your projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                Construction Materials
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Sharp Sand
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Plaster Sand
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Granite
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Iron Rods
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Paving Stones
                </span>
              </div>
            </div>
          </div>

          {/* General Contracting */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/contractor.jpg"
                alt="Contracting"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">
                    From site clearing to project completion, we handle every
                    aspect of your building and renovation needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                General Contracting
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Site Clearing
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Foundation
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Construction
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Project Management
                </span>
              </div>
            </div>
          </div>

          {/* Renovation Services */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/renovation.jpg"
                alt="Renovation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">
                    We specialize in giving old structures new life—modernizing
                    homes, offices, and commercial spaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
                Building Renovation
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Residential
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Commercial
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Structural
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Interior
                </span>
              </div>
            </div>
          </div>

          {/* Custom Projects */}
          <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                src="/custom.jpg"
                alt="Custom Projects"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm">
                    Got a vision? We work with you from concept to reality,
                    delivering tailored construction solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
                Custom Projects
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Design
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Planning
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Execution
                </span>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Consultation
                </span>
              </div>
            </div>
          </div>

          {/* Consultation Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-8 flex flex-col justify-center text-white">
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
            <p className="mb-6 opacity-90">
              Not sure what you need? Schedule a free consultation with our
              experts.
            </p>
            <a
              href="/contact"
              className="mt-auto bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg inline-block hover:bg-gray-100 transition-colors text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center py-20 px-6 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us today for your construction material needs or your next
            building project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="tel:+2348101234567"
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
