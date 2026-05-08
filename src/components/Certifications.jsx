import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const certifications = [
  {
    title: "Innovex Storm Hackathon",
    issuer: "SRMIST / SRM Institute of Science and Tech",
    date: "2024",
    color: "#e0ff00",
    tags: ["Hackathon", "Team NoXperience", "Innovation"],
    id: "SRM-24-HACK"
  },
  {
    title: "CXO' Round Table",
    issuer: "Techno India University / Takshila",
    date: "2024",
    color: "#ff00e0",
    tags: ["Leadership", "Innovation & Management", "CXO Forum"],
    id: "TIU-24-CXO"
  },
  {
    title: "Pitch To Deck Event",
    issuer: "The Technical Club Takshila",
    date: "2024",
    color: "#ffffff",
    tags: ["Pitching", "Venture Capital", "Startup Logic"],
    id: "TIU-24-PTD"
  },
  {
    title: "Nestlé E-learning | Resilience",
    issuer: "Nestlé Nesternship 2026",
    date: "2026",
    color: "#e0ff00",
    tags: ["Professionalism", "Nesternship", "Soft Skills"],
    id: "NST-26-RES"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 px-6 md:px-12 lg:px-24 bg-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
          Achievements
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-bright tracking-tighter uppercase leading-[0.9]">
          THE <span className="text-primary italic">VAULT</span>
        </h2>
        <p className="text-text max-w-xl mt-6 text-lg">
          A documented record of specialized participations, hackathons, and professional milestones across the tech ecosystem.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/[0.02] border border-white/5 p-8 lg:p-10 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
          >
            {/* Glowing corner indicator */}
            <div 
              className="absolute top-0 right-0 w-24 h-24 opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: cert.color }}
            />
            
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <FiAward className="text-xl text-primary" />
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-text-bright/40 uppercase">
                {cert.id}
              </span>
            </div>

            <div className="relative z-10">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase mb-2 block">
                {cert.issuer}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-text-bright tracking-tight uppercase leading-none mb-6 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {cert.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-white/5 rounded border border-white/10 text-text uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-xs font-bold text-text uppercase italic">{cert.date}</span>
                <button className="flex items-center gap-2 text-[10px] font-black tracking-widest text-text-bright uppercase group-hover:text-primary transition-all">
                  SECURE RECORD <FiExternalLink />
                </button>
              </div>
            </div>

            {/* Background Number */}
            <span className="absolute -bottom-4 -right-2 text-8xl font-black text-white/[0.02] select-none group-hover:text-primary/[0.03] transition-colors">
              0{i+1}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
