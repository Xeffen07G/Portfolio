import { motion } from "framer-motion";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="lg:col-span-7">
            <Reveal y={40} stagger={0.1}>
              <h3 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-12 italic">The Manifesto</h3>
              <h2 className="text-4xl md:text-7xl font-black text-text-bright tracking-tighter leading-[0.9] uppercase italic mb-12 safe-heading">
                Pioneering <br />
                <span className="text-primary not-italic">Intelligent</span> <br />
                Architectures.
              </h2>
              <div className="space-y-8">
                <p className="text-xl md:text-3xl font-bold leading-tight text-text tracking-tighter uppercase italic opacity-80">
                  I am a B.Tech CSE student specializing in AI/ML at Techno India University. 
                  My work is driven by the relentless pursuit of how intelligent systems can 
                  simplify and amplify human potential.
                </p>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-text/60">
                  Beyond pure logic, I focus on the synthesis of robotics and product engineering. 
                  I believe that the most powerful solutions are those that feel invisible yet 
                  indispensable.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <Reveal delay={0.4} y={50}>
              <div className="grid grid-cols-1 gap-4">
                <div className="group p-10 border border-white/5 bg-white/[0.01] hover:border-primary/20 transition-all duration-700">
                  <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-4 italic">01. Formation</h4>
                  <p className="text-2xl font-black text-text-bright tracking-tighter uppercase italic">B.Tech CSE (AI/ML)</p>
                  <p className="text-sm font-bold text-text/40 mt-2">Techno India University · 2023 – 2027</p>
                </div>
                
                <div className="group p-10 border border-white/5 bg-white/[0.01] hover:border-primary/20 transition-all duration-700">
                  <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-4 italic">02. Base</h4>
                  <p className="text-2xl font-black text-text-bright tracking-tighter uppercase italic">Kolkata, India</p>
                  <p className="text-sm font-bold text-text/40 mt-2">Available for global research & engineering.</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
