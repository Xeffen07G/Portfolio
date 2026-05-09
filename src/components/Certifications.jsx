import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiExternalLink, FiTarget, FiZap, FiGlobe, FiCpu, FiX, FiSearch } from "react-icons/fi";

const certifications = [
  {
    title: "TCS Research Project",
    issuer: "Tata Consultancy Services",
    date: "2024",
    color: "#ff8c00",
    tags: ["Research", "Development", "Professional"],
    id: "TCS-24-RD",
    image: "/certificates/tcs-research.png"
  },
  {
    title: "Google Gemini Academy",
    issuer: "Google / upEducators",
    date: "2025",
    color: "#4285F4",
    tags: ["AI", "Generative AI", "Google"],
    id: "GOOG-25-GEMINI",
    image: "/certificates/google-gemini.png"
  },
  {
    title: "AI Launchpad Masterclass",
    issuer: "Product Space",
    date: "2026",
    color: "#3b82f6",
    tags: ["AI", "Masterclass", "Product Strategy"],
    id: "PS-26-AILP",
    image: "/certificates/ai-launchpad.png"
  },
  {
    title: "Hult Prize Committee",
    issuer: "Hult Prize Foundation",
    date: "2026",
    color: "#000000",
    tags: ["Leadership", "Organization", "Social Impact"],
    id: "HULT-26-OC",
    image: "/certificates/hult-prize.png"
  },
  {
    title: "Google AI Implementation",
    issuer: "Google for Education / upEducators",
    date: "2026",
    color: "#f43f5e",
    tags: ["AI Implementation", "Google Edu", "Masterclass"],
    id: "GOOG-26-EDU",
    image: "/certificates/google-ai-edu.png"
  },
  {
    title: "Climate Fresk Workshop",
    issuer: "The Rebalance Institute / TIU",
    date: "2025",
    color: "#22c55e",
    tags: ["Sustainability", "Workshop", "Climate Science"],
    id: "REB-25-CLIM",
    image: "/certificates/climate-fresk.png"
  },
  {
    title: "Innovex Storm Hackathon",
    issuer: "SRMIST / Team NoXperience",
    date: "2024",
    color: "#ff0000",
    tags: ["Hackathon", "Innovation", "Development"],
    id: "SRM-24-HACK",
    image: "/certificates/innovex-storm.png"
  },
  {
    title: "CXO' Round Table Event",
    issuer: "The Technical Club Takshila",
    date: "2024",
    color: "#eab308",
    tags: ["Leadership", "Management", "Networking"],
    id: "TIU-24-CXO",
    image: "/certificates/cxo-round-table.jpg"
  },
  {
    title: "Nestlé E-learning | Resilience",
    issuer: "Nestlé Nesternship",
    date: "2026",
    color: "#0ea5e9",
    tags: ["Professional", "Resilience", "E-learning"],
    id: "NESTLE-26-RES",
    image: "/certificates/nestle-resilience.png"
  },
  {
    title: "Pitch To Deck Event",
    issuer: "The Technical Club Takshila",
    date: "2024",
    color: "#00f0ff",
    tags: ["Pitching", "Startup Logic", "Competition"],
    id: "TIU-24-PTD",
    image: "/certificates/pitch-to-deck.png"
  },
  {
    title: "NoDevBuild Selection Confirmation",
    issuer: "E-Summit x APOGEE '26",
    date: "2026",
    color: "#a855f7",
    tags: ["Ideathon", "Innovation", "Selection"],
    id: "BITS-26-NDB",
    image: "/certificates/nodevbuild.png"
  },
  {
    title: "IDEA CHAIN Winner (3rd)",
    issuer: "Takshila Club / School of Future",
    date: "2025",
    color: "#e0ff00",
    tags: ["Winner", "Ideathon", "Competition"],
    id: "TIU-25-WIN",
    image: "/certificates/idea-chain.png"
  },
  {
    title: "Sandbox CCU Excellence",
    issuer: "Techno India University / Edition #2",
    date: "2025",
    color: "#ff00ff",
    tags: ["Excellence", "Innovation", "Top-Performer"],
    id: "TIU-25-SND",
    image: "/certificates/sandbox-ccu.png"
  },
  {
    title: "GDG Devcation Delhi",
    issuer: "GDG On Campus / IIT Delhi",
    date: "2026",
    color: "#ffffff",
    tags: ["Google Devs", "Hackathon", "Tech Summit"],
    id: "GDG-26-DEV",
    image: "/certificates/devcation-delhi.png"
  },
  {
    title: "Hackfest Captain",
    issuer: "GeeksforGeeks Classroom Program",
    date: "2024",
    color: "#4ade80",
    tags: ["Captain", "GFG Hack", "Leadership"],
    id: "GFG-24-CAP",
    image: "/certificates/hackfest.png"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

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
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-bright tracking-tighter uppercase leading-[0.9] safe-heading">
          <span className="text-primary italic">THE</span> VAULT
        </h2>
        <p className="text-text max-w-xl mt-6 text-lg">
          An elite archive of {certifications.length} high-impact certifications, research projects, and global leadership roles.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id + i}
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
                {cert.image ? (
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-2 text-[9px] font-black tracking-widest text-text-bright uppercase hover:text-primary transition-all cursor-pointer group/btn"
                  >
                    VIEW <FiSearch className="group-hover/btn:scale-125 transition-transform" />
                  </button>
                ) : (
                  <span className="text-[9px] font-black tracking-widest text-text/30 uppercase">
                    IN REVIEW
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-bg border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-text-bright hover:bg-primary hover:text-black transition-all duration-300"
              >
                <FiX size={20} />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Image Container */}
                <div className="lg:w-2/3 bg-black flex items-center justify-center p-4 overflow-hidden">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* Info Container */}
                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/5 bg-white/[0.01]">
                  <span className="text-primary text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
                    {selectedCert.id}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-text-bright tracking-tight uppercase leading-[1.1] mb-6 break-words overflow-hidden">
                    {selectedCert.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest mb-1">Issuer</p>
                      <p className="text-lg text-text-bright font-medium">{selectedCert.issuer}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-text/40 uppercase tracking-widest mb-1">Date</p>
                      <p className="text-lg text-text-bright font-medium italic">{selectedCert.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-text uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
