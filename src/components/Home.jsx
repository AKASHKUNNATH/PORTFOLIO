import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="overlay">
        <div className="home-container">
          <div className="home-text">
            <h1>Hi, I'm Akash</h1>
            <p className="role">Full Stack Developer</p>
            <p className="description">
              Passionate about building scalable web applications and delivering delightful user experiences.
            </p>
            <a href="#projects" className="btn">View My Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

