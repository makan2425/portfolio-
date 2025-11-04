import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">À Propos de Moi</h2>
      <div className="about-content">
        <p className="about-text">
          Étudiante en Master Systèmes d'Information et Génie Logiciel (SIGL) à l'ESATIC, 
          je suis passionnée par le développement d'applications web et l'automatisation de 
          processus métiers. J'ai eu l'opportunité de participer à l'ensemble du cycle de vie 
          de projets, de la rédaction du cahier des charges à la mise en œuvre de la solution finale.
        </p>
        <p className="about-text">
          Sérieuse, rigoureuse et dynamique, j'adopte une approche structurée et orientée résultats 
          dans chacune de mes missions. Mon expérience chez TAFI SA m'a permis de développer des 
          compétences solides en digitalisation de processus et en gestion de projet.
        </p>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-number">4+</div>
            <div className="stat-label">Projets Réalisés</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">2+</div>
            <div className="stat-label">Années d'Expérience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">10+</div>
            <div className="stat-label">Technologies Maîtrisées</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
