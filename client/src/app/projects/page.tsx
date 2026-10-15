import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Injibara E-Commerce",
      description:
        "Full-stack marketplace app built for Injibara town with role-based routing and payments.",
      tech: ["Next.js", "TypeScript","Tailwind CSS", "Prisma", "mysql2"],
      liveUrl: "https://injibara-market.vercel.app",
      githubUrl: "#",
      image: "/image.png",
    },
    {
      title: "Ethio-Track",
      description:
        "An automated platform designed for tracking and managing real-time data metrics.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Discussion Forum",
      description:
        "Interactive Q&A community platform with authentication and thread posts.",
      tech: ["React","CSS", "Node.js", "Express", "mysql" ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-2">
      <div className="text-center mb-3">
        <h2 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">
          Projects
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-[11px] mt-0.5">
          A showcase of recent web applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-2.5 shadow-xs hover:shadow-sm dark:hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {project.image && (
                <div className="relative h-20 w-full bg-gray-50 dark:bg-gray-700 rounded border border-gray-100 dark:border-gray-600 overflow-hidden mb-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}

              <h3 className="text-[11px] font-bold text-gray-900 dark:text-white mb-1 pb-1 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                {project.title}
                {project.image && (
                  <span className="px-1 py-0.2 bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-[8px] font-semibold rounded-full">
                    Live
                  </span>
                )}
              </h3>

              <p className="text-[10px] text-gray-600 dark:text-gray-300 mb-2.5 leading-snug">
                {project.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-1.5 py-0.2 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-[10px] font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-1.5 border-t border-gray-100 dark:border-gray-700 text-[10px] font-medium">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5"
                >
                  Live Demo ↗
                </a>
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}