import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Manifesto from "../components/Manifesto";

const Home = () => {
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
