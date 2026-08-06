import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava,
  FaDatabase, FaProjectDiagram, FaSitemap, FaStar, FaChartBar,
  FaSyncAlt, FaFileAlt, FaBook, FaLaptopCode, FaServer,
  FaDraftingCompass, FaTasks, FaGithub, FaGitlab, FaFigma,
  FaJira, FaTrello, FaFileWord, FaFilePowerpoint, FaAngular
} from 'react-icons/fa';
import { SiDjango, SiNextdotjs, SiPostgresql, SiSqlite, SiPowerbi, SiSpringboot, SiRedis } from 'react-icons/si';
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
        { name: 'Angular', icon: 'angular', color: '#DD0031' },
        { name: 'Next JS', icon: 'nextjs', color: '#000000' }
      ]
    },
    {
      title: 'Backend',
      icon: 'server',
      skills: [
        { name: 'Django', icon: 'django', color: '#092E20' },
        { name: 'Node.js', icon: 'node', color: '#339933' },
        { name: 'Java', icon: 'java', color: '#007396' },
        { name: 'Spring Boot', icon: 'springboot', color: '#6DB33F' },
        { name: 'API REST', icon: 'rest', color: '#5F6F81' }
      ]
    },
    {
      title: 'Base de données',
      icon: 'database',
      skills: [
        { name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1' },
        { name: 'SQLite', icon: 'sqlite', color: '#003B57' },
        { name: 'Redis', icon: 'redis', color: '#DC382D' }
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
      title: 'Outils collaboratifs & Gestion',
      icon: 'chart',
      skills: [
        { name: 'Power BI', icon: 'powerbi', color: '#F2C811' },
        { name: 'GitHub', icon: 'github', color: '#181717' },
        { name: 'GitLab', icon: 'gitlab', color: '#FC6D26' },
        { name: 'Figma', icon: 'figma', color: '#F24E1E' },
        { name: 'Jira', icon: 'jira', color: '#0052CC' },
        { name: 'Trello', icon: 'trello', color: '#0052CC' }
      ]
    },
    {
      title: 'Méthodologie & Bureautiques',
      icon: 'tasks',
      skills: [
        { name: 'Agile/Scrum', icon: 'sync', color: '#0052CC' },
        { name: 'Word', icon: 'word', color: '#2B579A' },
        { name: 'PowerPoint', icon: 'ppt', color: '#D24726' }
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
      case 'angular': return <FaAngular {...iconProps} />;
      case 'nextjs': return <SiNextdotjs {...iconProps} />;
      case 'django': return <SiDjango {...iconProps} />;
      case 'node': return <FaNodeJs {...iconProps} />;
      case 'java': return <FaJava {...iconProps} />;
      case 'springboot': return <SiSpringboot {...iconProps} />;
      case 'rest': return <FaServer {...iconProps} />;
      case 'postgresql': return <SiPostgresql {...iconProps} />;
      case 'sqlite': return <SiSqlite {...iconProps} />;
      case 'redis': return <SiRedis {...iconProps} />;
      case 'diagram': return <FaProjectDiagram {...iconProps} />;
      case 'sitemap': return <FaSitemap {...iconProps} />;
      case 'star': return <FaStar {...iconProps} />;
      case 'powerbi': return <SiPowerbi {...iconProps} />;
      case 'github': return <FaGithub {...iconProps} />;
      case 'gitlab': return <FaGitlab {...iconProps} />;
      case 'figma': return <FaFigma {...iconProps} />;
      case 'jira': return <FaJira {...iconProps} />;
      case 'trello': return <FaTrello {...iconProps} />;
      case 'sync': return <FaSyncAlt {...iconProps} />;
      case 'file': return <FaFileAlt {...iconProps} />;
      case 'book': return <FaBook {...iconProps} />;
      case 'word': return <FaFileWord {...iconProps} />;
      case 'ppt': return <FaFilePowerpoint {...iconProps} />;
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
