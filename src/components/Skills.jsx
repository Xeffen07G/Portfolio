import React from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNodedotjs, SiPython, SiPytorch, SiTensorflow, 
  SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, 
  SiTypescript, SiFigma, SiGit, SiDocker, SiOpenai 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Intelligence",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-blue-500" },
      { name: "PyTorch", icon: <SiPytorch />, color: "text-orange-500" },
      { name: "TensorFlow", icon: <SiTensorflow />, color: "text-orange-400" },
      { name: "OpenAI", icon: <SiOpenai />, color: "text-white" },
    ]
  },
  {
    title: "Core Development",
    skills: [
      { name: "React", icon: <SiReact />, color: "text-blue-400" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
    ]
  },
  {
    title: "Architecture",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      { name: "Git", icon: <SiGit />, color: "text-orange-600" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-text-bright tracking-tighter mb-4 safe-heading">
            TECH <span className="text-primary italic">STACK</span>
          </h2>
          <p className="text-text text-lg max-w-xl font-medium">The architectural foundation of my intelligent solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 group hover:border-primary/20 transition-all duration-500"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-10 safe-heading">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4 group/skill">
                    <div className={`text-3xl ${skill.color} opacity-40 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-bold text-text group-hover/skill:text-text-bright transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
