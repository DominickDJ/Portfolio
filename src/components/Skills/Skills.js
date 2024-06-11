import React from "react";
import "../Skills/Skills.css";
import babelImage from "../../images/babel.svg";
import htmlImage from "../../images/html.svg";
import cssImage from "../../images/css.svg";
import expressImage from "../../images/express.svg";
import figmaImage from "../../images/figma.svg";
import gitImage from "../../images/git.svg";
import githubImage from "../../images/github.svg";
import googleCloudImage from "../../images/googleCloud.svg";
import javascriptImage from "../../images/javascript.svg";
import mongoDBImage from "../../images/mongoDB.svg";
import nodeImage from "../../images/node.svg";
import reactImage from "../../images/React.svg";
import webpackImage from "../../images/webpack.svg";

const Skills = () => {
  return (
    <div className="skill__section">
      <h1 className="skill__title">Skills & Languages</h1>
      <div className="skills-container">
        <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">
          <img src={babelImage} alt="Babel logo" className="skill" />
        </a>
        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={htmlImage} alt="HTML logo" className="skill" />
        </a>
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cssImage} alt="CSS logo" className="skill" />
        </a>
        <a
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={expressImage} alt="Express logo" className="skill" />
        </a>
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={figmaImage} alt="Figma logo" className="skill" />
        </a>
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitImage} alt="Git logo" className="skill" />
        </a>
        <a
          href="https://github.com/DominickDJ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubImage} alt="GitHub logo" className="skill" />
        </a>
        <a
          href="https://cloud.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={googleCloudImage}
            alt="Google Cloud logo"
            className="skill"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={javascriptImage} alt="JavaScript logo" className="skill" />
        </a>
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mongoDBImage} alt="MongoDB logo" className="skill" />
        </a>
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <img src={nodeImage} alt="Node.js logo" className="skill" />
        </a>
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={reactImage} alt="React logo" className="skill" />
        </a>
        <a
          href="https://webpack.js.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={webpackImage} alt="Webpack logo" className="skill" />
        </a>
      </div>
    </div>
  );
};

export default Skills;
