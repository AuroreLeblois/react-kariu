import React from "react";
import { css } from "@emotion/css";
import Dot from "../../Atoms/Assets/Dot";

interface Item {
  activity_code?: string;
  unavailability_code?: string;
  time_start?: string;
  time_end?: string;
  unavailability_time_start?: string;
  unavailability_time_end?: string;
  marked?: boolean;
  special?: boolean;
}

interface BodyItemProps {
  item?: Item;
  isWeekEnd?: boolean;
  isHoliday?: boolean;
  number?: number;
  loading?: boolean;
  onClick?: () => void;
  fontFamily?: string;
}

interface CustomCSSProperties extends React.CSSProperties {
  textAlign?: "left" | "center" | "right" | "justify" | "inherit";
}

const BodyItem: React.FC<BodyItemProps> = (props) => {
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
    return <span className={css(styleCode)}>{props.item?.activity_code}</span>;
  };

  const renderUnavailability = (styleText: CustomCSSProperties) => {
    return (
      <React.Fragment>
        <span className={css(styleText)}>{props.item?.unavailability_code}</span>
        {renderDots()}
        {renderTimes(styleText)}
      </React.Fragment>
    );
  };

  const renderTimes = (styleText: CustomCSSProperties) => {
    if (!props.item?.time_start && !props.item?.unavailability_time_start)
      return null;

    const timeStart = props.item?.unavailability_code
      ? props.item?.unavailability_time_start
      : props.item?.time_start;

    const timeEnd = props.item?.unavailability_code
      ? props.item?.unavailability_time_end
      : props.item?.time_end;

    return (
      <React.Fragment>
        <span className={css(styleText)}>{timeStart}</span>
        <span className={css(styleText)}>{timeEnd}</span>
      </React.Fragment>
    );
  };

  const renderDots = () => {
    if (!props.item?.marked && !props.item?.special) return null;

    const styleStickers = {
      position: "absolute",
      top: "0.125rem",
      left: "0.125rem",
      display: "flex",
      flexFlow: "row nowrap",
    };

    let content: JSX.Element[] = [];

    // Unavailability on a part of a item
    if (props.item?.special) content.push(<Dot key="special" special={true} />);

    // Bonus or marked (a specific type of bonus)
    if (props.item?.marked) content.push(<Dot key="marked" marked={true} />);

    return <span className={css(styleStickers)}>{content}</span>;
  };

  const handleBackgroundColor = (isEmpty: boolean): string | null => {
    // Empty cell with no data
    if (isEmpty) return null;

    const item = props.item;
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
    if (props.number) return null; // Datepicker item
    if (isEmpty) return "inherit";

    if (
      // Unavailability
      props.item?.unavailability_code
    ) {
      return "rgb(66, 41, 102)";
    } else if (
      // Day
      props.item?.time_end &&
      props.item?.time_start &&
      props.item.time_end > props.item.time_start
    ) {
      return "rgb(119, 130, 30)";
    } else if (
      // Night
      props.item?.time_end &&
      props.item?.time_start &&
      props.item.time_end < props.item.time_start
    ) {
      return "rgb(18, 34, 119)";
    }
    return null;
  };

  const isEmpty: boolean =
    !props.item && // Vacation or unavailability
    !props.number; // Datepicker

  // Cell background color
  const bgColor = handleBackgroundColor(isEmpty);

  const styleTd = {
    position: "relative",
    height: "2.95rem",
    padding: "0.125rem",
    verticalAlign: "middle",
    cursor: isEmpty ? "default" : "pointer",
    backgroundColor:
      // Holiday > Weekend > Default
      props.isHoliday ? "grey" : props.isWeekEnd ? "lightgrey" : "inherit",
  } as const;

  const renderCell = (isEmpty: boolean, bgColor: string | null) => {
    if (isEmpty) return null;

    const styleText: CustomCSSProperties = {
      fontFamily: props.fontFamily ? props.fontFamily : "inherit",
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
      padding: "0rem 0.5rem",
      backgroundColor: bgColor,
      ":hover": { filter: "brightness(90%)" },
      ":active": { backgroundColor: bgColor },
      ":focus": { backgroundColor: bgColor },
    } as const;

    let content = null;
    if (!props.item?.unavailability_code) {
      // infos
      content = renderInfo(styleText);
    } else {
      // Unavailability
      content = renderUnavailability(styleText);
    }

    return <div className={css(styleDiv)}>{content}</div>;
  };

  return (
    <td className={css(styleTd)} onClick={props.onClick}>
      {renderCell(isEmpty, bgColor)}
    </td>
  );
};

export default BodyItem; 