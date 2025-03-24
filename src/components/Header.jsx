import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
  const [text, setText] = useState("Registration");
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog", "_blank");
  };

  
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content container d-flex justify-content-between align-items-center">
        <h3 className="logo">CODEFEST 2K25</h3>

       
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#events" onClick={() => scrollToSection("events")}>Events</a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>

        </nav>

      
        <button className="register-btn" onClick={handleRegister}>{text}</button>

        
        <div className="menu-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
