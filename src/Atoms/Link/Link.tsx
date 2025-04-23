import {FC,useState, MouseEvent , CSSProperties} from 'react';
import { styleLink } from './styleLink';
import ExternalIcon from "../Icon/ExternalIcon";
import { useTheme } from '../../Theme/ThemeProvider';
/**
 * Primary UI component for navigation links
 */

interface LinkProps {
  /**
   * The URL of the link
   */
  href: string;
  /**
   * If the link is external
   */
  external?: boolean;
  /**
   * Link contents
   */
  label: string;
  /**
   * Link classname override
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  /**
   * Optional style overrides
   */
  sx?: CSSProperties;
  /**
   * Link size
   */
  size?: 'small' | 'medium' |'large';
  /**
   * If the link is disabled
   */
  disabled?: boolean;
}



const Link: FC<LinkProps> = ({
  href,
  external = false,
  label,
  className,
  onClick,
  disabled,
  size ='medium',
  sx = {},
 ...linkProps 
}) => {
  const { colors } = useTheme();
  const [visited, setVisited] = useState(false);
  
  const handleClick = (event) => {
      setVisited(true);
      if (onClick) onClick(event);
  };

  const linkCustom = styleLink( size, disabled) as unknown as CSSProperties;
  const completeStyle: CSSProperties = { ...linkCustom, ...sx, fontFamily: colors.fontFamily ?? 'inherit' };

  return (
    <span className={`kariuLink ${className}`}>
      <a
          href={href}
          onClick={handleClick}
          target={external ? '_blank' : '_self'}
          rel={external ? 'noopener noreferrer' : undefined}
          style={completeStyle}
          {...linkProps}
        >
          {label}
          {external && (<ExternalIcon size={24} color={visited ? 'purple' : 'blue'} />)}
        </a>
    </span>
  );
};

export default Link;