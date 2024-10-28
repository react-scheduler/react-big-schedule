// @ts-ignore

import { DragSource, DragSourceConnector, DragSourceMonitor } from "react-dnd";
import { DnDTypes, ViewType, DATETIME_FORMAT } from "../config/default";
import dayjs from "dayjs";
import { SchedulerData } from "../components/SchedulerData";
import { EventItemType } from "../types/baseType";

interface DnDSourceProps {
  schedulerData: SchedulerData;
  moveEvent?: (
    schedulerData: SchedulerData,
    eventItem: EventItemType,
    slotId: string,
    slotName: string,
    newStart: string,
    newEnd: string
  ) => void;
  newEvent?: (
    schedulerData: SchedulerData,
    slotId: string,
    slotName: string,
    newStart: string,
    newEnd: string,
    type: string,
    item: any
  ) => void;
  conflictOccurred?: (
    schedulerData: SchedulerData,
    action: string,
    item: any,
    type: string,
    slotId: string,
    slotName: string,
    newStart: string,
    newEnd: string
  ) => void;
  resourceEvents?: { groupOnly: boolean };
}

interface DragObject {
  type: string;
  item: any;
}

export class DnDSource {
  private resolveDragObjFunc: (props: any) => any;
  private DecoratedComponent: React.ComponentType<any>;
  public dndType: string;
  private dragSource: React.ComponentType<any>;

  constructor(
    resolveDragObjFunc: (props: any) => any,
    DecoratedComponent: React.ComponentType<any>,
    DnDEnabled: boolean,
    dndType: string = DnDTypes.EVENT
  ) {
    this.resolveDragObjFunc = resolveDragObjFunc;
    this.DecoratedComponent = DecoratedComponent;
    this.dndType = dndType;
    this.dragSource = DnDEnabled
      ? DragSource(
          this.dndType,
          this.getDragSpec(),
          this.getDragCollect
        )(this.DecoratedComponent)
      : this.DecoratedComponent;
  }

  getDragSpec = () => ({
    beginDrag: (props: DnDSourceProps) => this.resolveDragObjFunc(props),
    endDrag: (props: DnDSourceProps, monitor: DragSourceMonitor) => {
      if (!monitor.didDrop()) return;

      const { moveEvent, newEvent, schedulerData } = props;
      const { events, config, viewType, localeDayjs } = schedulerData;
      const item = monitor.getItem() as any;
      const type = monitor.getItemType() as string;
      const dropResult = monitor.getDropResult() as any;
      let {
        slotId,
        slotName,
        start: newStart,
        end: newEnd,
        initialStart,
      } = dropResult;
      let action = "New";

      const isEvent = type === DnDTypes.EVENT;
      if (isEvent) {
        const event = item;
        if (config.relativeMove) {
          newStart = localeDayjs(event.start)
            .add(
              localeDayjs(newStart).diff(localeDayjs(new Date(initialStart))),
              "ms"
            )
            .format(DATETIME_FORMAT);
        } else if (viewType !== ViewType.Day) {
          const tmpDayjs = localeDayjs(newStart);
          newStart = localeDayjs(event.start)
            .year(tmpDayjs.year())
            .month(tmpDayjs.month())
            .date(tmpDayjs.date())
            .format(DATETIME_FORMAT);
        }
        newEnd = localeDayjs(newStart)
          .add(localeDayjs(event.end).diff(localeDayjs(event.start)), "ms")
          .format(DATETIME_FORMAT);

        if (config.crossResourceMove === false) {
          slotId = schedulerData._getEventSlotId(item);
          slotName = undefined;
          const slot = schedulerData.getSlotById(slotId);
          if (slot) slotName = slot.name;
        }

        action = "Move";
      }

      let hasConflict = false;
      if (config.checkConflict) {
        const start = localeDayjs(newStart);
        const end = localeDayjs(newEnd);

        events.forEach((e) => {
          if (
            schedulerData._getEventSlotId(e) === slotId &&
            (!isEvent || e.id !== item.id)
          ) {
            const eStart = localeDayjs(e.start);
            const eEnd = localeDayjs(e.end);
            if (
              (start >= eStart && start < eEnd) ||
              (end > eStart && end <= eEnd) ||
              (eStart >= start && eStart < end) ||
              (eEnd > start && eEnd <= end)
            )
              hasConflict = true;
          }
        });
      }

      if (hasConflict) {
        const { conflictOccurred } = props;
        if (conflictOccurred !== undefined) {
          conflictOccurred(
            schedulerData,
            action,
            item,
            type,
            slotId,
            slotName,
            newStart,
            newEnd
          );
        } else {
          console.log(
            "Conflict occurred, set conflictOccurred func in Scheduler to handle it"
          );
        }
      } else if (isEvent) {
        if (moveEvent !== undefined) {
          moveEvent(schedulerData, item, slotId, slotName, newStart, newEnd);
        }
      } else if (newEvent !== undefined)
        newEvent(schedulerData, slotId, slotName, newStart, newEnd, type, item);
    },

    canDrag: (props: DnDSourceProps) => {
      const { schedulerData, resourceEvents } = props;
      const item = this.resolveDragObjFunc(props);
      if (schedulerData._isResizing()) return false;
      const { config } = schedulerData;
      return (
        config.movable &&
        (resourceEvents === undefined || !resourceEvents.groupOnly) &&
        (item.movable === undefined || item.movable !== false)
      );
    },
  });

  getDragCollect = (
    connect: DragSourceConnector,
    monitor: DragSourceMonitor
  ) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
    connectDragPreview: connect.dragPreview(),
  });

  getDragSource = () => this.dragSource;
}
