import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
