import { FaGithub } from "react-icons/fa"; // Import the GitHub icon

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio showcasing my skills and projects.",
    link: "#",
    repo: "https://github.com/example/portfolio-website",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2W8wrVTKVr-mVXiIXT1Yz-gBJPAw820q0Q&s",
    techStack: ["React", "CSS", "JavaScript"],
  },
  {
    title: "E-Commerce App",
    description:
      "A modern, secure, and fully responsive e-commerce application.",
    link: "#",
    repo: "https://github.com/example/e-commerce-app",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2W8wrVTKVr-mVXiIXT1Yz-gBJPAw820q0Q&s",
    techStack: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with end-to-end encryption.",
    link: "#",
    repo: "https://github.com/example/chat-application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2W8wrVTKVr-mVXiIXT1Yz-gBJPAw820q0Q&s",
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
                      <span className="project-link-icon">↗</span>
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
        <h2>Let’s Collaborate</h2>
        <p>
          Interested in working together or learning more about my journey? Feel
          free to reach out!
        </p>
        <a href="/resume.pdf" className="cta-button">
          View My Github
        </a>
        <a href="https://linkedin.com/in/yourprofile" className="cta-button">
          Connect on LinkedIn
        </a>
      </section>
    </>
  );
};

export default Projects;
