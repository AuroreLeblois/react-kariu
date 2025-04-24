import React, { useEffect, useState } from "react";
import "./slideAnimation.css";

interface SlideAnimationProps {
  /**
   * Children elements to animate
   */
  children: React.ReactNode;
  /**
   * Direction of the animation
   */
  direction?: "left" | "right" | "top" | "bottom";
  /**
   * Duration of the animation in milliseconds
   */
  duration?: number;
  /**
   * Delay before the animation starts in milliseconds
   */
  delay?: number;
  /**
   * If the animation should be triggered on scroll
   */
  onScroll?: boolean;
  /**
   * Trigger the animation manually (true = visible)
   */
  trigger?: boolean;
  /**
   * Custom CSS class
   */
  className?: string;
  /**
   * Custom styles
   */
  sx?: React.CSSProperties;
}

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
  // The animation is visible if:
  // - trigger is defined and true
  // - trigger is not defined and onScroll is false (automatic animation)
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

  // Determine the animation styles based on the direction
  const getAnimationStyles = (): React.CSSProperties => {
    const directionStyles = {
      left: { transform: isVisible ? "translateX(0)" : "translateX(-100%)" },
      right: { transform: isVisible ? "translateX(0)" : "translateX(100%)" },
      top: { transform: isVisible ? "translateY(0)" : "translateY(-100%)" },
      bottom: { transform: isVisible ? "translateY(0)" : "translateY(100%)" }
    };

    return {
      ...directionStyles[direction],
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' as const : 'hidden' as const
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