import React from 'react';

export interface NavigationItem {
  /** Stable identifier used to manage the active item. */
  id: string;
  /** Visible item label. */
  label: string;
  /** Optional icon displayed before or above the label. */
  icon?: React.ReactNode;
  /** Optional destination. When omitted, the item is rendered as a button. */
  href?: string;
  /** Opens link items in a new browsing context. */
  target?: React.HTMLAttributeAnchorTarget;
  /** Optional notification or counter badge. */
  badge?: React.ReactNode;
  /** Disables navigation and selection. */
  disabled?: boolean;
  /** Accessible label when the visible label is hidden. */
  ariaLabel?: string;
  /** Additional click handler. */
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
}

export interface BaseNavigationProps {
  /** Navigation entries. */
  items: NavigationItem[];
  /** Controlled active item identifier. */
  activeId?: string;
  /** Initial active item identifier for uncontrolled usage. */
  defaultActiveId?: string;
  /** Called after an enabled item is selected. */
  onActiveChange?: (id: string, item: NavigationItem) => void;
  /** Accessible label for the navigation landmark. */
  ariaLabel?: string;
  /** Navigation background color. */
  backgroundColor?: string;
  /** Default item text and icon color. */
  textColor?: string;
  /** Active item text and icon color. */
  activeColor?: string;
  /** Active item background color. */
  activeBackgroundColor?: string;
  /** Additional CSS class. */
  className?: string;
  /** Additional inline styles and CSS variables. */
  sx?: React.CSSProperties;
}

export interface SideNavProps extends BaseNavigationProps {
  /** Optional brand or header content. */
  brand?: React.ReactNode;
  /** Side navigation width. */
  width?: string | number;
  /** Width when collapsed. */
  collapsedWidth?: string | number;
  /** Controlled collapsed state. */
  collapsed?: boolean;
  /** Initial collapsed state for uncontrolled usage. */
  defaultCollapsed?: boolean;
  /** Displays the collapse control. */
  collapsible?: boolean;
  /** Called when the collapsed state changes. */
  onCollapsedChange?: (collapsed: boolean) => void;
  /** Side of the viewport used by the navigation. */
  position?: 'left' | 'right';
  /** Keeps the navigation attached to the viewport. */
  fixed?: boolean;
  /** Viewport width under which the navigation is hidden. */
  breakpoint?: number;
  /** Hides the side navigation below the breakpoint. */
  hideBelowBreakpoint?: boolean;
  /** Label visibility strategy. */
  showLabels?: 'always' | 'expanded';
  /** Accessible label for the collapse control. */
  collapseLabel?: string;
  /** Accessible label for the expand control. */
  expandLabel?: string;
}

export interface BottomNavProps extends BaseNavigationProps {
  /** Keeps the navigation attached to the bottom of the viewport. */
  fixed?: boolean;
  /** Viewport width used by mobile-only mode. */
  breakpoint?: number;
  /** Hides the bottom navigation above the breakpoint. */
  mobileOnly?: boolean;
  /** Label visibility strategy. */
  showLabels?: 'always' | 'active' | 'never';
  /** Adds a top border to separate navigation from content. */
  bordered?: boolean;
}

export interface HeaderNavProps extends BaseNavigationProps {
  /** Brand or logo displayed before navigation items. */
  brand?: React.ReactNode;
  /** Content displayed after navigation items. */
  trailingContent?: React.ReactNode;
  /** Keeps the navigation attached to the top of the viewport. */
  sticky?: boolean;
  /** Viewport width under which the compact menu is used. */
  breakpoint?: number;
  /** Enables the compact responsive menu. */
  responsive?: boolean;
  /** Horizontal content width constraint. */
  maxWidth?: string | number;
  /** Accessible label for the compact menu button. */
  menuLabel?: string;
  /** Controlled compact menu state. */
  menuOpen?: boolean;
  /** Initial compact menu state for uncontrolled usage. */
  defaultMenuOpen?: boolean;
  /** Called when the compact menu state changes. */
  onMenuOpenChange?: (open: boolean) => void;
}
