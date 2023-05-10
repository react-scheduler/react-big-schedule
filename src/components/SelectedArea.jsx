import PropTypes from 'prop-types';

function SelectedArea({ left, width, schedulerData }) {
  const { config } = schedulerData;

  const style = {
    left,
    width,
    top: 0,
    bottom: 0,
    backgroundColor: config.selectedAreaColor,
  };

  return <div className='selected-area' style={style}></div>;
}

SelectedArea.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  left: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default SelectedArea;
