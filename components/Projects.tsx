import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Workzenn",
      description:
        "AI-powered career assistant platform that helps job seekers.",
      technologies: [
        "NextJS",
        "Clerk",
        "AI Integration",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveUrl: "http://workzenn.vercel.app/",
      codeUrl: "https://github.com/arisandisatria/workzenn.git",
      image: "/workzenn.png",
    },
    {
      title: "CreatorPal",
      description:
        "Platform to help creators make their content with AI tools.",
      technologies: [
        "NextJS",
        "Clerk",
        "AI Integration",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveUrl: "https://creatorpal-ai.vercel.app/",
      codeUrl: "https://github.com/arisandisatria/creatorpal.git",
      image: "/creatorpal.png",
    },
    {
      title: "Hadits Seeker",
      description:
        "AI-powered platform to search hadits according to user mood.",
      technologies: [
        "NextJS",
        "AI Integration",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveUrl: "https://hadits-seeker.vercel.app/",
      codeUrl: "https://github.com/arisandisatria/hadits-seeker.git",
      image: "/hadits-seeker.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-24 border-t-4 border-foreground bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 sm:mb-12 border-l-8 border-secondary dark:border-accent pl-6 py-2">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-4 border-foreground bg-card transition-all duration-300 overflow-hidden group hover:translate-x-2 hover:translate-y-2"
              style={{ boxShadow: "8px 8px 0px #000000" }}
            >
              <div className="h-fit bg-secondary dark:bg-accent flex items-center justify-center text-8xl border-b-4 border-foreground group-hover:bg-accent group-hover:dark:bg-secondary transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
              </div>

              <div className="p-4 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-black bg-foreground border-2 border-foreground text-background uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t-3 border-foreground">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground font-black border-2 border-primary hover:translate-x-1 hover:translate-y-1 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5"
                    style={{ boxShadow: "4px 4px 0px #000000" }}
                  >
                    <ExternalLink size={18} />
                    LIVE
                  </a>
                  <a
                    href={project.codeUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-foreground text-foreground font-black hover:bg-foreground hover:text-background transition-all duration-200 hover:translate-x-1 hover:translate-y-1"
                    style={{ boxShadow: "4px 4px 0px #000000" }}
                  >
                    <Code2 size={18} />
                    CODE
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
