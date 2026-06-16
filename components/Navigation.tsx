import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Navigation() {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b-4 border-foreground bg-background"
      style={{ boxShadow: "0 4px 0px #000000" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            className="text-2xl font-black tracking-wider hover:text-accent transition-colors"
          >
            ASJ
          </a>

          <div className="hidden md:flex items-center gap-12">
            <a
              href="#about"
              className="text-sm font-black uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm font-black uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-sm font-black uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-sm font-black uppercase tracking-wider hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent"
            >
              Contact
            </a>
          </div>

          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity cursor-pointer"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
