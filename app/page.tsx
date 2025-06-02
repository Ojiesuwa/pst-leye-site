"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-800 font-sans h-[calc(100svh-60px)] overflow-y-scroll">
      {/* Enhanced Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Video Background with Darker Overlay */}
        <div className="absolute inset-0 bg-black/30 z-1"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="relative z-10 px-6 text-white max-w-6xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img
              src="/crane.png"
              alt="Construction Crane Logo"
              className="h-24 w-24 object-contain animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Rosade</span> and{" "}
            <span className="text-blue-400">Adsam</span> Nig. Ltd
          </h1>

          <p className="text-2xl md:text-3xl mb-8 font-light max-w-3xl mx-auto">
            Premium Building Materials & Construction Services Since 2010
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => router.push("/products-services")}
            >
              Explore Our Products
            </button>
            <button
              className="bg-transparent border-2 border-white hover:bg-white/20 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => router.push("/about")}
            >
              About Our Company
            </button>
          </div>

          {/* Scrolling Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
        </div>
      </section>

      {/* Rest of your existing sections... */}
      {/* Mission Statement */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          To provide high-quality, reliable, and affordable building materials
          and services that empower construction professionals to build with
          confidence and integrity.
        </p>
      </section>

      {/* Core Services */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Block Production",
                img: "/blocks.jpg",
                desc: "Hand-molded and vibrated blocks - 4",
              },
              {
                title: "Construction Materials",
                img: "/materials.jpg",
                desc: "Sharp sand, plaster sand, granite, filling sand, iron rods, paving stones",
              },
              {
                title: "Renovation & Building",
                img: "/renovation.jpg",
                desc: "We handle building projects and property renovations with excellence.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-2xl font-bold mb-8">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "15+ Years Experience",
            "Quality Assured Materials",
            "Trusted by 1,000+ Clients",
            "Fast Delivery in Lagos",
            "Affordable Pricing",
            "Professional Support",
          ].map((badge, index) => (
            <div
              key={index}
              className="bg-yellow-100 text-yellow-800 font-medium px-6 py-3 rounded-full shadow hover:bg-yellow-200 transition-colors duration-300"
            >
              {badge}
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="mb-8 text-xl">
            Let Rosade and Adsam Nig. Ltd provide the materials and expertise
            you need for success.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Contact Us */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+234 814 440 1474</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <div>
                  <p className="font-semibold">Email</p>
                  <p>adeleyeayomide968@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>
                   5b Water Cooperation Drive, Landmark Road, Victoria Island,
                    Lagos
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-yellow-500 mr-3 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p>+234 814 440 1474</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
