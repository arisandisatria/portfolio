import { ExternalLink, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Workzenn",
      description:
        "AI-powered career assistant platform that helps job seekers.",
      technologies: [
        "Next JS",
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
        "Next JS",
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
        "Next JS",
        "AI Integration",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveUrl: "https://hadits-seeker.vercel.app/",
      codeUrl: "https://github.com/arisandisatria/hadits-seeker.git",
      image: "/hadits-seeker.png",
    },
    {
      title: "Obatku",
      description:
        "Obatku is a comprehensive medication management system designed to improve patient adherence through automated WhatsApp reminders, real-time progress tracking, and official SatuSehat KFA integration for seamless monitoring by healthcare professionals.",
      technologies: ["Laravel", "Bootstrap"],
      liveUrl: "#",
      codeUrl: "https://github.com/arisandisatria/laravel-project.git",
      image: "/obatku.png",
    },
    {
      title: "AI Coach",
      description:
        "A sophisticated AI-powered android-based mobile application designed to instantly curate a curriculum of materials based on any topic desired by the user.",
      technologies: ["React Native", "Expo", "AI Integration", "Firebase"],
      liveUrl:
        "https://drive.google.com/drive/folders/1OoNPjwOegMQQnmDnC4NsNev2KczUk4sy?usp=drive_link",
      codeUrl: "https://github.com/arisandisatria/ai-coach.git",
      image: "/ai-coach.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-12 sm:py-24 border-t-4 border-foreground bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-8 sm:mb-12 border-l-8 border-secondary dark:border-accent pl-6 py-2">
          PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-4 border-foreground bg-card transition-all duration-300 overflow-hidden group hover:translate-x-2 hover:translate-y-2 shadow-[8px_8px_0px_#000000]"
            >
              <div className="bg-slate-100 flex items-center justify-center text-8xl border-b-4 border-foreground transition-colors w-full h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-65 object-contain"
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
