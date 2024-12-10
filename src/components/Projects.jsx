import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Skate Tracker",
    description:
      "A social app for skateboarders to track tricks, earn points, and share photos or videos of their tricks with the community.",
    link: "#",
    repo: "https://github.com/example/portfolio-website",
    image: "/skate-tracker.png",
    techStack: ["React.js", "Postgres", "Express.js", "Node.js"],
  },
  {
    title: "Circle of Fifths Viewer",
    description:
      "An interactive Circle of Fifths tool to explore musical key relationships, view notation, and discover chords for each scale.",
    link: "#",
    repo: "https://github.com/example/e-commerce-app",
    image: "/cof.png",
    techStack: ["React.js", "VexFlow", "JavaScript", "CSS", "Node.js"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with end-to-end encryption.",
    link: "#",
    repo: "https://github.com/example/chat-application",
    image: "/ds-site.png",
    techStack: ["Socket.IO", "Express", "React"],
  },
];

const Projects = () => {
  return (
    <>
      <section className="projects">
        <div className="projects-container">
          <h2 className="projects-heading">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                  >
                    <h3 className="project-title">
                      {project.title}{" "}
                      <span className="project-link-icon">
                        <FaExternalLinkAlt />
                      </span>
                    </h3>
                  </a>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-repo-link"
                    >
                      <FaGithub className="icon" />
                    </a>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-demo-link"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <h2 className="cta-heading">Let’s Collaborate</h2>
        <p className="cta-description">
          Interested in working together or learning more about my journey? Feel
          free to reach out!
        </p>
        <div className="button-group">
          <a href="/resume.pdf" className="cta-button">
            View My Github
          </a>
          <a href="https://linkedin.com/in/yourprofile" className="cta-button">
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
