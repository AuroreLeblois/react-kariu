    /**
     * Get the animation styles for the hover animation
     * @param {boolean} isHovered - Whether the element is hovered
     * @param {number} intensity - The intensity of the animation
     * @param {Object} mousePosition - The position of the mouse
     * @param {number} duration - The duration of the animation
     * @returns {Object} The animation styles
     */
export const getAnimationStyles = (isHovered: boolean, intensity: number, mousePosition: { x: number, y: number }, duration: number, type: string) => {
    // Définir l'animation shake comme une chaîne CSS complète
    const shakeKeyframes = `
      @keyframes shake {
        0% { transform: translateX(0); }
        10% { transform: translateX(-3px) rotate(-1deg); }
        20% { transform: translateX(2px) rotate(1deg); }
        30% { transform: translateX(-2px) rotate(-1deg); }
        40% { transform: translateX(2px) rotate(1deg); }
        50% { transform: translateX(-2px) rotate(-1deg); }
        60% { transform: translateX(2px) rotate(1deg); }
        70% { transform: translateX(-2px) rotate(-1deg); }
        80% { transform: translateX(1px) rotate(1deg); }
        90% { transform: translateX(-1px) rotate(-1deg); }
        100% { transform: translateX(0); }
      }
    `;
    
    // Ajouter les keyframes au document si le type est "shake"
    if (type === "shake" && isHovered && typeof document !== 'undefined') {
      // Vérifier si le style existe déjà
      if (!document.getElementById('shake-keyframes')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'shake-keyframes';
        styleElement.textContent = shakeKeyframes;
        document.head.appendChild(styleElement);
      }
    }

    const styleBase = {
      ".hover-animation-container": {
          display: "inline-block",
          width: "auto",
          cursor: "pointer",
      }
    };
    
    const animationStyles = {
      scale: { 
        transform: isHovered ? `scale(${1 + 0.05 * intensity})` : "scale(1)" 
      },
      rotate: { 
        transform: isHovered 
          ? `rotate(${mousePosition.x * 5 * intensity}deg)` 
          : "rotate(0)" 
      },
      translate: { 
        transform: isHovered ? `translateY(${-5 * intensity}px)` : "translateY(0)" 
      },
      opacity: { 
        opacity: isHovered ? 0.8 : 1 
      },
      elevate: { 
        boxShadow: isHovered 
          ? `0 ${4 * intensity}px ${8 * intensity}px rgba(0,0,0,0.2)` 
          : "0 0 0 rgba(0,0,0,0)"
      },
      shake: { 
        animation: isHovered ? `shake ${duration}ms ease-in-out infinite` : "none"
      }
    };
    
    // Styles de base pour tous les types d'animation
    const baseStyle = {
      ...styleBase,
      transition: type === "shake" ? "none" : `all ${duration}ms ease-out`
    };
    
    return {
      ...baseStyle,
      ...animationStyles[type]
    };
}
