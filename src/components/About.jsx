import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">À Propos de Moi</h2>
      <div className="about-content">
        <p className="about-text">
          Titulaire d'un Master Systèmes d'Information et Génie Logiciel (SIGL), je conçois des applications web et mobiles fi ables et performantes.Rigoureuse et passionnée par le génie logiciel, je souhaite mettre mes compétences au service de vos projets numériques tout en continuant d'apprendre au sein de votre équipe.
        </p>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">3+</div>
            <div className="stat-label">Projets Réalisés</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Années d'Expérience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Technologies Maîtrisées</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
