import React from "react";
import HeadItem from "./HeadItem";
import moment from "moment";
import { useTheme } from "../../Theme/ThemeProvider";

// Types
interface HeadColsProps {
  language: string;
  yearSelected?: number;
  monthSelected?: number;
  fontFamily?: string;
}

interface DayInfo {
  day: string;
  number?: string;
  isToday?: boolean;
}

// Constantes
const weekdayshort: Record<string, string[]> = {
  fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

const currentDay: number = parseInt(moment().format("DD"));
const currentMonth: number = parseInt(moment().format("MM"));
const currentYear: number = parseInt(moment().format("YYYY"));

const HeadCols: React.FC<HeadColsProps> = (props) => {
  const { colors } = useTheme();
  // Renderers ----------------------------------------------------------------
  let days: Array<string | DayInfo> = [];

  const dateIsToday = (day: number, month: number, year: number): boolean => {
    if (day === currentDay && month === currentMonth && year === currentYear) {
      return true;
    }
    return false;
  };

  const getDayShort = (day: string | number): string => {
    const date = new Date(
      Date.UTC(props.yearSelected!, props.monthSelected! - 1, Number(day))
    );
    let dayShort = "";
    if (props.language === "en") {
      dayShort = moment(date).format("ddd");
    } else {
      dayShort = new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(
        date
      );
      dayShort = dayShort.slice(0, -1);
    }
    return dayShort;
  };

  if (!props.yearSelected && !props.monthSelected) {
    days = weekdayshort[props.language];
  } else if (props.yearSelected && props.monthSelected) {
    const daysInMonth = moment(
      `${props.yearSelected}-${props.monthSelected}`
    ).daysInMonth();

    for (let index = 1; index <= daysInMonth; index++) {
      let day: string | number = index;
      if (day < 10) day = "0" + day;
      const date = moment(
        `${props.yearSelected}-${props.monthSelected}-${day}`
      ).format("YYYY-MM-DD");

      days.push({
        day: getDayShort(day),
        number: day.toString(),
        isToday: dateIsToday(index, props.monthSelected, props.yearSelected),
      });
    }
  }
  
  const array: JSX.Element[] = [];

  days.forEach((day, index) => 
    array.push(
      <HeadItem
        fontFamily={props.fontFamily ?? colors.fontFamily}
        key={index + "Week"}
        date={{
          day: typeof day === "string" ? day : day.day,
          number: typeof day === "string" ? null : day.number,
          isToday: typeof day === "string" ? null : day.isToday,
        }}
      />
    )
  );
  
  return array;
};

export default HeadCols;