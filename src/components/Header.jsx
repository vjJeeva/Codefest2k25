import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
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
    <div className="header-container">
      <div className="header-content">
        <div className="logo" data-text="CODEFEST 2K25">
          CODEFEST 2K25
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#events" onClick={() => scrollToSection("events")}>Events</a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>
        </nav>

        <button
          className="register-btn"
          onClick={() => window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank")}
        >
          Register
        </button>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;