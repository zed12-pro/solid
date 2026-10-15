import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      {/* Left Column: Text & CTAs */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug mb-2">
          I build fast & scalable{" "}
          <span className="text-blue-600 dark:text-blue-400">web applications</span>
        </h1>

        <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 max-w-sm leading-normal">
          Fullstack developer focused on building performant, reliable and modern web solutions.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg shadow-sm transition"
          >
            View My Work
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E9E5E2] dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Column: Code Window Graphic Illustration */}
      <div className="bg-[#E9E5E2] dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xs p-2">
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100 dark:border-gray-700 mb-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 flex flex-col items-center justify-center min-h-[100px] text-blue-600 dark:text-blue-400">
          <span className="font-mono text-sm font-bold text-gray-700 dark:text-gray-200">
            &lt;/&gt;
          </span>
        </div>
      </div>
    </section>
  );
}