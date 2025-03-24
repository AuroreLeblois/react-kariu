import React from "react";
import Dot from "../../Atoms/Assets/Dot";
import Ripple from "../../Atoms/Ripple/Ripple";

interface Item {
  /**
   * Activity code to display
   */
  activity_code?: string;
  /**
   * Unavailability code to display
   */
  unavailability_code?: string;
  /**
   * Start time of the activity
   */
  time_start?: string;
  /**
   * End time of the activity
   */
  time_end?: string;
  /**
   * Start time of the unavailability
   */
  unavailability_time_start?: string;
  /**
   * End time of the unavailability
   */
  unavailability_time_end?: string;
  /**
   * If the item is marked with a special dot
   */
  marked?: boolean;
  /**
   * If the item has a special status
   */
  special?: boolean;
}

interface BodyItemProps {
  /**
   * Item data to display in the cell
   */
  item?: Item;
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
   * Font family to use for the cell content
   */
  fontFamily?: string;
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

interface CustomCSSProperties extends React.CSSProperties {
  textAlign?: "left" | "center" | "right" | "justify" | "inherit";
}

const BodyItem: React.FC<BodyItemProps> = ({item, isWeekEnd, isHoliday, number, loading, onClick, fontFamily, className, ripple = false, rippleDuration = 500,  rippleColor = 'rgba(0, 0, 0, 0.3)'}) => {
  // Functions ----------------------------------------------------------------
  const renderInfo = (styleText: CustomCSSProperties) => {
    return (
      <React.Fragment>
        {renderDots()}
        {renderActivityCode(styleText)}
        {renderTimes(styleText)}
      </React.Fragment>
    );
  };

  const renderActivityCode = (styleText: CustomCSSProperties) => {
    const styleCode = {
      ...styleText,
      fontSize: "0.85rem",
      lineHeight: "1rem",
    };
    return <span style={styleCode} className={`bodyItem-kariu-activityCode ${className}`}>{item?.activity_code}</span>;
  };

  const renderUnavailability = (styleText: CustomCSSProperties) => {
    return (
      <React.Fragment>
      {renderDots()}
        <span style={styleText} className={`bodyItem-kariu-unavailability ${className}`}>{item?.unavailability_code}</span>
        {renderTimes(styleText)}
      </React.Fragment>
    );
  };

  const renderTimes = (styleText: CustomCSSProperties) => {
    if (!item?.time_start && !item?.unavailability_time_start)
      return null;

    const timeStart = item?.unavailability_code
      ? item?.unavailability_time_start
      : item?.time_start;

    const timeEnd = item?.unavailability_code
      ? item?.unavailability_time_end
      : item?.time_end;

    return (
      <React.Fragment>
        <span style={styleText}>{timeStart}</span>
        <span style={styleText}>{timeEnd}</span>
      </React.Fragment>
    );
  };

  const renderDots = () => {
    if (!item?.marked && !item?.special) return null;

    const styleStickers: CustomCSSProperties = {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flexDirection: "row",
      flexFlow: "row nowrap",
      marginBottom: "0.125rem",
      gap: "0.125rem",
    };

    let content: JSX.Element[] = [];

    // Unavailability on a part of a item
    if (item?.special) content.push(<Dot key="special" special={true} />);

    // Marked (a specific type of bonus)
    if (item?.marked) content.push(<Dot key="marked" marked={true} />);

    return <span style={styleStickers} className={`bodyItem-kariu-stickers ${className}`}>{content}</span>;
  };

  const handleBackgroundColor = (isEmpty: boolean): string | null => {
    // Empty cell with no data
    if (isEmpty) return null;

    if (item?.unavailability_code) {
      // Unavailability
      return "#ab88ab";
    } else if (
      // Day
      item?.time_end &&
      item?.time_start &&
      item.time_end > item.time_start
    ) {
      return "rgb(238, 229, 2)";
    } else if (
      // Night
      item?.time_end &&
      item?.time_start &&
      item.time_end < item.time_start
    ) {
      return "rgb(103, 127, 233)";
    }
    return null;
  };

  const handleForegroundColor = (isEmpty: boolean): string | null => {
    if (number) return null; // Datepicker item
    if (isEmpty) return "inherit";

    if (
      // Unavailability
      item?.unavailability_code
    ) {
      return "rgb(66, 41, 102)";
    } else if (
      // Day
      item?.time_end &&
      item?.time_start &&
      item.time_end > item.time_start
    ) {
      return "rgb(119, 130, 30)";
    } else if (
      // Night
      item?.time_end &&
      item?.time_start &&
      item.time_end < item.time_start
    ) {
      return "rgb(18, 34, 119)";
    }
    return null;
  };

  const isEmpty: boolean =
    !item && // Vacation or unavailability
    !number; // Datepicker

  // Cell background color
  const bgColor = handleBackgroundColor(isEmpty);

  const styleTd = {
    position: "relative" as "relative",
    height: "2.95rem",
    padding: "0.125rem",
    verticalAlign: "middle",
    cursor: isEmpty ? "default" : "pointer",
    backgroundColor:
      isHoliday ? "tomato" : isWeekEnd ? "lightgrey" : "inherit",
    overflow: "hidden",
  } as const;

  const renderCell = (isEmpty: boolean, bgColor: string | null) => {
    if (isEmpty) return null;

    const styleText: CustomCSSProperties = {
      fontFamily: fontFamily ? fontFamily : "inherit",
      fontSize: "0.75rem",
      lineHeight: "1rem",
      color: handleForegroundColor(isEmpty),
      textAlign: "center",
      cursor: "pointer",
    };

    const styleDiv = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
      height: "99%",
      border: bgColor ? `0.125rem solid ${bgColor}` : undefined,
      borderRadius: "4px",
      backgroundColor: bgColor,
      padding: "0rem 0.25rem",
      ":hover": { filter: "brightness(90%)" },
      ":active": { backgroundColor: bgColor },
      ":focus": { backgroundColor: bgColor },
      zIndex: -5
    } as const;

    let content = null;
    if (!item?.unavailability_code) {
      // infos
      content = renderInfo(styleText);
    } else {
      // Unavailability
      content = renderUnavailability(styleText);
    }

    return <div style={styleDiv} className='bodyItem-kariu-cell'>{content}</div>;
  };

  return (
    <td style={styleTd} className='bodyItem-kariu-cell-td' onClick={onClick}>
      {ripple && <Ripple duration={rippleDuration} color={rippleColor} />}
      {renderCell(isEmpty, bgColor)}
    </td>
  );
};

export default BodyItem; 