import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Netflix Clone",
    tech: "React + Firebase",
    description: "A complete Netflix UI clone with user auth and media content.",
  },
  {
    title: "E-commerce Platform",
    tech: "MERN Stack",
    description: "Responsive F-commerce platform with cart, payment, and admin dashboard.",
  },
  {
    title: "Chat App",
    tech: "Next.js + MongoDB",
    description: "Real-time chat app with Prisma and JWT auth.",
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <div className="card" key={idx}>
            <h3>{proj.title}</h3>
            <span>{proj.tech}</span>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
