/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import { FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import About from "./About";

const Home = () => {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Olá",
    "नमस्ते",
    "안녕하세요",
    "你好",
  ];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingTimeout;
    let deleteTimeout;
    const currentGreeting = greetings[currentGreetingIndex];
    const typingSpeed = 150; // Speed at which text is typed
    const deletingSpeed = 75; // Speed at which text is deleted
    const pauseBetweenGreetings = 1500; // Pause between typing and deleting before switching

    if (isDeleting) {
      // Delete the text
      if (currentText.length > 0) {
        deleteTimeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        // After deleting, change greeting
        setIsDeleting(false);
        setCurrentGreetingIndex((prev) => (prev + 1) % greetings.length);
      }
    } else {
      // Type the text
      if (currentText.length < currentGreeting.length) {
        typingTimeout = setTimeout(() => {
          setCurrentText(currentGreeting.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // After typing is complete, pause before starting to delete
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetweenGreetings);
      }
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deleteTimeout);
    };
  }, [currentGreetingIndex, currentText, isDeleting, greetings]);

  // Function to handle smooth scroll to the About section
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1 className="greeting-animation">
            {currentText}, i'm<span className="highlight"> AJ</span>
          </h1>
          <p className="subtitle">Cybersecurity Enthusiast & Web Developer</p>
          <a href="#about" className="cta" onClick={handleLearnMoreClick}>
            Learn More <FaChevronDown className="cta-icon" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <About />
      </section>
    </>
  );
};

export default Home;
