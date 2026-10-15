export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "Prisma ORM", "MySQL", "MongoDB"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-2">
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
          Technologies I work with
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-xs hover:shadow-sm dark:hover:shadow-md transition"
          >
            <h3 className="text-xs font-bold text-gray-900 dark:text-white mb-2 pb-1 border-b border-gray-100 dark:border-gray-700">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-2 py-0.5 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-[11px] font-medium rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}