import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import DnDSource from './DnDSource';
import DnDContext from './DnDContext';
import ResourceView from './ResourceView';
import HeaderView from './HeaderView';
import BodyView from './BodyView';
import ResourceEvents from './ResourceEvents';
import AgendaView from './AgendaView';
import AddMorePopover from './AddMorePopover';
import SchedulerData from './SchedulerData';
import DemoData from '../sample-data/sample1';
import SchedulerHeader from './SchedulerHeader';
import { ViewType, CellUnit, DATETIME_FORMAT, DATE_FORMAT, SummaryPos } from '../config/default';
import wrapperFun from './WrapperFun';

function Scheduler(props) {
  const { schedulerData, dndSources, parentRef } = props;

  const [dndContext, setDndContext] = useState(null);
  const [contentScrollbarHeight, setContentScrollbarHeight] = useState(17);
  const [contentScrollbarWidth, setContentScrollbarWidth] = useState(17);
  const [resourceScrollbarHeight, setResourceScrollbarHeight] = useState(17);
  const [resourceScrollbarWidth, setResourceScrollbarWidth] = useState(17);
  const [documentWidth, setDocumentWidth] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);

  const [currentArea, setCurrentArea] = useState(-1);

  const schedulerContentRef = useRef(null);
  const schedulerResourceRef = useRef(null);
  const schedulerHeadRef = useRef(null);
  const schedulerContentBgTableRef = useRef(null);

  let ulObserver;

  const onWindowResize = e => {
    schedulerData._setDocumentWidth(document.documentElement.clientWidth);
    setDocumentWidth(document.documentElement.clientWidth);
    setDocumentHeight(document.documentElement.clientHeight);
  };

  useEffect(() => {
    const sources = [];
    sources.push(new DnDSource(dndProps => dndProps.eventItem, EventItem, schedulerData.config.dragAndDropEnabled));
    if (dndSources !== undefined && dndSources.length > 0) {
      sources.push(...dndSources);
    }
    const dndContext = new DnDContext(sources, ResourceEvents);

    setDndContext(dndContext);

    if ((schedulerData.isSchedulerResponsive() && !schedulerData.config.responsiveByParent) || parentRef === undefined) {
      schedulerData._setDocumentWidth(document.documentElement.clientWidth);
      window.addEventListener('resize', onWindowResize);
    }

    if (parentRef !== undefined) {
      if (schedulerData.config.responsiveByParent && parentRef.current) {
        schedulerData._setDocumentWidth(parentRef.current.offsetWidth);
        ulObserver = new ResizeObserver((entries, observer) => {
          if (parentRef.current) {
            const width = parentRef.current.offsetWidth;
            const height = parentRef.current.offsetHeight;
            schedulerData._setDocumentWidth(width);
            setDocumentWidth(width);
            setDocumentHeight(height);
          }
        });

        ulObserver.observe(parentRef.current);
      }
    }

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (ulObserver) {
        ulObserver.disconnect();
      }
    };
  }, [dndSources, parentRef, schedulerData]);

  const resolveScrollbarSize = () => {
    let newContentScrollbarHeight = 17;
    let newContentScrollbarWidth = 17;
    let newResourceScrollbarHeight = 17;
    let newResourceScrollbarWidth = 17;

    if (schedulerContentRef.current) {
      newContentScrollbarHeight = schedulerContentRef.current.offsetHeight - schedulerContentRef.current.clientHeight;
      newContentScrollbarWidth = schedulerContentRef.current.offsetWidth - schedulerContentRef.current.clientWidth;
    }
    if (schedulerResourceRef.current) {
      newResourceScrollbarHeight = schedulerResourceRef.current.offsetHeight - schedulerResourceRef.current.clientHeight;
      newResourceScrollbarWidth = schedulerResourceRef.current.offsetWidth - schedulerResourceRef.current.clientWidth;
    }

    setContentScrollbarHeight(newContentScrollbarHeight);
    setContentScrollbarWidth(newContentScrollbarWidth);
    setResourceScrollbarHeight(newResourceScrollbarHeight);
    setResourceScrollbarWidth(newResourceScrollbarWidth);
  };

  useEffect(() => {
    resolveScrollbarSize();
  }, [schedulerData, contentScrollbarHeight, contentScrollbarWidth]);

  const onSchedulerHeadMouseOver = () => {
    setCurrentArea(2);
  };

  const onSchedulerHeadMouseOut = () => {
    setCurrentArea(-1);
  };

  const onSchedulerHeadScroll = () => {
    if ((currentArea === 2 || currentArea === -1) && schedulerContentRef.current && schedulerHeadRef.current) {
      if (schedulerContentRef.current.scrollLeft !== schedulerHeadRef.current.scrollLeft) {
        schedulerContentRef.current.scrollLeft = schedulerHeadRef.current.scrollLeft;
      }
    }
  };

  const onSchedulerResourceMouseOver = () => {
    setCurrentArea(1);
  };

  const onSchedulerResourceMouseOut = () => {
    setCurrentArea(-1);
  };

  const onSchedulerResourceScroll = () => {
    if (schedulerResourceRef.current && schedulerContentRef.current) {
      if ((currentArea === 1 || currentArea === -1) && schedulerResourceRef.current.scrollTop !== schedulerContentRef.current.scrollTop) {
        schedulerContentRef.current.scrollTop = schedulerResourceRef.current.scrollTop;
      }
    }
  };

  const onSchedulerContentMouseOver = () => {
    setCurrentArea(0);
  };

  const onSchedulerContentMouseOut = () => {
    setCurrentArea(-1);
  };

  const onSchedulerContentScroll = () => {
    if (schedulerResourceRef.current && schedulerContentRef.current) {
      if (currentArea === 0 || currentArea === -1) {
        if (schedulerHeadRef.current && schedulerContentRef.current.scrollLeft !== schedulerHeadRef.current.scrollLeft) {
          schedulerHeadRef.current.scrollLeft = schedulerContentRef.current.scrollLeft;
        }
        if (schedulerResourceRef.current.scrollTop !== schedulerContentRef.current.scrollTop) {
          schedulerResourceRef.current.scrollTop = schedulerContentRef.current.scrollTop;
        }
      }
    }

    const { onScrollLeft, onScrollRight, onScrollTop, onScrollBottom } = props;
    if (schedulerContentRef.current && Math.round(schedulerContentRef.current.scrollLeft) !== scrollLeft) {
      if (schedulerContentRef.current.scrollLeft === 0 && onScrollLeft !== undefined) {
        onScrollLeft(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth);
      }
      if (Math.round(schedulerContentRef.current.scrollLeft) === schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth && onScrollRight !== undefined) {
        onScrollRight(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollWidth - schedulerContentRef.current.clientWidth);
      }
    } else if (schedulerContentRef.current && schedulerContentRef.current.scrollTop !== scrollTop) {
      if (schedulerContentRef.current.scrollTop === 0 && onScrollTop !== undefined) {
        onScrollTop(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight);
      }
      if (Math.round(schedulerContentRef.current.scrollTop) === schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight && onScrollBottom !== undefined) {
        onScrollBottom(schedulerData, schedulerContentRef.current, schedulerContentRef.current.scrollHeight - schedulerContentRef.current.clientHeight);
      }
    }
    scrollLeft = Math.round(schedulerContentRef.current.scrollLeft);
    scrollTop = schedulerContentRef.current.scrollTop;
  };

  const { leftCustomHeader, rightCustomHeader } = props;
  const { viewType, renderData, showAgenda, config } = schedulerData;
  const width = schedulerData.getSchedulerWidth();

  let tbodyContent = <tr />;
  if (showAgenda) {
    tbodyContent = <AgendaView {...props} />;
  } else {
    const resourceTableWidth = schedulerData.getResourceTableWidth();
    const schedulerContainerWidth = width - (config.resourceViewEnabled ? resourceTableWidth : 0);
    const schedulerWidth = schedulerData.getContentTableWidth() - 1;
    const DndResourceEvents = dndContext.getDropTarget(config.dragAndDropEnabled);
    const eventDndSource = dndContext.getDndSource();

    const displayRenderData = renderData.filter(o => o.render);
    const resourceEventsList = displayRenderData.map(item => (
      <DndResourceEvents {...props} key={item.slotId} resourceEvents={item} dndSource={eventDndSource} />
    ));

    const { contentScrollbarHeight } = state;
    const { contentScrollbarWidth } = state;
    const { resourceScrollbarHeight } = state;
    const { resourceScrollbarWidth } = state;
    const contentHeight = config.schedulerContentHeight;
    const resourcePaddingBottom = resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
    const contentPaddingBottom = contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
    let schedulerContentStyle = {
      overflowX: viewType === ViewType.Week ? 'hidden' : 'auto',
      overflowY: 'auto',
      margin: '0px',
      position: 'relative',
      height: contentHeight,
      paddingBottom: contentPaddingBottom,
    };
    let resourceContentStyle = {
      height: contentHeight,
      overflowX: 'auto',
      overflowY: 'auto',
      width: resourceTableWidth + resourceScrollbarWidth - 2,
      margin: `0px -${contentScrollbarWidth}px 0px 0px`,
    };
    if (config.schedulerMaxHeight > 0) {
      schedulerContentStyle = {
        ...schedulerContentStyle,
        maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight,
      };
      resourceContentStyle = {
        ...resourceContentStyle,
        maxHeight: config.schedulerMaxHeight - config.tableHeaderHeight,
      };
    }

    const resourceName = schedulerData.isEventPerspective ? config.taskName : config.resourceName;
    tbodyContent = (
      <tr>
        <td style={{ display: config.resourceViewEnabled ? undefined : 'none', width: resourceTableWidth, verticalAlign: 'top' }}>
          <div className="resource-view">
            <div style={{ overflow: 'hidden', borderBottom: '1px solid #e9e9e9', height: config.tableHeaderHeight }}>
              <div style={{ overflowX: 'scroll', overflowY: 'hidden', margin: `0px 0px -${contentScrollbarHeight}px` }}>
                <table className="resource-table">
                  <thead>
                    <tr style={{ height: config.tableHeaderHeight }}>
                      <th className="header3-text">{resourceName}</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div
              style={resourceContentStyle}
              ref={schedulerResourceRef}
              onMouseOver={onSchedulerResourceMouseOver}
              onMouseOut={onSchedulerResourceMouseOut}
              onScroll={onSchedulerResourceScroll}
            >
              <ResourceView {...props} contentScrollbarHeight={resourcePaddingBottom} />
            </div>
          </div>
        </td>
        <td>
          <div className="scheduler-view" style={{ width: schedulerContainerWidth, verticalAlign: 'top' }}>
            <div style={{ overflow: 'hidden', borderBottom: '1px solid #e9e9e9', height: config.tableHeaderHeight }}>
              <div
                style={{ overflowX: 'scroll', overflowY: 'hidden', margin: `0px 0px -${contentScrollbarHeight}px` }}
                ref={schedulerHeadRef}
                onMouseOver={onSchedulerHeadMouseOver}
                onMouseOut={onSchedulerHeadMouseOut}
                onScroll={onSchedulerHeadScroll}
              >
                <div style={{ paddingRight: `${contentScrollbarWidth}px`, width: schedulerWidth + contentScrollbarWidth }}>
                  <table className="scheduler-bg-table">
                    <HeaderView {...props} />
                  </table>
                </div>
              </div>
            </div>
            <div
              style={schedulerContentStyle}
              ref={schedulerContentRef}
              onMouseOver={onSchedulerContentMouseOver}
              onMouseOut={onSchedulerContentMouseOut}
              onScroll={onSchedulerContentScroll}
            >
              <div style={{ width: schedulerWidth }}>
                <div className="scheduler-content">
                  <table className="scheduler-content-table">
                    <tbody>{resourceEventsList}</tbody>
                  </table>
                </div>
                <div className="scheduler-bg">
                  <table className="scheduler-bg-table" style={{ width: schedulerWidth }} ref={schedulerContentBgTableRef}>
                    <BodyView {...props} />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  let schedulerHeader = <div />;
  if (config.headerEnabled) {
    schedulerHeader = (
      <SchedulerHeader
        onViewChange={onViewChange}
        schedulerData={schedulerData}
        onSelectDate={onSelect}
        goNext={goNext}
        goBack={goBack}
        rightCustomHeader={rightCustomHeader}
        leftCustomHeader={leftCustomHeader}
      />
    );
  }

  return (
    <table id="RBS-Scheduler-root" className="scheduler" style={{ width: `${width}px` }}>
      <thead>
        <tr>
          <td colSpan="2">{schedulerHeader}</td>
        </tr>
      </thead>
      <tbody>{tbodyContent}</tbody>
    </table>
  );
}

Scheduler.propTypes = {
  parentRef: PropTypes.object,
  schedulerData: PropTypes.object.isRequired,
  prevClick: PropTypes.func.isRequired,
  nextClick: PropTypes.func.isRequired,
  onViewChange: PropTypes.func.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  onSetAddMoreState: PropTypes.func,
  updateEventStart: PropTypes.func,
  updateEventEnd: PropTypes.func,
  moveEvent: PropTypes.func,
  movingEvent: PropTypes.func,
  leftCustomHeader: PropTypes.object,
  rightCustomHeader: PropTypes.object,
  newEvent: PropTypes.func,
  subtitleGetter: PropTypes.func,
  eventItemClick: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  conflictOccurred: PropTypes.func,
  eventItemTemplateResolver: PropTypes.func,
  dndSources: PropTypes.array,
  slotClickedFunc: PropTypes.func,
  toggleExpandFunc: PropTypes.func,
  slotItemTemplateResolver: PropTypes.func,
  nonAgendaCellHeaderTemplateResolver: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onScrollTop: PropTypes.func,
  onScrollBottom: PropTypes.func,
};

export { DATE_FORMAT, DATETIME_FORMAT, Scheduler, SchedulerData, ViewType, CellUnit, SummaryPos, DnDSource, DnDContext, AddMorePopover, DemoData, wrapperFun };
