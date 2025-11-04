import React from 'react';
import { FaAward } from 'react-icons/fa';
import { educationData, certificationsData } from '../data/education';
import '../styles/Education.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Formation Académique</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <div className="education-date">{edu.date}</div>
            <div className="education-school">{edu.school}</div>
            <p style={{color: '#666', marginTop: '0.5rem'}}>{edu.location}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{marginTop: '5rem'}}>Certifications</h2>
      <div className="cert-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-icon">
              <FaAward />
            </div>
            <h3>{cert.title}</h3>
            <div className="cert-date">{cert.date}</div>
            <div className="cert-org">{cert.organization}</div>
            <p style={{color: '#666', marginTop: '0.5rem', fontSize: '0.9rem'}}>
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
