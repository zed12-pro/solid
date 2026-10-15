export default function Services() {
  const services = [
    {
      title: "Fullstack Development",
      description:
        "End-to-end web applications built with modern technologies and best practices.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Performance Optimization",
      description:
        "Improve speed, scalability, and user experience with optimized code and architecture.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "API & Integration",
      description:
        "Design robust APIs and integrate third-party services seamlessly and securely.",
      icon: (
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-2">
      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
          Services
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">
          What I can do for you
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-xs hover:shadow-sm dark:hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-md border border-blue-100 dark:border-blue-800">
                  {service.icon}
                </div>
                <h3 className="text-[11px] font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-[10px] text-gray-600 dark:text-gray-300 leading-snug">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}