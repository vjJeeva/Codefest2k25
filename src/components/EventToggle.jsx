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
      <div className="toggle-switch" onClick={handleToggle}>
        <div className={`toggle-slider ${isTechnical ? "technical" : "non-technical"}`}>
          {isTechnical ? "Technical" : "Non-Technical"}
        </div>
      </div>
      <div className="events-container">
        {isTechnical ? <TechnicalEvents /> : <NonTechnicalEvents />}
      </div>
    </div>
  );
};

export default EventToggle;