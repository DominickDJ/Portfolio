import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Full Stack App",
      githubLink: "https://github.com/DominickDJ/se_project_react",
    },
    {
      id: 2,
      title: "Final Project",
      githubLink: "https://dominickdj.github.io/Dominick_Frontend/",
    },
    // Add more projects here
  ];

  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Summary of your skills, desires, and future plans</p>
      <div className="project-thumbnails">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-thumbnail">
              <h3>{project.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
