/* eslint-disable react/no-unescaped-entities */
import { FaChevronDown } from "react-icons/fa";
import About from "./About";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hello, I'm <span className="highlight">AJ</span>
          </h1>
          <p className="subtitle">Cybersecurity Enthusiast & Web Developer</p>
          <a href="#about" className="cta">
            Learn More <FaChevronDown className="cta-icon" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <About />
      </section>
    </>
  );
};

export default Home;
