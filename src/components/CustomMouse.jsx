import { useEffect, useState } from "react";
import "../styles/CustomMouse.css";
import { BsFillCursorFill } from "react-icons/bs";

const CustomMouse = () => {
  const [pos, setpos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePos = (e) => {
      setpos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updatePos);
    return () => document.removeEventListener("mousemove", updatePos);
  }, []);


  
  return (
    <BsFillCursorFill
      className="custom-cursor"
      size={25}
      style={{
        pos: "fixed",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        pointerEvents: "none",
        color: "Pink",
      }}
    />
  );
};

export default CustomMouse;
