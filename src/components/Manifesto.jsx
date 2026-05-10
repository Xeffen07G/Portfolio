import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifestoItems = [
  {
    number: "01",
    label: "STRATEGY",
    title: "DATA-DRIVEN\nDECISIONS",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    number: "02",
    label: "TECH",
    title: "SCALABLE\nSYSTEMS",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    number: "03",
    label: "UX & UI",
    title: "EMOTIONAL\nINTERFACES",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
  },
  {
    number: "04",
    label: "FUTURE",
    title: "AI-DRIVEN\nLOGIC",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=800&q=80",
  },
];

const Manifesto = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[150vh] bg-bg">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center pt-4 md:pt-12">
        {/* Section header */}
        <div className="px-6 md:px-12 lg:px-24 mb-6 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-text-bright tracking-tighter uppercase leading-[0.9] safe-heading"
          >
            <span className="text-primary italic">THE</span> MANIFESTO
          </motion.h2>
        </div>

        {/* Horizontal scroll container */}
        <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-12 lg:pl-24 items-start">
          {manifestoItems.map((item) => (
            <div
              key={item.number}
              className="flex-shrink-0 w-[80vw] md:w-[45vw] lg:w-[40vw] flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-[30vh] md:h-[35vh] overflow-hidden relative bg-white/[0.03] group">
                <img
                  src={item.image}
                  alt={item.title.replace('\n', ' ')}
                  width="800"
                  height="600"
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-90 transition-all duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
              </div>

              {/* Text below image */}
              <div className="mt-6 min-h-[15vh]">
                <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase block mb-3 opacity-80">
                  {item.number} / {item.label}
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-text-bright tracking-tighter uppercase leading-[0.85] whitespace-pre-line safe-heading">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
          {/* Spacer at the end for clean finish */}
          <div className="flex-shrink-0 w-[20vw]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
