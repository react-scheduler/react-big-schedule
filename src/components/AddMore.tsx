import React from "react";
import { SchedulerData } from "./SchedulerData";
import { HeaderEventsType } from "../types/baseType";

function AddMore({
  schedulerData,
  number,
  left,
  width,
  top,
  clickAction,
  headerItem,
}: {
  schedulerData: SchedulerData;
  number: number;
  left: number;
  width: number;
  top: number;
  clickAction: (headerItem: HeaderEventsType) => void;
  headerItem: HeaderEventsType;
}) {
  const { config } = schedulerData;
  const content = `+${number} more`;

  return (
    <button
      type="button"
      className="timeline-event"
      style={{ left, width, top }}
      onClick={() => clickAction(headerItem)}
    >
      <div
        style={{
          height: config.eventItemHeight,
          color: "#999",
          textAlign: "center",
        }}
      >
        {content}
      </div>
    </button>
  );
}

export default AddMore;
