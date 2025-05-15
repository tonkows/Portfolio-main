import React, { useState } from "react";
import "./project.css";
import projects from "./Data"; // Importing project data
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

// Function to return appropriate icons for each tech stack
const getTechIcon = (tech) => {
  switch (tech) {
    case "HTML":
      return (
        <i className="fa-brands fa-html5" style={{ color: "#e34c26" }}></i>
      ); // Icon for HTML5
    case "python":
      return (
        <i className="fa-brands fa-python" style={{ color: "#65c9ff" }}></i>
      ); // Icon for python
    case "CSS":
      return (
        <i className="fa-brands fa-css3-alt" style={{ color: "#264de4" }}></i>
      ); // Icon for CSS3
    case "JavaScript":
      return <i className="fa-brands fa-js" style={{ color: "#f0db4f" }}></i>; // Icon for JavaScript
    case "React":
      return (
        <i className="fa-brands fa-react" style={{ color: "#61dafb" }}></i>
      ); // Icon for React
    case "Node.js":
      return <i className="fa-brands fa-node" style={{ color: "#68a063" }}></i>; // Icon for Node.js
    default:
      return <i className="" style={{ color: "#000" }}></i>; // Default icon for other tech
  }
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Show only 3 items initially
  const [isExpanded, setIsExpanded] = useState(false); // Track if more items are shown

  const showMoreItems = () => {
    setVisibleCount(projects.length); // Show all items
    setIsExpanded(true); // Mark as expanded
  };

  const showLessItems = () => {
    setVisibleCount(3); // Show only 3 items
    setIsExpanded(false); // Mark as collapsed
  };

  return (
    <section className="resume container section" id="Project">
      <h2 className="section__title">Projects</h2>

      <div className="projects-container">
        {projects.slice(0, visibleCount).map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span className="tech-item" key={index}>
                    {getTechIcon(tech)}{" "}
                    {/* Display the icon based on the tech */}
                    <span style={{ marginLeft: "8px" }}>{tech}</span>{" "}
                    {/* Show the name next to the icon */}
                  </span>
                ))}
              </div>
              {(project.demoLink || project.githubLink) && (
                <div className="project-buttons">
                  {project.demoLink && (
                    <button className="demo-btn">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </button>
                  )}
                  {project.githubLink && (
                    <button className="github-btn">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i
                          className="fa-brands fa-github"
                          style={{ marginRight: "8px" }}
                        ></i>
                        {""}
                        github
                      </a>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Show More or Show Less Button */}
      {!isExpanded ? (
        <button className="show-more-btn" onClick={showMoreItems}>
          Show More
        </button>
      ) : (
        <button className="show-less-btn" onClick={showLessItems}>
          Show Less
        </button>
      )}
    </section>
  );
};

export default Projects;
