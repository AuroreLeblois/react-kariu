import React, { useState, useRef } from "react";
import { HoverAnimationProps } from "./HoverAniamtion.type";
import { getAnimationStyles } from "./HoverAnimationStyle";
/**
 * HoverAnimation component
 * 
 * WARNING : This component will need styles to be imported in order to work properly in the root of your project.
 * 
 * ```tsx
 * import 'react-kariu/dist/index.css';
 * 
 * ```
 * 
 */
const HoverAnimation: React.FC<HoverAnimationProps> = ({
  children,
  type = "scale",
  intensity = 1,
  duration = 300,
  className = "",
  sx = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate the relative position of the mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate the relative position (from -1 to 1) relative to the center
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePosition({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`hover-animation-container ${className}`}
      style={{
        ...getAnimationStyles(isHovered, intensity, mousePosition, duration, type),
        ...sx
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={type === "rotate" ? handleMouseMove : undefined}
    >
      {children}
    </div>
  );
};

export default HoverAnimation; 