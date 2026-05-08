import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import heroImg from "../assets/hero-portrait.png";

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
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 items-end relative z-10 py-8 gap-4 overflow-hidden">
        {/* Left side - Name */}
        <div className="lg:col-span-4 pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-text mb-4 font-medium">
              👋 Hi, my name is
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-text-bright leading-[0.9] tracking-tighter uppercase">
              <span className="text-primary">S</span>AYAK<br />
              DAS
            </h1>
          </motion.div>
        </div>

        {/* Center - Portrait */}
        <div className="lg:col-span-3 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <img 
              src={heroImg} 
              alt="Sayak Das" 
              width="384"
              height="512"
              loading="eager"
              fetchpriority="high"
              className="w-56 sm:w-64 md:w-72 lg:w-80 h-auto object-cover grayscale contrast-125 brightness-90 relative z-10"
            />
            {/* Decorative grid lines behind portrait */}
            <div className="absolute -inset-6 z-0 opacity-10">
              <div className="w-full h-full border border-white/20" 
                style={{ 
                  backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} 
              />
            </div>
          </motion.div>
        </div>

        {/* Right side - Titles */}
        <div className="lg:col-span-5 pb-16 lg:pb-20 text-right pr-6 md:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary text-xs font-black tracking-[0.3em]">01</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[5rem] font-black text-text-bright leading-[0.9] tracking-tighter uppercase">
              DEVELOP<span className="text-primary">ER</span>
            </h2>
            
            <span className="text-primary text-xs font-black tracking-[0.3em] mt-4 block">02</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[5rem] font-black leading-[0.9] tracking-tighter uppercase" 
              style={{ WebkitTextStroke: '1.5px #e0ff00', color: 'transparent' }}>
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
