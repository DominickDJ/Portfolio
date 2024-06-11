import React from "react";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import "../Portfolio/Portfolio.css";

const Portfolio = () => {
  const title = "Welcome To My Portfolio";

  return (
    <section id="portfolio">
      <h1 className="welcome">
        {title.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word.split("").map((letter, letterIndex) => (
              <span
                key={letterIndex}
                style={{ "--index": letterIndex }}
                className={letter === letter.toUpperCase() ? "uppercase" : ""}
              >
                {letter}
              </span>
            ))}
            {index !== title.split(" ").length - 1 && <span>&nbsp;</span>}
          </React.Fragment>
        ))}
      </h1>
      <Skills />
      <Projects />
      <Resume />
    </section>
  );
};

export default Portfolio;
