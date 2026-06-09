import React from 'react';
import { useTheme } from '../../Theme/ThemeProvider';
import NavigationItems from './NavigationItems';
import { HeaderNavProps } from './Navigation.types';
import {
  toCssSize,
  useBelowBreakpoint,
  useControllableBoolean,
  useNavigationState,
} from './useNavigation';
import './navigation.css';

let headerNavId = 0;

const MenuIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
  >
    {open ? (
      <>
        <path
          d="M5 5L17 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17 5L5 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    ) : (
      <>
        <path
          d="M4 6H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 11H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 16H18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </>
    )}
  </svg>
);

const HeaderNav: React.FC<HeaderNavProps> = ({
  items,
  activeId,
  defaultActiveId,
  onActiveChange,
  brand,
  trailingContent,
  sticky = false,
  breakpoint = 768,
  responsive = true,
  maxWidth = '1200px',
  menuLabel = 'Toggle navigation menu',
  menuOpen,
  defaultMenuOpen = false,
  onMenuOpenChange,
  ariaLabel = 'Header navigation',
  backgroundColor,
  textColor,
  activeColor,
  activeBackgroundColor,
  className = '',
  sx,
}) => {
  const { colors } = useTheme();
  const isBelowBreakpoint = useBelowBreakpoint(breakpoint);
  const isCompact = responsive && isBelowBreakpoint;
  const [isMenuOpen, setMenuOpen] = useControllableBoolean(
    menuOpen,
    defaultMenuOpen,
    onMenuOpenChange,
  );
  const { selectedId, selectItem } = useNavigationState(
    items,
    activeId,
    defaultActiveId,
    onActiveChange,
  );
  const menuIdRef = React.useRef<string | null>(null);
  if (menuIdRef.current === null) {
    headerNavId += 1;
    menuIdRef.current = `kariu-header-nav-menu-${headerNavId}`;
  }
  const menuId = menuIdRef.current;

  React.useEffect(() => {
    if (!isCompact && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [isCompact, isMenuOpen, setMenuOpen]);

  const style = {
    '--kariu-nav-background':
      backgroundColor ?? colors.background.light,
    '--kariu-nav-color': textColor ?? colors.text.main,
    '--kariu-nav-active-color': activeColor ?? colors.primary.main,
    '--kariu-nav-active-background':
      activeBackgroundColor ?? colors.primary.lightest,
    '--kariu-nav-border': colors.border,
    '--kariu-header-nav-max-width': toCssSize(maxWidth),
    fontFamily: colors.fontFamily,
    ...sx,
  } as React.CSSProperties;

  return (
    <header
      className={[
        'kariu-navigation',
        'kariu-header-nav',
        sticky ? 'kariu-header-nav--sticky' : '',
        isCompact ? 'kariu-header-nav--compact' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div className="kariu-header-nav__inner">
        {brand && <div className="kariu-header-nav__brand">{brand}</div>}

        {isCompact ? (
          <>
            <div className="kariu-header-nav__actions">
              {trailingContent}
              <button
                type="button"
                className="kariu-navigation__toggle kariu-header-nav__menu-toggle"
                aria-label={menuLabel}
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <MenuIcon open={isMenuOpen} />
              </button>
            </div>
            {isMenuOpen && (
              <nav
                id={menuId}
                className="kariu-header-nav__mobile-menu"
                aria-label={ariaLabel}
              >
                <NavigationItems
                  items={items}
                  activeId={selectedId}
                  layout="header"
                  showLabels="always"
                  onSelect={selectItem}
                  onItemSelected={() => setMenuOpen(false)}
                />
              </nav>
            )}
          </>
        ) : (
          <>
            <nav
              className="kariu-header-nav__items"
              aria-label={ariaLabel}
            >
              <NavigationItems
                items={items}
                activeId={selectedId}
                layout="header"
                showLabels="always"
                onSelect={selectItem}
              />
            </nav>
            {trailingContent && (
              <div className="kariu-header-nav__actions">
                {trailingContent}
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default HeaderNav;
