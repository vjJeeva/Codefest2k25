import React from 'react';
import { Phone, Instagram } from 'lucide-react';
import "../styles/ContactDetails.css";

const BentoContactDetails = () => {
  const contacts = {
    president: {
      role: "President",
      name: "Bharathvaj V",
      phone: "+918682910332",
      instagram: "bharath.v.a.j"
    },
    secretary: {
      role: "Secretary",
      name: "Shahul Irfhan S",
      phone: "+919123500886", 
      instagram: "least.ly_____liked"
    },
    programDirectors: [
      {
        role: "Program Director",
        name: "Muthuselvi M",
        phone: "+917708252595",
        instagram: "ahamselvi"
      },
      {
        role: "Program Director", 
        name: "Dr. V.S. Thiyagarajan",
        phone: "+919500833744",
        instagram: "dr_thiyagarajan_v_s"
      }
    ]
  };

  const handleCall = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleInstagram = (username) => {
    window.open(`https://instagram.com/${username}`, '_blank');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="bento-grid">
        <div className="bento-box president">
          <h2>{contacts.president.role}</h2>
          <p>{contacts.president.name}</p>
          <div className="contact-icons">
            <button onClick={() => handleCall(contacts.president.phone)}>
              <Phone />
            </button>
            <button onClick={() => handleInstagram(contacts.president.instagram)}>
              <Instagram />
            </button>
          </div>
        </div>
        
        <div className="bento-box secretary">
          <h2>{contacts.secretary.role}</h2>
          <p>{contacts.secretary.name}</p>
          <div className="contact-icons">
            <button onClick={() => handleCall(contacts.secretary.phone)}>
              <Phone />
            </button>
            <button onClick={() => handleInstagram(contacts.secretary.instagram)}>
              <Instagram />
            </button>
          </div>
        </div>
        
        <div className="bento-box program-directors full-width">
          <h2>Program Directors</h2>
          <div className="directors-grid">
            {contacts.programDirectors.map((director, index) => (
              <div key={index} className="director">
                <p>{director.name}</p>
                <div className="contact-icons">
                  <button onClick={() => handleCall(director.phone)}>
                    <Phone />
                  </button>
                  <button onClick={() => handleInstagram(director.instagram)}>
                    <Instagram />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoContactDetails;