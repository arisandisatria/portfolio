"use client";

import { useState } from "react";
import { Mail, Share2, Code2, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something weird happened!");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage(String(error) || "Something weird happened!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-24 border-t-4 border-foreground bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter mb-4 sm:mb-8 border-l-8 border-secondary dark:border-accent pl-6 py-2">
          LET&apos;S CONNECT
        </h2>
        <p className="text-lg text-foreground mb-8 sm:mb-16 max-w-4xl font-bold border-b-4 border-foreground pb-2">
          I&apos;m always interested in hearing about new projects and
          opportunities. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-black mb-3 uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-3 border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all font-medium"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-black mb-3 uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-3 border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all font-medium"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-black mb-3 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-3 border-foreground bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none font-medium"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 bg-primary text-primary-foreground font-black border-3 border-primary hover:translate-x-1 hover:translate-y-1 transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center gap-2 uppercase shadow-[8px_8px_0px_#000000] cursor-pointer hover:bg-accent dark:hover:bg-secondary ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 bg-accent border-3 border-accent text-accent-foreground text-sm font-black uppercase">
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-destructive border-3 border-destructive text-destructive-foreground text-sm font-black uppercase">
                  ❌ {errorMessage}
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <div>
                <h3 className="text-2xl font-black mb-6 uppercase border-b-4 border-foreground pb-2">
                  REACH ME DIRECTLY
                  <div className="py-1 text-foreground font-medium normal-case">
                    <p className="text-sm leading-relaxed">
                      Whether you have a project to discuss, want to
                      collaborate, or just want to say hello, I&apos;d love to
                      hear from you. Let&apos;s create something amazing
                      together!
                    </p>
                  </div>
                </h3>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:arisandisatria541@gmail.com"
                  className="flex items-center gap-4 p-4 border-3 border-foreground hover:bg-accent hover:dark:bg-secondary hover:text-secondary-foreground transition-all group shadow-[4px_4px_0px_#000000]"
                >
                  <Mail
                    size={28}
                    className="text-secondary dark:text-accent shrink-0"
                  />
                  <div>
                    <p className="font-black group-hover:text-secondary-foreground transition-colors uppercase">
                      Email
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      arisandisatria541@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/arisandisatriajeujanan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-3 border-foreground hover:bg-accent hover:dark:bg-secondary hover:text-secondary-foreground transition-all group shadow-[4px_4px_0px_#000000]"
                >
                  <Share2
                    size={28}
                    className="text-secondary dark:text-accent shrink-0"
                  />
                  <div>
                    <p className="font-black group-hover:text-secondary-foreground transition-colors uppercase">
                      LinkedIn
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Connect with me
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/arisandisatria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-3 border-foreground hover:bg-accent hover:dark:bg-secondary hover:text-secondary-foreground transition-all group shadow-[4px_4px_0px_#000000]"
                >
                  <Code2
                    size={28}
                    className="text-secondary dark:text-accent shrink-0"
                  />
                  <div>
                    <p className="font-black group-hover:text-secondary-foreground transition-colors uppercase">
                      GitHub
                    </p>
                    <p className="text-sm text-foreground font-medium">
                      Check out my work
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
