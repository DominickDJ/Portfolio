import React from "react";
import "../Projects/Projects.css";
import news from "../../images/news.png";
import portfolio from "../../images/portfolio.png";
import usaapp from "../../images/usapp.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Around the US",
      githubLink: "https://dominickdj.github.io/se_project_aroundtheus/",
      thumbnail: usaapp,
    },
    {
      id: 2,
      title: "News Search App",
      githubLink: "https://dominickdj.github.io/Dominick_Frontend/",
      thumbnail: news,
    },
    {
      id: 3,
      title: "Portfolio Code",
      githubLink: "https://github.com/DominickDJ/Portfolio",
      thumbnail: portfolio,
    },
  ];

  return (
    <section id="projects" className="center">
      <h1 className="project__title">PROJECTS</h1>
      <div className="project-thumbnails">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <div
              className="project-thumbnail"
              style={{
                backgroundImage: `url(${project.thumbnail})`,
              }}
            ></div>
            <h3>{project.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
