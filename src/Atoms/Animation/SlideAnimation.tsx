import React, { useEffect, useState } from "react";
import "./slideAnimation.css";

interface SlideAnimationProps {
  /**
   * Éléments enfants à animer
   */
  children: React.ReactNode;
  /**
   * Direction de l'animation
   */
  direction?: "left" | "right" | "top" | "bottom";
  /**
   * Durée de l'animation en millisecondes
   */
  duration?: number;
  /**
   * Délai avant le début de l'animation en millisecondes
   */
  delay?: number;
  /**
   * Si l'animation doit se déclencher au défilement
   */
  onScroll?: boolean;
  /**
   * Déclencher manuellement l'animation (true = visible)
   */
  trigger?: boolean;
  /**
   * Classe CSS personnalisée
   */
  className?: string;
  /**
   * Styles personnalisés
   */
  sx?: React.CSSProperties;
}

const SlideAnimation: React.FC<SlideAnimationProps> = ({
  children,
  direction = "left",
  duration = 500,
  delay = 0,
  onScroll = false,
  trigger,
  className = "",
  sx = {}
}) => {
  // L'animation est visible si:
  // - trigger est défini et true
  // - trigger n'est pas défini et onScroll est false (animation automatique)
  const [isVisible, setIsVisible] = useState(trigger !== undefined ? trigger : !onScroll);

  // Mise à jour lorsque trigger change
  useEffect(() => {
    if (trigger !== undefined) {
      setIsVisible(trigger);
    }
  }, [trigger]);

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

  // Déterminer les styles d'animation en fonction de la direction
  const getAnimationStyles = () => {
    const directionStyles = {
      left: { transform: isVisible ? "translateX(0)" : "translateX(-100%)" },
      right: { transform: isVisible ? "translateX(0)" : "translateX(100%)" },
      top: { transform: isVisible ? "translateY(0)" : "translateY(-100%)" },
      bottom: { transform: isVisible ? "translateY(0)" : "translateY(100%)" }
    };

    return {
      ...directionStyles[direction],
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
      opacity: isVisible ? 1 : 0
    };
  };

  return (
    <div
      className={`slide-animation-container ${className}`}
      style={{
        ...getAnimationStyles(),
        ...sx
      }}
    >
      {children}
    </div>
  );
};

export default SlideAnimation; 