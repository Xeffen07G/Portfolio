import React from "react";
import Achievements from "../components/Achievements";
import { motion } from "framer-motion";

const AchievementsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-text-bright mb-4">
            Awards & <span className="gradient-text">Recognition</span>
          </h1>
          <p className="text-text text-lg max-w-2xl">
            A timeline of my academic and professional growth. 
            Certifications, hackathon wins, and leadership roles that have shaped my journey.
          </p>
        </header>
        <Achievements />
      </div>
    </motion.div>
  );
};

export default AchievementsPage;
