import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";
import EventItemPopover from "./EventItemPopover";
import { SchedulerData } from "./SchedulerData";
import { EventItemType } from "../types/baseType";
import {
  EventItemClickFunc,
  EventItemPopoverTemplateResolverFunc,
  EventItemTemplateResolverFunc,
  SubtitleGetterFunc,
  ViewEvent2ClickFunc,
} from "../types/moreTypes";

interface AgendaEventItemProps {
  schedulerData: SchedulerData;
  eventItem: EventItemType;
  isStart: boolean;
  isEnd: boolean;
  subtitleGetter?: SubtitleGetterFunc;
  eventItemClick?: EventItemClickFunc;
  viewEventClick?: ViewEvent2ClickFunc;
  viewEventText?: string;
  viewEvent2Click?: ViewEvent2ClickFunc;
  viewEvent2Text?: string;
  eventItemTemplateResolver?: EventItemTemplateResolverFunc;
  eventItemPopoverTemplateResolver?: EventItemPopoverTemplateResolverFunc;
}

function AgendaEventItem(props: AgendaEventItemProps) {
  const {
    eventItem,
    isStart,
    isEnd,
    eventItemClick,
    schedulerData,
    eventItemTemplateResolver,
  } = props;
  const { config, behaviors } = schedulerData;

  let roundCls = "round-none";
  if (isStart && isEnd) {
    roundCls = "round-all";
  } else if (isStart) {
    roundCls = "round-head";
  } else if (isEnd) {
    roundCls = "round-tail";
  }

  const backgroundColor = eventItem.bgColor || config.defaultEventBgColor;
  const titleText = behaviors.getEventTextFunc(schedulerData, eventItem);

  const eventItemStyle = {
    height: config.eventItemHeight,
    maxWidth: config.agendaMaxEventWidth,
    backgroundColor,
  };

  let eventItemTemplate: React.ReactNode = (
    <div
      className={`${roundCls} event-item`}
      key={eventItem.id}
      style={eventItemStyle}
    >
      <span
        style={{
          marginLeft: "10px",
          lineHeight: `${config.eventItemHeight}px`,
        }}
      >
        {titleText}
      </span>
    </div>
  );

  if (eventItemTemplateResolver) {
    eventItemTemplate = eventItemTemplateResolver(
      schedulerData,
      eventItem,
      backgroundColor,
      isStart,
      isEnd,
      "event-item",
      config.eventItemHeight,
      config.agendaMaxEventWidth,
      roundCls
    );
  }

  const handleClick = () => eventItemClick?.(schedulerData, eventItem);

  const eventLink = (
    <button
      type="button"
      className="day-event txt-btn-dis"
      onClick={handleClick}
    >
      {eventItemTemplate}
    </button>
  );

  const content = (
    <EventItemPopover
      title={eventItem.title}
      startTime={eventItem.start}
      endTime={eventItem.end}
      statusColor={backgroundColor}
      eventItem={eventItem}
      schedulerData={schedulerData}
      eventItemPopoverTemplateResolver={props.eventItemPopoverTemplateResolver}
      subtitleGetter={props.subtitleGetter}
      viewEvent2Click={props.viewEvent2Click}
      viewEvent2Text={props.viewEvent2Text}
      viewEventClick={props.viewEventClick}
      viewEventText={props.viewEventText}
    />
  );

  return config.eventItemPopoverEnabled ? (
    <Popover
      placement="bottomLeft"
      content={content}
      trigger="hover"
      overlayClassName="scheduler-agenda-event-popover"
    >
      {eventLink}
    </Popover>
  ) : (
    <span>{eventLink}</span>
  );
}

export default AgendaEventItem;
