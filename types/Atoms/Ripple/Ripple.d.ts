import React from 'react';
import './ripple.css';
interface RippleProps {
    duration: number;
    color: string;
    animationType?: 'circle' | 'square' | 'fade' | 'expand';
}
declare const Ripple: React.FC<RippleProps>;
export default Ripple;
