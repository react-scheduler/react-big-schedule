import type { Dayjs } from "dayjs";
import type { CSSProperties } from "react";
import type React from "react";
import type {
  EventItemType,
  HeaderEvent,
  HeaderItem,
  HeadersType,
  RenderDataItem,
  State,
  View,
} from "./baseType";
import type {
  CellUnit,
  DnDSource,
  SchedulerData,
  ViewType,
} from "../components/Scheduler";

export type EventItemPopoverTemplateResolverFunc = (
  schedulerData: SchedulerData,
  event: EventItemType,
  title: string,
  start: Dayjs,
  end: Dayjs,
  statusColor: string
) => React.ReactNode;

export type SubtitleGetterFunc = (
  schedulerData: SchedulerData,
  event: EventItemType
) => void;

export type ViewEventClickFunc = (
  schedulerData: SchedulerData,
  event: EventItemType
) => void;

export type ViewEvent2ClickFunc = (
  schedulerData: SchedulerData,
  event: EventItemType
) => void;

export type UpdateEventStartFunc = (
  schedulerData: SchedulerData,
  event: EventItemType,
  newStart: Dayjs
) => void;

export type UpdateEventEndFunc = (
  schedulerData: SchedulerData,
  event: EventItemType,
  newEnd: Dayjs
) => void;

export type MoveEventFunc = (
  schedulerData: SchedulerData,
  event: EventItemType,
  slotId: string,
  slotName: string,
  start: Dayjs,
  end: Dayjs
) => void;

export type NewEventFunc = (
  schedulerData: SchedulerData,
  slotId: string,
  slotName: string,
  start: Dayjs,
  end: Dayjs,
  type: string,
  item: EventItemType
) => void;

export type OnScrollLeftFunc = (
  schedulerData: SchedulerData,
  // Questionable type was ReactNode
  schedulerContent: HTMLDivElement,
  maxScrollLeft: number
) => void;

export type OnScrollRightFunc = (
  schedulerData: SchedulerData,
  // Questionable type was ReactNode
  schedulerContent: HTMLDivElement,
  maxScrollLeft: number
) => void;

export type OnScrollTopFunc = (
  schedulerData: SchedulerData,
  // Questionable type was ReactNode

  schedulerContent: HTMLDivElement,
  maxScrollTop: number
) => void;

export type OnScrollBottomFunc = (
  schedulerData: SchedulerData,
  // Questionable type was ReactNode
  schedulerContent: HTMLDivElement,
  maxScrollTop: number
) => void;

export type OnSetAddMoreStateFunc = (newState: State<EventItemType>) => void;

export type ConflictOccurredFunc = (
  schedulerData: SchedulerData,
  action: string,
  item: EventItemType,
  type: string,
  slotId: string,
  slotName: string,
  newStart: Dayjs,
  newEnd: Dayjs
) => void;

export type NonAgendaCellHeaderTemplateResolverFunc = (
  schedulerData: SchedulerData,
  item: HeadersType,
  formattedDateItems: Dayjs,
  style: CSSProperties
) => React.ReactNode;

export type MovingEventFunc = (
  schedulerData: SchedulerData,
  slotId: string,
  slotName: string,
  newStart: Dayjs,
  newEnd: Dayjs,
  action: string,
  type: string,
  item: EventItemType
) => void;

export type SlotClickedFunc = (
  schedulerData: SchedulerData,
  slot: RenderDataItem
) => void;

export type SlotItemTemplateResolverFunc = (
  schedulerData: SchedulerData,
  slot: RenderDataItem,
  slotClickedFunc: SlotClickedFunc | undefined,
  width: number,
  clsName: string
) => React.ReactNode;

export type EventItemClickFunc = (
  schedulerData: SchedulerData,
  event: EventItemType
) => void;

export type PrevClickFunc = (schedulerData: SchedulerData) => void;
export type NextClickFunc = (schedulerData: SchedulerData) => void;
export type OnSelectDateFunc = (
  schedulerData: SchedulerData,
  date: Dayjs
) => void;
export type OnViewChangeFunc = (
  schedulerData: SchedulerData,
  view: View
) => void;

export type EventItemTemplateResolverFunc = (
  schedulerData: SchedulerData,
  event: EventItemType,
  bgColor: string,
  isStart: boolean,
  isEnd: boolean,
  mustAddCssClass: string,
  mustBeHeight: number,
  agendaMaxEventWidth: number,
  classNames: string
) => React.ReactNode;

export type ToggleExpandFunc = (
  schedulerData: SchedulerData,
  slotId: string
) => void;

type SchedulerHeaderTemplateResolverFunc = ({
  onViewChange,
  schedulerData,
  onSelectDate,
  goNext,
  goBack,
  rightCustomHeader,
  leftCustomHeader,
}: {
  onViewChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  schedulerData: SchedulerData;
  onSelectDate: (date: Dayjs) => void;
  goNext: () => void;
  goBack: () => void;
  rightCustomHeader: React.ReactNode;
  leftCustomHeader: React.ReactNode;
}) => React.ReactNode;

export interface SchedulerProps {
  parentRef?: React.RefObject<HTMLDivElement>;
  schedulerData: SchedulerData;
  prevClick: PrevClickFunc;
  nextClick: NextClickFunc;
  onViewChange: OnViewChangeFunc;
  onSelectDate: OnSelectDateFunc;
  onSetAddMoreState?: OnSetAddMoreStateFunc;
  updateEventStart?: UpdateEventStartFunc;
  updateEventEnd?: UpdateEventEndFunc;
  moveEvent?: MoveEventFunc;
  movingEvent?: MovingEventFunc;
  leftCustomHeader?: React.ReactNode;
  rightCustomHeader?: React.ReactNode;
  newEvent?: NewEventFunc;
  subtitleGetter?: SubtitleGetterFunc;
  eventItemClick?: EventItemClickFunc;
  viewEventClick?: ViewEventClickFunc;
  viewEventText?: string;
  viewEvent2Click?: ViewEvent2ClickFunc;
  viewEvent2Text?: string;
  conflictOccurred?: ConflictOccurredFunc;
  eventItemTemplateResolver?: EventItemTemplateResolverFunc;
  dndSources?: DnDSource[];
  slotClickedFunc?: SlotClickedFunc;
  toggleExpandFunc?: ToggleExpandFunc;
  slotItemTemplateResolver?: SlotItemTemplateResolverFunc;
  nonAgendaCellHeaderTemplateResolver?: NonAgendaCellHeaderTemplateResolverFunc;
  schedulerHeaderTemplateResolver?: SchedulerHeaderTemplateResolverFunc;
  onScrollLeft?: OnScrollLeftFunc;
  onScrollRight?: OnScrollRightFunc;
  onScrollTop?: OnScrollTopFunc;
  onScrollBottom?: OnScrollBottomFunc;
}

export type CloseActionFunc = (newState?: State<EventItemType>) => void;

export interface AddMorePopoverProps<
  EventType extends EventItemType = EventItemType,
> {
  schedulerData: SchedulerData;
  headerItem: HeaderItem;
  left: number;
  top: number;
  height: number;
  closeAction: CloseActionFunc;
  subtitleGetter?: SchedulerProps["subtitleGetter"];
  moveEvent?: SchedulerProps["moveEvent"];
  eventItemClick?: SchedulerProps["eventItemClick"];
  viewEventClick?: SchedulerProps["viewEventClick"];
  viewEventText?: string;
  viewEvent2Text?: string;
  viewEvent2Click?: SchedulerProps["viewEvent2Click"];
  eventItemTemplateResolver?: SchedulerProps["eventItemTemplateResolver"];
}

export interface SchedulerDataBehaviors<
  EventType extends EventItemType = EventItemType,
> {
  isNonWorkingTimeFunc?: (
    schedulerData: SchedulerData,
    time: string
  ) => boolean;
  getCustomDateFunc?: (
    schedulerData: SchedulerData,
    num: number,
    date?: string | Dayjs
  ) => {
    startDate: Dayjs;
    endDate: Dayjs;
    cellUnit: CellUnit;
  };
  getEventTextFunc?: (schedulerData: SchedulerData, event: EventType) => string;
  getDateLabel?: (
    schedulerData: SchedulerData,
    viewType: ViewType,
    startDate: Date,
    endDate: Date
  ) => string;
  getScrollSpecialDayjs?: (
    schedulerData: SchedulerData,
    startDayjs: Dayjs,
    endDays: Dayjs
  ) => Dayjs;
  getSummaryFunc?: (
    schedulerData: SchedulerData,
    headerEvents: HeaderEvent[],
    slotId: string,
    slotName: string,
    headerStart: string,
    headerEnd: string
  ) => { text: string; color: string; fontSize: string };
  getNonAgendaViewBodyCellBgColorFunc?: (
    schedulerData: SchedulerData,
    slotId: string,
    header: { nonWorkingTime: boolean; time: string }
  ) => string;
}

export const DATE_FORMAT = "YYYY-MM-DD";

export const DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
