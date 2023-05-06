import React from 'react';
import PropTypes from 'prop-types';
import { DATE_FORMAT } from '../config/scheduler-config';
import AgendaEventItem from './AgendaEventItem';

const AgendaResourceEvents = ({ schedulerData, resourceEvents, slotClickedFunc, slotItemTemplateResolver }) => {
  const { startDate, endDate, config, localeMoment } = schedulerData;
  const agendaResourceTableWidth = schedulerData.getResourceTableWidth() - 2;

  const events = resourceEvents.headerItems.flatMap(item => {
    const start = localeMoment(startDate).format(DATE_FORMAT);
    const end = localeMoment(endDate).add(1, 'days').format(DATE_FORMAT);
    const headerStart = localeMoment(item.start).format(DATE_FORMAT);
    const headerEnd = localeMoment(item.end).format(DATE_FORMAT);

    if (start === headerStart && end === headerEnd) {
      return item.events.map(({ eventItem }) => {
        const durationStart = localeMoment(startDate);
        const durationEnd = localeMoment(endDate).add(1, 'days');
        const eventStart = localeMoment(eventItem.start);
        const eventEnd = localeMoment(eventItem.end);
        const isStart = eventStart >= durationStart;
        const isEnd = eventEnd < durationEnd;
        return <AgendaEventItem key={eventItem.id} {...{ schedulerData, eventItemClick, viewEventClick, viewEvent2Click }} eventItem={eventItem} isStart={isStart} isEnd={isEnd} />;
      });
    }
    return [];
  });

  const eventItemClick = eventItem => {
    const { eventItemClick } = schedulerData;
    if (!!eventItemClick) {
      eventItemClick(eventItem);
    }
  };

  const viewEventClick = eventItem => {
    const { viewEventClick } = schedulerData;
    if (!!viewEventClick) {
      viewEventClick(eventItem);
    }
  };

  const viewEvent2Click = eventItem => {
    const { viewEvent2Click } = schedulerData;
    if (!!viewEvent2Click) {
      viewEvent2Click(eventItem);
    }
  };

  const slotItem = slotItemTemplateResolver?.(schedulerData, resourceEvents, slotClickedFunc, agendaResourceTableWidth, 'overflow-text header2-text') || (
    <div style={{ width: agendaResourceTableWidth }} title={resourceEvents.slotName} className='overflow-text header2-text'>
      {slotClickedFunc ? <a onClick={() => slotClickedFunc(schedulerData, resourceEvents)}>{resourceEvents.slotName}</a> : <span>{resourceEvents.slotName}</span>}
    </div>
  );

  return (
    <tr style={{ minHeight: config.eventItemLineHeight + 2 }}>
      <td data-resource-id={resourceEvents.slotId}>{slotItem}</td>
      <td>
        <div className='day-event-container'>{events}</div>
      </td>
    </tr>
  );
};

AgendaResourceEvents.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  resourceEvents: PropTypes.object.isRequired,
  slotClickedFunc: PropTypes.func,
  slotItemTemplateResolver: PropTypes.func,
  subtitleGetter: PropTypes.func,
  eventItemClick: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  slotClickedFunc: PropTypes.func,
  slotItemTemplateResolver: PropTypes.func,
};

export default AgendaResourceEvents;
