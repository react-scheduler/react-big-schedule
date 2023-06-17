import { Dayjs } from 'dayjs';
import React from 'react';

export const DATE_FORMAT: string;
export const DATETIME_FORMAT: string;

export class Scheduler<T extends EventItem = EventItem> extends React.Component<SchedulerProps<T>, any> {}
export class SchedulerData {}

export enum ViewType {
  Day = 'Day',
  Week = 'Week',
  Month = 'Month',
  Quarter = 'Quarter',
  Year = 'Year',
  Custom = 'Custom',
  Custom1 = 'Custom1',
  Custom2 = 'Custom2',
}

export enum CellUnit {
  Day = 'Day',
  Hour = 'Hour',
  Week = 'Week',
  Month = 'Month',
  Year = 'Year',
}

export enum SummaryPos {
  Top = 'Top',
  TopRight = 'TopRight',
  TopLeft = 'TopLeft',
  Bottom = 'Bottom',
  BottomRight = 'BottomRight',
  BottomLeft = 'BottomLeft',
}

export class DnDSource {}
export class DnDContext {}
export class AddMorePopover extends React.Component<AddMorePopoverProps, any> {}
export class DemoData {}
export function wrapperFun(): void {}

export interface SchedulerProps<T extends EventItem = EventItem> {}
export interface AddMorePopoverProps {}
export class SchedulerData {}

export interface View {
  viewName?: string;
  viewType: ViewType;
  showAgenda: boolean;
  isEventPerspective: boolean;
}

export interface EventGroup {
  id: string;
  name: string;
  state: EventItem;
}

export interface EventItem {
  id: number | string;
  start: string;
  end: string;
  resourceId: string;
  title: string;
  bgColor?: string;
  rrule?: string;
  showPopover?: boolean;
  resizable?: boolean;
  movable?: boolean;
  startResizable?: boolean;
  endResizable?: boolean;
  groupId?: string;
  groupName?: string;
  /**
   * @deprecated This property should not be used as EXRULE has been [deprecated in RFC 5545](https://icalendar.org/iCalendar-RFC-5545/a-3-deprecated-features.html) and does not support a DTSTART property
   */
  exrule?: string;
  exdates: string[];
  [x: string]: unknown;
}

export interface ResourceEvent {
  id: number;
  name: string;
  parentId?: string;
  groupOnly?: boolean;
  hasSummary?: boolean;
  expanded?: boolean;
  headerItems?: EventItem[];
  render?: boolean;
  rowHeight: number;
  rowMaxCount: number;
}

export interface Resource {
  id: string;
  name: string;
  parentId?: string;
  groupOnly?: boolean;
}

export interface HeaderItem {
  time: string;
  start: string;
  end: string;
  addMore: number;
  addMoreIndex: number;
  count: number;
  nonWorkingTime: boolean;
  events: EventItem[];
}

export interface HeaderEvent {
  render: boolean;
  span: number;
  eventItem: EventItem;
}

export interface State {
  headerItem: HeaderItem;
  left: number;
  top: number;
  height: number;
}

export interface SchedulerDataConfig {
  schedulerWidth?: `${number}%`;
  besidesWidth?: number;
  schedulerMaxHeight?: number;
  tableHeaderHeight?: number;
  schedulerContentHeight?: string | number;
  agendaResourceTableWidth?: string | number;
  agendaMaxEventWidth?: string | number;
  dayResourceTableWidth?: string | number;
  weekResourceTableWidth?: string | number;
  monthResourceTableWidth?: string | number;
  quarterResourceTableWidth?: string | number;
  yearResourceTableWidth?: string | number;
  customResourceTableWidth?: string | number;
  dayCellWidth?: string | number;
  weekCellWidth?: string | number;
  monthCellWidth?: string | number;
  quarterCellWidth?: string | number;
  yearCellWidth?: string | number;
  customCellWidth?: string | number;
  dayMaxEvents?: number;
  weekMaxEvents?: number;
  monthMaxEvents?: number;
  quarterMaxEvents?: number;
  yearMaxEvents?: number;
  customMaxEvents?: number;
  eventItemPopoverTrigger?: 'hover' | 'click';
  eventItemPopoverPlacement?:
    | 'topLeftMousePosition'
    | 'bottomLeftMousePosition'
    | 'topRightMousePosition'
    | 'bottomRightMousePosition'
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  eventItemPopoverWidth?: number;
  eventItemHeight?: number;
  eventItemLineHeight?: number;
  nonAgendaSlotMinHeight?: number;
  dayStartFrom?: number;
  dayStopTo?: number;
  defaultEventBgColor?: string;
  selectedAreaColor?: string;
  nonWorkingTimeHeadColor?: string;
  nonWorkingTimeHeadBgColor?: string;
  nonWorkingTimeBodyBgColor?: string;
  summaryColor?: string;
  summaryPos?: SummaryPos;
  groupOnlySlotColor?: string;
  startResizable?: boolean;
  endResizable?: boolean;
  movable?: boolean;
  creatable?: boolean;
  crossResourceMove?: boolean;
  checkConflict?: boolean;
  scrollToSpecialDaysjsEnabled?: boolean;
  eventItemPopoverEnabled?: boolean;
  calendarPopoverEnabled?: boolean;
  recurringEventsEnabled?: boolean;
  viewChangeSpinEnabled?: boolean;
  dateChangeSpinEnabled?: boolean;
  headerEnabled?: boolean;
  resourceViewEnabled?: boolean;
  displayWeekend?: boolean;
  relativeMove?: boolean;
  defaultExpanded?: boolean;
  dragAndDropEnabled?: boolean;
  schedulerHeaderEventsFuncsTimeoutMs?: number;
  resourceName?: string;
  taskName?: string;
  agendaViewHeader?: string;
  addMorePopoverHeaderFormat?: string;
  eventItemPopoverDateFormat?: string;
  nonAgendaDayCellHeaderFormat?: string;
  nonAgendaOtherCellHeaderFormat?: string;
  minuteStep?: number;
  views?: View[];
  responsiveByParent?: boolean;
}

export interface SchedulerDataBehaviors {
  isNonWorkingTimeFunc?: (schedulerData: SchedulerData, time: string) => boolean;
  getCustomDateFunc?: (schedulerData: SchedulerData, num: number, date?: string | Dayjs) => { startDate: string | Dayjs; endDate: string | Dayjs; cellUnit: CellUnit };
  getEventTextFunc?: (schedulerData: SchedulerData, event: EventItem) => string;
  getDateLabel?: (schedulerData: SchedulerData, viewType: ViewType, startDate: string | Date, endDate: string | Date) => string;
  getScrollSpecialDayjs?: (schedulerData: SchedulerData, startDayjs: Dayjs, endDays: Dayjs) => Dayjs;
  getSummaryFunc?: (
    schedulerData: SchedulerData,
    headerEvents: HeaderEvent[],
    slotId: string,
    slotName: string,
    headerStart: string,
    headerEnd: string
  ) => { text: string; color: string; fontSize: string };
  getNonAgendaViewBodyCellBgColorFunc?: (schedulerData: SchedulerData, slotId: string, header: { nonWorkingTime: boolean; time: string }) => string;
}

export {
  DATE_FORMAT,
  DATETIME_FORMAT,
  Scheduler,
  SchedulerData,
  ViewType,
  CellUnit,
  SummaryPos,
  DnDSource,
  DnDContext,
  AddMorePopover,
  DemoData,
  wrapperFun,
} from './components/index';
