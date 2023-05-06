import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddMore from './AddMore';
import Summary from './Summary';
import SelectedArea from './SelectedArea';
import { CellUnits, DATETIME_FORMAT, DnDTypes, SummaryPos } from '../config/scheduler-config';
import { getPos } from '../helpers/utility';

const supportTouch = 'ontouchstart' in window;

function ResourceEvents(props) {
  const [resourceEventsState, setResourceEventsState] = useState({});
  let eventContainer = null;
  const { resourceEvents, schedulerData, connectDropTarget, dndSource, newEvent, conflictOccurred, onSetAddMoreState } = props;
  const { cellUnit, startDate, endDate, config, localeMoment } = schedulerData;
  let cellWidth = schedulerData.getContentCellWidth();
  let cellMaxEvents = schedulerData.getCellMaxEvents();
  let rowWidth = schedulerData.getContentTableWidth();
  let DnDEventItem = dndSource.getDragSource();

  let selectedArea = resourceEventsState?.isSelecting ? <SelectedArea {...props} left={left} width={width} /> : <div />;

  let eventList = [];
  resourceEvents.headerItems.forEach((headerItem, index) => {
    if (headerItem.count > 0 || headerItem.summary != undefined) {
      let isTop = config.summaryPos === SummaryPos.TopRight || config.summaryPos === SummaryPos.Top || config.summaryPos === SummaryPos.TopLeft;
      let marginTop = resourceEvents.hasSummary && isTop ? 1 + config.eventItemLineHeight : 1;
      let renderEventsMaxIndex = headerItem.addMore === 0 ? cellMaxEvents : headerItem.addMoreIndex;

      headerItem.events.forEach((evt, idx) => {
        if (idx < renderEventsMaxIndex && evt !== undefined && evt.render) {
          let durationStart = localeMoment(startDate);
          let durationEnd = localeMoment(endDate).add(1, 'days');
          if (cellUnit === CellUnits.Hour) {
            durationStart = localeMoment(startDate).add(config.dayStartFrom, 'hours');
            durationEnd = localeMoment(endDate).add(config.dayStopTo + 1, 'hours');
          }
          let eventStart = localeMoment(evt.eventItem.start);
          let eventEnd = localeMoment(evt.eventItem.end);
          let isStart = eventStart >= durationStart;
          let isEnd = eventEnd <= durationEnd;
          let left = index * cellWidth + (index > 0 ? 2 : 3);
          let width = evt.span * cellWidth - (index > 0 ? 5 : 6) > 0 ? evt.span * cellWidth - (index > 0 ? 5 : 6) : 0;
          let top = marginTop + idx * config.eventItemLineHeight;
          let eventItem = (
            <DnDEventItem
              {...props}
              key={evt.eventItem.id}
              eventItem={evt.eventItem}
              isStart={isStart}
              isEnd={isEnd}
              isInPopover={false}
              left={left}
              width={width}
              top={top}
              leftIndex={index}
              rightIndex={index + evt.span}
            />
          );
          eventList.push(eventItem);
        }
      });

      if (headerItem.addMore > 0) {
        let left = index * cellWidth + (index > 0 ? 2 : 3);
        let width = cellWidth - (index > 0 ? 5 : 6);
        let top = marginTop + headerItem.addMoreIndex * config.eventItemLineHeight;
        let addMoreItem = <AddMore {...props} key={headerItem.time} headerItem={headerItem} number={headerItem.addMore} left={left} width={width} top={top} clickAction={onAddMoreClick} />;
        eventList.push(addMoreItem);
      }

      if (headerItem.summary != undefined) {
        let top = isTop ? 1 : resourceEvents.rowHeight - config.eventItemLineHeight + 1;
        let left = index * cellWidth + (index > 0 ? 2 : 3);
        let width = cellWidth - (index > 0 ? 5 : 6);
        let key = `${resourceEvents.slotId}_${headerItem.time}`;
        let summary = <Summary key={key} schedulerData={schedulerData} summary={headerItem.summary} left={left} width={width} top={top} />;
        eventList.push(summary);
      }
    }
  });

  useEffect(() => {
    const { config } = schedulerData;
    if (config.creatable === true) {
      if (supportTouch) {
        // this.eventContainer.addEventListener('touchstart', this.initDrag, false);
      } else {
        eventContainer.addEventListener('mousedown', initDrag, false);
      }
    }
    return () => {
      if (supportTouch) {
        // this.eventContainer.removeEventListener('touchstart', this.initDrag, false);
      } else {
        eventContainer.removeEventListener('mousedown', initDrag, false);
      }
      if (schedulerData.config.creatable) {
        if (supportTouch) {
          // this.eventContainer.addEventListener('touchstart', this.initDrag, false);
        } else {
          eventContainer.addEventListener('mousedown', initDrag, false);
        }
      }
    };
  }, [supportTouch, schedulerData]);

  const initDrag = ev => {
    if (resourceEventsState?.isSelecting) return;
    if ((ev.srcElement || ev.target) !== eventContainer) return;

    ev.stopPropagation();

    if (resourceEvents.groupOnly) return;
    let clientX = 0;
    if (supportTouch) {
      if (ev.changedTouches.length == 0) return;
      const touch = ev.changedTouches[0];
      clientX = touch.pageX;
    } else {
      if (ev.buttons !== undefined && ev.buttons !== 1) return;
      clientX = ev.clientX;
    }
    let cellWidth = schedulerData.getContentCellWidth();
    let startX = clientX - pos.x;
    let leftIndex = Math.floor(startX / cellWidth);
    let left = leftIndex * cellWidth;
    let rightIndex = Math.ceil(startX / cellWidth);
    let width = (rightIndex - leftIndex) * cellWidth;

    setResourceEventsState(curr => ({
      ...curr,
      startX: startX,
      left: left,
      leftIndex: leftIndex,
      width: width,
      rightIndex: rightIndex,
      isSelecting: true,
    }));

    if (supportTouch) {
      document.documentElement.addEventListener('touchmove', doDrag, false);
      document.documentElement.addEventListener('touchend', stopDrag, false);
      document.documentElement.addEventListener('touchcancel', cancelDrag, false);
    } else {
      document.documentElement.addEventListener('mousemove', doDrag, false);
      document.documentElement.addEventListener('mouseup', stopDrag, false);
    }
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };
  };

  const doDrag = ev => {
    ev.stopPropagation();

    let clientX = 0;
    if (supportTouch) {
      if (ev.changedTouches.length == 0) return;
      const touch = ev.changedTouches[0];
      clientX = touch.pageX;
    } else {
      clientX = ev.clientX;
    }
    const { startX } = resourceEventsState;
    const { headers } = schedulerData;
    let cellWidth = schedulerData.getContentCellWidth();
    let pos = getPos(eventContainer);
    let currentX = clientX - pos.x;
    let leftIndex = Math.floor(Math.min(startX, currentX) / cellWidth);
    leftIndex = leftIndex < 0 ? 0 : leftIndex;
    let left = leftIndex * cellWidth;
    let rightIndex = Math.ceil(Math.max(startX, currentX) / cellWidth);
    rightIndex = rightIndex > headers.length ? headers.length : rightIndex;
    let width = (rightIndex - leftIndex) * cellWidth;

    setResourceEventsState(curr => ({
      ...curr,
      leftIndex: leftIndex,
      left: left,
      rightIndex: rightIndex,
      width: width,
      isSelecting: true,
    }));
  };

  const stopDrag = ev => {
    ev.stopPropagation();
    const { headers, events, config, cellUnit, localeMoment } = schedulerData;
    const { leftIndex, rightIndex } = resourceEventsState;
    if (supportTouch) {
      document.documentElement.removeEventListener('touchmove', doDrag, false);
      document.documentElement.removeEventListener('touchend', stopDrag, false);
      document.documentElement.removeEventListener('touchcancel', cancelDrag, false);
    } else {
      document.documentElement.removeEventListener('mousemove', doDrag, false);
      document.documentElement.removeEventListener('mouseup', stopDrag, false);
    }
    document.onselectstart = null;
    document.ondragstart = null;

    let startTime = headers[leftIndex].time;
    let endTime = resourceEvents.headerItems[rightIndex - 1].end;
    if (cellUnit !== CellUnits.Hour)
      endTime = localeMoment(resourceEvents.headerItems[rightIndex - 1].start)
        .hour(23)
        .minute(59)
        .second(59)
        .format(DATETIME_FORMAT);
    let slotId = resourceEvents.slotId;
    let slotName = resourceEvents.slotName;

    setResourceEventsState(curr => ({
      ...curr,
      startX: 0,
      leftIndex: 0,
      left: 0,
      rightIndex: 0,
      width: 0,
      isSelecting: false,
    }));

    let hasConflict = false;
    if (config.checkConflict) {
      let start = localeMoment(startTime),
        end = localeMoment(endTime);

      events.forEach(e => {
        if (schedulerData._getEventSlotId(e) === slotId) {
          let eStart = localeMoment(e.start),
            eEnd = localeMoment(e.end);
          if ((start >= eStart && start < eEnd) || (end > eStart && end <= eEnd) || (eStart >= start && eStart < end) || (eEnd > start && eEnd <= end)) hasConflict = true;
        }
      });
    }

    if (hasConflict) {
      if (conflictOccurred != undefined) {
        conflictOccurred(
          schedulerData,
          'New',
          {
            id: undefined,
            start: startTime,
            end: endTime,
            slotId: slotId,
            slotName: slotName,
            title: undefined,
          },
          DnDTypes.EVENT,
          slotId,
          slotName,
          startTime,
          endTime
        );
      } else {
        console.log('Conflict occurred, set conflictOccurred func in Scheduler to handle it');
      }
    } else {
      if (newEvent != undefined) newEvent(schedulerData, slotId, slotName, startTime, endTime);
    }
  };

  const cancelDrag = ev => {
    ev.stopPropagation();

    const { isSelecting } = resourceEventsState;
    if (isSelecting) {
      document.documentElement.removeEventListener('touchmove', doDrag, false);
      document.documentElement.removeEventListener('touchend', stopDrag, false);
      document.documentElement.removeEventListener('touchcancel', cancelDrag, false);
      document.onselectstart = null;
      document.ondragstart = null;
      setResourceEventsState(curr => ({
        curr,
        startX: 0,
        leftIndex: 0,
        left: 0,
        rightIndex: 0,
        width: 0,
        isSelecting: false,
      }));
    }
  };

  const onAddMoreClick = headerItem => {
    if (!!onSetAddMoreState) {
      const { config } = schedulerData;
      let cellWidth = schedulerData.getContentCellWidth();
      let index = resourceEvents.headerItems.indexOf(headerItem);
      if (index !== -1) {
        let left = index * (cellWidth - 1);
        let pos = getPos(eventContainer);
        left = left + pos.x;
        let top = pos.y;
        let height = (headerItem.count + 1) * config.eventItemLineHeight + 20;

        onSetAddMoreState({
          headerItem: headerItem,
          left: left,
          top: top,
          height: height,
        });
      }
    }
  };

  const eventContainerRef = element => {
    eventContainer = element;
  };

  return (
    <tr>
      <td style={{ width: rowWidth }}>
        {connectDropTarget(
          <div ref={eventContainerRef} className='event-container' style={{ height: resourceEvents.rowHeight }}>
            {selectedArea}
            {eventList}
          </div>
        )}
      </td>
    </tr>
  );
}

export default ResourceEvents;

ResourceEvents.PropTypes = {
  resourceEvents: PropTypes.object.isRequired,
  schedulerData: PropTypes.object.isRequired,
  dndSource: PropTypes.object.isRequired,
  onSetAddMoreState: PropTypes.func,
  updateEventStart: PropTypes.func,
  updateEventEnd: PropTypes.func,
  moveEvent: PropTypes.func,
  movingEvent: PropTypes.func,
  conflictOccurred: PropTypes.func,
  subtitleGetter: PropTypes.func,
  eventItemClick: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  newEvent: PropTypes.func,
  eventItemTemplateResolver: PropTypes.func,
};
