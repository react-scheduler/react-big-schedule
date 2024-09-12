//@ts-nocheck

/* eslint-disable no-return-assign */
import React, { Component, createRef } from "react";
import { Popover } from "antd";
import EventItemPopover from "../components/EventItemPopover";
import { DnDTypes, CellUnit, DATETIME_FORMAT } from "../config/default";
import dayjs, { Dayjs } from "dayjs";
import { EventItemType } from "../types/baseType";
import { SchedulerData } from "../components/SchedulerData";
import {
  ConflictOccurredFunc,
  EventItemClickFunc,
  EventItemTemplateResolverFunc,
  MoveEventFunc,
  SubtitleGetterFunc,
  UpdateEventEndFunc,
  UpdateEventStartFunc,
  ViewEvent2ClickFunc,
  ViewEventClickFunc,
} from "../types/moreTypes";
import { ConnectDragPreview, ConnectDragSource } from "react-dnd";

interface StopDragHelperParams {
  count: number;
  cellUnit: CellUnit;
  config: { displayWeekend: boolean };
  dragtype: string;
  eventItem: EventItemType;
  localeDayjs: typeof dayjs;
  value: string;
}

const stopDragHelper = ({
  count,
  cellUnit,
  config,
  dragtype,
  eventItem,
  localeDayjs,
  value,
}: StopDragHelperParams): Promise<Dayjs> => {
  const whileTrue = true;
  let tCount = 0;
  let i = 0;
  let result = value;
  return new Promise((resolve) => {
    if (
      count !== 0 &&
      cellUnit !== CellUnit.Hour &&
      config.displayWeekend === false
    ) {
      while (whileTrue) {
        i = count > 0 ? i + 1 : i - 1;
        const date = localeDayjs(new Date(eventItem[dragtype])).add(i, "days");
        const dayOfWeek = date.weekday();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          tCount = count > 0 ? tCount + 1 : tCount - 1;
          if (tCount === count) {
            result = date;
            break;
          }
        }
      }
    }
    resolve(result);
  });
};

interface ResizableParams {
  eventItem: EventItemType;
  isInPopover: boolean;
  schedulerData: SchedulerData;
}

const startResizable = ({
  eventItem,
  isInPopover,
  schedulerData,
}: ResizableParams): boolean =>
  schedulerData.config.startResizable === true &&
  isInPopover === false &&
  (eventItem.resizable === undefined || eventItem.resizable !== false) &&
  (eventItem.startResizable === undefined ||
    eventItem.startResizable !== false);

const endResizable = ({
  eventItem,
  isInPopover,
  schedulerData,
}: ResizableParams): boolean =>
  schedulerData.config.endResizable === true &&
  isInPopover === false &&
  (eventItem.resizable === undefined || eventItem.resizable !== false) &&
  (eventItem.endResizable === undefined || eventItem.endResizable !== false);

interface EventItemProps {
  schedulerData: SchedulerData;
  eventItem: EventItemType;
  isStart: boolean;
  isEnd: boolean;
  left: number;
  width: number;
  top: number;
  isInPopover: boolean;
  leftIndex: number;
  rightIndex: number;
  isDragging?: boolean;
  connectDragSource?: ConnectDragSource;
  connectDragPreview?: ConnectDragPreview;
  updateEventStart?: UpdateEventStartFunc;
  updateEventEnd?: UpdateEventEndFunc;
  moveEvent?: MoveEventFunc;
  subtitleGetter?: SubtitleGetterFunc;
  eventItemClick?: EventItemClickFunc;
  viewEventClick?: ViewEventClickFunc;
  viewEventText?: string;
  viewEvent2Click?: ViewEvent2ClickFunc;
  viewEvent2Text?: string;
  conflictOccurred?: ConflictOccurredFunc;
  eventItemTemplateResolver?: EventItemTemplateResolverFunc;
}

interface EventItemState {
  left: number;
  top: number;
  width: number;
  contentMousePosX: number;
  eventItemLeftRect: number;
  eventItemRightRect: number;
  startX?: number;
  endX?: number;
}

export class EventItemComponent extends Component<
  EventItemProps,
  EventItemState
> {
  private startResizer: HTMLDivElement | undefined;
  private endResizer: HTMLDivElement | undefined;
  private supportTouch: boolean;
  private eventItemRef: React.RefObject<HTMLAnchorElement>;
  private _isMounted: boolean;

  constructor(props: EventItemProps) {
    super(props);

    const { left, top, width } = props;
    this.state = {
      left,
      top,
      width,
      contentMousePosX: 0,
      eventItemLeftRect: 0,
      eventItemRightRect: 0,
    };
    this.startResizer = undefined;
    this.endResizer = undefined;

    this.supportTouch = false; // 'ontouchstart' in window;

    this.eventItemRef = createRef();
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.supportTouch = "ontouchstart" in window;
    this.subscribeResizeEvent(this.props);
  }

  componentDidUpdate(prevProps: EventItemProps) {
    if (prevProps !== this.props) {
      const { left, top, width } = this.props;
      this.setState({ left, top, width });

      this.subscribeResizeEvent(this.props);
    }
  }

  resizerHelper = (
    dragtype: "start" | "end",
    eventType: "addEventListener" | "removeEventListener"
  ) => {
    const resizer = dragtype === "start" ? this.startResizer : this.endResizer;
    const doDrag = dragtype === "start" ? this.doStartDrag : this.doEndDrag;
    const stopDrag =
      dragtype === "start" ? this.stopStartDrag : this.stopEndDrag;
    const cancelDrag =
      dragtype === "start" ? this.cancelStartDrag : this.cancelEndDrag;
    if (this.supportTouch) {
      resizer?.[eventType]("touchmove", doDrag, false);
      resizer?.[eventType]("touchend", stopDrag, false);
      resizer?.[eventType]("touchcancel", cancelDrag, false);
    } else {
      document.documentElement[eventType]("mousemove", doDrag, false);
      document.documentElement[eventType]("mouseup", stopDrag, false);
    }
  };

  initDragHelper = (ev: MouseEvent | TouchEvent, dragtype: "start" | "end") => {
    const { schedulerData, eventItem } = this.props;
    const slotId = schedulerData._getEventSlotId(eventItem);
    const slot = schedulerData.getSlotById(slotId);
    if (!!slot && !!slot.groupOnly) return;
    if (schedulerData._isResizing()) return;

    ev.stopPropagation();
    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0) return;
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch.pageX;
    } else {
      if (
        (ev as MouseEvent).buttons !== undefined &&
        (ev as MouseEvent).buttons !== 1
      )
        return;
      clientX = (ev as MouseEvent).clientX;
    }
    this.setState({
      [dragtype === "start" ? "startX" : "endX"]: clientX,
    } as Pick<EventItemState, "startX" | "endX">);

    schedulerData._startResizing();
    this.resizerHelper(dragtype, "addEventListener");
    document.onselectstart = () => false;
    document.ondragstart = () => false;
  };

  initStartDrag = (ev: MouseEvent | TouchEvent) => {
    this.initDragHelper(ev, "start");
  };

  doStartDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0) return;
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch.pageX;
    } else {
      clientX = (ev as MouseEvent).clientX;
    }
    const { left, width, leftIndex, rightIndex, schedulerData } = this.props;
    const cellWidth = schedulerData.getContentCellWidth();
    const offset = leftIndex > 0 ? 5 : 6;
    const minWidth = cellWidth - offset;
    const maxWidth = rightIndex * cellWidth - offset;
    const { startX } = this.state;
    let newLeft = left + clientX - startX!;
    let newWidth = width + startX! - clientX;
    if (newWidth < minWidth) {
      newWidth = minWidth;
      newLeft = (rightIndex - 1) * cellWidth + (rightIndex - 1 > 0 ? 2 : 3);
    } else if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newLeft = 3;
    }

    this.setState({ left: newLeft, width: newWidth });
  };

  stopStartDrag = async (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();
    this.resizerHelper("start", "removeEventListener");
    document.onselectstart = null;
    document.ondragstart = null;
    const {
      width,
      left,
      top,
      leftIndex,
      rightIndex,
      schedulerData,
      eventItem,
      updateEventStart,
      conflictOccurred,
    } = this.props;
    schedulerData._stopResizing();
    const { width: stateWidth } = this.state;
    if (stateWidth === width) return;

    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0) {
        this.setState({ left, top, width });
        return;
      }
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch.pageX;
    } else {
      clientX = (ev as MouseEvent).clientX;
    }
    const { cellUnit, events, config, localeDayjs } = schedulerData;
    const cellWidth = schedulerData.getContentCellWidth();
    const offset = leftIndex > 0 ? 5 : 6;
    const minWidth = cellWidth - offset;
    const maxWidth = rightIndex * cellWidth - offset;
    const { startX } = this.state;
    const newWidth = width + startX! - clientX;
    const deltaX = clientX - startX!;
    let sign = 1;
    if (deltaX < 0) {
      sign = -1;
    } else if (deltaX === 0) {
      sign = 0;
    }
    let count =
      (sign > 0
        ? Math.floor(Math.abs(deltaX) / cellWidth)
        : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
    if (newWidth < minWidth) count = rightIndex - leftIndex - 1;
    else if (newWidth > maxWidth) count = -leftIndex;
    let newStart = eventItem.start.add(
      cellUnit === CellUnit.Hour ? count * config.minuteStep : count,
      cellUnit === CellUnit.Hour ? "minutes" : "days"
    );

    newStart = await stopDragHelper({
      count,
      cellUnit,
      config,
      eventItem,
      localeDayjs,
      dragtype: "start",
      value: newStart,
    });

    let hasConflict = false;
    const slotId = schedulerData._getEventSlotId(eventItem);
    let slotName;
    const slot = schedulerData.getSlotById(slotId);
    if (slot) slotName = slot.name;
    if (config.checkConflict) {
      const start = newStart;
      const end = eventItem.end;

      events.forEach((e: any) => {
        if (
          schedulerData._getEventSlotId(e) === slotId &&
          e.id !== eventItem.id
        ) {
          const eStart = e.start;
          const eEnd = e.end;
          if (
            ((start.isAfter(eStart) || start.isSame(eStart)) &&
              start.isBefore(eEnd)) ||
            (end.isAfter(eStart) && (end.isBefore(eEnd) || end.isSame(eEnd))) ||
            ((eStart.isAfter(start) || eStart.isSame(start)) &&
              eStart.isBefore(end)) ||
            (eEnd.isAfter(start) && (eEnd.isBefore(end) || eEnd.isSame(end)))
          )
            hasConflict = true;
        }
      });
    }

    if (hasConflict) {
      this.setState({ left, top, width });

      if (conflictOccurred !== undefined) {
        conflictOccurred(
          schedulerData,
          "StartResize",
          eventItem,
          DnDTypes.EVENT,
          slotId,
          slotName,
          newStart,
          eventItem.end
        );
      } else {
        console.log(
          "Conflict occurred, set conflictOccurred func in Scheduler to handle it"
        );
      }
      this.subscribeResizeEvent(this.props);
    } else if (updateEventStart !== undefined)
      updateEventStart(schedulerData, eventItem, newStart);
  };

  cancelStartDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    this.startResizer?.removeEventListener(
      "touchmove",
      this.doStartDrag,
      false
    );
    this.startResizer?.removeEventListener(
      "touchend",
      this.stopStartDrag,
      false
    );
    this.startResizer?.removeEventListener(
      "touchcancel",
      this.cancelStartDrag,
      false
    );
    document.onselectstart = null;
    document.ondragstart = null;
    const { schedulerData, left, top, width } = this.props;
    schedulerData._stopResizing();
    this.setState({ left, top, width });
  };

  initEndDrag = (ev: MouseEvent | TouchEvent) => {
    this.initDragHelper(ev, "end");
  };

  doEndDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();
    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0) return;
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch.pageX;
    } else {
      clientX = (ev as MouseEvent).clientX;
    }
    const { width, leftIndex, schedulerData } = this.props;
    const { headers } = schedulerData;
    const cellWidth = schedulerData.getContentCellWidth();
    const offset = leftIndex > 0 ? 5 : 6;
    const minWidth = cellWidth - offset;
    const maxWidth = (headers.length - leftIndex) * cellWidth - offset;
    const { endX } = this.state;

    let newWidth = width + clientX - endX!;
    if (newWidth < minWidth) newWidth = minWidth;
    else if (newWidth > maxWidth) newWidth = maxWidth;

    this.setState({ width: newWidth });
  };

  stopEndDrag = async (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();
    this.resizerHelper("end", "removeEventListener");

    document.onselectstart = null;
    document.ondragstart = null;

    const {
      left,
      top,
      width,
      leftIndex,
      rightIndex,
      schedulerData,
      eventItem,
      updateEventEnd,
      conflictOccurred,
    } = this.props;

    schedulerData._stopResizing();
    const { width: stateWidth } = this.state;

    if (stateWidth === width) return;

    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0) {
        this.setState({ left, top, width });
        return;
      }
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch.pageX;
    } else {
      clientX = (ev as MouseEvent).clientX;
    }
    const { headers, cellUnit, events, config, localeDayjs } = schedulerData;

    const cellWidth = schedulerData.getContentCellWidth();
    const offset = leftIndex > 0 ? 5 : 6;
    const minWidth = cellWidth - offset;
    const maxWidth = (headers.length - leftIndex) * cellWidth - offset;
    const { endX } = this.state;

    const newWidth = width + clientX - endX!;
    const deltaX = newWidth - width;
    let sign = 1;
    if (deltaX < 0) {
      sign = -1;
    } else if (deltaX === 0) {
      sign = 0;
    }

    let count =
      (sign < 0
        ? Math.floor(Math.abs(deltaX) / cellWidth)
        : Math.ceil(Math.abs(deltaX) / cellWidth)) * sign;
    if (newWidth < minWidth) count = leftIndex - rightIndex + 1;
    else if (newWidth > maxWidth) count = headers.length - rightIndex;
    let newEnd = eventItem.end.add(
      cellUnit === CellUnit.Hour ? count * config.minuteStep : count,
      cellUnit === CellUnit.Hour ? "minutes" : "days"
    );
    newEnd = await stopDragHelper({
      dragtype: "start",
      cellUnit,
      config,
      count,
      value: newEnd,
      eventItem,
      localeDayjs,
    });

    let hasConflict = false;
    const slotId = schedulerData._getEventSlotId(eventItem);
    const slot = schedulerData.getSlotById(slotId);

    if (config.checkConflict) {
      const start = eventItem.start;
      const end = newEnd;

      events.forEach((e: any) => {
        if (
          schedulerData._getEventSlotId(e) === slotId &&
          e.id !== eventItem.id
        ) {
          const eStart = e.start;
          const eEnd = e.end;
          if (
            ((start.isAfter(eStart) || start.isSame(eStart)) &&
              start.isBefore(eEnd)) ||
            (end.isAfter(eStart) && (end.isBefore(eEnd) || end.isSame(eEnd))) ||
            ((eStart.isAfter(start) || eStart.isSame(start)) &&
              eStart.isBefore(end)) ||
            (eEnd.isAfter(start) && (eEnd.isBefore(end) || eEnd.isSame(end)))
          ) {
            hasConflict = true;
          }
        }
      });
    }

    if (hasConflict) {
      this.setState({ left, top, width });

      if (conflictOccurred !== undefined) {
        conflictOccurred(
          schedulerData,
          "EndResize",
          eventItem,
          DnDTypes.EVENT,
          slotId,
          slot ? slot.name : null,
          eventItem.start,
          newEnd
        );
      } else {
        console.log(
          "Conflict occurred, set conflictOccurred func in Scheduler to handle it"
        );
      }
      this.subscribeResizeEvent(this.props);
    } else if (updateEventEnd !== undefined) {
      updateEventEnd(schedulerData, eventItem, newEnd);
    }
  };

  cancelEndDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    this.endResizer?.removeEventListener("touchmove", this.doEndDrag, false);
    this.endResizer?.removeEventListener("touchend", this.stopEndDrag, false);
    this.endResizer?.removeEventListener(
      "touchcancel",
      this.cancelEndDrag,
      false
    );
    document.onselectstart = null;
    document.ondragstart = null;
    const { schedulerData, left, top, width } = this.props;
    schedulerData._stopResizing();
    this.setState({ left, top, width });
  };

  handleMouseMove = (event: MouseEvent) => {
    const rect = this.eventItemRef.current!.getBoundingClientRect();
    this.setState({
      contentMousePosX: event.clientX,
      eventItemLeftRect: rect.left,
      eventItemRightRect: rect.right,
    });
  };
  subscribeResizeEvent = (props: EventItemProps) => {
    if (this.startResizer !== undefined && this.startResizer !== null) {
      if (this.supportTouch) {
        // this.startResizer.removeEventListener('touchstart', this.initStartDrag, false);
        // if (startResizable(props))
        //     this.startResizer.addEventListener('touchstart', this.initStartDrag, false);
      } else {
        this.startResizer.removeEventListener(
          "mousedown",
          this.initStartDrag,
          false
        );
        if (startResizable(props))
          this.startResizer.addEventListener(
            "mousedown",
            this.initStartDrag,
            false
          );
      }
    }
    if (this.endResizer !== undefined && this.endResizer !== null) {
      if (this.supportTouch) {
        // this.endResizer.removeEventListener('touchstart', this.initEndDrag, false);
        // if (endResizable(props))
        //     this.endResizer.addEventListener('touchstart', this.initEndDrag, false);
      } else {
        this.endResizer.removeEventListener(
          "mousedown",
          this.initEndDrag,
          false
        );
        if (endResizable(props))
          this.endResizer.addEventListener(
            "mousedown",
            this.initEndDrag,
            false
          );
      }
    }
  };

  render() {
    const {
      eventItem,
      isStart,
      isEnd,
      isInPopover,
      eventItemClick,
      schedulerData,
      isDragging,
      connectDragSource,
      connectDragPreview,
      eventItemTemplateResolver,
    } = this.props;
    const { config, localeDayjs } = schedulerData;
    const { left, width, top } = this.state;
    let roundCls;
    const popoverPlacement = config.eventItemPopoverPlacement;
    const isPopoverPlacementMousePosition =
      /(top|bottom)(Right|Left)MousePosition/.test(popoverPlacement);

    if (isStart) {
      roundCls = isEnd ? "round-all" : "round-head";
    } else {
      roundCls = isEnd ? "round-tail" : "round-none";
    }
    let bgColor = config.defaultEventBgColor;

    if (eventItem.bgColor) bgColor = eventItem.bgColor;

    const titleText = schedulerData.behaviors.getEventTextFunc(
      schedulerData,
      eventItem
    );
    const content = (
      <EventItemPopover
        {...this.props}
        eventItem={eventItem}
        title={eventItem.title}
        startTime={eventItem.start}
        endTime={eventItem.end}
        statusColor={bgColor}
      />
    );

    const start = eventItem.start;
    const eventTitle = isInPopover
      ? `${start.format("HH:mm")} ${titleText}`
      : titleText;
    let startResizeDiv = <div />;
    if (startResizable(this.props))
      startResizeDiv = (
        <div
          className="event-resizer event-start-resizer"
          ref={(ref) => (this.startResizer = ref)}
        />
      );
    let endResizeDiv = <div />;
    if (endResizable(this.props))
      endResizeDiv = (
        <div
          className="event-resizer event-end-resizer"
          ref={(ref) => (this.endResizer = ref)}
        />
      );

    let eventItemTemplate: React.ReactNode = (
      <div
        className={`${roundCls} event-item`}
        key={eventItem.id}
        style={{ height: config.eventItemHeight, backgroundColor: bgColor }}
      >
        <span
          style={{
            marginLeft: "10px",
            lineHeight: `${config.eventItemHeight}px`,
          }}
        >
          {eventTitle}
        </span>
      </div>
    );
    if (eventItemTemplateResolver !== undefined) {
      eventItemTemplate = eventItemTemplateResolver(
        schedulerData,
        eventItem,
        bgColor,
        isStart,
        isEnd,
        "event-item",
        config.eventItemHeight,
        undefined,
        roundCls
      );
    }

    const a = (
      <a
        className="timeline-event"
        ref={this.eventItemRef}
        onMouseMove={
          isPopoverPlacementMousePosition ? this.handleMouseMove : undefined
        }
        style={{ left, width, top }}
        onClick={() => {
          if (eventItemClick) eventItemClick(schedulerData, eventItem);
        }}
      >
        {eventItemTemplate}
        {startResizeDiv}
        {endResizeDiv}
      </a>
    );

    const getMousePositionOptionsData = () => {
      let popoverOffsetX = 0;
      let mousePositionPlacement = "";

      if (isPopoverPlacementMousePosition) {
        const isMousePositionPlacementLeft = popoverPlacement.includes("Left");
        const { contentMousePosX } = this.state;
        const popoverWidth = config.eventItemPopoverWidth;
        const { eventItemLeftRect } = this.state;
        const { eventItemRightRect } = this.state;
        let eventItemMousePosX = isMousePositionPlacementLeft
          ? eventItemLeftRect
          : eventItemRightRect;
        let posAdjustControl = isMousePositionPlacementLeft ? 1 : -1;

        mousePositionPlacement = popoverPlacement.replace("MousePosition", "");

        const distance = 10;

        if (isMousePositionPlacementLeft && this._isMounted) {
          if (contentMousePosX + popoverWidth + distance > window.innerWidth) {
            mousePositionPlacement = `${popoverPlacement.replace(/(Right|Left).*/, "")}Right`;
            eventItemMousePosX = eventItemRightRect;
            posAdjustControl = -1;
          }
        } else if (contentMousePosX - popoverWidth - distance < 0) {
          mousePositionPlacement = `${popoverPlacement.replace(/(Right|Left).*/, "")}Left`;
          eventItemMousePosX = eventItemLeftRect;
          posAdjustControl = 1;
        }

        popoverOffsetX =
          contentMousePosX - eventItemMousePosX - 20 * posAdjustControl;
      }

      return { popoverOffsetX, mousePositionPlacement };
    };

    const { popoverOffsetX, mousePositionPlacement } =
      getMousePositionOptionsData();

    const aItem = config.dragAndDropEnabled
      ? connectDragPreview!(connectDragSource!(a))
      : a;

    if (
      isDragging
        ? null
        : schedulerData._isResizing() ||
          config.eventItemPopoverEnabled === false ||
          eventItem.showPopover === false
    ) {
      return <div>{aItem}</div>;
    }

    return (
      <Popover
        motion={isPopoverPlacementMousePosition ? "" : undefined}
        align={
          isPopoverPlacementMousePosition
            ? {
                offset: [
                  popoverOffsetX,
                  popoverPlacement.includes("top") ? -10 : 10,
                ],
                overflow: {},
              }
            : undefined
        }
        placement={
          isPopoverPlacementMousePosition
            ? mousePositionPlacement
            : popoverPlacement
        }
        content={content}
        trigger={config.eventItemPopoverTrigger}
        overlayClassName="scheduler-event-item-popover"
      >
        {aItem}
      </Popover>
    );
  }
}
