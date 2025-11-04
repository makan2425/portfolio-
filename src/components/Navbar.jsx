import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ scrollToSection, activeSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">MD</div>
        <ul className="nav-links">
          <li>
            <a 
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              À propos
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Compétences
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Expériences
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('education')}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Formation
            </a>
          </li>
          <li>
            <a 
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
