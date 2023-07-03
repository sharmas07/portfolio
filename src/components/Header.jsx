import React, { useState } from 'react';
import hamBtn from '../assets/hamburger-btn.png';
import '../styles/Header.css';


const Header = ({showSidebar, setShowSidebar}) => {
 
  
    return (
      <header className="header">
        <nav className={`navbar`}>
          <div className="logo">
            <h1 className='namelogo'>SHARMAS</h1>
          </div>
          <div className={`nav-links`}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={`hamburger`}  onClick={()=>setShowSidebar(!showSidebar)}>
            <img style={{width:'35px'}} src={hamBtn} alt="" />
          </div>
        </nav>
      </header>
    );
  };
  


export default Header;
