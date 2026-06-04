import { Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Software Developer
            </h3>

            <p className="text-muted-foreground">
              I am a full-stack software developer and graduate of
              Uncommon.org's software development program. I build modern web
              applications that combine intuitive user experiences with robust
              backend systems. My expertise includes HTML, CSS, JavaScript,
              TypeScript, React, Next.js, Node.js, and database technologies,
              enabling me to create scalable, responsive, and high-performing
              applications.
            </p>

            <p className="text-muted-foreground">
              I enjoy turning ideas into impactful digital products through
              clean code, thoughtful design, and problem-solving. Whether
              developing frontend interfaces, backend services, or complete
              end-to-end solutions, I am committed to continuous learning and
              delivering software that creates meaningful value for users and
              businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Tawanda Muchenu.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building complete web applications with modern frontend
                    technologies, backend services, APIs, and databases.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Creating intuitive, accessible, and visually appealing user
                    experiences that enhance usability and engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Scratch Instructor 
                  </h4>
                  <p className="text-muted-foreground">
                    Teaching Scratch programming to young learners, helping
                    them develop creativity, computational thinking, and
                    problem-solving skills through interactive projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
