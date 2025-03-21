import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Header.css";

const Header = () => {
  const [text, setText] = useState("Registration Open");
  const [isActive, setIsActive] = useState(false);

  const toggleRegistration = () => {
    setText(text === "Registration Open" ? "Registration Closed" : "Registration Open");
  };

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header-container">
      <div className="header-content container d-flex justify-content-between align-items-center">
        <h3 className="logo">CODEFEST 2K25</h3>
        <div className={`nav-menu ${isActive ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <button className="register-btn" onClick={toggleRegistration}>{text}</button>
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
