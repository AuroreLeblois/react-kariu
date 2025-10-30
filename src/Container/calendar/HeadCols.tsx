import React from "react";
import HeadItem from "./HeadItem";
import moment from "moment";
import { useTheme } from "../../Theme/ThemeProvider";
import Layout from "../Layout";

// Types
interface HeadColsProps {
  /** Optional language for calendar */
  language?: "en" | "fr" | "es" | "de" | "it" | "pt" | "nl" | "pl" | "ro" | "ru";
  /** Optional year selected for calendar */
  yearSelected?: number;
  /** Optional month selected for calendar */
  monthSelected?: number;
  /** Optional font family for calendar */
  fontFamily?: string;
  /** Optional font size for calendar */
  fontSize?: number;
  /** Optional font weight for calendar */
  fontWeight?: number;
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
  es: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
  de: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  it: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
  pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
  nl: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
  pl: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "Sob"],
  ro: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sam"],
  ru: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
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
  
  return <Layout display="flex" flexDirection="row" fullWidth>{array}</Layout>;
};

export default HeadCols;