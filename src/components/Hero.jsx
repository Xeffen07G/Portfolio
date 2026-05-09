import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useMagnetic } from "../hooks/useMagnetic";

const Hero = () => {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic(0.2);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => window.removeEventListener("mousemove", handleGlobalMouseMove);
  }, []);

  // Spring animations for the portrait
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(position.x, springConfig);
  const springY = useSpring(position.y, springConfig);

  useEffect(() => {
    springX.set(position.x);
    springY.set(position.y);
  }, [position, springX, springY]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-32 pb-12 overflow-hidden bg-bg">
      {/* Background Studio Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(224, 255, 0, 0.05) 0%, transparent 50%)`
        }}
      />
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-10" />

      {/* Main hero content */}
      <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-end justify-between relative z-10 gap-8 lg:gap-4 xl:gap-16">
        {/* Left side - Name */}
        <div className="w-full lg:w-auto text-center lg:text-left order-2 lg:order-1 flex-shrink">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-text/40 mb-6 font-bold font-sans">
              Engineering <span className="text-primary">/</span> AI Systems
            </p>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-9xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase">
              SAYAK<br />
              DAS
            </h1>
          </motion.div>
        </div>

        {/* Center - Portrait with Magnetic Effect */}
        <div className="relative order-1 lg:order-2 shrink-0 z-20 mx-4 cursor-none">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-72 sm:w-80 md:w-96 lg:w-80 xl:w-[450px] aspect-[4/5] overflow-hidden transition-all duration-700 group"
          >
            <img 
              src="/profile.png" 
              alt="Sayak Das" 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
            />
            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-40" />
          </motion.div>
          
          {/* Subtle Ambient Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] rounded-full -z-10 group-hover:bg-primary/20 transition-colors duration-1000" />
        </div>

        {/* Right side - Titles */}
        <div className="w-full lg:w-auto text-center lg:text-right order-3 flex-shrink">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-primary text-sm font-medium italic font-serif tracking-widest block mb-1">Spec 01</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase mb-8">
              DEV<span className="text-primary">EL</span>OPER
            </h2>
            
            <span className="text-primary text-sm font-medium italic font-serif tracking-widest block mb-1">Spec 02</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-black leading-[0.85] tracking-tighter uppercase" 
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
