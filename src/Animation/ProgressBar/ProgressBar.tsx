import React, {useEffect, useState, useRef} from 'react';
import { ProgressBarProps } from "./ProgressBar.types";
import { Text } from '../../Atoms';
import { Layout } from '../../Container';

import { useTheme } from '../../Theme/ThemeProvider';

const ProgressBar: React.FC<ProgressBarProps> = ({ 
    value = 0, 
    max = 100, 
    sx = {}, 
    className = null, 
    color = null,
    displayPercentage = false,
    primary = true,
    variant = 'linear',
    indeterminate = false,
    size = 100,
    thickness = 8
  }) => {
  const { theme, colors } = useTheme();
  
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

 // Valeur affichée, qui va monter progressivement
 const [displayedPercentage, setDisplayedPercentage] = useState(0);
 const [rotationAngle, setRotationAngle] = useState(0);
 const animationRef = useRef<number | null>(null);

 useEffect(() => {
   if (indeterminate) {
     // Mode continu : animation de rotation infinie
     let startTime: number | null = null;
     const duration = 1500; // durée pour un tour complet

     const animateRotation = (timestamp: number) => {
       if (startTime === null) startTime = timestamp;
       const elapsed = timestamp - startTime;
       const progress = (elapsed % duration) / duration;
       setRotationAngle(progress * 360);
       animationRef.current = requestAnimationFrame(animateRotation);
     };

     animationRef.current = requestAnimationFrame(animateRotation);
     return () => {
       if (animationRef.current) {
         cancelAnimationFrame(animationRef.current);
       }
     };
   } else {
     // Animation normale de la valeur
     let animationFrame: number;
     let start: number | null = null;
     const duration = 1000; // durée totale de l'animation en ms

     const animateStep = (timestamp: number) => {
       if (start === null) start = timestamp;
       const progress = Math.min((timestamp - start) / duration, 1);
       const newValue = displayedPercentage + (percentage - displayedPercentage) * progress;
       setDisplayedPercentage(progress < 1 ? newValue : percentage);
       if (progress < 1) {
         animationFrame = requestAnimationFrame(animateStep);
       }
     };

     animationFrame = requestAnimationFrame(animateStep);
     return () => cancelAnimationFrame(animationFrame);
   }
   // eslint-disable-next-line
 }, [percentage, indeterminate]);

 const colorProgress = primary ? colors.primary.light: colors.secondary.light;

 // Calcul pour le cercle SVG
 const radius = (size - thickness) / 2;
 const circumference = 2 * Math.PI * radius;
 const strokeDasharray = indeterminate ? circumference * 0.75 : circumference;
 const strokeDashoffset = indeterminate 
   ? circumference - (circumference * 0.75 * rotationAngle / 360)
   : circumference - (displayedPercentage / 100) * circumference;

 // Rendu circulaire
 if (variant === 'circular') {
   return (
     <Layout flexDirection='column' alignItems='center' style={{ position: 'relative', ...sx }}>
       <div 
         className={"progress-bar-kariu-circular " + (className ?? '')} 
         style={{
           position: 'relative',
           width: size,
           height: size,
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
         }}
       >
         <svg
           width={size}
           height={size}
           style={{
             transform: indeterminate ? `rotate(${rotationAngle}deg)` : 'none',
             transition: indeterminate ? 'none' : 'transform 0.3s ease',
             transformOrigin: 'center'
           }}
         >
           {/* Cercle de fond */}
           <circle
             cx={size / 2}
             cy={size / 2}
             r={radius}
             fill="none"
             stroke={theme === 'dark' ? colors.background.lighter : colors.background.darker}
             strokeWidth={thickness}
           />
           {/* Cercle de progression */}
           <circle
             cx={size / 2}
             cy={size / 2}
             r={radius}
             fill="none"
             stroke={color ?? colorProgress}
             strokeWidth={thickness}
             strokeLinecap="round"
             strokeDasharray={strokeDasharray}
             strokeDashoffset={strokeDashoffset}
             style={{
               transition: indeterminate ? 'none' : 'stroke-dashoffset 0.5s cubic-bezier(0.1, 0, 0.2, 1)',
               transform: 'rotate(-90deg)',
               transformOrigin: 'center'
             }}
           />
         </svg>
         {/* Texte au centre si demandé */}
         {displayPercentage && !indeterminate && (
           <div style={{
             position: 'absolute',
             top: '50%',
             left: '50%',
             transform: 'translate(-50%, -50%)',
             fontSize: size * 0.2,
             fontWeight: 'bold',
             fontFamily: colors.fontFamily,
             color: theme === 'dark' ? colors.text.light : colors.text.dark
           }}>
             {Math.round(displayedPercentage)}%
           </div>
         )}
       </div>
      
     </Layout>
   );
 }

  return (
    <Layout flexDirection='row' fullWidth={true} width='30vw'>
      <div className={"progress-bar-kariu "+ (className ?? null)} style={{
        position: 'relative',
        background: theme === 'dark' ? colors.background.lighter : colors.background.darker,
        justifyContent: 'flex-start',
        borderRadius: "100px",
        alignItems: "center",
        padding: "0.5% 1%",
        display: "flex",
        minHeight: '16px',
        height: "100%",
        maxHeight: '30px',
        width: "100%",
        overflow: 'hidden',
        ...sx
      }}>
        {indeterminate ? (
          <div
            className="progress-value-kariu-indeterminate"
            style={{
              position: 'absolute',
              width: '40%',
              height: '95%',
              background: `linear-gradient(90deg, transparent, ${color ?? colorProgress}, transparent)`,
              borderRadius: "100px",
              animation: 'shimmer 1.5s infinite linear',
              minHeight: 10,
            }}
          />
        ) : (
          <div
            className="progress-value-kariu"
            style={{
              width: `${displayedPercentage}%`,
              transition: 'width 0.5s cubic-bezier(0.1, 0, 0.2, 1)',
              boxShadow: `0 10px 100% -10% ${color ?? colorProgress}`,
              borderRadius: "100px",
              background: color ?? colorProgress,
              minHeight: 10,
              height: '95%'
            }}>
          </div>
        )}
      </div>
      {displayPercentage && !indeterminate ? <Text text={Math.round(displayedPercentage) + '%'}/> : null}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(350%);
          }
        }
      `}</style>
    </Layout>
  );
};

export default ProgressBar; 