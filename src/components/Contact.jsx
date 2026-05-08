import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Convert form data to JSON for Web3Forms
    const formData = new FormData(e.target);
    // USER: Replace the string below with your actual Web3Forms Access Key!
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();
      
      if (data.success) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message: " + data.message);
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
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-light text-sm font-medium tracking-widest uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-bright">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="glass p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="block text-xs text-text uppercase tracking-wider mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-bright placeholder-text/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-text uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-bright placeholder-text/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs text-text uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="w-full bg-white/5 border border-border rounded-lg px-4 py-3 text-sm text-text-bright placeholder-text/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || sent}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                sent ? "bg-green-500 text-white" : "bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {sent ? "✓ Message Sent!" : isSubmitting ? "Sending..." : <><FiSend /> Send Message</>}
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center space-y-5"
          >
            <p className="text-text leading-relaxed text-base mb-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing. Feel free to reach
              out through any of these channels.
            </p>

            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass p-4 flex items-center gap-4 hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary-light text-lg group-hover:bg-primary/20 transition-colors">
                  {s.icon}
                </span>
                <div>
                  <p className="text-xs text-text uppercase tracking-wider">{s.label}</p>
                  <p className="text-sm text-text-bright font-medium">{s.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Currently exploring */}
            <div className="mt-6 glass p-5">
              <h4 className="text-sm font-semibold text-text-bright mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Currently Exploring
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Agents",
                  "Robotics Systems",
                  "Intelligent Automation",
                  "Full-Stack Architecture",
                  "Product Engineering",
                ].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-text-bright border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
