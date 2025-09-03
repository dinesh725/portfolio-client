// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { BrightnessProvider } from "./context/BrightnessContext";
import Header from "./Component/Header";
import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import HomeFooter from "./Component/HomeFooter";
import BrightnessControl from "./Component/BrightnessControl";
import Portfolio from "./Component/Portfolio/Portfolio";
import AnimatedBackground from "./Component/AnimatedBackground/AnimatedBackground";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <BrightnessProvider>
          <Router>
            <div className="App">
              <AnimatedBackground />
              <Header />
              <BrightnessControl />
              <Routes>
                <Route path="/" element={<><Home /><HomeFooter /></>} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/education" element={<Education />} />
                <Route path="/portfolio/*" element={<Portfolio />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </BrightnessProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
