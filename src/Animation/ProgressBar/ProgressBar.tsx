import React, {useEffect, useState} from 'react';
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
    primary = true
  }) => {
  const { theme, colors } = useTheme();
  
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

 // Valeur affichée, qui va monter progressivement
 const [displayedPercentage, setDisplayedPercentage] = useState(0);

 useEffect(() => {
   // Si la valeur cible change, on repart de la valeur actuelle
   let animationFrame: number;
   let start: number | null = null;
   const duration = 1000; // durée totale de l'animation en ms

   function animateStep(timestamp: number) {
     if (start === null) start = timestamp;
     const progress = Math.min((timestamp - start) / duration, 1);
     const newValue = displayedPercentage + (percentage - displayedPercentage) * progress;
     setDisplayedPercentage(progress < 1 ? newValue : percentage);
     if (progress < 1) {
       animationFrame = requestAnimationFrame(animateStep);
     }
   }

   animationFrame = requestAnimationFrame(animateStep);

   return () => cancelAnimationFrame(animationFrame);
   // eslint-disable-next-line
 }, [percentage]);

 const colorProgress = primary ? colors.primary.light: colors.secondary.light;

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
        ...sx
      }}>
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
          
      </div>
      {displayPercentage ? <Text text={percentage + '%'}/> : null}
    </Layout>
  );
};

export default ProgressBar; 