import { Description } from "@radix-ui/react-toast";
import { title } from "framer-motion/client";
import { ExternalLink } from "lucide-react";
import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Chat Bot Like Gemini",
      Description: "Create char bot like gimini ai with html and css",
      image: "/projects/chatbot.png",
      url: "#",
      tags: ["Html", "Css", "Jacascript"],
    },
    {
      id: 2,
      title: "Website Three js",
      Description: "Website Landing page 3D html and css",
      image: "/projects/butterfly-three-js.png",
      url: "#",
      tags: ["Html", "Css", "Javascript"],
    },
    {
      id: 3,
      title: "Website Three js",
      Description: "Website Intro Page with html and css",
      image: "../",
      url: "#",
      tags: ["Html", "Css", "Javascript"],
    },
  ];
  return (
    <section id="projects" className="py-24 px-2 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-secondary"> Projects</span>
        </h2>
        <p className="text-center text-muted-forground mb-12 max-w-2xl mx-auto">
          There are some projects Each project was created with attention to
          detail and performance
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.Description}
              </p>
              <div className="flex space-x-3">
                <a
                  target="_blank"
                  href={project.url}
                  className="text-primary px-2 py-2 transition-colors duration-300"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
