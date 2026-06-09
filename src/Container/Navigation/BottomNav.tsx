import React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import NavigationItems from './NavigationItems';
import { BottomNavProps } from './Navigation.types';
import { useBelowBreakpoint, useNavigationState } from './useNavigation';
import './navigation.css';

const BottomNav: React.FC<BottomNavProps> = ({
  items,
  activeId,
  defaultActiveId,
  onActiveChange,
  fixed = true,
  breakpoint = 768,
  mobileOnly = true,
  showLabels = 'always',
  bordered = true,
  ariaLabel = 'Bottom navigation',
  backgroundColor,
  textColor,
  activeColor,
  activeBackgroundColor,
  className = '',
  sx,
}) => {
  const { colors } = useTheme();
  const isBelowBreakpoint = useBelowBreakpoint(breakpoint);
  const { selectedId, selectItem } = useNavigationState(
    items,
    activeId,
    defaultActiveId,
    onActiveChange,
  );

  if (mobileOnly && !isBelowBreakpoint) {
    return null;
  }

  const style = {
    '--kariu-nav-background':
      backgroundColor ?? colors.background.light,
    '--kariu-nav-color': textColor ?? colors.text.main,
    '--kariu-nav-active-color': activeColor ?? colors.primary.main,
    '--kariu-nav-active-background':
      activeBackgroundColor ?? colors.primary.lightest,
    '--kariu-nav-border': colors.border,
    fontFamily: colors.fontFamily,
    ...sx,
  } as React.CSSProperties;

  return (
    <nav
      className={[
        'kariu-navigation',
        'kariu-bottom-nav',
        fixed ? 'kariu-bottom-nav--fixed' : '',
        bordered ? 'kariu-bottom-nav--bordered' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-label={ariaLabel}
    >
      <NavigationItems
        items={items}
        activeId={selectedId}
        layout="bottom"
        showLabels={showLabels}
        onSelect={selectItem}
      />
    </nav>
  );
};

export default BottomNav;
