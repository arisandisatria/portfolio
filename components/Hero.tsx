import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background"
    >
      <div className="max-w-5xl mt-10 mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="border-l-8 border-r-8 border-secondary dark:border-accent pl-6 pr-6 py-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-balance mb-4">
              Arisandi Satria
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-secondary dark:text-accent">
              Jeujanan
            </h1>
          </div>

          <div className="border-4 border-foreground px-6 py-2 sm:px-8 sm:py-6 inline-block text-white bg-secondary dark:bg-accent transition-all duration-200">
            <p className="text-lg sm:text-xl font-bold tracking-widest ">
              FULLSTACK DEVELOPER
            </p>
          </div>

          <p className="text-lg sm:text-xl text-foreground max-w-3xl mx-auto leading-relaxed font-medium border-b-4 border-foreground pb-6">
            Crafting bold, responsive, and high-performance applications.
            Specializing in React, Express, Next.js, and React Native.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 my-16">
          <a
            href="/downloads/CV_Arisandi.pdf"
            download="CV_Arisandi_Fullstack-Developer.pdf"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-2 sm:px-10 sm:py-4 bg-primary text-primary-foreground font-black text-lg border-4 border-primary hover:shadow-2xl transition-all duration-200 active:translate-x-1 active:translate-y-1 hover:translate-x-1 hover:translate-y-1"
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            <Download size={24} />
            RESUME
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-2 sm:px-10 sm:py-4 border-4 border-foreground text-foreground font-black text-lg hover:bg-foreground hover:text-background transition-all duration-200 active:translate-x-1 active:translate-y-1 hover:translate-x-1 hover:translate-y-1"
            style={{ boxShadow: "8px 8px 0px #000000" }}
          >
            CONTACT
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
