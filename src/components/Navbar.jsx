import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Achievements", href: "/achievements" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Simplified Logo */}
        <Link 
          to="/" 
          className="text-2xl font-black text-text-bright tracking-tighter uppercase"
        >
          SAYAK<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all hover:text-primary ${
                    location.pathname === item.href ? "text-primary" : "text-text/50"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          to="/#contact"
          className="px-8 py-2.5 rounded-full bg-primary text-bg text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all"
        >
          Let's Talk
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-bright p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-40 md:hidden bg-bg flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-black tracking-tighter">SAYAK<span className="text-primary">.</span></span>
              <button onClick={() => setMobileOpen(false)} className="text-text-bright p-2">
                <HiX size={32} />
              </button>
            </div>
            
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-5xl font-black tracking-tighter text-text-bright hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-10">
                <Link
                  to="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-10 py-5 rounded-full bg-primary text-bg font-black uppercase tracking-widest"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
