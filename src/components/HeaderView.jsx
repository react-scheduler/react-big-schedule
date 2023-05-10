import React from 'react';
import PropTypes from 'prop-types';
import { CellUnits } from '../config/default';

function HeaderView({ schedulerData, nonAgendaCellHeaderTemplateResolver }) {
  const { headers, cellUnit, config, localeMoment } = schedulerData;
  const headerHeight = schedulerData.getTableHeaderHeight();
  const cellWidth = schedulerData.getContentCellWidth();
  const minuteStepsInHour = schedulerData.getMinuteStepsInHour();

  const renderHeaderCell = (item, index, isHourCell) => {
    const datetime = localeMoment(item.time);
    const isNonWorkingTime = !!item.nonWorkingTime;

    let style = isNonWorkingTime
      ? { width: cellWidth * minuteStepsInHour, color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor }
      : { width: cellWidth * minuteStepsInHour };

    if (!isHourCell) {
      style.width = cellWidth;
    }

    if (index === headers.length - (isHourCell ? minuteStepsInHour : 1)) {
      style = isNonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};
    }

    const pFormattedList = (isHourCell ? config.nonAgendaDayCellHeaderFormat : config.nonAgendaOtherCellHeaderFormat).split('|').map(format => datetime.format(format));

    if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
      return nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
    }

    const pList = pFormattedList.map((formattedItem, pIndex) => <div key={pIndex}>{formattedItem}</div>);

    return (
      <th key={item.time} className='header3-text' style={style}>
        <div>{pList}</div>
      </th>
    );
  };

  const renderHeaderCells = () => {
    return headers.map((item, index) => {
      if (cellUnit === CellUnits.Hour && index % minuteStepsInHour !== 0) {
        return null;
      }
      const isHourCell = cellUnit === CellUnits.Hour;
      return renderHeaderCell(item, index, isHourCell);
    });
  };

  const headerCells = renderHeaderCells();

  return (
    <thead>
      <tr style={{ height: headerHeight }}>{headerCells}</tr>
    </thead>
  );
}

HeaderView.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  nonAgendaCellHeaderTemplateResolver: PropTypes.func,
};

export default HeaderView;
