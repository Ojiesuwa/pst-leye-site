"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Projects() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <div className="bg-white text-gray-800 h-[calc(100svh-60px)] overflow-y-auto">
      {/* Hero Section */}
      <section className="relative bg-[url('/projects-hero.jpg')] bg-cover bg-center py-32 px-6 text-center">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 animate-fade-in delay-100">
            A showcase of the work we've proudly completed over the years
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-6 max-w-7xl mx-auto animate-slide-up">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Recent Projects
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "/project1.jpg",
              title: "Residential Block Delivery",
              location: "Lekki, Lagos",
              description:
                "Supplied over 50,000 blocks for a luxury estate development",
            },
            {
              img: "/project2.jpg",
              title: "Warehouse Construction",
              location: "Ajah, Lagos",
              description: "Complete material supply for 10,000 sqm warehouse",
            },
            {
              img: "/project3.jpg",
              title: "Paving Stone Installation",
              location: "Victoria Island, Lagos",
              description: "Premium paving stones for commercial complex",
            },
            {
              img: "/project4.jpg",
              title: "Renovation Project",
              location: "Surulere, Lagos",
              description: "Full renovation of residential property",
            },
            {
              img: "/project5.jpg",
              title: "Site Material Supply",
              location: "Ikeja, Lagos",
              description: "Ongoing material supply for government project",
            },
            {
              img: "/project6.jpg",
              title: "Concrete Casting",
              location: "Ikoyi, Lagos",
              description: "Specialized concrete work for high-rise foundation",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 px-6 text-center animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Want to Build With Us?
          </h2>
          <p className="mb-8 text-white/90 text-lg">
            Whether it's block supply, site renovations, or full project
            delivery, Rosade and Adsam Nig. Ltd is ready to partner with you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
