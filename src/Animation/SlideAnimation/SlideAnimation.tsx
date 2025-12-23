import React, { useEffect, useState } from "react";
import { SlideAnimationProps } from "./SlideAnimation.types";
import { getAnimationStyles } from "./SlideAnimationStyle";

const SlideAnimation: React.FC<SlideAnimationProps> = ({
  children,
  direction = "left",
  duration = 500,
  delay = 0,
  onScroll = false,
  trigger = true,
  className = "",
  sx = {}
}) => {
  // L'animation part toujours d'un état "caché" pour garantir
  // une vraie transition à la première apparition.
  const [isVisible, setIsVisible] = useState(false);

  // Met à jour la visibilité en fonction de `trigger` ou du scroll
  useEffect(() => {
    if (trigger !== undefined) {
      setIsVisible(trigger);
      return;
    }

    // Si aucun trigger n'est fourni et qu'on n'est pas en mode scroll,
    // on joue automatiquement l'animation au montage.
    if (!onScroll) {
      setIsVisible(true);
    }
  }, [trigger, onScroll]);

  useEffect(() => {
    if (!onScroll) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.querySelector(".slide-animation-container");
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.disconnect();
      }
    };
  }, [onScroll]);



  return (
    <div
      className={`slide-animation-container ${className}`}
      style={{
        ...getAnimationStyles(isVisible, direction, duration, delay),
        ...sx
      }}
    >
      {children}
    </div>
  );
};

export default SlideAnimation; 