import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/RulesPage.css";
//import EventNav from "./EventNav.jsx";
import Header from "./Header.jsx";
import RulesFooter from "./RulesFooter.jsx";


const RulesPage = () => {
  const [searchParams] = useSearchParams();
  const [event, setEvent] = useState({});
  const [activeTab, setActiveTab] = useState("description");
  const [animatedItems, setAnimatedItems] = useState([]);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    try {
      const eventParam = searchParams.get("event");
      if (eventParam) {
        const decodedEvent = JSON.parse(decodeURIComponent(eventParam));
        setEvent(decodedEvent);
      }
    } catch (error) {
      console.error("Error parsing event data:", error);
    }
  }, [searchParams]);

  useEffect(() => {
    const items = document.querySelectorAll(".animate-item");

    const animationTimeout = setTimeout(() => {
      let delay = 0;
      items.forEach((item, index) => {
        setTimeout(() => {
          setAnimatedItems((prev) => [...prev, index]);
        }, delay);
        delay += 150;
      });
      // Triggering the description animation after a delay
      setIsDescriptionVisible(true); 
    }, 300);

    return () => clearTimeout(animationTimeout);
  }, [activeTab]); 

  const handleRegister = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdKku886Omny2C4owkq1xBub4ss1fD-CHH8mQYCPwUNjwNT3A/viewform?usp=dialog", "_blank");
  };

  return (
    <>
      <Header/>
      <div className="project-contest-page">
        <div className="hero-section">
          <h1 className="title">{event.title}</h1>
          <p className="subtitle">{event.subtitle}</p>
        </div>

        <div className="content-container">
          <div className="tabs">
            <button
              className={`tab-button ${
                activeTab === "description" ? "active" : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-button ${activeTab === "rules" ? "active" : ""}`}
              onClick={() => setActiveTab("rules")}
            >
              Rules & Regulations
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div className="description-section">
                <div className="description-content">
                  <p
                    className={`animate-item description-text ${
                      isDescriptionVisible ? "show" : ""
                    }`}
                  >{event.description}</p>
                </div>

                <div className="important-details">
                  <h2 className="section-title">Event Details</h2>
                  <ul className="details-list">
                    <li
                      className={`animate-item ${
                        animatedItems.includes(0) ? "show" : ""
                      }`}
                    >
                      <span className="detail-icon">📌</span>
                      <span className="detail-label">Event Date:</span>{" "}
                      {"4th March 2025"}
                    </li>
                    <li
                      className={`animate-item ${
                        animatedItems.includes(1) ? "show" : ""
                      }`}
                    >
                      <span className="detail-icon">📌</span>
                      <span className="detail-label">Time:</span>{" "}
                      {"10:00 AM – 1:00 PM"}
                    </li>
                    <li
                      className={`animate-item ${
                        animatedItems.includes(2) ? "show" : ""
                      }`}
                    >
                      <span className="detail-icon">📌</span>
                      <span className="detail-label">Venue:</span>{" "}
                      {event.venue}
                    </li>
                    <li
                      className={`animate-item ${
                        animatedItems.includes(3) ? "show" : ""
                      }`}
                    >
                      <span className="detail-icon">📌</span>
                      <span className="detail-label">Team Size:</span>{" "}
                      {event.teamSize}
                    </li>
                  </ul>
                  <h2 className="section-title">Event Coordinators</h2>
                  <p>{event.firstcontact}</p>
                  <p>{event.secondcontact}</p>
                </div>
              </div>
            )}

            {activeTab === "rules" && (
              <div className="rules-section">
                <h2 className="section-title">Rules & Regulations</h2>
                <ul className="rules-list">
                  {event.rules ? (
                    event.rules.map((rule, index) => (
                      <li
                        key={index}
                        className={`animate-item ${
                          animatedItems.includes(index) ? "show" : ""
                        }`}
                      >
                        <span className="rule-icon">✓</span>
                        <div className="rule-content">{rule}</div>
                      </li>
                    ))
                  ) : (
                    <p>No rules available for this event.</p>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-button contact-button">Contact</button>
          <button className="action-button poster-button">Poster</button>
          <button className="action-button share-button">Share</button>
          <button className="register-button" onClick={handleRegister}>
            Register Now
          </button>
        </div>
      </div>


<RulesFooter/>

    </>
  );
};

export default RulesPage;
