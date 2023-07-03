import React from 'react';
import '../styles/Projects.css';
import auctionhub from '../assets/auction-hub.png'
import codelab from '../assets/codelab.png'

const Projects = () => {
  const projects = [
    {
      title: 'AuctionHub',
      description: 'Designed and implemented a dynamic auction system with robust bidding functionality and smooth interactions.',
      imageUrl: auctionhub,
      liveUrl: 'https://auction-hub.vercel.app/',
      githubUrl: 'https://github.com/sharmas07/AuctionHub',
    },
    {
      title: 'CodeLab',
      description: 'Created and developed an interactive code lab platform empowering students to solve coding problems and practice their skills effectively.',
      imageUrl: codelab,
      liveUrl: 'https://gatescodelab.vercel.app/',
      githubUrl: 'https://github.com/sharmas07/GIT-HACKATHON',
    },
  
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
