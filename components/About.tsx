export default function About() {
  const skills = [
    { name: "React", category: "Frontend Web" },
    { name: "Next.js", category: "Frontend Web" },
    { name: "React Native", category: "Mobile Apps" },
    { name: "TypeScript", category: "Programming Languages" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-24 border-t-4 border-foreground bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 sm:mb-12 border-l-8 border-secondary dark:border-accent pl-6 py-2">
          ABOUT ME
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-3 sm:space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a passionate{" "}
              <strong className="text-secondary dark:text-accent">
                Fullstack Developer
              </strong>
              . With hands-on experience in React, Next.js, and React Native, I
              bridge the gap between robust backend logic and elegant user
              interfaces to deliver seamless digital solutions across web and
              mobile.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              My journey began in college, accelerated through intensive
              training at Ruangguru, Skilvul, and Coding Studio, and matured
              through real-world projects at Kawan Kerja. I thrive on building
              impactful, efficient, and scalable technology.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Outside of writing clean code, I enjoy breaking down complex
              problems, collaborating with dynamic teams, and continuously
              exploring emerging tech to stay at the forefront of the industry.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="px-4 py-3 border-3 border-foreground text-white transition-all font-bold bg-secondary dark:bg-accent"
                  style={{
                    boxShadow: "4px 4px 0px #334155",
                  }}
                >
                  <p className="font-black text-sm uppercase">{skill.name}</p>
                  <p className="text-xs font-semibold mt-1">{skill.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
