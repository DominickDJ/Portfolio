import React, { useState } from "react";
import "../Main/Main.css";
import aboutImage from "../../images/aboutImage.jpg";

const Main = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };
  const imageClassName = isSpinning ? "about__image spinning" : "about__image";

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
        <img
          className={imageClassName}
          src={aboutImage}
          alt="Author"
          onClick={handleImageClick}
        />
      </div>
    </section>
  );
};

export default Main;
