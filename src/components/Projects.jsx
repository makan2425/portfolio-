import React from 'react';
import ProjectCase from './ProjectCase';
import { projectsData } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">Projets</h2>
      <div className="projects-list">
        {projectsData.map((project) => (
          <ProjectCase key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
