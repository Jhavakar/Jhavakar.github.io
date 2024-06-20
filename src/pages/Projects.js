import React from 'react';
import './Projects.css';
import { projects } from '../Utils/ProjectsData';

const Projects = () => {
  const scrollLeft = () => {
    console.log('Scrolling Left');
    const grid = document.getElementById('projects-grid');
    if (grid) {
      grid.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    console.log('Scrolling Right');
    const grid = document.getElementById('projects-grid');
    if (grid) {
      grid.scrollLeft += 300;
    }
  };

  return (
    <section className="projects">
      <div className="container">
        <h2 className="title">Featured <span className="themeText">Projects</span></h2>
        <div className="projects-grid-wrapper">
          <button className="nav-arrow left" onClick={scrollLeft}>&lt;</button>
          <div className="projects-grid" id="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="category">{project.category}</span>
                  <p className="tech-stack">Tech Stacks: {project.techStack}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-links">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="code-base">
                      <i className="fab fa-github"></i> Code Base
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-arrow right" onClick={scrollRight}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
