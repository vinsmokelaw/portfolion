import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Berries Send Money",
    description:
      "A digital money transfer application that enables users to securely send, receive, and manage transactions through an intuitive and user-friendly interface.",
    image: "projects/credit2.jpg",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://sendmoneyberries.vercel.app/",
    githubUrl: "https://github.com/vinsmokelaw/sendmoney",
  },
  {
    id: 2,
    title: "Agrimo",
    description:
      "A modern agricultural platform designed to connect farmers with valuable resources, information, and digital tools through a responsive and accessible web experience.",
    image: "projects/agrimo.jpeg",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "GetStream"],
    demoUrl: "https://farmers3.vercel.app/",
    githubUrl: "https://github.com/vinsmokelaw/farmers3.git",
  },
  {
    id: 3,
    title: "Drape",
    description:
      "A modern fashion e-commerce website designed to showcase clothing collections through an elegant and responsive user interface. The platform delivers a seamless shopping experience with intuitive navigation and visually appealing product displays.",
    image: "projects/drape.jpg",
    tags: ["Next.js", "Tailwind CSS"],
    demoUrl: "https://drape-eight.vercel.app/",
    githubUrl: "https://github.com/vinsmokelaw/drape.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects that showcase my experience in full-stack web
          development, responsive design, and building user-focused digital
          solutions using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vinsmokelaw"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
