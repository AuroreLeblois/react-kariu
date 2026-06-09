import React from 'react';
import { NavigationItem } from './Navigation.types';

export function useNavigationState(
  items: NavigationItem[],
  activeId?: string,
  defaultActiveId?: string,
  onActiveChange?: (id: string, item: NavigationItem) => void,
) {
  const [internalActiveId, setInternalActiveId] = React.useState(
    defaultActiveId,
  );
  const selectedId = activeId ?? internalActiveId;

  const selectItem = React.useCallback(
    (item: NavigationItem) => {
      if (item.disabled) return;

      if (activeId === undefined) {
        setInternalActiveId(item.id);
      }
      onActiveChange?.(item.id, item);
    },
    [activeId, onActiveChange],
  );

  React.useEffect(() => {
    if (
      activeId === undefined &&
      internalActiveId !== undefined &&
      !items.some((item) => item.id === internalActiveId)
    ) {
      setInternalActiveId(defaultActiveId);
    }
  }, [activeId, defaultActiveId, internalActiveId, items]);

  return { selectedId, selectItem };
}

export function useControllableBoolean(
  controlledValue: boolean | undefined,
  defaultValue: boolean,
  onChange?: (value: boolean) => void,
) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue ?? internalValue;

  const setValue = React.useCallback(
    (nextValue: boolean) => {
      if (controlledValue === undefined) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [controlledValue, onChange],
  );

  return [value, setValue] as const;
}

export function useBelowBreakpoint(breakpoint: number) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const updateMatch = () => setMatches(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [breakpoint]);

  return matches;
}

export function toCssSize(value: string | number) {
  return typeof value === 'number' ? `${value}px` : value;
}
