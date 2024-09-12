import { Dayjs } from "dayjs";
import { ViewType, CellUnit } from "../config/default";
import { SchedulerData } from "../components/Scheduler";
import { EventItemType, HeaderEvent, HeadersType } from "../types/baseType";

// getSummary func example
// export const getSummary = (schedulerData, headerEvents, slotId, slotName, headerStart, headerEnd) => ({ text: 'Summary', color: 'red', fontSize: '1.2rem' });
export const getSummary = () => ({
  text: "Summary",
  color: "red",
  fontSize: "1.2rem",
});

// getCustomDate example
export const getCustomDate = (
  schedulerData: SchedulerData,
  num: number,
  date = schedulerData.startDate
) => {
  const { viewType, localeDayjs } = schedulerData;
  let startDate;
  let endDate;
  let cellUnit;

  if (viewType === ViewType.Custom1) {
    const monday = date.startOf("week");
    startDate = num === 0 ? monday : monday.add(2 * num, "weeks");
    endDate = startDate.add(1, "weeks").endOf("week");
    cellUnit = CellUnit.Day;
  } else if (viewType === ViewType.Custom2) {
    const firstDayOfMonth = date.startOf("month");
    startDate =
      num === 0 ? firstDayOfMonth : firstDayOfMonth.add(2 * num, "months");
    endDate = startDate.add(1, "months").endOf("month");
    cellUnit = CellUnit.Day;
  } else {
    startDate = num === 0 ? date : date.add(2 * num, "days");
    endDate = startDate.add(1, "days");
    cellUnit = CellUnit.Hour;
  }

  return { startDate, endDate, cellUnit };
};

// getNonAgendaViewBodyCellBgColor example
export const getNonAgendaViewBodyCellBgColor = (
  schedulerData: SchedulerData,
  slotId: string,
  header: HeadersType
) => (header.nonWorkingTime ? undefined : "#87e8de");

// getDateLabel func example
export const getDateLabel = (
  schedulerData: SchedulerData,
  viewType: ViewType,
  startDate: Dayjs,
  endDate: Dayjs
) => {
  const start = startDate;
  const end = endDate;
  let dateLabel = "";

  if (
    viewType === ViewType.Week ||
    (start !== end &&
      (viewType === ViewType.Custom ||
        viewType === ViewType.Custom1 ||
        viewType === ViewType.Custom2))
  ) {
    dateLabel = `${start.format("MMM D")}-${end.format("D, YYYY")}`;
    if (start.month() !== end.month())
      dateLabel = `${start.format("MMM D")}-${end.format("MMM D, YYYY")}`;
    if (start.year() !== end.year())
      dateLabel = `${start.format("MMM D, YYYY")}-${end.format("MMM D, YYYY")}`;
  } else if (viewType === ViewType.Month) {
    dateLabel = start.format("MMMM YYYY");
  } else if (viewType === ViewType.Quarter) {
    dateLabel = `${start.format("MMM D")}-${end.format("MMM D, YYYY")}`;
  } else if (viewType === ViewType.Year) {
    dateLabel = start.format("YYYY");
  } else {
    dateLabel = start.format("MMM D, YYYY");
  }

  return dateLabel;
};

export const getEventText = (schedulerData: SchedulerData, event: EventItemType) =>
  schedulerData.isEventPerspective
    ? schedulerData.resources.find((item) => item.id === event.resourceId)
        ?.name || event.title
    : event.title;

export const getScrollSpecialDayjs = (schedulerData: SchedulerData) => {
  const { localeDayjs } = schedulerData;
  return localeDayjs(new Date());
};

export const isNonWorkingTime = (
  schedulerData: SchedulerData,
  time: string
) => {
  const { localeDayjs, cellUnit } = schedulerData;
  if (cellUnit === CellUnit.Hour) {
    const hour = localeDayjs(new Date(time)).hour();
    return hour < 9 || hour > 18;
  }
  const dayOfWeek = localeDayjs(new Date(time)).weekday();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

const defaultBehaviors: Behaviors = {
  getSummaryFunc: undefined,
  getCustomDateFunc: undefined,
  getNonAgendaViewBodyCellBgColorFunc: undefined,
  getScrollSpecialDayjsFunc: getScrollSpecialDayjs,
  getDateLabelFunc: getDateLabel,
  getEventTextFunc: getEventText,
  isNonWorkingTimeFunc: isNonWorkingTime,
};

export type Behaviors = {
  getSummaryFunc?: (
    schedulerData: SchedulerData,
    headerEvents: HeaderEvent[],
    slotId: string,
    slotName: string,
    headerStart: Dayjs,
    headerEnd: Dayjs
  ) => { text: string; color: string; fontSize: string };
  getCustomDateFunc?: (
    schedulerData: SchedulerData,
    num: number,
    date?: Dayjs
  ) => {
    startDate: Dayjs;
    endDate: Dayjs;
    cellUnit: CellUnit;
  };
  getNonAgendaViewBodyCellBgColorFunc?: (
    schedulerData: SchedulerData,
    slotId: string,
    header: HeadersType
  ) => string;
  getScrollSpecialDayjsFunc: (schedulerData: SchedulerData) => Dayjs;
  getDateLabelFunc: typeof getDateLabel;
  getEventTextFunc: typeof getEventText;
  isNonWorkingTimeFunc: typeof isNonWorkingTime;
};

export default defaultBehaviors;
