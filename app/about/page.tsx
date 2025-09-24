export default function About() {
  return (
    <div className="bg-white text-gray-800 font-sans overflow-y-auto h-[calc(100svh-60px)]">
      {/* Hero Section */}
      <section className="relative bg-[url('/about-hero.jpg')] bg-cover bg-center text-white py-32 px-6 text-center">
        <div className="absolute inset-0 bg-blue-500"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fade-in delay-100">
            Get to know Rosade and Adsam Nigeria Limited
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6 max-w-5xl mx-auto animate-slide-up">
        <div className="mb-8">
          <span className="text-orange-500 font-medium">Who we are</span>
          <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 2010, Rosade and Adsam Nigeria Ltd is a trusted supplier
            of high-quality building materials in Lagos. Our dedication to
            excellence, affordability, and service integrity has made us a
            reliable partner for thousands of builders and construction firms.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Located at{" "}
            <strong>
              5b Water Corporation Drive, Landmark Road, Victoria Island, Lagos
            </strong>
            , we specialize in block production (hand-molded and vibrated), and
            we supply construction essentials such as sharp sand, plaster sand,
            granite, filling sand, iron rods, paving stones, and more. Our
            services also include property renovation and general contracting.
          </p>
        </div>
      </section>

      {/* Mission and Core Values */}
      <section className="bg-gray-50 py-20 px-6 animate-slide-up">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-orange-500 font-medium">Our principles</span>
            <h2 className="text-3xl font-bold">Our Mission & Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver reliable and durable building materials that meet the
                highest standards of quality, enabling our clients to construct
                projects with confidence and trust.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Core Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Integrity</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Quality</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Timely Delivery</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customer Satisfaction</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - New Section Added */}
      <section className="py-16 px-6 bg-blue-50 animate-slide-up">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 text-center">
            <span className="text-orange-500 font-medium">Visit us</span>
            <h2 className="text-3xl font-bold">Our Location</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our main office and showroom is conveniently located at:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
                  <div>
                    <p className="font-medium text-lg">
                      5b Water Corporation Drive
                    </p>
                    <p className="text-gray-600">
                      Landmark Road, Victoria Island
                    </p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden">
              {/* Replace with your actual map component or iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1982.3856592828224!2d3.444912288334556!3d6.423421248391891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5b%20water%20corporation%20drive%2C%20Landmark%20road%2C%20Victoria%C2%A0Island%C2%A0Lagos.!5e0!3m2!1sen!2sng!4v1748898337187!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center animate-slide-up">
        <div className="mb-12">
          <span className="text-orange-500 font-medium">Leadership</span>
          <h2 className="text-3xl font-bold">Meet the Founder</h2>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative mb-6 group">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-48 h-48 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all"
            />
            <div className="absolute inset-0 rounded-full bg-orange-500/10 group-hover:bg-transparent transition-all"></div>
          </div>
          <h3 className="text-2xl font-semibold">Oluwasina Adeleye</h3>
          <p className="text-gray-600 mb-4">Founder & CEO</p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With over 15 years of experience in the construction industry, Mr.
            Leye founded Rosade and Adsam Nigeria Ltd with a vision to provide
            quality building materials to the Nigerian market from our location
            at 5b Water Corporation Drive.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="bg-gray-50 py-20 px-6 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-orange-500 font-medium">Our people</span>
            <h2 className="text-3xl font-bold">Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Adeleye Rosemary Ehi",
                role: "Assistant Director",
                img: "/ass-director.jpg",
                bio: "Chief personnel in construction operations",
              },
              {
                name: "Olawale Jesudaro",
                role: "Stakeholder",
                img: "/wale.jpg",
                bio: "",
              },
              {
                name: "Ameh Daniel Adole",
                role: "Stakeholder",
                img: "/unknown.png",
                bio: "Operations Manager I",
              },
              {
                name: "Adebisi Tunde Atanda",
                role: "Stakeholder",
                img: "/unknown.png",
                bio: "Operations Manager II",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md p-6 text-center transition-all hover:-translate-y-1"
              >
                <div className="relative mx-auto w-32 h-32 mb-4 group">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full mx-auto rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-orange-500/10 group-hover:bg-transparent transition-all"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-500 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects */}
      {/* <section className="py-20 px-6 max-w-6xl mx-auto animate-slide-up">
        <div className="mb-12 text-center">
          <span className="text-orange-500 font-medium">Our work</span>
          <h2 className="text-3xl font-bold">Past Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="group relative overflow-hidden rounded-xl shadow hover:shadow-lg transition-all"
            >
              <img
                src={`/project${num}.jpg`}
                alt={`Project ${num}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  Project {num}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
