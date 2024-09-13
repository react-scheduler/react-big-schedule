import React, { Component, ReactNode } from "react";
import { DragSourceMonitor, DropTargetMonitor } from "react-dnd";
import AddMore from "../components/AddMore";
import Summary from "../components/Summary";
import SelectedArea from "../components/SelectedArea";
import {
  CellUnit,
  DATETIME_FORMAT,
  SummaryPos,
  DnDTypes,
} from "../config/default";
import { getPos } from "../helper/utility";
import { SchedulerData } from "../components/SchedulerData";
import { RenderDataItem } from "../types/baseType";
import { Dayjs } from "dayjs";
import { DnDSource } from "./DnDSource";

interface ResourceEventsProps {
  resourceEvents: RenderDataItem;
  schedulerData: SchedulerData;
  dndSource: DnDSource;
  onSetAddMoreState?: (state: any) => void;
  updateEventStart?: (
    schedulerData: SchedulerData,
    event: any,
    newStart: string
  ) => void;
  updateEventEnd?: (
    schedulerData: SchedulerData,
    event: any,
    newEnd: string
  ) => void;
  moveEvent?: (
    schedulerData: SchedulerData,
    event: any,
    slotId: string,
    slotName: string,
    start: Dayjs,
    end: Dayjs
  ) => void;
  movingEvent?: (
    schedulerData: SchedulerData,
    slotId: string,
    slotName: string,
    newStart: Dayjs,
    newEnd: Dayjs
  ) => void;
  conflictOccurred?: (
    schedulerData: SchedulerData,
    action: string,
    event: any,
    type: string,
    slotId: string,
    slotName: string,
    start: Dayjs,
    end: Dayjs
  ) => void;
  subtitleGetter?: (schedulerData: SchedulerData, event: any) => ReactNode;
  eventItemClick?: (schedulerData: SchedulerData, event: any) => void;
  viewEventClick?: (schedulerData: SchedulerData, event: any) => void;
  viewEventText?: string;
  viewEvent2Click?: (schedulerData: SchedulerData, event: any) => void;
  viewEvent2Text?: string;
  newEvent?: (
    schedulerData: SchedulerData,
    slotId: string,
    slotName: string,
    start: Dayjs,
    end: Dayjs
  ) => void;
  eventItemTemplateResolver?: (schedulerData: any, event: any) => ReactNode;
  connectDropTarget?: (element: ReactNode) => ReactNode;
}

interface ResourceEventsState {
  isSelecting: boolean;
  left: number;
  width: number;
  startX?: number;
  leftIndex?: number;
  rightIndex?: number;
}

export class ResourceEventsComponent extends Component<
  ResourceEventsProps,
  ResourceEventsState
> {
  private eventContainer: HTMLDivElement | null = null;
  private supportTouch: boolean = false;

  constructor(props: ResourceEventsProps) {
    super(props);

    this.state = {
      isSelecting: false,
      left: 0,
      width: 0,
    };
  }

  componentDidMount() {
    const { schedulerData } = this.props;
    const { config } = schedulerData;
    this.supportTouch = "ontouchstart" in window;

    if (config.creatable === true) {
      this.supportTouchHelper();
    }
  }

  componentDidUpdate(prevProps: ResourceEventsProps) {
    if (prevProps !== this.props) {
      this.supportTouchHelper("remove");
      if (this.props.schedulerData.config.creatable) {
        this.supportTouchHelper();
      }
    }
  }

  supportTouchHelper = (evType: "add" | "remove" = "add") => {
    const ev =
      evType === "add"
        ? this.eventContainer?.addEventListener
        : this.eventContainer?.removeEventListener;
    if (this.supportTouch) {
      // ev('touchstart', this.initDrag, false);
    } else {
      ev?.("mousedown", this.initDrag, false);
    }
  };

  initDrag = (ev: MouseEvent | TouchEvent) => {
    const { isSelecting } = this.state;
    if (isSelecting) return;
    if ((ev.target as HTMLElement) !== this.eventContainer) return;

    ev.stopPropagation();

    const { resourceEvents } = this.props;
    if (resourceEvents.groupOnly) return;
    const [clientX, toReturn] = this.dragHelper(ev, "init");

    if (toReturn) {
      return;
    }

    const { schedulerData } = this.props;
    const cellWidth = schedulerData.getContentCellWidth();
    const pos = getPos(this.eventContainer!);
    const startX = clientX - pos.x;
    const leftIndex = Math.floor(startX / cellWidth);
    const left = leftIndex * cellWidth;
    const rightIndex = Math.ceil(startX / cellWidth);
    const width = (rightIndex - leftIndex) * cellWidth;

    this.setState({
      startX,
      left,
      leftIndex,
      width,
      rightIndex,
      isSelecting: true,
    });

    if (this.supportTouch) {
      document.documentElement.addEventListener(
        "touchmove",
        this.doDrag,
        false
      );
      document.documentElement.addEventListener(
        "touchend",
        this.stopDrag,
        false
      );
      document.documentElement.addEventListener(
        "touchcancel",
        this.cancelDrag,
        false
      );
    } else {
      document.documentElement.addEventListener(
        "mousemove",
        this.doDrag,
        false
      );
      document.documentElement.addEventListener(
        "mouseup",
        this.stopDrag,
        false
      );
    }
    document.onselectstart = () => false;
    document.ondragstart = () => false;
  };

  doDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    const [clientX, toReturn] = this.dragHelper(ev, "do");

    if (toReturn) {
      return;
    }
    const { startX } = this.state;
    const { schedulerData } = this.props;
    const { headers } = schedulerData;
    const cellWidth = schedulerData.getContentCellWidth();
    const pos = getPos(this.eventContainer!);
    const currentX = clientX - pos.x;
    let leftIndex = Math.floor(Math.min(startX!, currentX) / cellWidth);
    leftIndex = leftIndex < 0 ? 0 : leftIndex;
    const left = leftIndex * cellWidth;
    let rightIndex = Math.ceil(Math.max(startX!, currentX) / cellWidth);
    rightIndex = rightIndex > headers.length ? headers.length : rightIndex;
    const width = (rightIndex - leftIndex) * cellWidth;

    this.setState({ leftIndex, left, rightIndex, width, isSelecting: true });
  };

  dragHelper = (
    ev: MouseEvent | TouchEvent,
    dragType: "init" | "do"
  ): [number, boolean] => {
    let clientX = 0;
    if (this.supportTouch) {
      if ((ev as TouchEvent).changedTouches.length === 0)
        return [clientX, true];
      const touch = (ev as TouchEvent).changedTouches[0];
      clientX = touch!.pageX;
    } else if (dragType === "init") {
      if (
        (ev as MouseEvent).buttons !== undefined &&
        (ev as MouseEvent).buttons !== 1
      )
        return [clientX, true];
      clientX = (ev as MouseEvent).clientX;
    } else {
      clientX = (ev as MouseEvent).clientX;
    }
    return [clientX, false];
  };

  stopDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    const { schedulerData, newEvent, resourceEvents } = this.props;
    const { headers, events, config, cellUnit, localeDayjs } = schedulerData;
    const { leftIndex, rightIndex } = this.state;
    if (this.supportTouch) {
      document.documentElement.removeEventListener(
        "touchmove",
        this.doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "touchend",
        this.stopDrag,
        false
      );
      document.documentElement.removeEventListener(
        "touchcancel",
        this.cancelDrag,
        false
      );
    } else {
      document.documentElement.removeEventListener(
        "mousemove",
        this.doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "mouseup",
        this.stopDrag,
        false
      );
    }
    document.onselectstart = null;
    document.ondragstart = null;

    const startTime = localeDayjs(
      headers[leftIndex!]?.time
        ? // @ts-ignore
          new Date(headers[leftIndex!]?.time)
        : new Date()
    );
    let endTime =
      resourceEvents.headerItems[rightIndex! - 1]?.end || localeDayjs();
    if (cellUnit !== CellUnit.Hour) {
      endTime = (
        resourceEvents.headerItems[rightIndex! - 1]?.start || localeDayjs()
      )
        .hour(23)
        .minute(59)
        .second(59);
    }
    const { slotId } = resourceEvents;
    const { slotName } = resourceEvents;

    this.setState({
      startX: 0,
      leftIndex: 0,
      left: 0,
      rightIndex: 0,
      width: 0,
      isSelecting: false,
    });

    let hasConflict = false;
    if (config.checkConflict) {
      const start = startTime;
      const end = endTime;

      events.forEach((e: any) => {
        if (schedulerData._getEventSlotId(e) === slotId) {
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
      const { conflictOccurred } = this.props;
      if (conflictOccurred !== undefined) {
        conflictOccurred(
          schedulerData,
          "New",
          {
            id: undefined,
            start: startTime,
            end: endTime,
            slotId,
            slotName,
            title: undefined,
          },
          DnDTypes.EVENT,
          slotId,
          slotName,
          startTime,
          endTime
        );
      } else {
        console.log(
          "Conflict occurred, set conflictOccurred func in Scheduler to handle it"
        );
      }
    } else if (newEvent !== undefined)
      newEvent(schedulerData, slotId, slotName, startTime, endTime);
  };

  cancelDrag = (ev: MouseEvent | TouchEvent) => {
    ev.stopPropagation();

    const { isSelecting } = this.state;
    if (isSelecting) {
      document.documentElement.removeEventListener(
        "touchmove",
        this.doDrag,
        false
      );
      document.documentElement.removeEventListener(
        "touchend",
        this.stopDrag,
        false
      );
      document.documentElement.removeEventListener(
        "touchcancel",
        this.cancelDrag,
        false
      );
      document.onselectstart = null;
      document.ondragstart = null;
      this.setState({
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: false,
      });
    }
  };

  onAddMoreClick = (headerItem: any) => {
    const { onSetAddMoreState, resourceEvents, schedulerData } = this.props;
    if (onSetAddMoreState) {
      const { config } = schedulerData;
      const cellWidth = schedulerData.getContentCellWidth();
      const index = resourceEvents.headerItems.indexOf(headerItem);
      if (index !== -1) {
        let left = index * (cellWidth - 1);
        const pos = getPos(this.eventContainer!);
        left += pos.x;
        const top = pos.y;
        const height = (headerItem.count + 1) * config.eventItemLineHeight + 20;

        onSetAddMoreState({
          headerItem,
          left,
          top,
          height,
        });
      }
    }
  };

  eventContainerRef = (element: HTMLDivElement) => {
    this.eventContainer = element;
  };

  render() {
    const { resourceEvents, schedulerData, connectDropTarget, dndSource } =
      this.props;
    const { cellUnit, startDate, endDate, config, localeDayjs } = schedulerData;
    const { isSelecting, left, width } = this.state;
    const cellWidth = schedulerData.getContentCellWidth();
    const cellMaxEvents = schedulerData.getCellMaxEvents();
    const rowWidth = schedulerData.getContentTableWidth();
    const DnDEventItem = dndSource.getDragSource();

    const selectedArea = isSelecting ? (
      <SelectedArea {...this.props} left={left} width={width} />
    ) : (
      <div />
    );

    const eventList: ReactNode[] = [];
    resourceEvents.headerItems.forEach((headerItem, index) => {
      if (headerItem.count > 0 || headerItem.summary !== undefined) {
        const isTop =
          config.summaryPos === SummaryPos.TopRight ||
          config.summaryPos === SummaryPos.Top ||
          config.summaryPos === SummaryPos.TopLeft;
        const marginTop =
          resourceEvents.hasSummary && isTop
            ? 1 + config.eventItemLineHeight
            : 1 + config.marginTop;
        const renderEventsMaxIndex =
          headerItem.addMore === 0 ? cellMaxEvents : headerItem.addMoreIndex;

        headerItem.events.forEach((evt: any, idx: number) => {
          if (idx < renderEventsMaxIndex && evt !== undefined && evt.render) {
            let durationStart = startDate;
            let durationEnd = localeDayjs(endDate);
            if (cellUnit === CellUnit.Hour) {
              durationStart = startDate.add(config.dayStartFrom, "hours");
              durationEnd = endDate.add(config.dayStopTo + 1, "hours");
            }
            const eventStart = evt.eventItem.start;
            const eventEnd = evt.eventItem.end;
            const isStart =
              eventStart.isAfter(durationStart) ||
              eventStart.isSame(durationStart);
            const isEnd =
              eventEnd.isBefore(durationEnd) || eventEnd.isSame(durationEnd);
            const left = index * cellWidth + (index > 0 ? 2 : 3);
            const width =
              evt.span * cellWidth - (index > 0 ? 5 : 6) > 0
                ? evt.span * cellWidth - (index > 0 ? 5 : 6)
                : 0;
            const top = marginTop + idx * config.eventItemLineHeight;
            const eventItem = (
              <DnDEventItem
                {...this.props}
                key={evt.eventItem.id}
                eventItem={evt.eventItem}
                isStart={isStart}
                isEnd={isEnd}
                isInPopover={false}
                left={left}
                width={width}
                top={top}
                leftIndex={index}
                rightIndex={index + evt.span}
              />
            );
            eventList.push(eventItem);
          }
        });

        if (headerItem.addMore > 0) {
          const left = index * cellWidth + (index > 0 ? 2 : 3);
          const width = cellWidth - (index > 0 ? 5 : 6);
          const top =
            marginTop + headerItem.addMoreIndex * config.eventItemLineHeight;
          const addMoreItem = (
            <AddMore
              {...this.props}
              key={headerItem.time}
              headerItem={headerItem}
              number={headerItem.addMore}
              left={left}
              width={width}
              top={top}
              clickAction={this.onAddMoreClick}
            />
          );
          eventList.push(addMoreItem);
        }

        if (headerItem.summary !== undefined) {
          const top = isTop
            ? 1
            : resourceEvents.rowHeight - config.eventItemLineHeight + 1;
          const left = index * cellWidth + (index > 0 ? 2 : 3);
          const width = cellWidth - (index > 0 ? 5 : 6);
          const key = `${resourceEvents.slotId}_${headerItem.time}`;
          const summary = (
            <Summary
              key={key}
              schedulerData={schedulerData}
              summary={headerItem.summary}
              left={left}
              width={width}
              top={top}
            />
          );
          eventList.push(summary);
        }
      }
    });

    const eventContainer = (
      <div
        ref={this.eventContainerRef}
        className="event-container"
        style={{ height: resourceEvents.rowHeight }}
      >
        {selectedArea}
        {eventList}
      </div>
    );
    return (
      <tr>
        <td style={{ width: rowWidth }}>
          {config.dragAndDropEnabled
            ? connectDropTarget!(eventContainer)
            : eventContainer}
        </td>
      </tr>
    );
  }
}
