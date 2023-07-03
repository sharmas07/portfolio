import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/Header.css";
import { useState, useEffect } from "react";
import close from "./assets/close.png";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        // ESC key pressed
        setShowSidebar(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);
  return (
    <>
      <div
        className={`sidebar ${showSidebar ? "sidebar-show" : "sidebar-hide"}`}
      >
        <div className="SidebarObject">
          <div onClick={() => setShowSidebar(!showSidebar)}>
            <img style={{ width: "35px", position:'absolute', top:'1.3rem', right:'1.3rem' }} className="close" src={close} />
          </div>
          <nav className={`navbar`}>
            <div className={`nav-links-mobile`}>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </div>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
