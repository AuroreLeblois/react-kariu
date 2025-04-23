import React, { useState } from "react";
import { Title } from "../../index.js";
import { useTheme } from "../../Theme/ThemeProvider.js";
import Arrow from "../../Atoms/Icon/ArrowDown.js";

interface CardProps {
  backgroundColor?: string;
  textColor?: string;
  loading?: boolean;
  title?: string;
  variant?: "default" | "accordion" | "outlined" | "elevated";
  grow?: number;
  showContent?: boolean;
  showCard?: boolean;
  width?: string | number;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  showContent = true, 
  showCard = true, 
  variant = "default", 
  backgroundColor = null, 
  textColor,
  onClick, 
  grow = 0, 
  title, 
  width = "auto",
  children,
  className = "",
}) => {
  const { colors } = useTheme();
  const [show, setShowContent] = useState(showContent);
  
  // Définir des valeurs par défaut pour spacing, borderRadius et shadows
  const defaultSpacing = "16px";
  const defaultBorderRadius = "8px";
  const defaultShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  
  const onClickAccordion = () => {
    if (variant === "accordion") {
      setShowContent(!show);
    }
  };

  const getCardStyles = () => {
    let styles = {
      display: "flex",
      width: width,
      flexDirection: "column" as const,
      flexWrap: "nowrap" as const,
      flexGrow: grow,
      padding: showCard ? defaultSpacing : 0,
      color: textColor ?? colors.text,
      backgroundColor: backgroundColor ?? colors.background,
      borderRadius: showCard ? defaultBorderRadius : 0,
      borderStyle: "solid",
      borderColor: showCard ? colors.border : "transparent",
      borderWidth: showCard ? "0.5px" : 0,
      transition: "all 0.2s ease-in-out",
      cursor: onClick || variant === "accordion" ? "pointer" : "default",
    };
    
    // Appliquer les styles spécifiques selon la variante
    if (variant === "outlined") {
      styles.backgroundColor = "transparent";
      styles.borderWidth = "1px";
    } else if (variant === "elevated") {
      styles.boxShadow = defaultShadow;
      styles.borderWidth = "0px";
    }
    
    return styles;
  };

  return (
    <div 
      className={`card-kariu ${className} card-kariu--${variant}`} 
      onClick={onClick} 
      style={getCardStyles()}
    >
      {title && renderTitle({
        title,
        variant,
        textColor: textColor ?? colors.text,
        showContent: show,
        onClickAccordion
      })}
      
      {show && children && (
        <div 
          className="card-kariu--content" 
          style={{
            color: "inherit",
            backgroundColor: "inherit",
            flexDirection: "column" as const,
            flexWrap: "nowrap" as const,
            flexGrow: grow,
            paddingTop: variant === "accordion" ? defaultSpacing : 0,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

function renderTitle({
  title,
  variant,
  textColor,
  showContent,
  onClickAccordion
}: {
  title: string;
  variant?: string;
  textColor: string;
  showContent?: boolean;
  onClickAccordion?: () => void;
}) {
  if (variant === "accordion") {
    return (
      <div style={{
        display: "flex",
        flexWrap: "nowrap" as const,
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
        userSelect: "none",
      }}>
        <Title align="left" textColor={textColor} text={title} priority={4} />
        <Arrow
          size={24}
          style={{
            transform: showContent ? "rotate(0deg)" : "rotate(-180deg)",
            transition: "transform 0.3s ease"
          }}
          direction={showContent ? "up" : "down"}
          onClick={onClickAccordion}
        />
      </div>
    );
  }
  
  return (
    <Title
      align="left"
      textColor={textColor}
      fontFamily="inherit"
      text={title}
      priority={4}
    />
  );
}

Card.defaultProps = {
  loading: false,
  variant: "default",
  grow: 1,
  showCard: true,
  width: "auto",
};

export default Card;
