import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const username = "jaymartimpas0-prog";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repositories.");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setRepos([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load projects right now.");
        setLoading(false);
      });
  }, [username]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>Jaymart Impas<span>.</span></h2>
        </div>
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
        <p className="greeting">WELCOME TO MY PORTFOLIO</p>
        <h1>Hi, I'm <span>Jaymart Impas</span></h1>
        <h3>Aspiring Web Developer & Tech Enthusiast</h3>
        <p className="bio-summary">
          Currently studying at the <strong>University of Cabuyao</strong>. I craft responsive web solutions, build dynamic applications, and continuously explore modern backend and frontend ecosystems.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn">
            View Projects
          </a>
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate technology student with a strong focus on building practical, full-stack web applications. My journey involves breaking down complex problems into clean, usable software solutions—ranging from database-driven management systems to interactive user interfaces.
          </p>
          <div className="education-box">
            <h3>Education</h3>
            <p><strong>University of Cabuyao</strong></p>
            <p>College of Computer Studies</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills-list">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript (ES6+)</span>
              <span>React</span>
              <span>Bootstrap</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend & DB</h3>
            <div className="skills-list">
              <span>PHP</span>
              <span>Laravel</span>
              <span>MySQL</span>
              <span>REST APIs</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools & Environment</h3>
            <div className="skills-list">
              <span>Git & GitHub</span>
              <span>XAMPP</span>
              <span>Postman</span>
              <span>Linux Basics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Real-time updates directly fetched from my GitHub account.</p>

        {loading && <p className="status-msg">Loading latest repositories...</p>}
        {error && <p className="status-msg error">{error}</p>}

        {!loading && !error && (
          <div className="projects-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="project-card">
                <div className="card-header">
                  <h3>{repo.name}</h3>
                  {repo.language && <span className="tech-badge">{repo.language}</span>}
                </div>
                <p>{repo.description || "No description provided for this repository."}</p>
                <div className="card-footer">
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo-link">
                    View Source Code &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations, project inquiries, or networking!</p>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          {formSubmitted && (
            <div className="alert-success">
              Thank you for reaching out! I'll get back to you soon.
            </div>
          )}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Jaymart Impas. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;