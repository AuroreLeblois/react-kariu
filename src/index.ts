// Exporter les composants individuellement est une meilleure pratique
export { default as Ripple } from './Atoms/Ripple/Ripple';
export { default as Button } from './Atoms/Button/Button';
export { default as Input } from './Atoms/Input/Input';

export { default as Avatar } from './Atoms/Avatar/Avatar';
export { default as Dot } from './Atoms/Assets/Dot';
export { default as ExternalIcon } from './Atoms/Icon/ExternalIcon';
export { default as ArrowDown } from './Atoms/Icon/ArrowDown';
export { default as Icon } from './Atoms/Icon/Icon';

export { default as HoverAnimation } from './Animation/HoverAnimation';
export { default as SlideAnimation } from './Animation/SlideAnimation';
export { default as Carousel } from './Animation/Carousel/Carousel';

export { default as Link } from './Atoms/Link/Link';
export { default as Text } from './Atoms/Text/Text';
export { default as Title } from './Atoms/Text/Title';
export { default as CheckBox } from './Atoms/Input/CheckBox';

// export { default as Calendar } from './Components/calendar/Calendar';
export { default as HeadCols } from './Components/calendar/HeadCols';
export { default as BodyItem } from './Components/calendar/BodyItem';
export { default as HeadItem } from './Components/calendar/HeadItem';

export { default as Card } from './Components/Card/Card';

// N'exporter que ce qui est réellement nécessaire des modules plus grands
export { ThemeProvider, useTheme } from './Theme/ThemeProvider';
export { defaultThemes } from './Theme/defaultTheme';
export { calculateShades, getContrastTextColor } from './Theme/colorContrast';

