import React from "react";
import Dot from "../../Atoms/Assets/Dot";
import Ripple from "../../Animation/Ripple/Ripple";
import { useTheme } from "../../Theme/ThemeProvider";
import { BodyItemProps, CustomCSSProperties } from "./calendar.types";
import { getContrastTextColor } from "../../Theme/colorContrast";

const BodyItem: React.FC<BodyItemProps> = ({
  event, isWeekEnd, 
  isHoliday, number, onClick, fontFamily, className, 
  ripple = false, rippleDuration = 500,  rippleColor = 'rgba(0, 0, 0, 0.3)',
  wrapWithTd = true,
}) => {
  const { colors } = useTheme();

  const renderInfo = (styleText: CustomCSSProperties) => {
    return (
      <React.Fragment>
        {renderDots()}
        {renderLabel(styleText)}
        {renderTimes(styleText)}
      </React.Fragment>
    );
  };

  const renderLabel = (styleText: CustomCSSProperties) => {
    const styleCode = {
      ...styleText,
      fontSize: "0.85rem",
      lineHeight: "0.85rem",
    };
    return <span style={styleCode} className={`bodyItem-kariu-activityCode ${className}`}>{event?.label}</span>;
  };

  const renderUnavailability = (styleText: CustomCSSProperties) => {
    return (
      <React.Fragment>
      {renderDots()}
        <span style={styleText} className={`bodyItem-kariu-unavailability ${className}`}>{event?.label}</span>
        {renderTimes(styleText)}
      </React.Fragment>
    );
  };

  const renderTimes = (styleText: CustomCSSProperties) => {
    if (!event || !event?.startTime)
      return null;
    const timeStart = event.startTime;
    const timeEnd = event.endTime;

    return (
      <React.Fragment>
        <span style={styleText}>{timeStart}</span>
        <span style={styleText}>{timeEnd}</span>
      </React.Fragment>
    );
  };

  const renderDots = () => {
    if (!event?.marked && !event?.special) return null;

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
    if (event?.special) content.push(<Dot key="special" special={true} />);

    // Marked (a specific type of bonus)
    if (event?.marked) content.push(<Dot key="marked" marked={true} />);

    return <span style={styleStickers} className={`bodyItem-kariu-stickers ${className}`}>{content}</span>;
  };

  const handleBackgroundColor = (isEmpty: boolean): string | null => {
    // Empty cell with no data
    if (isEmpty) return null;
    if (event?.variant === 'unavailability') return colors.secondary.light;
    if (event?.variant === 'success') return colors.success.light;
    if (event?.variant === 'warning') return colors.warning.light;
    if (event?.variant === 'error') return colors.error.light;
    if (event?.variant === 'info') return colors.info.light;
    // default: try inferring by time
    if (event?.endTime && event?.startTime && event.endTime > event.startTime) return colors.primary.light;
    if (event?.endTime && event?.startTime && event.endTime < event.startTime) return colors.secondary.light;
    // fallback: any labeled default event gets a primary background
    if (event && event.label) return colors.primary.light;
    return null;
  };

  const handleForegroundColor = (isEmpty: boolean): string | null => {
    if (number) return null; // Datepicker item
    if (event?.variant === 'unavailability') return colors.text.main;
    if (event?.variant === 'success') return colors.success.main;
    if (event?.variant === 'warning') return colors.warning.main;
    if (event?.variant === 'error') return colors.error.main;
    if (event?.variant === 'info') return colors.info.main;
    if (event?.endTime && event?.startTime && event.endTime > event.startTime) return colors.info.dark;
    if (event?.endTime && event?.startTime && event.endTime < event.startTime) return colors.info.light;
    return colors.text.main;
  };

  const isEmpty: boolean =
    !event && // no content
    !number; // Datepicker

  // Cell background color
  const bgColor = handleBackgroundColor(isEmpty);

  const styleTd = {
    position: "relative" as "relative",
    verticalAlign: "middle",
    cursor: isEmpty ? "default" : "pointer",
    backgroundColor:
      isHoliday ? colors.primary.light : isWeekEnd ? colors.background.light : "inherit",
    overflow: "hidden",
  } as const;

  const renderCell = (isEmpty: boolean, bgColor: string | null) => {
    if (isEmpty) return null;

    const styleText: CustomCSSProperties = {
      fontFamily: fontFamily ?? colors.fontFamily,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      color: getContrastTextColor(bgColor),
      textAlign: "center",
      cursor: isEmpty ? "default" : "pointer",
    };

    const styleDiv = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
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
    if (event?.variant === 'unavailability') {
      content = renderUnavailability(styleText);
    } else {
      content = renderInfo(styleText);
    }

    return <div style={styleDiv} className='bodyItem-kariu-cell'>{content}</div>;
  };

  const inner = (
    <React.Fragment>
      {ripple && !isEmpty && wrapWithTd && (
        <Ripple duration={rippleDuration} color={rippleColor} />
      )}
      {renderCell(isEmpty, bgColor)}
    </React.Fragment>
  );

  if (!wrapWithTd) return inner;

  return (
    <td style={styleTd} className='bodyItem-kariu-cell-td' onClick={onClick}>
      {inner}
    </td>
  );
};

export default BodyItem; 