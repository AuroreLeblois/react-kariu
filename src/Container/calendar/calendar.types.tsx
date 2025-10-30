// Legacy item shape kept for backward compatibility
export interface LegacyItem {
  /** Optional activity code for body item */
  activity_code?: string;
  /** Optional unavailability code for body item */
  unavailability_code?: string;
  /** Optional start time for body item */
  startTime?: string;
  /** Optional end time for body item */
  endTime?: string;
  /** Optional marked for body item */
  marked?: boolean;
  /** Optional special for body item */
  special?: boolean;
}

export interface BodyItemProps {
  /** Optional font family for body item */
  fontFamily?: string;
  /** Optional font size for body item */
  fontSize?: number;
  /** Optional font weight for body item */
  fontWeight?: number;
  /** Optional font color for body item */
  fontColor?: string;
  /** Generic event (preferred) */
  event?: CalendarEvent;
  /** Legacy item support */
  item?: LegacyItem;
  /**
   * If the cell represents a weekend day
   */
  isWeekEnd?: boolean;
  /**
   * If the cell represents a holiday
   */
  isHoliday?: boolean;
  /**
   * Number to display (for datepicker mode)
   */
  number?: number;
  /**
   * If the cell is in loading state
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Additional class name for styling
   */
  className?: string;
  /**
   * If the cell has a ripple effect on click
   */
  ripple?: boolean;
  /**
   * Duration of the ripple effect
   */
  rippleDuration?: number;
  /**
   * Color of the ripple effect
   */
  rippleColor?: string;
}

// Legacy shape kept for backward compatibility
export type InfoItem = {
  /** Optional url for avatar */
  url?: string;
  /** Optional name for avatar */
  name?: string;
  /** Optional site name for avatar */
  site_name?: string;
  /** Event date */
  date_start: string; // YYYY-MM-DD
  /** Legacy: activity code */
  activity_code?: string;
  /** Legacy: unavailability code */
  unavailability_code?: string;
  /** Optional marked for info item */
  marked?: boolean;
  /** Optional special for info item */
  special?: boolean;
};

// Generic calendar event
export type CalendarEvent = {
  /** Event ISO date: YYYY-MM-DD */
  date: string;
  /** Row identifier (person/site) */
  person?: string;
  /** Alternative site name to match vhead */
  site?: string;
  /** Main label to display */
  label?: string;
  /** Optional start/end time (HH:mm) */
  startTime?: string;
  endTime?: string;
  /** Optional variant to help styling/mapping */
  variant?: 'default' | 'unavailability' | 'info' | 'success' | 'warning' | 'error';
  /** Optional flags */
  marked?: boolean;
  /** Optional special for event */
  special?: boolean;
};

export type Holiday = {

 month_day: string; // MM-DD
};

export interface CalendarProps {
 /** Optional class name for styling */
 className?: string;
 /** Optional language for calendar */
 language?: "en" | "fr"| "es" | "de" | "it" | "pt" | "nl" | "pl" | "ro" | "ru";
 /** Optional year selected for calendar */
 yearSelected: number; // 2025
 /** Optional month selected for calendar */
 monthSelected: number; // 1..12
 /** Optional vhead for calendar */
 vhead: Array<{ name?: string }>;
  /** Generic calendar events (preferred) */
  events?: CalendarEvent[];
  /** Legacy data support */
  infos?: InfoItem[];
 /** Optional holidays for calendar */
 holidays?: Holiday[];
 loading?: boolean;
 showAvatar?: boolean;
 /** Optional no name text for calendar */
 noNameText?: string;
 /** Optional infos unavailable for calendar */
 infosUnavailable?: string;
 /** Optional text loading for calendar */
 textLoading?: string;
 /** Optional font family for calendar */
 fontFamily?: string;
  onClickItem?: (event: CalendarEvent) => void;
}

export interface CustomCSSProperties extends React.CSSProperties {
  textAlign?: "left" | "center" | "right" | "justify" | "inherit";
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  cursor?: string;
  border?: string;
  zIndex?: number;
  filter?: string;
  backgroundColorHover?: string;
  backgroundColorActive?: string;
  backgroundColorFocus?: string;
  backgroundColorDisabled?: string;
  backgroundColorSelected?: string;
  backgroundColorSelectedHover?: string;
  backgroundColorSelectedActive?: string;
  backgroundColorSelectedFocus?: string;
  backgroundColorSelectedDisabled?: string;
  backgroundColorSelectedSelected?: string;
  backgroundColorSelectedSelectedHover?: string;
  backgroundColorSelectedSelectedActive?: string;
  backgroundColorSelectedSelectedFocus?: string;
  backgroundColorSelectedSelectedDisabled?: string;
}