import PropTypes from 'prop-types';
import AgendaEventItem from './AgendaEventItem';
import { DATE_FORMAT } from '../config/default';

function AgendaResourceEvents(props) {
  const { schedulerData, resourceEvents, slotClickedFunc, slotItemTemplateResolver } = props;
  const { startDate, endDate, config, localeMoment } = schedulerData;
  const { slotId, slotName, headerItems } = resourceEvents;

  let agendaResourceTableWidth = schedulerData.getResourceTableWidth();
  let width = agendaResourceTableWidth - 2;

  const start = localeMoment(startDate).format(DATE_FORMAT);
  const end = localeMoment(endDate).add(1, 'days').format(DATE_FORMAT);

  let events = [];
  headerItems.forEach(({ start: headerStart, end: headerEnd, events }) => {
    if (start === localeMoment(headerStart).format(DATE_FORMAT) && end === localeMoment(headerEnd).format(DATE_FORMAT)) {
      events.forEach(({ eventItem }) => {
        const { start: eventStart, end: eventEnd, id } = eventItem;
        const durationStart = localeMoment(startDate);
        const durationEnd = localeMoment(endDate).add(1, 'days');
        const isStart = localeMoment(eventStart) >= durationStart;
        const isEnd = localeMoment(eventEnd) < durationEnd;
        const eventItemComponent = <AgendaEventItem {...props} key={id} eventItem={eventItem} isStart={isStart} isEnd={isEnd} />;
        events.push(eventItemComponent);
      });
    }
  });

  const slotClicked = slotClickedFunc && <a onClick={() => slotClickedFunc(schedulerData, resourceEvents)}>{slotName}</a>;

  let slotItem = (
    <div style={{ width }} title={slotName} className='overflow-text header2-text'>
      {slotClicked || <span>{slotName}</span>}
    </div>
  );

  if (slotItemTemplateResolver) {
    const temp = slotItemTemplateResolver(schedulerData, resourceEvents, slotClickedFunc, width, 'overflow-text header2-text');
    if (temp) slotItem = temp;
  }

  return (
    <tr style={{ minHeight: config.eventItemLineHeight + 2 }}>
      <td data-resource-id={slotId}>{slotItem}</td>
      <td>
        <div className='day-event-container'>{events}</div>
      </td>
    </tr>
  );
}

AgendaResourceEvents.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  resourceEvents: PropTypes.object.isRequired,
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
