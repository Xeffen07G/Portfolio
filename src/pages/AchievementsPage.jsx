import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Certifications from "../components/Certifications";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const AchievementsPage = () => {
  // Ensure we start at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg pt-32 pb-20">
      <div className="px-6 md:px-12 lg:px-24 mb-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-primary uppercase hover:gap-4 transition-all duration-300 group"
        >
          <FiArrowLeft className="text-lg" /> BACK TO STUDIO
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Certifications />
      </motion.div>
      
      {/* Visual Footer for the page */}
      <div className="px-6 md:px-12 lg:px-24 mt-20 border-t border-white/5 pt-10">
        <p className="text-[10px] font-bold text-text/40 tracking-widest uppercase">
          Sayak Das — Documented Excellence 2024-2026
        </p>
      </div>
    </div>
  );
};

export default AchievementsPage;
