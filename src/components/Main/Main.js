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
        <div className="text-container">
          <h1 className="intro-heading">Welcome!</h1>
          <p className="intro-text">
            Hello! I'm Dominick Harper, a Full Stack Software Engineer, devout
            believer in Jesus Christ and father to 3 beautiful children. I
            specialize in MERN development (MongoDB, Express.js, React.js,
            Node.js) and I'm always open to learn new languages and skills! Feel
            free to explore my Portfolio and don't hesitate to get in touch with
            me!
          </p>
        </div>
        <div className="image-container">
          <img
            className={imageClassName}
            src={aboutImage}
            alt="Author"
            onClick={handleImageClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
