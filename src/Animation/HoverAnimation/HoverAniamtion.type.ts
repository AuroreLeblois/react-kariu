
export interface HoverAnimationProps {
    /**
     * Children elements to animate
     */
    children: React.ReactNode;
    /**
     * Type of animation
     */
    type?: "scale" | "rotate" | "translate" | "opacity" | "elevate" | "shake";
    /**
     * Intensity of the animation
     */
    intensity?: number;
    /**
     * Duration of the animation in milliseconds
     */
    duration?: number;
    /**
     * Custom CSS class
     */
    className?: string;
    /**
     * Custom styles
     */
    sx?: React.CSSProperties;
  }