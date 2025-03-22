// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Header";
// import Footer from "./Footer";
// import Time from "./Time";
// import NonTechnicalEvents from "./NonTechnicalEvents";
// import TechnicalEvents from "./TechnicalEvents";
// import About from "./About";

// const Mcode = () => {
//   const [text, setText] = useState("Registration Open");
//   const aboutSectionRef = useRef(null); // Ref for the About section
//   const footerRef = useRef(null); // Ref for the Footer section

//   // Toggle registration text
//   const reg = () => {
//     setText(
//       text === "Registration Open" ? "Registration Close" : "Registration Open"
//     );
//   };

//   // Handle scroll events
//   useEffect(() => {
//     const animatedElement = document.querySelector(".animated-element");

//     const handleScroll = () => {
//       const scrollTop = window.scrollY || document.documentElement.scrollTop;

//       // Pause the animation when scrolling
//       if (animatedElement) {
//         animatedElement.style.animationPlayState =
//           scrollTop > 0 ? "paused" : "running";
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <Header />
//       {/* Main Section */}
//       <section
//         className="main container"
//         style={{
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <h1
//           className="animated-element"
//           style={{
//             fontFamily: "Almie",
//             color: "#fbccfd",
//             fontSize: "45px",
//           }}
//         >
//           CODEFEST 2K25
//         </h1>
//       </section>

//       {/* Timer Section */}
//       <Time aboutSectionRef={aboutSectionRef} footerRef={footerRef} /> {/* Pass the refs to Time */}

//       {/* About Section */}
//       <section ref={aboutSectionRef}> {/* Attach the ref to About */}
//         <About />
//       </section>

//       {/* Events Section */}
//       <section>
//         <TechnicalEvents />
//         <NonTechnicalEvents />
//       </section>

//       {/* Footer Section */}
//       <footer ref={footerRef}> {/* Attach the ref to Footer */}
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default Mcode;


import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Time from "./Time";
import About from "./About";
import '../styles/CodeFestTitle.css';
import EventToggle from "./EventToggle";

const Mcode = () => {
  const [text, setText] = useState("Registration Open");
  const aboutSectionRef = useRef(null);
  const footerRef = useRef(null);
  const titleRef = useRef(null);

  // Toggle registration text
  const reg = () => {
    setText(
      text === "Registration Open" ? "Registration Close" : "Registration Open"
    );
  };

  // Handle scroll events
  useEffect(() => {
    const titleElement = titleRef.current;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Pause the animation when scrolling
      if (titleElement) {
        titleElement.style.animationPlayState =
          scrollTop > 0 ? "paused" : "running";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      {/* Main Section */}
      <section
        className="main container"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          background: "transparent",
        }}
      >
        {/* Binary background effect */}
        <div className="binary-background"></div>
        
        <div className="title-container">
          <h1 ref={titleRef} className="codefest-title">
            <span className="letter c">C</span>
            <span className="letter o1">O</span>
            <span className="letter d">D</span>
            <span className="letter e">E</span>
            <span className="letter f">F</span>
            <span className="letter e2">E</span>
            <span className="letter s">S</span>
            <span className="letter t">T</span>
            <span className="year">2K25</span>
          </h1>
          <div className="glowing-line"></div>
        </div>
      </section>

      {/* Timer Section */}
      <Time aboutSectionRef={aboutSectionRef} footerRef={footerRef} />

      {/* About Section */}
      <section ref={aboutSectionRef}>
        <About />
      </section>

      {/* Events Section */}
      <section>
        <EventToggle/>
      </section>

      {/* Footer Section */}
      <footer ref={footerRef}>
        <Footer />
      </footer>
    </div>
  );
};

export default Mcode;