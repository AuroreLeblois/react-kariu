import React from 'react';
import './ripple.css';
interface RippleProps {
    duration: number;
    color: string;
    animationType?: 'circle' | 'square' | 'fade' | 'expand' | 'wave';
    className?: string;
    sx?: React.CSSProperties;
}
declare const Ripple: React.FC<RippleProps>;
export default Ripple;
