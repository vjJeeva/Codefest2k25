import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/RulesFooter.css";

const RulesFooter = () => {
  return (
    <footer className="code-footer">
      <div className="code-footer-container">
        <div className="code-footer-left">
          <div className="code-footer-logo">CODEFEST 2K25</div>
          <div className="code-footer-social">
            <a href="mailto:contact@tecblaze.com" className="code-social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+1234567890" className="code-social-icon">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://maps.google.com" className="code-social-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
            <a href="https://instagram.com" className="code-social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="code-footer-right">
          <div className="code-footer-nav">
            <a href="/events" className="code-nav-link">Events</a>
            <a href="/contact" className="code-nav-link">Contact</a>
          </div>
        </div>
      </div>
      <div className="code-footer-bottom">
        <p className="code-copyright">© CODEFEST 2K25 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default RulesFooter;