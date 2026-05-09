import React from "react";
import Projects from "../components/Projects";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-text-bright mb-4 safe-heading">
            My <span className="gradient-text">Creations</span>
          </h1>
          <p className="text-text text-lg max-w-2xl">
            A comprehensive look at the systems I've engineered. 
            From cinematic enterprise platforms to AI-driven analytics tools.
          </p>
        </header>
        <Projects />
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
