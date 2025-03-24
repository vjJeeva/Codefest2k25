import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import "../styles/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-wrapper" data-aos="fade-up">
      <div className="container">
        <div className="footer-content d-flex flex-wrap justify-content-between">
          {/* Left Section */}
          <div className="footer-section">
            <h3 className="footer-logo">CODEFEST 2K25</h3>
            <p>
              Dive into the world of technology and innovation. Join us on this thrilling journey!
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-header">Quick Links</h3>
            <ul className="footer-links">
              <li onClick={() => scrollToSection("home")}>Home</li>
              <li onClick={() => scrollToSection("about")}>About Us</li>
              <li onClick={() => scrollToSection("events")}>Events</li>
              <li onClick={() => scrollToSection("contact")}>Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-header">Contact Us</h3>
            <p>G.S.T Road, Chinna Kolambakkam,</p>
            <p>Madhuranthagam (T.k), Chengalpattu (D.t)-603308</p>
            <p><IoMail className="contact-icon" /> support@codefest2k25.com</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-header">Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/codefest_2k25" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/KarpagaVinayagaCollegeOfEngineeringAndTechnology" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/school/karpaga-vinayaga-college-of-engineering-and-technology/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://goo.gl/maps/YOUR_MAP_LINK" target="_blank" rel="noopener noreferrer">
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 CODEFEST 2K25. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
