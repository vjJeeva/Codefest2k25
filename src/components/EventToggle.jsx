import React, { useState } from "react";
import TechnicalEvents from "./TechnicalEvents";
import NonTechnicalEvents from "./NonTechnicalEvents";
import "../styles/EventToggle.css";

const EventToggle = () => {
  const [isTechnical, setIsTechnical] = useState(true);

  const handleToggle = () => {
    setIsTechnical((prev) => !prev);
  };

  return (
    <div className="event-toggle-container">
      <div
        className="toggle-switch"
        onClick={handleToggle}
        role="switch"
        aria-checked={isTechnical}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleToggle();
          }
        }}
      >
        <div className={`toggle-slider ${isTechnical ? "technical" : "non-technical"}`}></div>
        <span className="toggle-text technical-text">Technical</span>
        <span className="toggle-text non-technical-text">Non-Technical</span>
      </div>
      <div className="events-container">
        {isTechnical ? <TechnicalEvents /> : <NonTechnicalEvents />}
      </div>
    </div>
  );
};

export default EventToggle;