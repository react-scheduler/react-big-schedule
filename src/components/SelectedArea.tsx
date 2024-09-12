import React from "react";
import PropTypes from "prop-types";
import { SchedulerData } from "./SchedulerData";

interface SelectedAreaProps {
  left: number;
  width: number;
  schedulerData: SchedulerData;
}

function SelectedArea({ left, width, schedulerData }: SelectedAreaProps) {
  const { config } = schedulerData;

  const selectedAreaStyle = {
    left,
    width,
    top: 0,
    bottom: 0,
    backgroundColor: config.selectedAreaColor,
  };

  return <div className="selected-area" style={selectedAreaStyle} />;
}

// SelectedArea.propTypes = {
//   schedulerData: PropTypes.object.isRequired,
//   left: PropTypes.number.isRequired,
//   width: PropTypes.number.isRequired,
// };

export default SelectedArea;
