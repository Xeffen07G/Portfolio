import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiX, FiExternalLink } from "react-icons/fi";

const achievements = [
  {
    title: "Idea Chain — 3rd Position",
    org: "Takshila Club, School of Future",
    category: "Competition",
    date: "December 2025",
    description: "Secured 3rd position in the Idea Chain event organized by Takshila Club (Innovation & Management Domain).",
    image: "/certificates/idea-chain.png",
  },
  {
    title: "The Escape: Ideathon",
    org: "Takshila Club",
    category: "Hackathon",
    date: "November 2025",
    description: "Successfully participated in The Escape: Ideathon organized by Takshila Club (Innovation & Management Domain & Computing Domain).",
    image: "/certificates/escape-ideathon.png",
  },
  {
    title: "Sandbox CCU Challenge — Excellence",
    org: "Techno India University",
    category: "Competition",
    date: "Aug – Sep 2025",
    description: "Certificate of Excellence for demonstrating excellence and being part of a top-performing team in the week-long Sandbox CCU Challenge.",
    image: "/certificates/sandbox-ccu.png",
  },
  {
    title: "Devcation Delhi 2026",
    org: "GDG On Campus IGDTUW × IIT Delhi",
    category: "Hackathon",
    date: "2026",
    description: "Participated in Devcation Delhi 2026 organized by Google Developer Groups on Campus IGDTUW and IIT Delhi.",
    image: "/certificates/devcation-delhi.png",
  },
  {
    title: "Hackfest — Team Captain",
    org: "GeeksforGeeks Classroom Program",
    category: "Hackathon",
    date: "2025",
    description: "Participated as Team Captain in Hackfest organised by GeeksforGeeks Classroom Program.",
    image: "/certificates/hackfest.png",
  },
  {
    title: "Google AI Implementation Program",
    org: "Google for Education",
    category: "AI",
    date: "2026",
    description: "Completed the Google for Education AI Implementation Program 2026.",
    image: null,
  },
  {
    title: "Google Gemini Academy",
    org: "Google",
    category: "AI",
    date: "2025",
    description: "Completed the Google Gemini Academy certification program.",
    image: null,
  },
  {
    title: "Hult Prize Committee",
    org: "Hult Prize Foundation",
    category: "Leadership",
    date: "2025",
    description: "Served as Organizing Committee Member for Hult Prize at Techno India University.",
    image: null,
  },
  {
    title: "Climate Fresk Workshop",
    org: "Climate Fresk",
    category: "Workshop",
    date: "2025",
    description: "Participated in the Climate Fresk Workshop exploring climate science and sustainability.",
    image: null,
  },
];

const categoryColors = {
  Hackathon: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Competition: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  AI: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Leadership: "bg-green-500/20 text-green-400 border-green-500/30",
  Workshop: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
};

const Achievements = () => {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(achievements.map((a) => a.category))];
  const filtered =
    filter === "All"
      ? achievements
      : achievements.filter((a) => a.category === filter);

  return (
    <div className="relative">
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
              filter === cat
                ? "bg-primary/20 text-primary-light border-primary/40"
                : "bg-white/5 text-text border-border hover:border-primary/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((ach, i) => (
            <motion.div
              key={ach.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              onClick={() => ach.image && setSelected(ach)}
              className={`glass p-5 group hover:border-primary/30 transition-all duration-300 ${
                ach.image ? "cursor-pointer" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                    categoryColors[ach.category]
                  }`}
                >
                  {ach.category}
                </span>
                <span className="text-xs text-text">{ach.date}</span>
              </div>

              <div className="flex items-start gap-3">
                <FiAward className="text-primary-light text-lg mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-text-bright mb-1 group-hover:text-primary-light transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-text mb-2">{ach.org}</p>
                  <p className="text-xs text-text leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>

              {ach.image && (
                <a 
                  href={ach.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-[10px] font-black tracking-widest text-primary hover:text-white transition-colors mt-6 pt-4 border-t border-white/5"
                >
                  <FiExternalLink size={14} />
                  VIEW CERTIFICATE
                </a>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass max-w-4xl w-full p-2 relative max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-text-bright hover:bg-black/70 transition-colors"
              >
                <FiX />
              </button>
              <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="p-6 bg-bg-card/90">
                <h4 className="text-xl font-bold text-text-bright">
                  {selected.title}
                </h4>
                <p className="text-text">{selected.org} · {selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;
