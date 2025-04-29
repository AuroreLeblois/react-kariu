import React, { useState, MouseEvent, useEffect } from 'react';
import { rippleStyleContainer, getStyleRipple } from './RippleStyle';

interface RippleProps {
  duration: number;
  color: string;
  animationType?: 'circle' | 'square' | 'fade' | 'expand' | 'wave';
  className?: string;
  sx?: React.CSSProperties;
}

const Ripple: React.FC<RippleProps> = ({ duration, color, animationType = 'circle', className, sx }) => {
  const [rippleArray, setRippleArray] = useState<Array<{ top: number; left: number; size: number }>>([]);

  useEffect(() => {
    if (rippleArray.length > 0) {
      const timer = setTimeout(() => {
        setRippleArray([]);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [rippleArray, duration]);

  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.clientX - rippleContainer.left - size / 2;
    const y = event.clientY - rippleContainer.top - size / 2;
    const newRipple = {
      top: y,
      left: x,
      size: size,
    };
    setRippleArray([...rippleArray, newRipple]);
  };
  return (
    <div 
      className={`ripple-container${className ? ` ${className}` : ''}`}
      onMouseDown={addRipple} 
      style={{ 
        ...rippleStyleContainer,
        ...sx,
        overflow: 'hidden'
      }}
    >
      {rippleArray.map((ripple, index) => (
        <span
          key={index}
          style={{
            ...getStyleRipple(animationType),
            top: ripple.top,
            left: ripple.left,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
            animationDuration: `${duration}ms`,
            zIndex: 9999
          }}
          className={`ripple ripple-${animationType}`}
        />
      ))}
    </div>
  );
};

export default Ripple;
