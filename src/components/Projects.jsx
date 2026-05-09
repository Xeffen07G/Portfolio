import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "VERIXA",
    description: "An AI-powered verification platform designed to analyze and verify raw data with high precision using deep-trace intelligence.",
    tech: ["React", "Node.js", "AI APIs", "MongoDB"],
    github: "https://github.com/Xeffen07G",
    demo: "https://verixa.vercel.app",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832",
  },
  {
    title: "INSIGHT AI",
    description: "A data analytics tool that allows users to upload CSV files and get instant insights and visualizations via natural language queries.",
    tech: ["React", "Gemini API", "Python"],
    github: "https://github.com/Xeffen07G",
    demo: "https://insight-ai-seven.vercel.app",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=2940",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-bright tracking-tighter uppercase leading-[0.9] safe-heading">
          <span className="text-primary italic">THE</span> ARTWORKS
        </h2>
      </motion.div>

      {/* Project list */}
      <div className="space-y-28">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Project image + Title (Clickable) */}
            <div className="lg:col-span-7 relative group cursor-pointer">
              <a href={project.demo} target="_blank" rel="noreferrer">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[300px] md:h-[450px] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Title below image on mobile, overlapping on desktop */}
                <h3 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-primary tracking-tighter uppercase leading-none mt-4 md:mt-0 md:absolute md:-bottom-8 md:left-0 z-10 safe-heading">
                  {project.title}
                </h3>
              </a>
            </div>

            {/* Project info */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4 lg:pt-0">
              <div className="flex justify-start lg:justify-end mb-12">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] tracking-[0.4em] uppercase text-text font-bold hover:text-primary transition-colors flex items-center gap-2"
                >
                  Visit Site <FiArrowUpRight />
                </a>
              </div>
              
              <div className="mt-auto pt-8 md:pt-16">
                <p className="text-text text-base md:text-lg leading-relaxed italic max-w-md lg:ml-auto text-left lg:text-right">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-8 justify-start lg:justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-primary/80 border border-primary/10 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
