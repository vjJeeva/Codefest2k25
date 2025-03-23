import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Time from "./Time";
import About from "./About.jsx";
import EventToggle from "./EventToggle.jsx";
import GradientText from "../../Reactbits/GradientText/GradientText";

const Mcode = () => {
  const [text, setText] = useState("Registration Open");
  const aboutSectionRef = useRef(null); // Ref for the About section
  const footerRef = useRef(null);

  const reg = () => {
    setText(
      text === "Registration Open" ? "Registration Close" : "Registration Open"
    );
  };

  window.addEventListener("scroll", function () {
    const animatedElement = document.querySelector(".animated-element");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Pause the animation when scrolling
    if (scrollTop > 0) {
      animatedElement.style.animationPlayState = "paused";
    } else {
      animatedElement.style.animationPlayState = "running";
    }
  });

  return (
    <div>
      <Header />
      {/* main sec */}
      <section
        id="home"
        className="main container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="animate-charcter" >
          <GradientText
            colors={[
              "#d4d4d4",
              "#c0c0c0",
              "#808080",
              "#3d3d3d",
              "#d4d4d4",
              "#c0c0c0",
              "#808080",
              "#3d3d3d",
            ]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class"
          >
            CODEFEST 2K25
          </GradientText>
        </h1>
      </section>
      {/* Timer Section */}
      <Time aboutSectionRef={aboutSectionRef} footerRef={footerRef} />

      {/* About Section */}
      <section
      id="about"
      ref={aboutSectionRef}>
        <About />
      </section>

      {/* Events Section */}
      <section
      id="events"
      >
        <EventToggle/>
      </section>

      {/* Footer Section */}
      <footer
      id="contact"
      ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
};

export default Mcode;