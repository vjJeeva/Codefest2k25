import React, { useState, useEffect, useRef } from 'react';
import "../styles/Sponser.css";


document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.sponsors-carousel');
  
  const updateCenterLogo = () => {
    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;

    const logos = document.querySelectorAll('.sponsor-logo');
    logos.forEach(logo => {
      const logoRect = logo.getBoundingClientRect();
      const logoCenter = logoRect.left + logoRect.width / 2;

      // Remove center-logo class from all logos
      logo.classList.remove('center-logo');

      // Check if logo is near the center of the carousel
      if (
        logoCenter >= carouselCenter - 50 && 
        logoCenter <= carouselCenter + 50
      ) {
        logo.classList.add('center-logo');
      }
    });
  };

  // Update center logo on scroll and resize
  carousel.addEventListener('scroll', updateCenterLogo);
  window.addEventListener('resize', updateCenterLogo);
  
  // Initial update
  updateCenterLogo();
});

const LOGO_IMPORTS = {
  Besant: 'https://pbs.twimg.com/profile_images/954643984110022656/AGaxDpCy_400x400.jpg',
  buff: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThG68rh-r81WiG5GbsUmOI1zS5j3q3H3zaBg&s',
  Poorvika: 'https://seeklogo.com/images/P/poorvika-mobile-logo-3A146EA209-seeklogo.com.png',
  Saravana: 'saravana scans.jpg',
  The_Heavenly_Plates: 'Heavenly Plates.png',
  zuvi: 'zuvi.jpg'
};




export const Sponser = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const logos = Object.entries(LOGO_IMPORTS).map(([name, src]) => ({
    name: name.replace(/([A-Z])/g, ' $1').trim(),
    src
  }));

  useEffect(() => {
    const container = containerRef.current;
    
    const scrollLogos = () => {
      if (container) {
        setActiveIndex((prevIndex) => 
          (prevIndex + 1) % logos.length
        );
      }
    };

    const intervalId = setInterval(scrollLogos, 3000);

    return () => clearInterval(intervalId);
  }, [logos.length]);

  return (
    <div className="sponsors-container">
      <h2 className="About-Title">Our Sponsors</h2>
      <span className="title-glow"></span>
      <div className="sponsors-carousel-wrapper">
        <div 
          ref={containerRef}
          className="sponsors-carousel"
        >
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`sponsor-logo ${
                index === activeIndex ? 'active-logo' : ''
              }`}
            >
              <img 
                src={logo.src} 
                alt={logo.name}
                className="logo-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Sponser;

