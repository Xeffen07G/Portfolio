import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-between px-6 md:px-12 lg:px-16 xl:px-24 pt-8 pb-0 overflow-hidden">
      {/* Top bar with logo */}
      <div className="flex justify-between items-center relative z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-white/20 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">SD</span>
          </div>
        </div>
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between relative z-10 py-12 gap-12 overflow-hidden">
        {/* Left side - Name */}
        <div className="pb-12 lg:pb-24 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-text/60 mb-6 font-bold">
              Engineering <span className="text-primary">/</span> AI Systems
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase">
              SAYAK<br />
              DAS
            </h1>
          </motion.div>
        </div>

        {/* Center - Portrait */}
        <div className="flex justify-center items-end relative px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-64 md:w-80 aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 group shadow-2xl"
          >
            <img 
              src="/hero-portrait.png?v=3" 
              alt="Sayak Das" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* Right side - Titles */}
        <div className="pb-12 lg:pb-24 text-center lg:text-right max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary text-[10px] font-black tracking-[0.4em]">SPEC 01</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase">
              DEV<span className="text-primary">EL</span>OPER
            </h2>
            
            <span className="text-primary text-[10px] font-black tracking-[0.4em] mt-8 block">SPEC 02</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.85] tracking-tighter uppercase" 
              style={{ WebkitTextStroke: '1px rgba(224, 255, 0, 0.5)', color: 'transparent' }}>
              & AI/ML
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end pb-6 relative z-20 gap-4"
      >
        {/* Status */}
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-text font-bold">Current Status</span>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-3 h-3 bg-primary rounded-full pulse-dot" />
              <div className="absolute inset-0 w-3 h-3 bg-primary/30 rounded-full animate-ping" />
            </div>
            <span className="text-sm text-text-bright font-bold">Available for <em className="text-primary">Projects</em></span>
          </div>
        </div>

        {/* Let's Talk CTA */}
        <div className="flex items-center gap-4">
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-text font-bold block mb-1">Get In Touch</span>
            <a href="#contact" className="text-2xl md:text-3xl font-black tracking-tighter text-text-bright uppercase hover:text-primary transition-colors">
              LET'S TALK
            </a>
          </div>
          <a href="#contact" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group flex-shrink-0">
            <FiArrowUpRight className="text-lg text-white group-hover:text-bg transition-colors" />
          </a>
        </div>
      </motion.div>

      {/* Social bar at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="border-t border-white/5 py-4 flex items-center gap-8 md:gap-12 relative z-20"
      >
        <div className="w-12 h-px bg-white/20" />
        {['Instagram', 'LinkedIn', 'Github'].map((social) => (
          <a key={social} href="#" className="text-[10px] tracking-[0.3em] uppercase text-text font-bold hover:text-primary transition-colors">
            {social}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
