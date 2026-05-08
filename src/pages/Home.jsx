import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Manifesto from "../components/Manifesto";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Certifications />
      <Manifesto />
    </div>
  );
};

export default Home;
