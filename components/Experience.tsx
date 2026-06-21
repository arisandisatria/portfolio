export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer Internship",
      company: "Kawan Kerja",
      period: "Feb 2024 - Jun 2024",
      description:
        "Developed user interfaces and optimized web applications for performance and responsiveness. Handled and resolved technical challenges while implementing best practices.",
      highlights: [
        "VueJS Development",
        "UI/UX Implementation",
        "Performance Optimization",
        "Responsive Design",
      ],
    },
    {
      title: "Software Engineering Bootcamp",
      company: "Coding Studio",
      period: "Sep 2023 - Jan 2024",
      description:
        "Completed intensive bootcamp covering modern web development with React, Express, and deployment strategies. Built dynamic websites and APIs.",
      highlights: ["React", "Express.js", "Deployment", "Problem Solving"],
    },
    {
      title: "Back-end Web Development Bootcamp",
      company: "Skilvul",
      period: "Feb 2023 - Jun 2023",
      description:
        "Mastered back-end development using Express framework, database design with MongoDB and MySQL, and built RESTful APIs using Express and Sequelize.",
      highlights: ["Express.js", "MongoDB", "MySQL", "RESTful APIs"],
    },
    {
      title: "Frontend Engineering Bootcamp",
      company: "Ruangguru",
      period: "Aug 2022 - Dec 2022",
      description:
        "Learned frontend development with React and modern web technologies. Developed 6 projects with dynamic and interactive displays.",
      highlights: [
        "React",
        "Interactive UI",
        "Web Development",
        "Project Delivery",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 sm:py-24 border-t-4 border-foreground bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 sm:mb-12 border-l-8 dark:border-accent border-secondary pl-6 py-2">
          EXPERIENCE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-12 pb-8 ">
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-10 bottom-0 w-1 bg-foreground" />
              )}

              <div className="absolute -left-3 top-1 w-7 h-7 dark:bg-accent bg-secondary border-3 border-foreground" />

              <div className="space-y-3 border-3 border-foreground p-4 shadow-[8px_8px_0px_#000000]">
                <div className="flex flex-col">
                  <h3 className="text-xl font-black uppercase">{exp.title}</h3>
                  <div className="w-full flex justify-between items-center">
                    <p className="text-secondary font-bold dark:text-accent">
                      {exp.company}
                    </p>
                    <span className="w-fit text-sm text-white font-black px-2 py-1 bg-secondary dark:bg-accent">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-foreground font-medium">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="inline-block px-3 py-1 text-xs font-black text-background bg-foreground border-2 border-foreground uppercase tracking-wide"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
