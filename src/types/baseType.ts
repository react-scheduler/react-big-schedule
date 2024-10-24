import type { Dayjs } from "dayjs";
import type { SummaryPos, ViewType } from "../config/default";

export interface View {
  viewName?: string;
  viewType: ViewType;
  showAgenda: boolean;
  isEventPerspective: boolean;
}

export interface EventGroup<EventType extends EventItemType = EventItemType> {
  id: string;
  name: string;
  state: EventType;
}

export interface SummaryType {
  text: string;
  color: string;
  fontSize: string;
}

export interface SlotMapItem {
  data?: RenderDataItem;
  children: any[];
}

export interface RenderDataItem {
  slotId: string;
  slotName: string;
  slotTitle: any;
  parentId?: string;
  groupOnly?: boolean;
  hasSummary?: boolean;
  rowMaxCount: number;
  rowHeight: number;
  headerItems: HeaderEventsType[];
  indent: number;
  hasChildren: boolean;
  expanded: boolean;
  render: boolean;
}

export interface ResourceEvent {
  id: number;
  name: string;
  parentId?: string;
  groupOnly?: boolean;
  hasSummary?: boolean;
  expanded?: boolean;
  headerItems?: EventItemType[];
  render?: boolean;
  rowHeight: number;
  rowMaxCount: number;
}

// Must keep
export interface HeaderEventsType {
  time: string;
  nonWorkingTime?: boolean;
  start: Dayjs;
  end: Dayjs;
  count: number;
  addMore: number;
  addMoreIndex: number;
  events: HeaderEvent[];
  summary?: SummaryType;
}

export interface EventItemType {
  id: number | string;
  start: Dayjs;
  end: Dayjs;
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
  exdates?: string[];
  [x: string]: unknown;
}

export interface Resource {
  id: string;
  name: string;
  parentId?: string;
  groupOnly?: boolean;
}

export interface HeadersType {
  time: string;
  nonWorkingTime?: boolean;
}

export interface HeaderItem {
  time: string;
  start: string;
  end: string;
  addMore: number;
  addMoreIndex: number;
  count: number;
  nonWorkingTime: boolean;
  events: EventItemType[];
}

export interface HeaderEvent {
  render: boolean;
  span: number;
  eventItem: EventItemType;
}

export interface State<EventType extends EventItemType = EventItemType> {
  headerItem: HeaderItem;
  left: number;
  top: number;
  height: number;
}

export interface SchedulerDataConfig {
  schedulerWidth: string;
  besidesWidth: number;
  schedulerMaxHeight: number;
  tableHeaderHeight: number;
  schedulerContentHeight: string | number;
  agendaResourceTableWidth: string | number;
  agendaMaxEventWidth: number;
  dayResourceTableWidth: string | number;
  weekResourceTableWidth: string | number;
  monthResourceTableWidth: string | number;
  quarterResourceTableWidth: string | number;
  yearResourceTableWidth: string | number;
  customResourceTableWidth: string | number;
  dayCellWidth: string | number;
  weekCellWidth: string | number;
  monthCellWidth: string | number;
  quarterCellWidth: string | number;
  yearCellWidth: string | number;
  customCellWidth: string | number;
  dayMaxEvents: number;
  weekMaxEvents: number;
  monthMaxEvents: number;
  quarterMaxEvents: number;
  yearMaxEvents: number;
  customMaxEvents: number;
  eventItemPopoverTrigger: "hover" | "click";
  eventItemPopoverPlacement:
    | "topLeftMousePosition"
    | "bottomLeftMousePosition"
    | "topRightMousePosition"
    | "bottomRightMousePosition"
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  eventItemPopoverWidth: number;
  eventItemHeight: number;
  eventItemLineHeight: number;
  nonAgendaSlotMinHeight: number;
  dayStartFrom: number;
  dayStopTo: number;
  defaultEventBgColor: string;
  selectedAreaColor: string;
  nonWorkingTimeHeadColor: string;
  nonWorkingTimeHeadBgColor: string;
  nonWorkingTimeBodyBgColor: string;
  summaryColor: string;
  summaryPos: SummaryPos;
  groupOnlySlotColor: string;
  startResizable: boolean;
  endResizable: boolean;
  movable: boolean;
  creatable: boolean;
  crossResourceMove: boolean;
  checkConflict: boolean;
  scrollToSpecialDayjsEnabled: boolean;
  eventItemPopoverEnabled: boolean;
  eventItemPopoverShowColor: boolean;
  calendarPopoverEnabled: boolean;
  recurringEventsEnabled: boolean;
  viewChangeSpinEnabled: boolean;
  dateChangeSpinEnabled: boolean;
  headerEnabled: boolean;
  resourceViewEnabled: boolean;
  displayWeekend: boolean;
  relativeMove: boolean;
  defaultExpanded: boolean;
  dragAndDropEnabled: boolean;
  schedulerHeaderEventsFuncsTimeoutMs: number;
  resourceName: string;
  taskName: string;
  agendaViewHeader: string;
  addMorePopoverHeaderFormat: string;
  eventItemPopoverDateFormat: string;
  nonAgendaDayCellHeaderFormat: string;
  nonAgendaWeekCellHeaderFormat: string;
  nonAgendaMonthCellHeaderFormat: string;
  nonAgendaYearCellHeaderFormat: string;
  nonAgendaOtherCellHeaderFormat: string;
  minuteStep: number;
  views: View[];
  responsiveByParent: boolean;
  marginTop: number;
  fixedResourceTableWidth: boolean;
}

export interface SchedulerDataConfigOptional {
  schedulerWidth?: string;
  besidesWidth?: number;
  schedulerMaxHeight?: number;
  tableHeaderHeight?: number;
  schedulerContentHeight?: string | number;
  agendaResourceTableWidth?: string | number;
  agendaMaxEventWidth?: number;
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
  eventItemPopoverTrigger?: "hover" | "click";
  eventItemPopoverPlacement?:
    | "topLeftMousePosition"
    | "bottomLeftMousePosition"
    | "topRightMousePosition"
    | "bottomRightMousePosition"
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
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
  scrollToSpecialDayjsEnabled?: boolean;
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
  marginTop?: number;
  fixedResourceTableWidth?: boolean;
}
