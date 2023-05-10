import { useState } from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import DnDSource from './DnDSource';
import { CloseOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

function AddMorePopover(props) {
  const [dndSource] = useState(new DnDSource(p => p.eventItem, EventItem));

  const { headerItem, left, top, height, closeAction, schedulerData } = props;

  const { config, localeMoment } = schedulerData;

  const { time, start, end, events } = headerItem;

  let header = localeMoment(time).format(config.addMorePopoverHeaderFormat);
  let durationStart = localeMoment(start);
  let durationEnd = localeMoment(end);
  let i = 0;
  let DnDEventItem = dndSource.getDragSource();

  const eventList = events.map(evt => {
    if (evt !== undefined) {
      i++;
      let eventStart = localeMoment(evt.eventItem.start);
      let eventEnd = localeMoment(evt.eventItem.end);
      let isStart = eventStart >= durationStart;
      let isEnd = eventEnd < durationEnd;
      let eventItemLeft = 10;
      let eventItemWidth = 138;
      let eventItemTop = 12 + i * config.eventItemLineHeight;
      return (
        <DnDEventItem
          {...props}
          key={evt.eventItem.id}
          eventItem={evt.eventItem}
          leftIndex={0}
          isInPopover={true}
          isStart={isStart}
          isEnd={isEnd}
          rightIndex={1}
          left={eventItemLeft}
          width={eventItemWidth}
          top={eventItemTop}
        />
      );
    }
    return null;
  });

  return (
    <div className='add-more-popover-overlay' style={{ left, top, height, width: '170px' }}>
      <Row justify='space-between' align='middle'>
        <Col span='22'>
          <span className='base-text'>{header}</span>
        </Col>
        <Col span='2'>
          <span onClick={() => closeAction(undefined)}>
            <CloseOutlined />
          </span>
        </Col>
      </Row>
      {eventList}
    </div>
  );
}

export default AddMorePopover;

AddMorePopover.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  headerItem: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  closeAction: PropTypes.func.isRequired,
  subtitleGetter: PropTypes.func,
  moveEvent: PropTypes.func,
  eventItemClick: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  eventItemTemplateResolver: PropTypes.func,
};
