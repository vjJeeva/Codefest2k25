import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
  const [text, setText] = useState("Registration Open");
  const [isActive, setIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle registration button text
  const toggleRegistration = () => {
    setText(text === "Registration Open" ? "Registration Closed" : "Registration Open");
  };

  // Toggle mobile navigation menu
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scrolling to sections
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

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("home")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#events" onClick={() => scrollToSection("events")}>Events</a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>

        </nav>

        {/* Registration Button */}
        <button className="register-btn" onClick={toggleRegistration}>{text}</button>

        {/* Mobile Menu Toggle Button */}
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
