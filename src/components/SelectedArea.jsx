import PropTypes from 'prop-types';

function SelectedArea({ left, width, schedulerData }) {
  const { config } = schedulerData;

  return <div className='selected-area' style={{ left: left, width: width, top: 0, bottom: 0, backgroundColor: config.selectedAreaColor }}></div>;
}

export default SelectedArea;

SelectedArea.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
