import React from "react";
import {styleAvatar} from './styleAvatar' 
import { useTheme } from "../../Theme/ThemeProvider";
/**
 * Primary UI component for user interaction
 */

interface AvatarProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use, if none is provided, the theme color will be used
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Avatar shape
   */
  shape?: "square" | "round";
  /**
   * Button classname override
   */
  className?: string;
  /**
   * Button style overrides
   */
  sx?: React.CSSProperties;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children?: React.ReactElement;
    /**
   * Optional url form image
   */
  url?: string;
     /**
   * Optional Font for avatar
   */
  fontFamily?: string;
       /**
   * Optional size in pixels for avatar
   */
  customWidthAndHeight?: number;
    /**
   *Name for your Avatar
   */
  name: String;
}

const Avatar: React.FC<AvatarProps> = ({
  primary = true,
  size = 'medium',
  backgroundColor = null,
  shape = 'round',
  className,
  children,
  sx = {},
  fontFamily,
  customWidthAndHeight,
  url = null,
  name = 'Aurore Leblois'
}) => {
  // Utiliser le hook de thème
  const { colors } = useTheme();
  
  // Utiliser la couleur du thème si aucune couleur n'est spécifiée
  const bgColor = backgroundColor || colors.primary.main;
  
  // Renderers ----------------------------------------------------------------
  let content = null;

  

 if (url) {
    content = (
      <img
        src={url}
        className={`avatar-kariu--img`}
        alt={'avatar-kariu-url'}
        style={{ width: '100%', height: '100%', 
          objectFit: 'cover',
          borderRadius: shape === 'round' ? '50%' : '10%'
          }} 
      />
    );
  } else {
    let fullName = name.split(" ");
    content =
      fullName[0].charAt(0) + (fullName[1] ? fullName[1].charAt(0) : "");
  }

  return (
    <div className={`avatar-kariu ${className}`} 
      style={{...styleAvatar(bgColor, shape, size, url,customWidthAndHeight, fontFamily), ...sx}}
    >
      {content}
      {!!children && children}
    </div>
  );
};

export default Avatar;
