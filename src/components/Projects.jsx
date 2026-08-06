import React from 'react';
import ProjectCase from './ProjectCase';
import { projectsData } from '../data/projects';

const Projects = () => {
  const wellnessProject = projectsData.find((project) => project.id === 'app-bien-etre');

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
