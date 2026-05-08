import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 600);
          return 100;
        }
        // Accelerate towards end
        const remaining = 100 - prev;
        const step = Math.max(1, Math.floor(remaining / 15));
        return Math.min(prev + step, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="relative w-80 md:w-[420px]">
        {/* Loading text */}
        <div className="flex justify-between items-end mb-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] uppercase text-primary font-black"
          >
            Loading Portfolio
          </motion.span>
          <span className="text-sm font-mono text-white/60 tabular-nums">{progress}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="h-[1px] w-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
            className="h-full bg-primary"
            style={{ boxShadow: '0 0 20px rgba(224, 255, 0, 0.5)' }}
          />
        </div>

        {/* Branding */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <span className="text-3xl font-black tracking-tighter text-white">
            SAYAK<span className="text-primary">.</span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
