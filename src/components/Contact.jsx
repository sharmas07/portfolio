import React from 'react';
import { RiLinkedinBoxFill, RiGithubFill, RiCodepenFill } from 'react-icons/ri';
import '../styles/Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email)
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">Get in touch with me</p>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        {/* <div className="social-links">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinBoxFill className="social-icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <RiGithubFill className="social-icon" />
          </a>
          <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
            <RiCodepenFill className="social-icon" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
