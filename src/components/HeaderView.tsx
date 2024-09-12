/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React from "react";
import PropTypes from "prop-types";
import { CellUnit } from "../config/default";
import { SchedulerData } from "./SchedulerData";
import { NonAgendaCellHeaderTemplateResolverFunc } from "../types/moreTypes";

interface HeaderViewProps {
  schedulerData: SchedulerData;
  nonAgendaCellHeaderTemplateResolver?: NonAgendaCellHeaderTemplateResolverFunc | null;
}

function HeaderView({
  schedulerData,
  nonAgendaCellHeaderTemplateResolver = null,
}: HeaderViewProps) {
  const { headers, cellUnit, config, localeDayjs } = schedulerData;
  const headerHeight = schedulerData.getTableHeaderHeight();
  const cellWidth = schedulerData.getContentCellWidth();
  const minuteStepsInHour = schedulerData.getMinuteStepsInHour();

  let headerList: React.ReactNode[] = [];
  let style;

  if (cellUnit === CellUnit.Hour) {
    headers.forEach((item, index) => {
      if (index % minuteStepsInHour === 0) {
        const datetime = localeDayjs(new Date(item.time));

        style = item.nonWorkingTime
          ? {
              width: cellWidth * minuteStepsInHour,
              color: config.nonWorkingTimeHeadColor,
              backgroundColor: config.nonWorkingTimeHeadBgColor,
            }
          : {
              width: cellWidth * minuteStepsInHour,
            };

        if (index === headers.length - minuteStepsInHour) {
          style = item.nonWorkingTime
            ? {
                color: config.nonWorkingTimeHeadColor,
                backgroundColor: config.nonWorkingTimeHeadBgColor,
              }
            : {};
        }

        let element;

        if (typeof nonAgendaCellHeaderTemplateResolver === "function") {
          element = nonAgendaCellHeaderTemplateResolver(
            schedulerData,
            item,
            datetime,
            style
          );
        } else {
          const pFormattedList = config.nonAgendaDayCellHeaderFormat
            .split("|")
            .map((pitem) => datetime.format(pitem));

          const pList = pFormattedList.map((formattedItem, pIndex) => (
            <div key={pIndex}>{formattedItem}</div>
          ));

          element = (
            <th
              key={`header-${item.time}`}
              className="header3-text"
              style={style}
            >
              <div>{pList}</div>
            </th>
          );
        }
        if (element) headerList.push(element);
      }
    });
  } else {
    const cellFormat =
      cellUnit === CellUnit.Week
        ? config.nonAgendaWeekCellHeaderFormat
        : cellUnit === CellUnit.Month
          ? config.nonAgendaMonthCellHeaderFormat
          : cellUnit === CellUnit.Year
            ? config.nonAgendaYearCellHeaderFormat
            : config.nonAgendaOtherCellHeaderFormat;

    headerList = headers
      .map((item, index) => {
        const datetime = localeDayjs(new Date(item.time));
        style = item.nonWorkingTime
          ? {
              width: cellWidth,
              color: config.nonWorkingTimeHeadColor,
              backgroundColor: config.nonWorkingTimeHeadBgColor,
            }
          : { width: cellWidth };
        if (index === headers.length - 1)
          style = item.nonWorkingTime
            ? {
                color: config.nonWorkingTimeHeadColor,
                backgroundColor: config.nonWorkingTimeHeadBgColor,
              }
            : {};

        if (typeof nonAgendaCellHeaderTemplateResolver === "function") {
          return nonAgendaCellHeaderTemplateResolver(
            schedulerData,
            item,
            datetime,
            style
          );
        }
        const pFormattedList = cellFormat
          .split("|")
          .map((dateFormatPart) => datetime.format(dateFormatPart));

        const pList = pFormattedList.map((formattedItem, pIndex) => (
          <div key={pIndex}>{formattedItem}</div>
        ));

        return (
          <th
            key={`header-${item.time}`}
            className="header3-text"
            style={style}
          >
            <div>{pList}</div>
          </th>
        );
      })
      .filter((element) => element !== undefined) as React.ReactNode[];
  }

  return (
    <thead>
      <tr style={{ height: headerHeight }}>{headerList}</tr>
    </thead>
  );
}

// HeaderView.propTypes = {
//   schedulerData: PropTypes.object.isRequired,
//   nonAgendaCellHeaderTemplateResolver: PropTypes.func,
// };

// HeaderView.defaultProps = {
//   nonAgendaCellHeaderTemplateResolver: null,
// };

export default HeaderView;
