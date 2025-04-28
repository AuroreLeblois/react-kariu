  // Determine the animation styles based on the direction
  export const getAnimationStyles = (isVisible: boolean, direction: string, duration: number, delay: number): React.CSSProperties => {
    const baseStyle = {
      display: "block",
      width: "100%",
      overflow: "hidden",
      willChange: "transform, opacity"
    };
    const directionStyles = {
      left: { transform: isVisible ? "translateX(0)" : "translateX(-100%)" },
      right: { transform: isVisible ? "translateX(0)" : "translateX(100%)" },
      top: { transform: isVisible ? "translateY(0)" : "translateY(-100%)" },
      bottom: { transform: isVisible ? "translateY(0)" : "translateY(100%)" }
    };

    return {
      ...baseStyle,
      ...directionStyles[direction],
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' as const : 'hidden' as const
    };
  };