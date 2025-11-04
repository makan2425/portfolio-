import React from 'react';
import { experiencesData } from '../data/experiences';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Expériences Professionnelles</h2>
      <div className="timeline">
        {experiencesData.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-company">{exp.company} - {exp.location}</div>
              <div className="timeline-description">
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
