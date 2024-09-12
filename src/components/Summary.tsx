import React, { CSSProperties } from "react";
import PropTypes from "prop-types";
import { SummaryPos } from "../config/default";
import { SchedulerData } from "./SchedulerData";
import { SummaryType } from "../types/baseType";

interface SummaryProps {
  schedulerData: SchedulerData;
  summary: SummaryType;
  left: number;
  width: number;
  top: number;
}

function Summary({ schedulerData, summary, left, width, top }: SummaryProps) {
  const { config } = schedulerData;
  const color =
    summary.color !== undefined ? summary.color : config.summaryColor;
  let textAlign: CSSProperties['textAlign'] = "center";

  if (
    config.summaryPos === SummaryPos.TopRight ||
    config.summaryPos === SummaryPos.BottomRight
  ) {
    textAlign = "right";
  } else if (
    config.summaryPos === SummaryPos.TopLeft ||
    config.summaryPos === SummaryPos.BottomLeft
  ) {
    textAlign = "left";
  }

  const style: CSSProperties = {
    height: config.eventItemHeight,
    color,
    ...(textAlign ? { textAlign } : {}),
    marginLeft: "6px",
    marginRight: "6px",
    ...(summary.fontSize !== undefined ? { fontSize: summary.fontSize } : {}),
  };

  return (
    <div
      className="timeline-event header2-text"
      style={{ left, width, top, cursor: "default" }}
    >
      <div style={style}>{summary.text}</div>
    </div>
  );
}

export default Summary;
