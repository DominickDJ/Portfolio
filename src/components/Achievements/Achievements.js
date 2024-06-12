import React from "react";
import certImage from "../../images/Cert.png";
import javascript from "../../images/javascript.png";
import "../Achievements/Achievements.css";

const Achievements = () => {
  const certifications = [
    {
      id: 1,
      title: "Software Engineering Program",
      organization: "TripleTen",
      date: "January 2024",
      src: certImage,
    },
    {
      id: 2,
      title: "Javascript Technical Interview Assessment",
      organization: "TripleTen",
      date: "March 2024",
      src: javascript,
    },
  ];

  return (
    <section id="achievements">
      <h2 className="achievements__title">Achievements</h2>
      <div className="certifications">
        {certifications.map((certification) => (
          <div key={certification.id} className="certification">
            <h3>{certification.title}</h3>
            <img
              className="images"
              src={certification.src}
              alt={certification.title}
            />
            <p>{certification.organization}</p>
            <p>{certification.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
