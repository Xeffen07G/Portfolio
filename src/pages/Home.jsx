import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Manifesto from "../components/Manifesto";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Manifesto />
    </div>
  );
};

export default Home;
