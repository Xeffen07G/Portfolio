import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin, FiArrowLeft } from "react-icons/fi";
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

  const socials = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "sayakdas.slsn8cd@gmail.com",
      href: "mailto:sayakdas.slsn8cd@gmail.com",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 89613 28096",
      href: "tel:+918961328096",
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: "Xeffen07G",
      href: "https://github.com/Xeffen07G",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: "Sayak Das",
      href: "https://www.linkedin.com/in/sayak-das-460157287",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] -z-10" />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] font-black text-text/50 hover:text-primary transition-all mb-12">
          <FiArrowLeft strokeWidth={3} /> BACK TO HOME
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal y={40}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-bright tracking-tight uppercase leading-[0.95] mb-8 safe-heading">
                CONNECT <br />
                <span className="text-primary italic">NOW.</span>
              </h1>
            </Reveal>
            
            <Reveal y={20} delay={0.2}>
              <p className="text-xl text-text-bright/80 leading-tight tracking-tight uppercase italic mb-12">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing.
              </p>
            </Reveal>

            <div className="space-y-6">
              {socials.map((s, i) => (
                <Reveal key={s.label} x={-20} delay={0.3 + i * 0.1}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass p-6 flex items-center gap-6 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <span className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary/20 transition-colors">
                      {s.icon}
                    </span>
                    <div>
                      <p className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-bold mb-1">{s.label}</p>
                      <p className="text-lg text-text-bright font-black tracking-tight">{s.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={40} delay={0.4}>
              <form
                onSubmit={handleSubmit}
                className="glass p-8 md:p-12 space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] text-text/60 uppercase tracking-[0.3em] font-bold">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="ENTER NAME"
                      className="w-full bg-white/[0.03] border-b border-white/20 px-0 py-4 text-lg text-text-bright placeholder-text/40 focus:outline-none focus:border-primary transition-all font-black uppercase tracking-tight"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] text-text/60 uppercase tracking-[0.3em] font-bold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ENTER EMAIL"
                      className="w-full bg-white/[0.03] border-b border-white/20 px-0 py-4 text-lg text-text-bright placeholder-text/40 focus:outline-none focus:border-primary transition-all font-black uppercase tracking-tight"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] text-text/40 uppercase tracking-[0.3em] font-bold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                    className="w-full bg-white/[0.03] border-b border-white/20 px-0 py-4 text-lg text-text-bright placeholder-text/40 focus:outline-none focus:border-primary transition-all resize-none font-black uppercase tracking-tight"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || sent}
                  className={`w-full h-20 flex items-center justify-center gap-4 px-10 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all duration-500 ${
                    sent 
                      ? "bg-green-500 text-white" 
                      : "bg-primary text-bg hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(224,255,0,0.2)]"
                  } disabled:opacity-50`}
                >
                  {sent ? "✓ TRANSMISSION SENT" : isSubmitting ? "TRANSMITTING..." : <><FiSend /> SEND MESSAGE</>}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
