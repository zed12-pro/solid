"use client";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-2">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-xs dark:shadow-md grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Left Column: Info */}
        <div className="space-y-3">
          <div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
              Get In Touch
            </h2>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">
              Have a project in mind or just want to say hello? Feel free to reach out. I’d love to hear from you!
            </p>
          </div>

          <div className="space-y-1.5 text-[11px] text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">✉</span>
              <a
                href="mailto:zelalemassefa726@gmail.com"
                className="hover:underline font-medium text-gray-900 dark:text-white"
              >
                zelalemassefa726@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">📍</span>
              <span className="text-gray-600 dark:text-gray-400">Injibara, Ethiopia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400 font-semibold">●</span>
              <span className="text-gray-600 dark:text-gray-400">
                Available for freelance & full-time opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-3 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-[11px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-3 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-[11px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject (e.g., Full-Stack Web Development Project / Collaboration)"
              required
              className="w-full px-3 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-[11px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
            />
          </div>

          <div>
            <textarea
              rows={3}
              placeholder="Your message..."
              required
              className="w-full px-3 py-1.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md text-[11px] text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white text-[11px] font-semibold rounded-md shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Send Message</span>
            <span>🚀</span>
          </button>
        </form>
      </div>
    </section>
  );
}