import React, { useMemo } from "react";
import moment from "moment";
import Avatar from "../../Atoms/Avatar/Avatar";
import HeadCols from "./HeadCols";
import BodyItem from "./BodyItem";
import { useTheme } from "../../Theme/ThemeProvider";
import { CalendarProps, InfoItem, CalendarEvent } from "./calendar.types";

const Calendar: React.FC<CalendarProps> = ({
  className = "",
  language = "en",
  yearSelected,
  monthSelected,
  vhead,
  events,
  infos,
  holidays = [],
  loading = false,
  showAvatar = false,
  noNameText = "Unaffected infos",
  fontFamily = 'inherit',
  onClickItem,
}) => {
  const { colors } = useTheme();
  const daysInMonth = useMemo(
    () => moment(`${yearSelected}-${monthSelected}`).daysInMonth(),
    [yearSelected, monthSelected]
  );

  const renderRowHeaderCell = (name?: string) => {
    const displayName = name || noNameText;
    const cellStyle: React.CSSProperties = {
      verticalAlign: "middle",
      whiteSpace: "nowrap",
    };
    const wrapperStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "0.5rem",
      padding: "0.5rem 0.75rem",
    };
    const nameStyle: React.CSSProperties = {
      color: name ? colors.text.main : colors.error.main,
      fontFamily: fontFamily || colors.fontFamily || "inherit",
    };

    return (
      <td style={cellStyle}>
        <div style={wrapperStyle}>
          {showAvatar && name ? (
            <Avatar name={name} />
          ) : null}
          <span style={nameStyle}>{displayName}</span>
        </div>
      </td>
    );
  };

  const toEvent = (info: InfoItem): CalendarEvent => {
    return {
      date: info.date_start,
      person: info.name,
      site: info.site_name,
      label: info.activity_code || info.unavailability_code,
      variant: info.unavailability_code ? 'unavailability' : 'default',
      marked: info.marked,
      special: info.special,
    };
  };

  const allEvents: CalendarEvent[] = useMemo(() => {
    if (events && events.length) return events;
    if (infos && infos.length) return infos.map(toEvent);
    return [];
  }, [events, infos]);

  const renderCellsForRow = (rowName?: string) => {
    const cells: React.ReactNode[] = [];
    const monthFormatted = monthSelected < 10 ? `0${monthSelected}` : `${monthSelected}`;
    for (let index = 0; index < daysInMonth; index++) {
      let dayNum = index + 1;
      const day = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
      const date = `${yearSelected}-${monthFormatted}-${day}`;
      const dateWithoutYear = `${monthFormatted}-${day}`;
      const indexOfDay = moment(date).isoWeekday();
      const isWeekEnd = indexOfDay === 6 || indexOfDay === 7;
      const isHoliday = holidays?.some((h) => h.month_day === dateWithoutYear) || false;

      // Filtrer les événements qui correspondent à cette date et cette personne/ligne
      // Les événements sont associés à une ligne via leur propriété person ou site
      const matching: CalendarEvent[] = allEvents.filter((event) => {
        if (event.date !== date) return false;
        
        // Si pas de nom de ligne, ne pas afficher d'événements
        if (!rowName) return false;
        
        // L'événement correspond si son person ou site correspond au nom de la ligne
        return event.person === rowName || event.site === rowName;
      });

      const outerTdStyle: React.CSSProperties = {
        verticalAlign: "middle",
        backgroundColor: isHoliday ? colors.primary.light : isWeekEnd ? colors.background.light : "inherit",
      };

      cells.push(
        <td key={`d-${index}`} style={outerTdStyle}>
          {matching.map((element, i) => (
            <BodyItem
              key={`d-${index}-${i}-${element.site || element.person || ""}`}
              isWeekEnd={isWeekEnd}
              isHoliday={isHoliday}
              event={element}
              onClick={() => onClickItem && onClickItem(element)}
              wrapWithTd={false}
            />
          ))}
        </td>
      );
    }
    return cells;
  };

  const renderRows = () => {
    if (!vhead.length) return null;
    return vhead.map((row, i) => (
      <tr key={`row-${i}-${row.name || "noname"}`} style={{ minHeight: "16px" }}>
        {renderRowHeaderCell(row.name)}
        {renderCellsForRow(row.name)}
      </tr>
    ));
  };

  return (
    <table
      className={`${className} kariu-calendar--table`}
      style={{
        flex: "1 1 auto",
        margin: "0rem",
        userSelect: "none",
        fontFamily: fontFamily || colors.fontFamily || "inherit",
        borderCollapse: "collapse",
        border: `1px solid ${colors.border}`,
        backgroundColor: colors.background.light,
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              verticalAlign: "middle",
              backgroundColor: colors.background.main,
              color: colors.text.main,
              borderBottom: `1px solid ${colors.border}`,
            }}
          />
          <HeadCols language={language} monthSelected={monthSelected} yearSelected={yearSelected} fontFamily={fontFamily} />
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};

export default Calendar;


