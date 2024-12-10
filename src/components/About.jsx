/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Heading */}
        <h2 className="about-heading">
          About <span className="highlight">Me</span>
        </h2>

        {/* Description */}
        <p className="about-description">
          My name is Anthony Seadler, though most people call me AJ. I'm a
          full-stack developer with a Web Development certificate from the
          University of Oklahoma and Fullstack Academy. Currently, I’m pursuing
          a Bachelor of Science in Cybersecurity at Southern Nazarene
          University, combining my development experience with a strong focus on
          security.
        </p>

        <p className="about-description">
          Below you can find some more information about me and the tech I
          develop with, along with some real world skills I posess!
        </p>

        {/* Programming Languages */}
        <div className="about-languages">
          <h3 className="languages-heading">Tech Stack</h3>
          <ul className="languages-list">
            <li>
              <FaJsSquare
                className="language-icon"
                title="JavaScript"
                style={{ color: "#F7DF1E" }}
              />
            </li>
            <li>
              <SiTypescript
                className="language-icon"
                title="TypeScript"
                style={{ color: "#007ACC" }}
              />
            </li>
            <li>
              <FaHtml5
                className="language-icon"
                title="HTML5"
                style={{ color: "#E34F26" }}
              />
            </li>
            <li>
              <FaCss3Alt
                className="language-icon"
                title="CSS3"
                style={{ color: "#1572B6" }}
              />
            </li>
            <li>
              <FaReact
                className="language-icon"
                title="React.js"
                style={{ color: "#61DAFB" }}
              />
            </li>
            <li>
              <FaNodeJs
                className="language-icon"
                title="Node.js"
                style={{ color: "#339933" }}
              />
            </li>
            <li>
              <FaDatabase
                className="language-icon"
                title="PostgreSQL"
                style={{ color: "#336791" }}
              />
            </li>
            <li>
              <FaPython
                className="language-icon"
                title="Python"
                style={{ color: "#3776AB" }}
              />
            </li>
            <li>
              <FaVuejs
                className="language-icon"
                title="Vue.js"
                style={{ color: "#42B883" }}
              />
            </li>
          </ul>
        </div>

        {/* Core Skills */}
        <div className="about-skills">
          <h3 className="skills-heading">Core Skills</h3>
          <ul className="skills-list">
            <li>Full-stack Development</li>
            <li>Scripting</li>
            <li>Intrusion Detection</li>
            <li>Linux OS</li>
            <li>Windows Admin</li>
            <li>Mac OS</li>
            <li>Problem Solving</li>
            <li>Debugging</li>
          </ul>
        </div>

        {/* Call-to-Action */}
        <div className="about-cta">
          <Link to="/projects" className="about-cta-button">
            Take a Look at My Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
