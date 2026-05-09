import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    label: "Machine Learning",
    title: "AI & NEURAL",
    titleAccent: "SYSTEMS",
    desc: "Working with large language models and computer vision to build systems that learn from data and help solve complex computational problems.",
  },
  {
    label: "Web Engineering",
    title: "FULL-",
    titleAccent: "STACK",
    desc: "End-to-end web engineering. Building high-performance systems from the user interface to the core infrastructure.",
  },
  {
    label: "Hardware & Software",
    title: "ROBOTICS",
    titleAccent: "& IOT SYSTEMS",
    desc: "Developing autonomous systems and IoT networks that enable software to interact with the physical world through sensors and controllers.",
  },
];

/* Particle Sphere Animation for AI */
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
    const count = 1000;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 130 + Math.random() * 10;
      particles.push({ theta, phi, r, speed: 0.001 + Math.random() * 0.0015 });
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
        const alpha = 0.05 + scale * 0.6;
        const size = 0.4 + scale * 1.8;

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

/* Layered Isometric Stack for Full-Stack */
const DataArchitecture = () => {
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

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      
      ctx.strokeStyle = "#e0ff00";
      ctx.lineWidth = 5; 
      ctx.lineCap = "round";

      // Draw 4 Isometric Layers
      for (let i = 0; i < 4; i++) {
        const yOffset = i * 50 - 75;
        const opacity = 0.2 + (i * 0.2);
        const float = Math.sin(frame * 0.01 + i) * 8; // Slower float
        
        ctx.strokeStyle = `rgba(224, 255, 0, ${opacity})`;
        
        // Draw Isometric Plane
        ctx.beginPath();
        ctx.moveTo(cx, cy + yOffset + float - 30);
        ctx.lineTo(cx + 100, cy + yOffset + float);
        ctx.lineTo(cx, cy + yOffset + float + 30);
        ctx.lineTo(cx - 100, cy + yOffset + float);
        ctx.closePath();
        ctx.stroke();

        // Connecting Vertical Support lines
        if (i < 3) {
          ctx.save();
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 10]);
          ctx.beginPath();
          ctx.moveTo(cx - 70, cy + yOffset + float + 15);
          ctx.lineTo(cx - 70, cy + yOffset + 50 + float + 15);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(cx + 70, cy + yOffset + float + 15);
          ctx.lineTo(cx + 70, cy + yOffset + 50 + float + 15);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Vertical Data Pulse (Slower)
      const pulseY = (frame * 1.5) % 240 - 120;
      ctx.fillStyle = "#e0ff00";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#e0ff00";
      ctx.beginPath();
      ctx.arc(cx, cy + pulseY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

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

/* Iconic Green Bot Animation for Robotics */
const ParticleBot = () => {
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

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5 + Math.sin(frame * 0.03) * 5;

      ctx.strokeStyle = "#e0ff00";
      ctx.lineWidth = 5; // Perfect balance of boldness
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      // 1. Antenna
      ctx.beginPath();
      ctx.moveTo(cx, cy - 80);
      ctx.lineTo(cx, cy - 110);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy - 115, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#e0ff00";
      ctx.fill();

      // 2. Head Unit
      ctx.beginPath();
      ctx.roundRect(cx - 80, cy - 80, 160, 100, 35);
      ctx.stroke();

      // Eyes (Solid for visibility)
      ctx.fillStyle = "#e0ff00";
      ctx.fillRect(cx - 30, cy - 50, 12, 25);
      ctx.fillRect(cx + 18, cy - 50, 12, 25);

      // 3. Body
      ctx.beginPath();
      ctx.roundRect(cx - 50, cy + 30, 100, 85, 25);
      ctx.stroke();

      // 4. Arms
      // Left Arm
      ctx.beginPath();
      ctx.moveTo(cx - 80, cy - 10);
      ctx.quadraticCurveTo(cx - 120, cy + 20, cx - 120, cy + 80);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx - 120, cy + 90, 15, Math.PI, 0); 
      ctx.fill();

      // Right Arm
      ctx.beginPath();
      ctx.moveTo(cx + 80, cy - 10);
      ctx.quadraticCurveTo(cx + 120, cy + 20, cx + 120, cy + 80);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + 120, cy + 90, 15, Math.PI, 0);
      ctx.fill();

      // 5. Bottom "Thrust" Lines
      ctx.lineWidth = 4;
      const tY = cy + 130;
      [cx - 30, cx, cx + 30].forEach((tx, i) => {
        const bh = i === 1 ? 40 : 25;
        ctx.beginPath();
        ctx.moveTo(tx, tY);
        ctx.lineTo(tx, tY + bh + Math.sin(frame * 0.1 + i) * 5);
        ctx.stroke();
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
    <section id="services" className="relative py-12 md:py-20 bg-bg">
      {services.map((svc, i) => (
        <div key={i} className="py-20 md:py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 last:border-b">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: i === 1 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`flex flex-col justify-center ${i === 1 ? "lg:order-2" : ""}`}
            >
              <span className="text-primary text-[10px] font-black tracking-[0.5em] uppercase mb-4 block font-sans">
                {svc.label}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-text-bright leading-[0.9] tracking-tighter uppercase mb-8">
                {svc.title}<br />
                <span className="text-primary" style={{ WebkitTextStroke: i === 1 ? '1px #e0ff00' : 'none', color: i === 1 ? 'transparent' : '#e0ff00' }}>{svc.titleAccent}</span>
              </h2>
              <div className="w-12 h-[1px] bg-primary/30 mb-8" />
              <p className="text-text/70 text-base md:text-xl max-w-lg leading-relaxed font-medium">
                {svc.desc}
              </p>
            </motion.div>

            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className={`h-[350px] md:h-[500px] w-full relative flex items-center justify-center overflow-hidden ${i === 1 ? "lg:order-1" : ""}`}
            >
              {i === 0 && <ParticleSphere />}
              {i === 1 && <DataArchitecture />}
              {i === 2 && <ParticleBot />}
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
