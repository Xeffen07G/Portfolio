import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowLeft, FiMapPin, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://formspree.io/f/xgodnagb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      if (res.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg pt-28 pb-20 px-6 md:px-12 relative overflow-hidden flex flex-col">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto w-full flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <div className="flex justify-between items-center mb-16">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-black text-text/40 hover:text-primary transition-all group">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" strokeWidth={3} /> BACK TO HOME
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-[9px] uppercase tracking-[0.3em] font-bold text-text/30">
            <div className="flex items-center gap-2"><FiMapPin className="text-primary" /> KOLKATA, IN</div>
            <div className="flex items-center gap-2"><FiClock className="text-primary" /> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} IST</div>
          </div>
        </div>

        {/* Hero Section of Page */}
        <div className="mb-20">
          <Reveal y={40}>
            <p className="text-primary text-[10px] tracking-[0.5em] font-black uppercase mb-4 ml-1">Initiate Connection</p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-text-bright tracking-tighter uppercase leading-[0.8] mb-0 safe-heading">
              LET'S <span className="text-primary italic">BUILD.</span>
            </h1>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal y={20} delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-12 relative">
                {/* Visual line decoration */}
                <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-white/5 to-transparent hidden md:block" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="group relative">
                    <label className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-bold block mb-2 group-focus-within:text-primary transition-colors">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="ENTER FULL NAME"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl font-black text-text-bright placeholder-white/5 focus:outline-none focus:border-primary transition-all tracking-tight uppercase"
                    />
                  </div>
                  <div className="group relative">
                    <label className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-bold block mb-2 group-focus-within:text-primary transition-colors">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ENTER EMAIL"
                      className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl font-black text-text-bright placeholder-white/5 focus:outline-none focus:border-primary transition-all tracking-tight uppercase"
                    />
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-bold block mb-2 group-focus-within:text-primary transition-colors">Project Manifesto</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="DESCRIBE THE VISION..."
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl font-black text-text-bright placeholder-white/5 focus:outline-none focus:border-primary transition-all tracking-tight uppercase resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || sent}
                  className="group relative h-24 w-full md:w-80 flex items-center justify-between px-10 bg-primary text-bg font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 overflow-hidden"
                >
                  <span className="relative z-10">{sent ? "TRANSMITTED" : isSubmitting ? "SENDING..." : "SEND MESSAGE"}</span>
                  <FiSend className={`text-xl relative z-10 transition-transform duration-500 ${sent ? "translate-x-20" : "group-hover:translate-x-2"}`} />
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 mix-blend-overlay opacity-20" />
                </button>
              </form>
            </Reveal>
          </div>

          {/* Right Column - Info */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-16">
            <Reveal x={20} delay={0.3}>
              <div>
                <h4 className="text-[10px] text-primary tracking-[0.5em] font-black uppercase mb-8">Social Infrastructure</h4>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <FiLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/sayak-das-460157287" },
                    { icon: <FiGithub />, label: "GitHub", href: "https://github.com/Xeffen07G" },
                    { icon: <FiMail />, label: "Email", href: "mailto:sayakdas.slsn8cd@gmail.com" },
                    { icon: <FiPhone />, label: "Call", href: "tel:+918961328096" }
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" 
                       className="glass h-32 flex flex-col justify-center items-center gap-4 hover:border-primary/40 transition-all group">
                      <span className="text-2xl text-text/40 group-hover:text-primary transition-colors">{s.icon}</span>
                      <span className="text-[9px] font-black tracking-widest uppercase">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal x={20} delay={0.4}>
              <div className="glass p-10 border-l-2 border-primary">
                <p className="text-sm text-text font-medium leading-relaxed uppercase italic tracking-tight opacity-70">
                  Currently seeking high-impact collaborations in <span className="text-primary not-italic">AI AGENTS, ROBOTICS, and INTELLIGENT SYSTEMS.</span> Availability for Summer 2026 internships is currently active.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Decorative background text */}
        <div className="mt-auto pt-24 opacity-[0.02] select-none pointer-events-none hidden md:block">
          <span className="text-[20vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap -ml-24">SAYAK DAS / ARCHITECT</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
