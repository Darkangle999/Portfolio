import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="container">
      <header>
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="about">
        <h2>About Me</h2>
        <p>Write a brief introduction about yourself here.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        <p>GitHub: github.com/yourusername</p>
      </section>
    </div>
  );
};

export default Portfolio;