import React from "react";
import PropTypes from "prop-types";
import AgendaEventItem from "./AgendaEventItem";
import {
  EventItemClickFunc,
  EventItemTemplateResolverFunc,
  SlotClickedFunc,
  SlotItemTemplateResolverFunc,
  SubtitleGetterFunc,
  ViewEvent2ClickFunc,
  ViewEventClickFunc,
} from "../types/moreTypes";
import { SchedulerData } from "./SchedulerData";
import { EventItemType, RenderDataItem } from "../types/baseType";

interface AgendaResourceEventsProps {
  schedulerData: SchedulerData;
  renderItem: RenderDataItem; //dont know type
  subtitleGetter?: SubtitleGetterFunc;
  eventItemClick?: EventItemClickFunc;
  viewEventClick?: ViewEventClickFunc;
  viewEventText?: string;
  viewEvent2Click?: ViewEvent2ClickFunc;
  viewEvent2Text?: string;
  slotClickedFunc?: SlotClickedFunc;
  slotItemTemplateResolver?: SlotItemTemplateResolverFunc;
  eventItemTemplateResolver?: EventItemTemplateResolverFunc;
}

function AgendaResourceEvents(props: AgendaResourceEventsProps) {
  const {
    schedulerData,
    renderItem,
    slotClickedFunc,
    slotItemTemplateResolver,
  } = props;
  const { startDate, endDate, config, localeDayjs } = schedulerData;
  const width = schedulerData.getResourceTableWidth() - 2;

  const events = (renderItem?.headerItems || []).flatMap((item) => {
    const start = startDate.clone();
    const end = endDate.clone().add(1, "days");
    const headerStart = item.start.clone();
    const headerEnd = item.end.clone();
    if (start.isSame(headerStart) && end.isSame(headerEnd)) {
      const eventsNodes: React.ReactNode[] = item.events.map((evt) => {
        const eventItem = evt.eventItem

        const durationStart = startDate.clone();
        const durationEnd = endDate.clone().add(1, "days");
        const eventStart = localeDayjs(eventItem.start);
        const eventEnd = localeDayjs(eventItem.end);
        const isStart = eventStart >= durationStart;
        const isEnd = eventEnd < durationEnd;

        return (
          <AgendaEventItem
            key={eventItem.id}
            eventItem={eventItem}
            isStart={isStart}
            isEnd={isEnd}
            eventItemTemplateResolver={props.eventItemTemplateResolver}
            eventItemClick={props.eventItemClick}
            schedulerData={schedulerData}
            subtitleGetter={props.subtitleGetter}
            viewEvent2Click={props.viewEvent2Click}
            viewEvent2Text={props.viewEvent2Text}
            viewEventClick={props.viewEventClick}
            viewEventText={props.viewEventText}
          />
        );
      });
      return eventsNodes
    }
    return [];
  });

  const slotItemContent = slotClickedFunc ? (
    <button
      className="txt-btn-dis"
      type="button"
      onClick={() => slotClickedFunc(schedulerData, renderItem)}
    >
      {renderItem.slotName}
    </button>
  ) : (
    <span>{renderItem.slotName}</span>
  );

  let slotItem: React.ReactNode = (
    <div
      style={{ width }}
      title={renderItem.slotTitle || renderItem.slotName}
      className="overflow-text header2-text"
    >
      {slotItemContent}
    </div>
  );

  if (slotItemTemplateResolver) {
    const temp = slotItemTemplateResolver(
      schedulerData,
      renderItem,
      slotClickedFunc,
      width,
      "overflow-text header2-text"
    );

    if (temp) {
      slotItem = temp;
    }
  }

  return (
    <tr style={{ minHeight: config.eventItemLineHeight + 2 }}>
      <td data-resource-id={renderItem.slotId}>{slotItem}</td>
      <td>
        <div className="day-event-container">{events}</div>
      </td>
    </tr>
  );
}

// AgendaResourceEvents.propTypes = {
//   schedulerData: PropTypes.object.isRequired,
//   resourceEvents: PropTypes.object.isRequired,
//   subtitleGetter: PropTypes.func,
//   eventItemClick: PropTypes.func,
//   viewEventClick: PropTypes.func,
//   viewEventText: PropTypes.string,
//   viewEvent2Click: PropTypes.func,
//   viewEvent2Text: PropTypes.string,
//   slotClickedFunc: PropTypes.func,
//   slotItemTemplateResolver: PropTypes.func,
// };

export default AgendaResourceEvents;
