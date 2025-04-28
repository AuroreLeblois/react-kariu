export interface SlideAnimationProps {
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