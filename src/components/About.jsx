import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="intro">
        I'm a dedicated <strong>Full Stack Developer</strong> with <strong>4+ years of experience</strong> crafting dynamic, scalable, and high-performance web and mobile applications. I enjoy solving real-world problems through clean code and thoughtful UI/UX.
      </p>

      

      <div className="skills">
        <h3>Core Skills</h3>
        <ul>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>TypeScript</li>
          <li>C++</li>
        </ul>
      </div>

     

      <div className="personal-note">
        <p>
          I believe in continuous learning, teamwork, and creating value through technology. Let's collaborate and build impactful digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;

