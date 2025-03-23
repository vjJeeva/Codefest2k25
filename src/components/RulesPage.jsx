import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/RulesPage.css";
import Header from "./Header.jsx";

const RulesPage = () => {
  const [searchParams] = useSearchParams();
  const event = JSON.parse(decodeURIComponent(searchParams.get("event")));

  if (!event) {
    return <div>No event data found.</div>;
  }

  const handleRegister = () => {
    window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
  };

  return (
    <>
    <Header/>
    <div className="rules-page">
      <h1>{event.title} Rules</h1>
      <div className="rules-container">
        {event.rules.map((rule, index) => (
          <p key={index} className="rule-item">
            {rule}
          </p>
        ))}
      </div>
      <button className="register-button" onClick={handleRegister}>
        Register Now
      </button>
    </div>
    </>
  );
};

export default RulesPage;