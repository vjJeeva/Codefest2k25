import React, { useState } from "react";
import "../styles/TechnicalEvents.css";

const Card3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x: `${x}%`, y: `${y}%` });

    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotation({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="card-3d"
      style={{ "--mouse-x": mousePosition.x, "--mouse-y": mousePosition.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="card-3d-inner"
        style={{ transform: `rotateY(${rotation.rotateY}deg) rotateX(${rotation.rotateX}deg)` }}
      >
        <div className="card-3d-front">
          <div className="card-3d-image">
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsX29mZmljZV8yOV9leHRyZW1lX2Nsb3NlX3VwX3Bob3RvX29mX2JsYWNrX3Nwb3J0X2Nhcl93YV9lZjkwZWY2Ny0xZjM0LTQwNGQtODg5MS00ZTMwNTk3YjQ5OGFfMS5qcGc.jpg"
              alt="Card Image"
            />
          </div>
          <div className="card-3d-content">
            <h3 className="card-3d-title">Mclaren</h3>
            <p className="card-3d-text">
              McLaren Automotive is a British luxury automotive manufacturer based at the McLaren Technology Centre in Woking, England.
            </p>
            <button className="card-3d-button">Explore More</button>
          </div>
          <div className="corner-glow corner-glow-top-left"></div>
          <div className="corner-glow corner-glow-top-right"></div>
          <div className="corner-glow corner-glow-bottom-left"></div>
          <div className="corner-glow corner-glow-bottom-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Card3D;
