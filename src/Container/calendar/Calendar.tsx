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
  infosUnavailable = "No data available",
  textLoading = "Loading...",
  fontFamily = 'inherit',
  onClickItem,
}) => {
  const { colors } = useTheme();
  const daysInMonth = useMemo(
    () => moment(`${yearSelected}-${monthSelected}`).daysInMonth(),
    [yearSelected, monthSelected]
  );

  const renderEmptyOrLoadingRow = () => {
    if (vhead.length) return null;
    const colspan = daysInMonth + 1; // +1 for left header cell
    return (
      <tr className={`${className} kariu-calendar--row`}>
        <td colSpan={colspan} style={{ padding: "2rem", textAlign: "center", backgroundColor: "lightgrey" }}>
          {loading ? textLoading : infosUnavailable}
        </td>
      </tr>
    );
  };

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

  const toBodyItemData = (ev: CalendarEvent) => {
    if (ev.variant === 'unavailability') {
      return {
        unavailability_code: ev.label,
      } as any;
    }
    return {
      activity_code: ev.label,
      time_start: ev.startTime,
      time_end: ev.endTime,
      marked: ev.marked,
      special: ev.special,
    } as any;
  };

  const allEvents: CalendarEvent[] = useMemo(() => {
    if (events && events.length) return events;
    if (infos && infos.length) return infos.map(toEvent);
    return [];
  }, [events, infos]);

  const renderCellsForRow = (rowName?: string) => {
    const cells: React.ReactNode[] = [];
    for (let index = 0; index < daysInMonth; index++) {
      let dayNum = index + 1;
      const day = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
      const date = `${yearSelected}-${monthSelected}-${day}`;
      const dateWithoutYear = `${monthSelected}-${day}`;
      const indexOfDay = moment(date).isoWeekday();
      const isWeekEnd = indexOfDay === 6 || indexOfDay === 7;
      const isHoliday = holidays?.some((h) => h.month_day === dateWithoutYear) || false;

      const matching: CalendarEvent[] = [];
      for (let k = 0; k < allEvents.length; k++) {
        const ev = allEvents[k];
        if (
          moment(ev.date).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD") &&
          (rowName === (ev as any).person)
        ) {
          matching.push(ev);
        }
      }

      cells.push(
        <td key={`d-${index}`} style={{ verticalAlign: "middle" }}>
          {matching.length
            ? matching.map((element, i) => (
                <BodyItem
                  key={`task-${element.site || (element as any).person || ""}-${i}`}
                  isWeekEnd={isWeekEnd}
                  isHoliday={isHoliday}
                  event={element}
                  onClick={() => onClickItem && onClickItem(element)}
                />
              ))
            : null}
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
        {renderEmptyOrLoadingRow()}
        {renderRows()}
      </tbody>
    </table>
  );
};

export default Calendar;


