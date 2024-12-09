import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}
        <ul className="footer-nav">
          <li>
            <Link to="/" className="footer-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="footer-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="footer-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="footer-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} AJ Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
