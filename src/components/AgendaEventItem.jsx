import PropTypes from 'prop-types';
import { Popover } from 'antd';
import EventItemPopover from './EventItemPopover';

function AgendaEventItem(props) {
  const { eventItem, isStart, isEnd, eventItemClick, schedulerData, eventItemTemplateResolver } = props;
  const { config, behaviors } = schedulerData;

  const roundCls = isStart ? (isEnd ? 'round-all' : 'round-head') : isEnd ? 'round-tail' : 'round-none';
  const bgColor = eventItem.bgColor || config.defaultEventBgColor;
  const titleText = behaviors.getEventTextFunc(schedulerData, eventItem);

  let eventItemTemplate = (
    <div className={`${roundCls} event-item`} key={eventItem.id} style={{ height: config.eventItemHeight, maxWidth: config.agendaMaxEventWidth, backgroundColor: bgColor }}>
      <span style={{ marginLeft: '10px', lineHeight: `${config.eventItemHeight}px` }}>{titleText}</span>
    </div>
  );

  if (eventItemTemplateResolver) {
    eventItemTemplate = eventItemTemplateResolver(schedulerData, eventItem, bgColor, isStart, isEnd, 'event-item', config.eventItemHeight, config.agendaMaxEventWidth);
  }
  const handleClick = () => eventItemClick?.(schedulerData, eventItem);

  const eventLink = (
    <a className='day-event' onClick={handleClick}>
      {eventItemTemplate}
    </a>
  );

  let content = <EventItemPopover {...props} title={eventItem.title} startTime={eventItem.start} endTime={eventItem.end} statusColor={bgColor} />;

  return config.eventItemPopoverEnabled ? (
    <Popover placement='bottomLeft' content={content} trigger='hover'>
      {eventLink}
    </Popover>
  ) : (
    <span>{eventLink}</span>
  );
}

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
