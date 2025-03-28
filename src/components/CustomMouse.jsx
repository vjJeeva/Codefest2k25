import React, { useEffect, useState } from "react";
import { BsFillCursorFill } from "react-icons/bs";
import useSound from "use-sound";
import desktopClickSound from "../sounds/Pop.wav";

const CustomMouse = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Sound hook for desktop click
  const [playDesktopClick] = useSound(desktopClickSound, { volume: 0.5 });

  useEffect(() => {
    // Detect mobile devices with stricter check
    const checkMobile = () => {
      const mobileCheck =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      setIsMobile(mobileCheck);
    };

    // Check on mount and add resize listener
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add global CSS to hide system cursor
    const style = document.createElement('style');
    style.innerHTML = `
      body, * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const updatePos = (e) => {
      // Handle both mouse and touch events
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY || (e.touches && e.touches[0]?.clientY);

      if (clientX !== undefined && clientY !== undefined) {
        setPos({ x: clientX, y: clientY });
      }
    };

    const handleTouchStart = (e) => {
      if (isMobile) {
        setIsActive(true);
        updatePos(e);
      }
    };

    const handleTouchEnd = () => {
      if (isMobile) {
        setIsActive(false);
      }
    };

    const handleMouseDown = () => {
      if (!isMobile) {
        setIsActive(true);
        // Play desktop sound when NOT in mobile view
        playDesktopClick();
      }
    };

    const handleMouseUp = () => {
      if (!isMobile) {
        setIsActive(false);
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener("mousemove", updatePos);
    document.addEventListener("touchmove", updatePos);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function
    return () => {
      // Remove event listeners
      window.removeEventListener('resize', checkMobile);
      document.head.removeChild(style);

      document.removeEventListener("mousemove", updatePos);
      document.removeEventListener("touchmove", updatePos);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMobile, playDesktopClick]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <BsFillCursorFill
      className={`custom-cursor ${isActive ? 'active' : ''}`}
      size={25}
      style={{
        position: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        pointerEvents: "none",
        color: "Pink",
        zIndex: 9999,
        transform: "scaleX(1) rotate(286deg)",
      }}
    />
  );
};

export default CustomMouse;