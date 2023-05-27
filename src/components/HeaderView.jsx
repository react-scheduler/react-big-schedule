import React from 'react';
import PropTypes from 'prop-types';
import { CellUnits } from '../config/default';

function HeaderView({ schedulerData, nonAgendaCellHeaderTemplateResolver }) {
  const { headers, cellUnit, config, localeMoment } = schedulerData;
  const headerHeight = schedulerData.getTableHeaderHeight();
  const cellWidth = schedulerData.getContentCellWidth();
  const minuteStepsInHour = schedulerData.getMinuteStepsInHour();

  const nonAgendaResolver = typeof nonAgendaCellHeaderTemplateResolver === 'function' ? nonAgendaCellHeaderTemplateResolver : null;

  const headerList = headers.map((item, index) => {
    if (cellUnit === CellUnits.Hour && index % minuteStepsInHour !== 0) {
      return <></>;
    }
    const { time, nonWorkingTime } = item;
    const datetime = localeMoment(time);

    let style = {};
    if (cellUnit === CellUnits.Hour) {
      style = nonWorkingTime
        ? { width: cellWidth * minuteStepsInHour, color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor }
        : { width: cellWidth * minuteStepsInHour };

      if (index === headers.length - minuteStepsInHour) {
        style = nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadColor } : {};
      }
    } else {
      style = nonWorkingTime ? { width: cellWidth, color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : { width: cellWidth };
      if (index === headers.length - 1) {
        style = item.nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};
      }
    }

    let cellFormat;

    switch (cellUnit) {
      case CellUnits.Hour:
        cellFormat = config.nonAgendaDayCellHeaderFormat;
        break;
      case CellUnits.Week:
        cellFormat = config.nonAgendaWeekCellHeaderFormat;
        break;
      case CellUnits.Month:
        cellFormat = config.nonAgendaMonthCellHeaderFormat;
        break;
      case CellUnits.Year:
        cellFormat = config.nonAgendaYearCellHeaderFormat;
        break;
      default:
        cellFormat = config.nonAgendaOtherCellHeaderFormat;
        break;
    }

    const pFormattedList = cellFormat.split('|').map(item => datetime.format(item));

    const pList = pFormattedList.map((item, index) => <div key={index}>{item}</div>);

    const element = nonAgendaResolver ? (
      nonAgendaResolver(schedulerData, item, pFormattedList, style)
    ) : (
      <th key={time} className='header3-text' style={style}>
        <div>{pList}</div>
      </th>
    );

    return element;
  });

  return (
    <thead>
      <tr style={{ height: headerHeight }}>{headerList}</tr>
    </thead>
  );
}

HeaderView.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: PropTypes.func,
};

export default HeaderView;
