export * from './Animation';
export * from './Container';
export * from './Theme';
export * from './Atoms';

// Ripple Component
export { default as Ripple } from './Animation/Ripple/Ripple';

// Button Component
export { default as Button } from './Atoms/Button/Button';

// Atoms Components
export { default as Avatar } from './Atoms/Avatar/Avatar';
export { default as Dot } from './Atoms/Assets/Dot';
export { default as ExternalIcon } from './Atoms/Icon/ExternalIcon';
export { default as ArrowDown } from './Atoms/Icon/ArrowDown';
export { default as Icon } from './Atoms/Icon/Icon';

export { default as HoverAnimation } from './Animation/HoverAnimation';
export { default as SlideAnimation } from './Animation/SlideAnimation';
export { default as Carousel } from './Animation/Carousel/Carousel';

// Text Components
export { default as Link } from './Atoms/Link/Link';
export { default as Text } from './Atoms/Text/Text';
export { default as Title } from './Atoms/Text/Title';

// Input Components
export { default as Input } from './Atoms/Input/Input';
export { default as CheckBox } from './Atoms/Input/CheckBox';
export { default as Switch } from './Atoms/Input/Switch';

// Calendar Components
export { default as HeadCols } from './Container/calendar/HeadCols';
export { default as BodyItem } from './Container/calendar/BodyItem';
export { default as HeadItem } from './Container/calendar/HeadItem';

// Container Components
export { default as Card } from './Container/Card/Card';
// Theme
export { ThemeProvider, useTheme } from './Theme/ThemeProvider';
export { defaultThemes } from './Theme/defaultTheme';
export { calculateShades, getContrastTextColor } from './Theme/colorContrast';
