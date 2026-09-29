import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Palitan mo ng GitHub username mo
  const username = "jaymartimpas0-prog";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Jaymart Impas</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <p>HELLO, I'M</p>
        <h1>Jaymart Impas</h1>
        <h3>Student in University of Cabuyao</h3>
        <p>I build web applications and learn new technologies.</p>

        <div className="hero-btns">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            className="btn-outline"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a student passionate about web development, programming, and
          creating useful apps.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>My GitHub Projects</h2>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="projects-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{repo.description || "No description added."}</p>
                <small>{repo.language}</small>
                <br />
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  View Repo
                </a>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Check out my work on GitHub or reach out!</p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          className="btn"
        >
          Visit GitHub
        </a>
      </section>
    </div>
  );
}

export default App;
