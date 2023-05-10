import { ViewTypes, CellUnits, DATE_FORMAT } from '../config/default';

//getSummary func example
export const getSummary = (schedulerData, headerEvents, slotId, slotName, headerStart, headerEnd) => ({ text: 'Summary', color: 'red', fontSize: '1.2rem' });

//getCustomDate example
export const getCustomDate = (schedulerData, num, date = undefined) => {
  const { viewType } = schedulerData;
  let selectDate = date !== undefined ? date : schedulerData.startDate;

  let startDate, endDate, cellUnit;

  if (viewType === ViewTypes.Custom1) {
    let monday = schedulerData.localeMoment(selectDate).startOf('week').format(DATE_FORMAT);
    startDate =
      num === 0
        ? monday
        : schedulerData
            .localeMoment(monday)
            .add(2 * num, 'weeks')
            .format(DATE_FORMAT);
    endDate = schedulerData.localeMoment(startDate).add(1, 'weeks').endOf('week').format(DATE_FORMAT);
    cellUnit = CellUnits.Day;
  } else if (viewType === ViewTypes.Custom2) {
    let firstDayOfMonth = schedulerData.localeMoment(selectDate).startOf('month').format(DATE_FORMAT);
    startDate =
      num === 0
        ? firstDayOfMonth
        : schedulerData
            .localeMoment(firstDayOfMonth)
            .add(2 * num, 'months')
            .format(DATE_FORMAT);
    endDate = schedulerData.localeMoment(startDate).add(1, 'months').endOf('month').format(DATE_FORMAT);
    cellUnit = CellUnits.Day;
  } else {
    startDate =
      num === 0
        ? selectDate
        : schedulerData
            .localeMoment(selectDate)
            .add(2 * num, 'days')
            .format(DATE_FORMAT);
    endDate = schedulerData.localeMoment(startDate).add(1, 'days').format(DATE_FORMAT);
    cellUnit = CellUnits.Hour;
  }

  return { startDate, endDate, cellUnit };
};

//getNonAgendaViewBodyCellBgColor example
export const getNonAgendaViewBodyCellBgColor = (schedulerData, slotId, header) => {
  if (!header.nonWorkingTime) {
    return '#87e8de';
  }

  return undefined;
};

//getDateLabel func example
export const getDateLabel = (schedulerData, viewType, startDate, endDate) => {
  const start = schedulerData.localeMoment(startDate);
  const end = schedulerData.localeMoment(endDate);
  let dateLabel;

  switch (viewType) {
    case ViewTypes.Week:
    case ViewTypes.Custom:
    case ViewTypes.Custom1:
    case ViewTypes.Custom2:
      if (start !== end) {
        dateLabel = `${start.format('MMM D')}-${end.format('D, YYYY')}`;
        if (start.month() !== end.month()) dateLabel = `${start.format('MMM D')}-${end.format('MMM D, YYYY')}`;
        if (start.year() !== end.year()) dateLabel = `${start.format('MMM D, YYYY')}-${end.format('MMM D, YYYY')}`;
      }
      break;
    case ViewTypes.Month:
      dateLabel = start.format('MMMM YYYY');
      break;
    case ViewTypes.Quarter:
      dateLabel = `${start.format('MMM D')}-${end.format('MMM D, YYYY')}`;
      break;
    case ViewTypes.Year:
      dateLabel = start.format('YYYY');
      break;
    default:
      dateLabel = start.format('MMM D, YYYY');
  }

  return dateLabel;
};

export const getEventText = (schedulerData, event) => {
  if (!schedulerData.isEventPerspective) return event.title;

  const resource = schedulerData.resources.find(item => item.id === event.resourceId);
  return resource ? resource.name : event.title;
};

// return endMoment;
export const getScrollSpecialMoment = (schedulerData, startMoment, endMoment) => schedulerData.localeMoment();

export const isNonWorkingTime = (schedulerData, time) => {
  const { localeMoment, cellUnit } = schedulerData;

  if (cellUnit === CellUnits.Hour) {
    const hour = localeMoment(time).hour();
    return hour < 9 || hour > 18;
  }

  const dayOfWeek = localeMoment(time).weekday();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

export default {
    getSummaryFunc: undefined,
    getCustomDateFunc: undefined,
    getNonAgendaViewBodyCellBgColorFunc: undefined,
    getScrollSpecialMomentFunc: getScrollSpecialMoment,
    getDateLabelFunc: getDateLabel,
    getEventTextFunc: getEventText,
    isNonWorkingTimeFunc: isNonWorkingTime,
    // getNonAgendaViewBodyCellBgColorFunc: getNonAgendaViewBodyCellBgColor,
    //getCustomDateFunc: getCustomDate,
    //getSummaryFunc: getSummary,
};
