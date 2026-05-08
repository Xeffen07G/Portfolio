import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    label: "Modern Era",
    title: "AI CHATBOT",
    titleAccent: "INTELLIGENCE",
    desc: "Engineered neural architectures for NLP, computer vision, and custom ML model integration.",
  },
  {
    label: "Scalable",
    title: "FULL-STACK",
    titleAccent: "ENGINEERING",
    desc: "React, Node.js, and cloud-native platforms built for real-time performance at scale.",
  },
  {
    label: "Innovation",
    title: "ROBOTICS",
    titleAccent: "& IOT",
    desc: "Embedded systems, sensor fusion, and autonomous controllers for physical intelligence.",
  },
];

/* Particle sphere using canvas */
const ParticleSphere = () => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles = [];
    const count = 600;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 100 + Math.random() * 10;
      particles.push({ theta, phi, r, speed: 0.002 + Math.random() * 0.003 });
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;

      particles.forEach((p) => {
        p.theta += p.speed;
        const x = cx + p.r * Math.sin(p.phi) * Math.cos(p.theta + frame * 0.003);
        const y = cy + p.r * Math.cos(p.phi);
        const z = p.r * Math.sin(p.phi) * Math.sin(p.theta + frame * 0.003);
        const scale = (z + p.r) / (2 * p.r);
        const alpha = 0.15 + scale * 0.6;
        const size = 0.5 + scale * 1.2;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 255, 0, ${alpha})`;
        ctx.fill();
      });

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
};

const Services = () => {
  return (
    <section id="services" className="relative py-20">
      {services.map((svc, i) => (
        <div key={i} className="py-20 md:py-28 px-6 md:px-12 lg:px-24 border-t border-white/5">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-6 block">
                {svc.label}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-bright leading-[0.9] tracking-tighter uppercase mb-4">
                {svc.title}<br />
                <span className="text-primary">{svc.titleAccent}</span>
              </h2>
              <p className="text-text text-base md:text-lg max-w-md mt-8 leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>

            {/* Visual side - only show particle on first card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[280px] md:h-[350px] relative"
            >
              {i === 0 && <ParticleSphere />}
              {i === 1 && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 border border-primary/20 rounded-full flex items-center justify-center relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 border border-primary/10 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-full" />
                    </div>
                    <div className="absolute inset-0 border border-primary/5 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
              )}
              {i === 2 && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0.1 }}
                        whileInView={{ opacity: [0.1, 0.5, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                        className="w-12 h-12 md:w-16 md:h-16 border border-primary/15 rounded-lg bg-primary/[0.02]"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
