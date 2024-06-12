import React from "react";
import resumeFile from "../../assets/Resume.png";
import "../Resume/Resume.css";

const Resume = () => {
  // ...

  return (
    <section id="resume" className="resume__container">
      <div className="resume__section">
        <h1 className="resume__title">RESUME</h1>
        <div className="resume__image-container">
          <img className="resume__image" src={resumeFile} alt="Resume" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
