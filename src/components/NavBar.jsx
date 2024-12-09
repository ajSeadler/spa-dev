import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaGraduationCap,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const location = useLocation(); // Hook to get current path

  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = now.getHours() >= 12 ? "PM" : "AM";
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    updateTime(); // Call once to set immediately
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevOpen) => !prevOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      {/* Current Time Display */}
      <div className="time-display">{currentTime}</div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active-link" : ""}`}
          >
            <FaHome className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link ${isActive("/about") ? "active-link" : ""}`}
          >
            <FaUser className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "active-link" : ""}`}
          >
            <FaCode className="icon" />
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/education"
            className={`nav-link ${
              isActive("/education") ? "active-link" : ""
            }`}
          >
            <FaGraduationCap className="icon" />
            Education
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active-link" : ""}`}
          >
            <FaEnvelope className="icon" />
            Contact
          </Link>
        </li>
      </ul>

      {/* Action Buttons */}
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
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
      </div>

      {/* Mobile Menu Toggle */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Navbar;
