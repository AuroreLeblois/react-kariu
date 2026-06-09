import React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import NavigationItems from './NavigationItems';
import { SideNavProps } from './Navigation.types';
import {
  toCssSize,
  useBelowBreakpoint,
  useControllableBoolean,
  useNavigationState,
} from './useNavigation';
import './navigation.css';

const CollapseIcon: React.FC<{
  collapsed: boolean;
  position: 'left' | 'right';
}> = ({ collapsed, position }) => {
  const pointsLeft =
    (position === 'left' && !collapsed) ||
    (position === 'right' && collapsed);

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={pointsLeft ? 'M12 4L6 10L12 16' : 'M8 4L14 10L8 16'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SideNav: React.FC<SideNavProps> = ({
  items,
  activeId,
  defaultActiveId,
  onActiveChange,
  brand,
  width = 264,
  collapsedWidth = 72,
  collapsed,
  defaultCollapsed = false,
  collapsible = true,
  onCollapsedChange,
  position = 'left',
  fixed = false,
  breakpoint = 768,
  hideBelowBreakpoint = true,
  showLabels = 'expanded',
  collapseLabel = 'Collapse navigation',
  expandLabel = 'Expand navigation',
  ariaLabel = 'Side navigation',
  backgroundColor,
  textColor,
  activeColor,
  activeBackgroundColor,
  className = '',
  sx,
}) => {
  const { colors } = useTheme();
  const isBelowBreakpoint = useBelowBreakpoint(breakpoint);
  const [isCollapsed, setCollapsed] = useControllableBoolean(
    collapsed,
    defaultCollapsed,
    onCollapsedChange,
  );
  const { selectedId, selectItem } = useNavigationState(
    items,
    activeId,
    defaultActiveId,
    onActiveChange,
  );

  if (hideBelowBreakpoint && isBelowBreakpoint) {
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
    '--kariu-side-nav-width': toCssSize(
      isCollapsed ? collapsedWidth : width,
    ),
    fontFamily: colors.fontFamily,
    ...sx,
  } as React.CSSProperties;

  return (
    <aside
      className={[
        'kariu-navigation',
        'kariu-side-nav',
        `kariu-side-nav--${position}`,
        fixed ? 'kariu-side-nav--fixed' : '',
        isCollapsed ? 'kariu-side-nav--collapsed' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {(brand || collapsible) && (
        <div className="kariu-side-nav__header">
          {brand && (
            <div className="kariu-side-nav__brand">
              {brand}
            </div>
          )}
          {collapsible && (
            <button
              type="button"
              className="kariu-navigation__toggle"
              aria-label={isCollapsed ? expandLabel : collapseLabel}
              aria-expanded={!isCollapsed}
              onClick={() => setCollapsed(!isCollapsed)}
            >
              <CollapseIcon
                collapsed={isCollapsed}
                position={position}
              />
            </button>
          )}
        </div>
      )}
      <nav className="kariu-side-nav__items" aria-label={ariaLabel}>
        <NavigationItems
          items={items}
          activeId={selectedId}
          layout="side"
          showLabels={showLabels}
          collapsed={isCollapsed}
          onSelect={selectItem}
        />
      </nav>
    </aside>
  );
};

export default SideNav;
