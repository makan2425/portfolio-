import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaProjectDiagram, FaSitemap, 
  FaStar, FaChartBar, FaSyncAlt, FaFileAlt, FaBook,
  FaLaptopCode, FaServer, FaDraftingCompass, FaTasks
} from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiPostgresql, SiSqlite, SiPowerbi } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend',
      icon: 'laptop',
      skills: [
        { name: 'HTML', icon: 'html', color: '#E34F26' },
        { name: 'CSS', icon: 'css', color: '#1572B6' },
        { name: 'JavaScript', icon: 'js', color: '#F7DF1E' },
        { name: 'React JS', icon: 'react', color: '#61DAFB' },
        { name: 'Next JS', icon: 'nextjs', color: '#000000' }
      ]
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Django', icon: 'django', color: '#092E20' },
        { name: 'Express.js', icon: 'node', color: '#339933' }
      ]
    },
    {
      title: 'Base de données',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
        { name: 'SQLite', icon: 'sqlite', color: '#003B57' }
      ]
    },
    {
      title: 'Conception',
      icon: 'drafting',
      skills: [
        { name: 'UML', icon: 'diagram', color: '#5C2D91' },
        { name: 'Merise', icon: 'sitemap', color: '#0078D4' },
        { name: 'StarUML', icon: 'star', color: '#FF6B00' }
      ]
    },
    {
      title: 'Business Intelligence',
      icon: 'chart',
      skills: [
        { name: 'Power BI', icon: 'powerbi', color: '#F2C811' }
      ]
    },
    {
      title: 'Méthodologie',
      icon: 'tasks',
      skills: [
        { name: 'Agile/Scrum', icon: 'sync', color: '#0052CC' },
        { name: 'Cahiers des charges', icon: 'file', color: '#2C3E50' },
        { name: 'Documentation', icon: 'book', color: '#16A085' }
      ]
    }
  ];

  const getIcon = (iconName, color) => {
    const iconProps = { style: { color }, size: 40 };
    
    switch(iconName) {
      case 'html': return <FaHtml5 {...iconProps} />;
      case 'css': return <FaCss3Alt {...iconProps} />;
      case 'js': return <FaJs {...iconProps} />;
      case 'react': return <FaReact {...iconProps} />;
      case 'nextjs': return <SiNextdotjs {...iconProps} />;
      case 'django': return <SiDjango {...iconProps} />;
      case 'node': return <FaNodeJs {...iconProps} />;
      case 'postgresql': return <SiPostgresql {...iconProps} />;
      case 'sqlite': return <SiSqlite {...iconProps} />;
      case 'diagram': return <FaProjectDiagram {...iconProps} />;
      case 'sitemap': return <FaSitemap {...iconProps} />;
      case 'star': return <FaStar {...iconProps} />;
      case 'powerbi': return <SiPowerbi {...iconProps} />;
      case 'sync': return <FaSyncAlt {...iconProps} />;
      case 'file': return <FaFileAlt {...iconProps} />;
      case 'book': return <FaBook {...iconProps} />;
      case 'laptop': return <FaLaptopCode size={24} />;
      case 'server': return <FaServer size={24} />;
      case 'database': return <FaDatabase size={24} />;
      case 'drafting': return <FaDraftingCompass size={24} />;
      case 'chart': return <FaChartBar size={24} />;
      case 'tasks': return <FaTasks size={24} />;
      default: return null;
    }
  };

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Compétences Techniques</h2>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>
              {getIcon(category.icon, '#333')} {category.title}
            </h3>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {getIcon(skill.icon, skill.color)}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
