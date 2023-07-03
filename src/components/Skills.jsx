import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { SiNodedotjs, SiMongodb, SiGithub,SiCplusplus,SiMysql } from 'react-icons/si';

import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Git', icon: <SiGithub /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'MySQL', icon: <SiMysql /> },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
