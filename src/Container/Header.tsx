import React from 'react';
import { useTheme } from '../Theme/ThemeProvider';
import { getContrastTextColor } from '../Theme/colorContrast';
import { Title } from '../Atoms';
import { Layout } from '.';

export type NavButton = {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
};

export interface HeaderProps {
  title: string;
  logo?: React.ReactNode;
  navButtons?: Array<NavButton | React.ReactNode>;
  style?: React.CSSProperties;
}

const Header: React.FC<HeaderProps> = ({ title, logo, navButtons, style }) => {
  const { colors } = useTheme();

  // Choix d'un fond contrasté
  const background = colors.primary?.main || colors.background?.main || '#222';
  const textColor = getContrastTextColor(background);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.75rem 2rem',
        background,
        color: textColor,
        fontFamily: colors.fontFamily,
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        minHeight: 64,
        ...style,
      }}
    >
      <Layout display="flex" alignItems="center" gap="12px">
        {logo && <span style={{ display: 'flex', alignItems: 'center', height: 40 }}>{logo}</span>}
        <Title priority={2} text={title} textColor={textColor}/>
      </Layout>
     
      <nav style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {navButtons && navButtons.map((btn, i) => {
          // Si btn est un objet NavButton (avec label), sinon c'est un ReactNode
         
          // Sinon, c'est un ReactNode
          return React.isValidElement(btn) ? React.cloneElement(btn, { key: i }) : null;
        })}
      </nav>
    </header>
  );
};

export default Header; 