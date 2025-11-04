import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contactez-Moi</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h4>Email</h4>
              <p><a href="mailto:diabatemakan37@gmail.com">diabatemakan37@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h4>Téléphone</h4>
              <p><a href="tel:+2250576503574">05 76 50 35 74</a></p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h4>Localisation</h4>
              <p>Abobo, Abidjan<br/>Côte d'Ivoire</p>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="https://linkedin.com/in/makan-diabate" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/makan2425" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="mailto:diabatemakan37@gmail.com" className="social-link">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
