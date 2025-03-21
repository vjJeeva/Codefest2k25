import { useEffect } from "react";
import "../styles/MotionFrame.css";

const MotionFrame = () => {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement("div");
    cursor.className = "css-cursor";
    document.body.appendChild(cursor);

    // Move cursor smoothly
    const moveCursor = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    document.addEventListener("mousemove", moveCursor);

    // Click effect
    const handleClick = () => {
      cursor.classList.add("active");
      setTimeout(() => cursor.classList.remove("active"), 300);
    };
    document.addEventListener("click", handleClick);

    // Hover effect
    const hoverElements = document.querySelectorAll("p, h1, h2, h3, a, span");
    hoverElements.forEach((el) => {
      el.addEventListener("mouseover", () => cursor.classList.add("hover"));
      el.addEventListener("mouseout", () => cursor.classList.remove("hover"));
    });

    // Cleanup on unmount
    return () => {
      document.body.removeChild(cursor);
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseover", () => cursor.classList.add("hover"));
        el.removeEventListener("mouseout", () => cursor.classList.remove("hover"));
      });
    };
  }, []);

  return null;
};

export default MotionFrame;
