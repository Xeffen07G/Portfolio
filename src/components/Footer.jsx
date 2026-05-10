import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 pt-24 pb-12 border-t border-white/5">
      {/* Main CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex flex-col md:flex-row justify-between items-end mb-24"
      >
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-text font-bold mb-6">
            Have a project in mind?
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-text-bright tracking-tighter uppercase leading-[0.85]">
            LET'S<br />
            <span className="text-primary">TALK</span>
          </h2>
        </div>

        <Link
          to="/contact"
          className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 group mt-12 md:mt-0"
        >
          <FiArrowUpRight className="text-2xl md:text-3xl text-white group-hover:text-bg transition-colors" />
        </Link>
      </motion.div>

      {/* Contact info row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 border-t border-white/5 pt-12">
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-text font-bold mb-3">Email</p>
          <a href="mailto:sayakdas.slsn8cd@gmail.com" className="text-lg font-bold text-text-bright hover:text-primary transition-colors">
            sayakdas.slsn8cd@gmail.com
          </a>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-text font-bold mb-3">Location</p>
          <p className="text-lg font-bold text-text-bright">Kolkata, India</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-text font-bold mb-3">Availability</p>
          <p className="text-lg font-bold text-text-bright">Open for Internships & Projects</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-text font-medium">
          &copy; {new Date().getFullYear()} Sayak Das. All rights reserved.
        </p>
        <div className="flex items-center gap-10">
          <Link to="/achievements" className="text-[10px] tracking-[0.3em] uppercase text-primary font-bold hover:gap-2 transition-all">Achievements</Link>
          <a href="https://github.com/Xeffen07G" target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.3em] uppercase text-text font-bold hover:text-primary transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/sayak-das-460157287" target="_blank" rel="noreferrer" className="text-[10px] tracking-[0.3em] uppercase text-text font-bold hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-text font-bold hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="text-[10px] tracking-[0.3em] uppercase text-text font-bold hover:text-primary transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
