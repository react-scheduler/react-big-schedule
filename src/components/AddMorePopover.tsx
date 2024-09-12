import React, { useState } from "react";
import { Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { EventItemComponent } from "../classComponents/EventItem";
import { DnDSource } from "../classComponents/DnDSource";
import { SchedulerData } from "./SchedulerData";
import { EventItemType, HeaderEventsType } from "../types/baseType";
import {
  CloseActionFunc,
  EventItemClickFunc,
  EventItemTemplateResolverFunc,
  MoveEventFunc,
  SubtitleGetterFunc,
  ViewEvent2ClickFunc,
  ViewEventClickFunc,
} from "../types/moreTypes";

interface AddMorePopoverProps {
  schedulerData: SchedulerData;
  headerItem: HeaderEventsType;
  left: number;
  top: number;
  height: number;
  closeAction: CloseActionFunc;

  subtitleGetter?: SubtitleGetterFunc;
  moveEvent?: MoveEventFunc;
  eventItemClick?: EventItemClickFunc;
  viewEventClick?: ViewEventClickFunc;
  viewEventText?: string;
  viewEvent2Click?: ViewEvent2ClickFunc;
  viewEvent2Text?: string;
  eventItemTemplateResolver?: EventItemTemplateResolverFunc;
}

function AddMorePopover(props: AddMorePopoverProps) {
  const { schedulerData, headerItem, left, top, height, closeAction } = props;
  const { config, localeDayjs } = schedulerData;
  const { time, start, end, events } = headerItem;

  const [dndSource] = useState(
    new DnDSource(
      (dndProps) => dndProps.eventItem,
      EventItemComponent,
      schedulerData.config.dragAndDropEnabled
    )
  );

  const header = localeDayjs(new Date(time)).format(
    config.addMorePopoverHeaderFormat
  );
  const durationStart = start.clone();
  const durationEnd = localeDayjs(end);
  const DnDEventItem = dndSource.getDragSource();
  const eventList = events.map((evt, i) => {
    const eventItem = evt.eventItem;

    if (evt !== undefined) {
      const eventStart = localeDayjs(eventItem.start);
      const eventEnd = localeDayjs(eventItem.end);
      const isStart = eventStart >= durationStart;
      const isEnd = eventEnd < durationEnd;
      const eventItemTop = 12 + (i + 1) * config.eventItemLineHeight;

      return (
        <DnDEventItem
          {...props}
          key={eventItem.id}
          eventItem={evt.eventItem}
          leftIndex={0}
          isInPopover
          isStart={isStart}
          isEnd={isEnd}
          rightIndex={1}
          left={10}
          width={138}
          top={eventItemTop}
        />
      );
    }
    return null;
  });

  return (
    <div
      className="add-more-popover-overlay"
      style={{ left, top, height, width: "170px" }}
    >
      <Row justify="space-between" align="middle">
        <Col span={22}>
          <span className="base-text">{header}</span>
        </Col>
        <Col span={2}>
          <button type="button" onClick={() => closeAction(undefined)}>
            <CloseOutlined />
          </button>
        </Col>
      </Row>
      {eventList?.filter(Boolean)}
    </div>
  );
}

export default AddMorePopover;
