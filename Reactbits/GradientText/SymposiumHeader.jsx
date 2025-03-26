import React from "react";
import GradientText from "./GradientText.jsx";
import "./SymposiumHeader.css";

export default function SymposiumHeader() {
  return (
    <div className="symposium-header">
      <div className="symposium-header-content">
        <div className="symposium-text-container">
          <GradientText
            colors={["#00f260", "#0575e6", "#00f260"]}
            animationSpeed={6}
            decryptEffect={true}
            className="symposium-title animated-text"
            data-text="NATIONAL LEVEL SYMPOSIUM"
          >
            NATIONAL LEVEL SYMPOSIUM
          </GradientText>

          <GradientText
            colors={["#ff6b6b", "#4ecdc4", "#ff6b6b"]}
            animationSpeed={5}
            decryptEffect={true}
            className="symposium-department animated-text"
            data-text="Department of Computer Science & Engineering"
          >
            Department of Computer Science & Engineering
          </GradientText>

          <div className="symposium-taglines">
            <GradientText
              colors={["#8e2de2", "#4a00e0", "#8e2de2"]}
              decryptEffect={true}
              className="symposium-tagline-primary animated-text"
              data-text="Challenge - Innovate - Transform"
            >
              Challenge - Innovate - Transform
            </GradientText>

            <GradientText
              colors={["#56ab2f", "#a8e063", "#56ab2f"]}
              decryptEffect={true}
              className="symposium-tagline-secondary animated-text"
              data-text="Solving Tomorrow's Tech Challenges Today"
            >
              Solving Tomorrow's Tech Challenges Today
            </GradientText>

            <GradientText
              colors={["#fc00ff", "#00dbde", "#fc00ff"]}
              decryptEffect={true}
              className="symposium-tagline-tertiary animated-text"
              data-text="Explore. Innovate. Revolutionize."
            >
              Explore. Innovate. Revolutionize.
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
}