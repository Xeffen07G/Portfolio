import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiExternalLink, FiTarget, FiZap, FiGlobe, FiCpu } from "react-icons/fi";

const certifications = [
  {
    title: "TCS Research Project",
    issuer: "Tata Consultancy Services / e1133",
    date: "2025",
    color: "#e0ff00",
    tags: ["Research", "Collaborative", "TCS"],
    id: "TCS-25-RES"
  },
  {
    title: "Google Gemini Academy",
    issuer: "Google / upEducators",
    date: "2026",
    color: "#00f0ff",
    tags: ["GenAI", "Gemini", "AI Mastery"],
    id: "GOOG-26-GEM"
  },
  {
    title: "AI Launchpad Masterclass",
    issuer: "Product Space",
    date: "2026",
    color: "#ff00e0",
    tags: ["Product AI", "Masterclass", "AI Strategy"],
    id: "PS-26-AIL"
  },
  {
    title: "Hult Prize Committee",
    issuer: "Hult Prize / TIU",
    date: "2026",
    color: "#ffffff",
    tags: ["Leadership", "Global", "Organizing"],
    id: "HULT-26-ORG"
  },
  {
    title: "IDEA CHAIN Winner (3rd)",
    issuer: "Takshila Club / Innovation & Management",
    date: "2025",
    color: "#e0ff00",
    tags: ["Winner", "Ideathon", "Management"],
    id: "TIU-25-WIN"
  },
  {
    title: "Student AI Masterclass",
    issuer: "Google for Education / upEducators",
    date: "2026",
    color: "#00f0ff",
    tags: ["AI Implementation", "Google Edu", "Masterclass"],
    id: "GOOG-26-EDU"
  },
  {
    title: "Sandbox CCU Excellence",
    issuer: "Techno India University / Edition #2",
    date: "2025",
    color: "#ff00e0",
    tags: ["Excellence", "Top-Performer", "Team GalpoPath"],
    id: "TIU-25-SND"
  },
  {
    title: "GDG Devcation Delhi",
    issuer: "Google Developer Groups / IIT Delhi",
    date: "2026",
    color: "#ffffff",
    tags: ["Google Devs", "GDG Delhi", "Tech Summit"],
    id: "GDG-26-DEV"
  },
  {
    title: "Climate Fresk Workshop",
    issuer: "The Rebalance Institute / TIU",
    date: "2025",
    color: "#e0ff00",
    tags: ["Sustainability", "Workshop", "Social Impact"],
    id: "REB-25-CLM"
  },
  {
    title: "Innovex Storm Hackathon",
    issuer: "SRMIST / SRM Institute of Science and Tech",
    date: "2024",
    color: "#00f0ff",
    tags: ["Hackathon", "Team NoXperience", "Innovation"],
    id: "SRM-24-HACK"
  },
  {
    title: "Hackfest Captain",
    issuer: "GeeksforGeeks Classroom Program",
    date: "2024",
    color: "#ff00e0",
    tags: ["Captain", "GFG Hack", "Leadership"],
    id: "GFG-24-CAP"
  },
  {
    title: "CXO' Round Table",
    issuer: "Techno India University / Takshila",
    date: "2024",
    color: "#ffffff",
    tags: ["Leadership", "Innovation & Management", "CXO Forum"],
    id: "TIU-24-CXO"
  },
  {
    title: "THE ESCAPE: IDEATHON",
    issuer: "Takshila Club / Computing Domain",
    date: "2025",
    color: "#e0ff00",
    tags: ["Ideathon", "Computing", "Strategy"],
    id: "TIU-25-ESC"
  },
  {
    title: "Pitch To Deck Event",
    issuer: "The Technical Club Takshila",
    date: "2024",
    color: "#00f0ff",
    tags: ["Pitching", "Venture Capital", "Startup Logic"],
    id: "TIU-24-PTD"
  },
  {
    title: "Nestlé E-learning | Resilience",
    issuer: "Nestlé Nesternship 2026",
    date: "2026",
    color: "#ff00e0",
    tags: ["Professionalism", "Nesternship", "Soft Skills"],
    id: "NST-26-RES"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-32 px-6 md:px-12 lg:px-24 bg-bg overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      
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
          An elite archive of 15 high-impact certifications, research projects, and global leadership roles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative bg-white/[0.02] border border-white/5 p-6 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all duration-500"
          >
            {/* Glowing corner indicator */}
            <div 
              className="absolute top-0 right-0 w-20 h-20 opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: cert.color }}
            />
            
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                {cert.tags.includes("Research") ? (
                  <FiCpu className="text-lg text-primary" />
                ) : cert.tags.includes("Winner") ? (
                  <FiTarget className="text-lg text-primary" />
                ) : cert.tags.includes("Leadership") ? (
                  <FiGlobe className="text-lg text-primary" />
                ) : cert.tags.includes("Gemini") ? (
                  <FiZap className="text-lg text-primary" />
                ) : (
                  <FiAward className="text-lg text-primary" />
                )}
              </div>
              <span className="text-[9px] font-black tracking-[0.2em] text-text-bright/40 uppercase">
                {cert.id}
              </span>
            </div>

            <div className="relative z-10">
              <span className="text-[9px] font-bold text-primary tracking-widest uppercase mb-2 block">
                {cert.issuer}
              </span>
              <h3 className="text-xl font-black text-text-bright tracking-tight uppercase leading-none mb-4 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-bold px-2 py-1 bg-white/5 rounded border border-white/10 text-text uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs font-bold text-text uppercase italic">{cert.date}</span>
                <button className="flex items-center gap-2 text-[9px] font-black tracking-widest text-text-bright uppercase group-hover:text-primary transition-all">
                  VIEW <FiExternalLink />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
