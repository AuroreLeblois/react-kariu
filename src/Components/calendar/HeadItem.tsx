import React from "react";
import { useTheme } from "../../Theme/ThemeProvider";

interface HeadColsProps {
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
  number?: string| number;
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
  date: {
    day: string;
    number: string| number;
    isToday: boolean;
  };
}
const HeadItem: React.FC<HeadColsProps> = ({ date, fontFamily, className }) => {
  const {colors} = useTheme();

  // Renderers ----------------------------------------------------------------

  if (!date) return null;

  const styleTh = {
    minWidth:
      //for future custom datePicker
      date.number ? "2.5rem" : "auto",
    cursor: "default",
    span: {
      fontFamily: fontFamily ? fontFamily : "inherit",
    },
  };

  const styleText = {
    fontSize: "1rem",
    lineHeight: "1.2rem",
    fontWeight: date.isToday ? "regular" : "semibold",
    color: date.isToday ? colors.primary.main : colors.secondary.main,
  };

  const styleCurrentDay = {
    margin: "0.125rem" + " " + 0,
    padding: "0.125rem" + " " + 0,
    borderBottom: date.isToday
      ? `${"0.125rem"} solid ${colors.primary.main}`
      : "none",
  };

  let number = date.number ? date.number : null;
  if (number && date.day && number < 10 && number.length < 2)
    number = "0" + number;

  if (number && date.day) {
    // Calendar
    return (
      <th className={'tableHead-kariu ' + className} style={styleTh}>
        <div className={'tableHead-kariu-currentDay'} style={styleCurrentDay}>
          <div className={'tableHead-kariu-text'} style={styleText}>{date.day.toUpperCase()}</div>
          <div className={'tableHead-kariu-text'} style={styleText}>{number}</div>
        </div>
      </th>
    );
  } else if (!number && date.day) {
    // Datepicker
    return (
      <th className={'tableHead-kariu ' + className} style={styleTh}>
        <span className={'tableHead-kariu-text'} style={styleText}>{date.day.toUpperCase()}</span>
      </th>
    );
  }
};

export default HeadItem;
