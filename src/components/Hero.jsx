import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-32 pb-12 overflow-hidden bg-bg">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      {/* Main hero content */}
      <div className="flex-1 flex flex-col xl:flex-row items-center xl:items-end justify-between relative z-10 gap-12 xl:gap-16">
        {/* Left side - Name */}
        <div className="w-full xl:w-auto text-center xl:text-left order-2 xl:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-text/40 mb-6 font-bold">
              Engineering <span className="text-primary">/</span> AI Systems
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase">
              SAYAK<br />
              DAS
            </h1>
          </motion.div>
        </div>

        {/* Center - Portrait */}
        <div className="relative order-1 xl:order-2 shrink-0 z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-1000 group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="/sayak-final.png" 
              alt="Sayak Das" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
          </motion.div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-primary/10 rounded-3xl -z-10 animate-pulse" />
        </div>

        {/* Right side - Titles */}
        <div className="w-full xl:w-auto text-center xl:text-right order-3">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary text-[10px] font-black tracking-[0.4em]">SPEC 01</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase mb-8">
              DEV<span className="text-primary">EL</span>OPER
            </h2>
            
            <span className="text-primary text-[10px] font-black tracking-[0.4em] block">SPEC 02</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase" 
              style={{ WebkitTextStroke: '1px rgba(224, 255, 0, 0.4)', color: 'transparent' }}>
              & AI/ML
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 flex flex-col sm:flex-row justify-between items-end gap-8 pt-8 border-t border-white/5"
      >
        <div className="flex flex-col gap-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-text/40 font-bold">Current Status</span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#e0ff00]" />
            <span className="text-sm text-text-bright font-bold uppercase tracking-widest">Available for Projects</span>
          </div>
        </div>

        <div className="flex gap-12">
          {['LinkedIn', 'Github', 'Instagram'].map((social) => (
            <a key={social} href="#" className="text-[10px] tracking-[0.4em] uppercase text-text/60 font-bold hover:text-primary transition-colors">
              {social}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
