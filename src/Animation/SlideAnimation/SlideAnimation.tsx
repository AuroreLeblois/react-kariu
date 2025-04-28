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
  // The animation is visible if:
  // - trigger is defined and true
  // - trigger is not defined and onScroll is false (automatic animation)
  const [isVisible, setIsVisible] = useState(trigger !== undefined ? trigger : !onScroll);

  // Update when trigger changes
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