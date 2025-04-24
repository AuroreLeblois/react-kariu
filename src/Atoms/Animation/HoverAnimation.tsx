import React, { useState } from "react";
import "./hoverAnimation.css";

interface HoverAnimationProps {
  /**
   * Éléments enfants à animer
   */
  children: React.ReactNode;
  /**
   * Type d'animation
   */
  type?: "scale" | "rotate" | "translate" | "opacity" | "elevate" | "shake";
  /**
   * Intensité de l'animation
   */
  intensity?: number;
  /**
   * Durée de l'animation en millisecondes
   */
  duration?: number;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
  /**
   * Styles personnalisés
   */
  sx?: React.CSSProperties;
}

const HoverAnimation: React.FC<HoverAnimationProps> = ({
  children,
  type = "scale",
  intensity = 1,
  duration = 300,
  className = "",
  sx = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Détermine les styles d'animation en fonction du type et de l'intensité
  const getAnimationStyles = () => {
    const animationStyles = {
      scale: { 
        transform: isHovered ? `scale(${1 + 0.05 * intensity})` : "scale(1)" 
      },
      rotate: { 
        transform: isHovered ? `rotate(${5 * intensity}deg)` : "rotate(0)" 
      },
      translate: { 
        transform: isHovered ? `translateY(${-5 * intensity}px)` : "translateY(0)" 
      },
      opacity: { 
        opacity: isHovered ? 0.8 : 1 
      },
      elevate: { 
        boxShadow: isHovered 
          ? `0 ${4 * intensity}px ${8 * intensity}px rgba(0,0,0,0.2)` 
          : "0 0 0 rgba(0,0,0,0)"
      },
      shake: { 
        animation: isHovered ? `shake ${duration}ms ease-in-out infinite` : "none"
      }
    };

    return {
      ...animationStyles[type],
      transition: type !== "shake" ? `all ${duration}ms ease-out` : "none"
    };
  };

  return (
    <div
      className={`hover-animation-container ${className}`}
      style={{
        ...getAnimationStyles(),
        ...sx
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default HoverAnimation; 