import React from "react";
import resumeFile from "../../assets/Resume.png";
import "../Resume/Resume.css";

const Resume = () => {
  // ...

  return (
    <section id="resume">
      {/* ... */}
      <div className="resume__section">
        <h2 className="resume__title">Resume</h2>
        <div>
          <img className="resume" src={resumeFile} alt="Resume" />
        </div>
      </div>
      {/* ... */}
    </section>
  );
};

export default Resume;
