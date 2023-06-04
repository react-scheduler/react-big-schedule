import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { CellUnit } from './index';

class HeaderView extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    schedulerData: PropTypes.object.isRequired,
    nonAgendaCellHeaderTemplateResolver: PropTypes.func,
  };

  render() {
    const { schedulerData, nonAgendaCellHeaderTemplateResolver } = this.props;
    const { headers, cellUnit, config, localeDayjs } = schedulerData;
    let headerHeight = schedulerData.getTableHeaderHeight();
    let cellWidth = schedulerData.getContentCellWidth();
    let minuteStepsInHour = schedulerData.getMinuteStepsInHour();

    let headerList = [];
    let style = {};
    if (cellUnit === CellUnit.Hour) {
      headers.forEach((item, index) => {
        if (index % minuteStepsInHour === 0) {
          let datetime = localeDayjs(new Date(item.time));
          const isCurrentTime = datetime.isSame(new Date(), 'hour');

          style = !!item.nonWorkingTime
            ? {
                width: cellWidth * minuteStepsInHour,
                color: config.nonWorkingTimeHeadColor,
                backgroundColor: config.nonWorkingTimeHeadBgColor,
              }
            : {
                width: cellWidth * minuteStepsInHour,
              };

          if (index === headers.length - minuteStepsInHour)
            style = !!item.nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};

          let pFormattedList = config.nonAgendaDayCellHeaderFormat.split('|').map(item => datetime.format(item));
          let element;

          if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
            element = nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
          } else {
            const pList = pFormattedList.map((item, index) => <div key={index}>{item}</div>);

            element = (
              <th key={item.time} className='header3-text' style={style}>
                <div>{pList}</div>
              </th>
            );
          }

          headerList.push(element);
        }
      });
    } else {
      headerList = headers.map((item, index) => {
        let datetime = localeDayjs(new Date(item.time));
        style = !!item.nonWorkingTime
          ? {
              width: cellWidth,
              color: config.nonWorkingTimeHeadColor,
              backgroundColor: config.nonWorkingTimeHeadBgColor,
            }
          : { width: cellWidth };
        if (index === headers.length - 1) style = !!item.nonWorkingTime ? { color: config.nonWorkingTimeHeadColor, backgroundColor: config.nonWorkingTimeHeadBgColor } : {};
        let cellFormat =
          cellUnit === CellUnit.Week
            ? config.nonAgendaWeekCellHeaderFormat
            : cellUnit === CellUnit.Month
            ? config.nonAgendaMonthCellHeaderFormat
            : cellUnit === CellUnit.Year
            ? config.nonAgendaYearCellHeaderFormat
            : config.nonAgendaOtherCellHeaderFormat;
        let pFormattedList = cellFormat.split('|').map(item => datetime.format(item));

        if (typeof nonAgendaCellHeaderTemplateResolver === 'function') {
          return nonAgendaCellHeaderTemplateResolver(schedulerData, item, pFormattedList, style);
        }

        const pList = pFormattedList.map((item, index) => <div key={index}>{item}</div>);

        return (
          <th key={item.time} className='header3-text' style={style}>
            <div>{pList}</div>
          </th>
        );
      });
    }

    return (
      <thead>
        <tr style={{ height: headerHeight }}>{headerList}</tr>
      </thead>
    );
  }
}

export default HeaderView;
