import React from "react";
import "../Main/Main.css";
const Main = () => {
  return (
    <section id="main">
      <div className="intro">
        <div className="intro-content">
          <h1 className="intro-heading">Welcome!</h1>
          <p className="intro-text">
            Hello! I'm Dominick Harper, a Full Stack Software Engineer. I
            specialize in MERN (MongoDB, Express.js, React.js, Node.js). Feel
            free to explore my work and get in touch with me!
          </p>
        </div>
        <div className="intro-vortex"></div>
      </div>
    </section>
  );
};

export default Main;
