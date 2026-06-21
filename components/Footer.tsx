export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-foreground py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 mb-8">
          <div className="p-4 border-3 border-foreground shadow-[8px_8px_0px_#000000]">
            <h3 className="font-black text-2xl mb-2 uppercase">ASJ</h3>
            <p className="text-sm text-foreground font-bold">
              Fullstack Developer crafting bold application experiences.
            </p>
          </div>

          <div className="p-4 border-3 border-foreground shadow-[8px_8px_0px_#000000]">
            <h4 className="font-black text-sm mb-4 uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm text-foreground font-bold">
              <li>
                <a
                  href="#home"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 border-3 border-foreground shadow-[8px_8px_0px_#000000]">
            <h4 className="font-black text-sm mb-4 uppercase">Social</h4>
            <ul className="space-y-2 text-sm text-foreground font-bold">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="mailto:arisandisatria541@gmail.com"
                  className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 border-3 border-foreground shadow-[8px_8px_0px_#000000]">
            <h4 className="font-black text-sm mb-4 uppercase">Contact</h4>
            <p className="text-sm text-foreground font-bold">
              <a
                href="mailto:arisandisatria541@gmail.com"
                className="border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors"
              >
                arisandisatria541@gmail.com
              </a>
            </p>
            <p className="text-sm text-foreground font-bold mt-2">
              Jember, Indonesia
            </p>
          </div>
        </div>

        <div className="border-t-4 border-foreground pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <p className="text-sm text-foreground font-black text-center">
              © {currentYear} ARISANDI SATRIA JEUJANAN. ALL RIGHTS RESERVED.
            </p>
            <div className="flex">
              <a
                href="#home"
                className="text-sm text-foreground font-black border-b-2 border-transparent hover:border-secondary hover:dark:border-accent transition-colors uppercase"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
