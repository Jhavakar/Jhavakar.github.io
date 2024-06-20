import React from 'react';
import { skills } from '../Utils/SkillsData';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <div id="skills">
      <h2>Technical <span className="themeText">Skills</span></h2>
      <div className="skills-section">
        <div className="category">
          <h3>Front<span className="themeText">end</span></h3>
          <div className="skills-grid">
            {skills.filter((el) => el.tag === "frontend").map(skill => (
              <div key={skill.id} className="skill">
                <img src={skill.icon} alt={`${skill.title} icon`} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <h3>Back<span className="themeText">end</span></h3>
          <div className="skills-grid">
            {skills.filter((el) => el.tag === "backend").map(skill => (
              <div key={skill.id} className="skill">
                <img src={skill.icon} alt={`${skill.title} icon`} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="category">
          <h3>Platforms <span className="themeText">& Tools</span></h3>
          <div className="skills-grid">
            {skills.filter((el) => el.tag === "platform" || el.tag === "design").map(skill => (
              <div key={skill.id} className="skill">
                <img src={skill.icon} alt={`${skill.title} icon`} />
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
