import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    label: "Advanced AI",
    title: "INTELLIGENT",
    titleAccent: "SYSTEMS",
    desc: "Designing brains for the digital age. I build custom LLMs, computer vision systems, and neural models that can think, learn, and solve complex problems autonomously.",
  },
  {
    label: "High Performance",
    title: "FULL-STACK",
    titleAccent: "INFRASTRUCTURE",
    desc: "From pixel-perfect interfaces to robust back-end logic. I engineer scalable web platforms using React and Node.js that are built to handle massive traffic with zero lag.",
  },
  {
    label: "Future Tech",
    title: "ROBOTICS",
    titleAccent: "& PHYSICAL IOT",
    desc: "Making code move. I bridge the gap between software and the physical world by designing autonomous robotic systems and IoT networks that react to their environment in real-time.",
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
    const count = 800;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 120 + Math.random() * 15;
      particles.push({ theta, phi, r, speed: 0.001 + Math.random() * 0.002 });
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
        const x = cx + p.r * Math.sin(p.phi) * Math.cos(p.theta + frame * 0.002);
        const y = cy + p.r * Math.cos(p.phi);
        const z = p.r * Math.sin(p.phi) * Math.sin(p.theta + frame * 0.002);
        const scale = (z + p.r) / (2 * p.r);
        const alpha = 0.1 + scale * 0.5;
        const size = 0.4 + scale * 1.5;

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
    <section id="services" className="relative py-20 bg-bg">
      {services.map((svc, i) => (
        <div key={i} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 last:border-b">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-8 block font-sans">
                {svc.label}
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-bright leading-[0.85] tracking-tighter uppercase mb-6">
                {svc.title}<br />
                <span className="text-primary" style={{ WebkitTextStroke: i === 1 ? '1px #e0ff00' : 'none', color: i === 1 ? 'transparent' : '#e0ff00' }}>{svc.titleAccent}</span>
              </h2>
              <p className="text-text text-lg md:text-xl max-w-lg mt-10 leading-relaxed font-medium italic opacity-80">
                "{svc.desc}"
              </p>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-[300px] md:h-[450px] relative flex items-center justify-center overflow-hidden"
            >
              {i === 0 && <ParticleSphere />}
              
              {i === 1 && (
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  {/* Rotating System Core */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-primary/20 rounded-full border-dashed"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 border-[1px] border-white/5 rounded-full border-dashed"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_#e0ff00]" />
                  </div>
                  {/* Floating data bits */}
                  {[0, 60, 120, 180, 240, 300].map((deg) => (
                    <motion.div
                      key={deg}
                      animate={{ 
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: deg/60 }}
                      className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary/40 rounded-full"
                      style={{ 
                        transform: `rotate(${deg}deg) translate(120px) rotate(-${deg}deg)` 
                      }}
                    />
                  ))}
                </div>
              )}
              
              {i === 2 && (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Sensor Pulse Matrix */}
                  <div className="grid grid-cols-5 gap-4">
                    {[...Array(25)].map((_, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0.05 }}
                        whileInView={{ 
                          opacity: [0.05, 0.3, 0.05],
                          backgroundColor: ["rgba(224,255,0,0)", "rgba(224,255,0,0.1)", "rgba(224,255,0,0)"]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: (j % 5) * 0.1 + Math.floor(j / 5) * 0.1 }}
                        className="w-10 h-10 md:w-14 md:h-14 border border-white/5 rounded-sm"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg" />
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
