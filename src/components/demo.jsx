import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog", "_blank");
  };

  const handleNavigation = (sectionId) => {
    // If we're already on home page
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
        return;
      }
    }
    // If on another page, navigate to home first
    navigate("/", { state: { scrollTo: sectionId } });
    setIsMenuOpen(false);
  };

  // Scroll to section after home page loads
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <header className="header-container">
      <div className="header-content container d-flex justify-content-between align-items-center">
        <h3 className="logo">CODEFEST 2K25</h3>

       
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigation("home"); }}>
            Home
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); handleNavigation("about"); }}>
            About
          </a>
          <a href="#events" onClick={(e) => { e.preventDefault(); handleNavigation("events"); }}>
            Events
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavigation("contact"); }}>
            Contact
          </a>
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