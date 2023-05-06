import PropTypes  from 'prop-types';

function AddMore({ number, left, width, top, clickAction, headerItem, schedulerData }) {
  const { config } = schedulerData;
  let content = '+' + number + 'more';

  return (
    <a className='timeline-event' style={{ left, width, top }} onClick={() => clickAction(headerItem)}>
      <div style={{ height: config.eventItemHeight, color: '#999', textAlign: 'center' }}>{content}</div>
    </a>
  );
}
export default AddMore;

AddMore.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  number: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  clickAction: PropTypes.func.isRequired,
  headerItem: PropTypes.object.isRequired,
};
