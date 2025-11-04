import React from 'react';
import { FaCode } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Bonjour, je suis <br/>
            <span className="highlight">Makan DIABATE</span>
          </h1>
          <p>Développeuse Full stack junior | Étudiante en Master SIGL à l'ESATIC</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Me Contacter
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('about')}>
              En savoir plus
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-circle">
            <FaCode size={120} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
