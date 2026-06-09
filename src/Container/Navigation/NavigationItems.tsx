import React from 'react';
import { NavigationItem } from './Navigation.types';

interface NavigationItemsProps {
  items: NavigationItem[];
  activeId?: string;
  layout: 'side' | 'bottom' | 'header';
  showLabels: 'always' | 'active' | 'expanded' | 'never';
  collapsed?: boolean;
  onSelect: (item: NavigationItem) => void;
  onItemSelected?: () => void;
}

const NavigationItems: React.FC<NavigationItemsProps> = ({
  items,
  activeId,
  layout,
  showLabels,
  collapsed = false,
  onSelect,
  onItemSelected,
}) => (
  <>
    {items.map((item) => {
      const isActive = item.id === activeId;
      const hideLabel =
        showLabels === 'never' ||
        (showLabels === 'active' && !isActive) ||
        (showLabels === 'expanded' && collapsed);
      const className = [
        'kariu-navigation__item',
        `kariu-navigation__item--${layout}`,
        isActive ? 'kariu-navigation__item--active' : '',
        item.disabled ? 'kariu-navigation__item--disabled' : '',
        hideLabel ? 'kariu-navigation__item--label-hidden' : '',
      ]
        .filter(Boolean)
        .join(' ');

      const content = (
        <>
          {item.icon && (
            <span className="kariu-navigation__icon" aria-hidden="true">
              {item.icon}
            </span>
          )}
          <span className="kariu-navigation__label">{item.label}</span>
          {item.badge !== undefined && item.badge !== null && (
            <span className="kariu-navigation__badge">{item.badge}</span>
          )}
        </>
      );

      const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
      ) => {
        if (item.disabled) {
          event.preventDefault();
          return;
        }
        item.onClick?.(event);
        if (event.defaultPrevented) return;
        onSelect(item);
        onItemSelected?.();
      };

      if (item.href) {
        return (
          <a
            key={item.id}
            href={item.href}
            target={item.target}
            rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
            className={className}
            aria-current={isActive ? 'page' : undefined}
            aria-disabled={item.disabled || undefined}
            aria-label={hideLabel ? item.ariaLabel ?? item.label : item.ariaLabel}
            tabIndex={item.disabled ? -1 : undefined}
            onClick={handleClick}
          >
            {content}
          </a>
        );
      }

      return (
        <button
          key={item.id}
          type="button"
          className={className}
          aria-current={isActive ? 'page' : undefined}
          aria-label={hideLabel ? item.ariaLabel ?? item.label : item.ariaLabel}
          disabled={item.disabled}
          onClick={handleClick}
        >
          {content}
        </button>
      );
    })}
  </>
);

export default NavigationItems;
