import React from 'react';
import '../styles/Hero.css';
import profileMob from '../assets/profile-mob.jpg'
import profileDes from '../assets/profile-des.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className='hero-text text'>
          <h1 className="profession">
            I am a Full stack developer
          </h1>
          </div>
          <a href="/resume.pdf" download className="resume-button">
            Download Resume
          </a>
        </div>
        <div className="hero-image">
          <img className='desktop-profile' src={profileDes} alt="Profile" />
          <img className='mobile-profile' src={profileMob} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
