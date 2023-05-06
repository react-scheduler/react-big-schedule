import React from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'antd';
import EventItemPopover from './EventItemPopover';

const AgendaEventItem = ({ schedulerData, eventItem, isStart, isEnd, eventItemClick, eventItemTemplateResolver }) => {
  const { config } = schedulerData;
  const roundCls = isStart ? (isEnd ? 'round-all' : 'round-head') : isEnd ? 'round-tail' : 'round-none';
  const bgColor = eventItem.bgColor || config.defaultEventBgColor;
  const titleText = schedulerData.behaviors.getEventTextFunc(schedulerData, eventItem);

  const content = (
    <EventItemPopover
      {...{
        eventItem,
        isStart,
        isEnd,
        eventItemClick,
        schedulerData,
      }}
      title={eventItem.title}
      startTime={eventItem.start}
      endTime={eventItem.end}
      statusColor={bgColor}
    />
  );

  let eventItemTemplate = (
    <div
      className={`${roundCls} event-item`}
      key={eventItem.id}
      style={{
        height: config.eventItemHeight,
        maxWidth: config.agendaMaxEventWidth,
        backgroundColor: bgColor,
      }}
    >
      <span style={{ marginLeft: '10px', lineHeight: `${config.eventItemHeight}px` }}>{titleText}</span>
    </div>
  );

  if (eventItemTemplateResolver) {
    eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);
  }

  const handleClick = () => {
    if (eventItemClick) {
      eventItemClick(schedulerData, eventItem);
    }
  };

  return config.eventItemPopoverEnabled ? (
    <Popover placement='bottomLeft' content={content} trigger='hover'>
      <a className='day-event' onClick={handleClick}>
        {eventItemTemplate}
      </a>
    </Popover>
  ) : (
    <span>
      <a className='day-event' onClick={handleClick}>
        {eventItemTemplate}
      </a>
    </span>
  );
};

AgendaEventItem.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  eventItem: PropTypes.object.isRequired,
  isStart: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  subtitleGetter: PropTypes.func,
  eventItemClick: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  eventItemTemplateResolver: PropTypes.func,
};

export default AgendaEventItem;
