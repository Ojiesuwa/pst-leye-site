export default function Contact() {
  return (
    <div className="bg-white text-gray-800 font-sans h-[calc(100svh-60px)] overflow-y-auto">
      {/* Hero Section */}
      <section className="relative bg-[url('/contact-hero.jpg')] bg-cover bg-center py-32 px-6 text-center">
        <div className="absolute inset-0 bg-orange-600"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 animate-fade-in delay-100">
            We'd love to hear from you! Reach out with any questions or
            inquiries.
          </p>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 animate-slide-up">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <span className="text-orange-500 font-medium">Contact us</span>
            <h2 className="text-3xl font-bold mt-2">Contact Information</h2>
          </div>

          <p className="text-gray-600">
            Feel free to reach us through any of the channels below:
          </p>

          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="bg-orange-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Phone & WhatsApp</h3>
                <p className="text-gray-600">+234 814 440 1474</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="bg-orange-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">adeleyeayomide968@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
              <div className="bg-orange-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-orange-600"
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
              </div>
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-gray-600">
                  5b Water Cooperation Drive, Landmark Road, Victoria Island,
                  Lagos
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-orange-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-orange-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.058 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.058-1.032.047-1.351.058-3.807.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-orange-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-gray-100 p-3 rounded-full hover:bg-orange-100 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div> */}
        </div>

        {/* Contact Form */}
        {/* <div className="space-y-8">
          <div>
            <span className="text-orange-500 font-medium">Send a message</span>
            <h2 className="text-3xl font-bold mt-2">Contact Form</h2>
          </div>

          <form className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-gray-700 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows={5}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div> */}
      </section>

      {/* Map Section */}
      <section className="px-6 pb-20 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-medium">Our location</span>
            <h2 className="text-3xl font-bold mt-2">Visit Our Office</h2>
          </div>

          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1982.3856592828224!2d3.444912288334556!3d6.423421248391891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s5b%20water%20corporation%20drive%2C%20Landmark%20road%2C%20Victoria%C2%A0Island%C2%A0Lagos.!5e0!3m2!1sen!2sng!4v1748898337187!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
