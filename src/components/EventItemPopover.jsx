import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

function EventItemPopover({
  schedulerData,
  eventItem,
  title,
  startTime,
  endTime,
  statusColor,
  subtitleGetter,
  viewEventClick,
  viewEventText,
  viewEvent2Click,
  viewEvent2Text,
  eventItemPopoverTemplateResolver,
}) {
  const { localeMoment, config } = schedulerData;
  const start = localeMoment(startTime);
  const end = localeMoment(endTime);

  if (eventItemPopoverTemplateResolver != undefined) {
    return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
  }

  let subtitleRow = <div />;
  if (subtitleGetter !== undefined) {
    let subtitle = subtitleGetter(schedulerData, eventItem);
    if (subtitle != undefined) {
      subtitleRow = (
        <Row align='middle'>
          <Col span={2}>
            <div />
          </Col>
          <Col span={22} className='overflow-text'>
            <span className='header2-text' title={subtitle}>
              {subtitle}
            </span>
          </Col>
        </Row>
      );
    }
  }

  let opsRow = <div />;
  if (viewEventText !== undefined && viewEventClick !== undefined && (eventItem.clickable1 == undefined || eventItem.clickable1)) {
    let col = (
      <Col span={22}>
        <span className='header2-text' style={{ color: '#108EE9', cursor: 'pointer' }} onClick={() => viewEventClick(schedulerData, eventItem)}>
          {viewEventText}
        </span>
      </Col>
    );
    if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
      col = (
        <Col span={22}>
          <span className='header2-text' style={{ color: '#108EE9', cursor: 'pointer' }} onClick={() => viewEventClick(schedulerData, eventItem)}>
            {viewEventText}
          </span>
          <span className='header2-text' style={{ color: '#108EE9', cursor: 'pointer', marginLeft: '16px' }} onClick={() => viewEvent2Click(schedulerData, eventItem)}>
            {viewEvent2Text}
          </span>
        </Col>
      );
    }
    opsRow = (
      <Row align='middle'>
        <Col span={2}>
          <div />
        </Col>
        {col}
      </Row>
    );
  } else if (viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
    let col = (
      <Col span={22}>
        <span className='header2-text' style={{ color: '#108EE9', cursor: 'pointer' }} onClick={() => viewEvent2Click(schedulerData, eventItem)}>
          {viewEvent2Text}
        </span>
      </Col>
    );
    opsRow = (
      <Row align='middle'>
        <Col span={2}>
          <div />
        </Col>
        {col}
      </Row>
    );
  }
  const dateFormat = config.eventItemPopoverDateFormat;

  const colorRow = config.eventItemPopoverShowColor ? (
    <Col span={2}>
      <div className='status-dot' style={{ backgroundColor: statusColor }} />
    </Col>
  ) : (
    <></>
  );

  const dateTimeRow = (
    <Col span={22}>
      <span className='header1-text'>{start.format('HH:mm')}</span>
      {dateFormat && (
        <span className='help-text' style={{ marginLeft: '8px' }}>
          {start.format(dateFormat)}
        </span>
      )}
      <span className='header2-text' style={{ marginLeft: '8px' }}>
        -
      </span>
      <span className='header1-text' style={{ marginLeft: '8px' }}>
        {end.format('HH:mm')}
      </span>
      {dateFormat && (
        <span className='help-text' style={{ marginLeft: '8px' }}>
          {end.format(dateFormat)}
        </span>
      )}
    </Col>
  );

  return (
    <div style={{ width: '300px' }}>
      <Row align='middle'>
        {colorRow}
        <Col span={22} className='overflow-text'>
          <span className='header2-text' title={title}>
            {title}
          </span>
        </Col>
      </Row>
      {subtitleRow}
      <Row align='middle'>
        <Col span={2}>
          <div />
        </Col>
        {dateTimeRow}
      </Row>
      {opsRow}
    </div>
  );
}

EventItemPopover.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  eventItem: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
  subtitleGetter: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  eventItemPopoverTemplateResolver: PropTypes.func,
};

export default EventItemPopover;
