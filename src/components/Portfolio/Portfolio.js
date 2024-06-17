import React, { useState, useEffect } from "react";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import "../Portfolio/Portfolio.css";
import Achievements from "../Achievements/Achievements";

const Portfolio = () => {
  const title = "Welcome To My Portfolio!";
  const [typedTitle, setTypedTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 125;
  const deletionSpeed = 30;
  const repetitionPause = 5000;
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const typeCharacter = () => {
      if (!isDeleting) {
        if (currentIndex <= title.length) {
          setTypedTitle(title.slice(0, currentIndex + 1));
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true);
          setTimeout(() => setIsDeleting(false), repetitionPause);
        }
      } else {
        if (currentIndex >= 0) {
          setTypedTitle(title.slice(0, currentIndex));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsAnimationComplete(true);
        }
      }
    };

    const timer = setTimeout(
      typeCharacter,
      isDeleting ? deletionSpeed : typingSpeed
    );

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentIndex,
    isDeleting,
    title,
    typingSpeed,
    deletionSpeed,
    repetitionPause,
  ]);

  useEffect(() => {
    if (isAnimationComplete) {
      const hideContent = setTimeout(() => {
        setTypedTitle("");
      }, 5000); // Add a 2-second delay before hiding the content

      return () => {
        clearTimeout(hideContent);
      };
    }
  }, [isAnimationComplete]);

  if (isAnimationComplete) {
    return (
      <section id="portfolio">
        <Skills />
        <Projects />
        <Achievements />
        <Resume />
      </section>
    );
  }

  return (
    <section id="portfolio">
      <h1 className="welcome">{typedTitle}</h1>
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
    </section>
  );
};

export default Portfolio;
