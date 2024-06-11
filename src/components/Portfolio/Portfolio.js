import React from "react";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Welcome to My Portfolio</h1>
      <Skills />
      <Projects />
      <Resume />
    </section>
  );
};

export default Portfolio;
