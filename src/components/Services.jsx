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
    title: "FULL-STACK",
    titleAccent: "DEVELOPMENT",
    desc: "Building scalable web applications from front to back. I focus on creating clean, efficient code using React and Node.js for reliable performance.",
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

/* Data Flow Architecture for Full-Stack */
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

    const packets = [];

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const layers = [h * 0.2, h * 0.5, h * 0.8];
      layers.forEach((ly, i) => {
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(40, ly);
        ctx.lineTo(w - 40, ly);
        ctx.stroke();
      });

      if (frame % 12 === 0) {
        packets.push({
          x: 60 + Math.random() * (w - 120),
          y: layers[0],
          targetY: layers[1],
          stage: 0,
          speed: 3 + Math.random() * 2
        });
      }

      packets.forEach((p, i) => {
        p.y += p.speed;
        
        if (p.y >= p.targetY) {
          if (p.stage === 0) {
            p.stage = 1;
            p.targetY = layers[2];
          } else {
            packets.splice(i, 1);
            return;
          }
        }

        ctx.fillStyle = "#e0ff00";
        ctx.fillRect(p.x - 1, p.y - 6, 2, 12);
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#e0ff00";
        ctx.fillRect(p.x - 1, p.y - 6, 2, 12);
        ctx.shadowBlur = 0;
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

  return <canvas ref={canvasRef} className="w-full h-full opacity-80" />;
};

/* Particle Bot Animation for Robotics */
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

    const particles = [];
    const count = 800;

    // Define the Robot Head shape bounds
    const isInsideBot = (x, y) => {
      // Main head box
      const head = (x > -60 && x < 60 && y > -50 && y < 50);
      // Rounded top
      const top = (Math.sqrt(x*x + (y+40)**2) < 60 && y < -40);
      // Ears/Side sensors
      const leftEar = (x > -80 && x < -60 && y > -20 && y < 20);
      const rightEar = (x > 60 && x < 80 && y > -20 && y < 20);
      return head || top || leftEar || rightEar;
    };

    for (let i = 0; i < count; i++) {
      let px, py;
      do {
        px = (Math.random() - 0.5) * 200;
        py = (Math.random() - 0.5) * 200;
      } while (!isInsideBot(px, py));

      particles.push({ 
        baseX: px, 
        baseY: py, 
        x: px, 
        y: py, 
        size: Math.random() * 1.5,
        speed: 0.01 + Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2
      });
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;

      particles.forEach((p) => {
        // Floating movement
        p.x = cx + p.baseX + Math.sin(frame * p.speed + p.offset) * 3;
        p.y = cy + p.baseY + Math.cos(frame * p.speed + p.offset) * 3;

        const isEye = (Math.abs(p.baseX - 30) < 10 && Math.abs(p.baseY + 10) < 8) || 
                      (Math.abs(p.baseX + 30) < 10 && Math.abs(p.baseY + 10) < 8);

        const alpha = isEye ? 0.8 + Math.sin(frame * 0.1) * 0.2 : 0.15 + Math.sin(frame * 0.02 + p.offset) * 0.1;
        const size = isEye ? p.size * 2 : p.size;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 255, 0, ${alpha})`;
        ctx.fill();

        if (isEye) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "#e0ff00";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
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
              <p className="text-text text-lg md:text-xl max-w-lg mt-10 leading-relaxed font-medium opacity-80">
                {svc.desc}
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
