import React, {
  Component,
  CSSProperties,
  DetailedHTMLProps,
  HTMLAttributes,
  RefObject,
  UIEventHandler,
} from "react";
import PropTypes from "prop-types";

// Col, Row and Icon do not have their own less files for styling. They use
// rules declared in antd's global css. If these styles are imported directly
// from within antd, they'll include, for instance, reset rules. These will
// affect everything on the page and in essence would leak antd's global styles
// into all projects using this library. Instead of doing that, we are using
// a hack which allows us to wrap all antd styles to target specific root. In
// this case the root id will be "RBS-Scheduler-root". This way the reset styles
// won't be applied to elements declared outside of <Scheduler /> component.
//
// For development
// This fix is implemented with webpack's NormalModuleReplacementPlugin in
// webpack/webpack-dev.config.js.
//
//
// The next components have their own specific stylesheets which we import
// separately here to avoid importing from files which have required the global
// antd styles.

import { EventItemComponent } from "../classComponents/EventItem";
import { DnDSource } from "../classComponents/DnDSource";
import { DnDContext } from "../classComponents/DnDContext";
import ResourceView from "./ResourceView";
import HeaderView from "./HeaderView";
import BodyView from "./BodyView";
import { ResourceEventsComponent } from "../classComponents/ResourceEvents";
import AgendaView from "./AgendaView";
import AddMorePopover from "./AddMorePopover";
import DemoData from "../sample-data/sample1";
import SchedulerHeader from "./SchedulerHeader";
import {
  ViewType,
  CellUnit,
  DATETIME_FORMAT,
  DATE_FORMAT,
  SummaryPos,
} from "../config/default";
import wrapperFun from "./WrapperFun";
import { SchedulerData } from "./SchedulerData";
import {
  ConflictOccurredFunc,
  EventItemClickFunc,
  EventItemPopoverTemplateResolverFunc,
  EventItemTemplateResolverFunc,
  MoveEventFunc,
  MovingEventFunc,
  NewEventFunc,
  NextClickFunc,
  NonAgendaCellHeaderTemplateResolverFunc,
  OnScrollBottomFunc,
  OnScrollLeftFunc,
  OnScrollRightFunc,
  OnScrollTopFunc,
  OnSelectDateFunc,
  OnSetAddMoreStateFunc,
  OnViewChangeFunc,
  PrevClickFunc,
  SchedulerProps,
  SlotClickedFunc,
  SlotItemTemplateResolverFunc,
  SubtitleGetterFunc,
  ToggleExpandFunc,
  UpdateEventEndFunc,
  UpdateEventStartFunc,
  ViewEvent2ClickFunc,
  ViewEventClickFunc,
} from "../types/moreTypes";
import { Dayjs } from "dayjs";

interface SchedulerState {
  dndContext: DnDContext;
  contentScrollbarHeight: number;
  contentScrollbarWidth: number;
  resourceScrollbarHeight: number;
  resourceScrollbarWidth: number;
  documentWidth: number;
  documentHeight: number;
  spinning: boolean;
}

class Scheduler extends Component<SchedulerProps, SchedulerState> {
  private currentArea: number;
  private scrollLeft: number;
  private scrollTop: number;
  private schedulerHead: HTMLDivElement | null = null;
  private schedulerResource: HTMLDivElement | null = null;
  private schedulerContent: HTMLDivElement | null = null;
  private schedulerContentBgTable: HTMLDivElement | null = null;
  private ulObserver: ResizeObserver | null = null;

  constructor(props: SchedulerProps) {
    super(props);

    const { schedulerData, dndSources, parentRef } = props;
    let sources: DnDSource[] = [];
    sources.push(
      new DnDSource(
        (dndProps) => dndProps.eventItem,
        EventItemComponent,
        schedulerData.config.dragAndDropEnabled
      )
    );
    if (dndSources !== undefined && dndSources.length > 0) {
      sources = [...sources, ...dndSources];
    }
    const dndContext = new DnDContext(sources, ResourceEventsComponent);

    this.currentArea = -1;
    this.state = {
      dndContext,
      contentScrollbarHeight: 17,
      contentScrollbarWidth: 17,
      resourceScrollbarHeight: 17,
      resourceScrollbarWidth: 17,
      documentWidth: 0,
      documentHeight: 0,
      spinning: false,
    };
    this.scrollLeft = 0;
    this.scrollTop = 0;

    if (
      (schedulerData.isSchedulerResponsive() &&
        !schedulerData.config.responsiveByParent) ||
      parentRef === undefined
    ) {
      schedulerData._setDocumentWidth(document.documentElement.clientWidth);
      window.onresize = this.onWindowResize;
    }
  }

  onWindowResize = (e: UIEvent) => {
    const { schedulerData } = this.props;
    schedulerData._setDocumentWidth(document.documentElement.clientWidth);
    this.setState({
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight,
    });
  };

  componentDidMount() {
    const { schedulerData, parentRef } = this.props;

    this.resolveScrollbarSize();

    if (parentRef !== undefined) {
      if (schedulerData.config.responsiveByParent && !!parentRef.current) {
        schedulerData._setDocumentWidth(parentRef.current.offsetWidth);
        this.ulObserver = new ResizeObserver((entries, observer) => {
          if (parentRef.current) {
            const width = parentRef.current.offsetWidth;
            const height = parentRef.current.offsetHeight;
            console.log();
            schedulerData._setDocumentWidth(width);
            this.setState({
              documentWidth: width,
              documentHeight: height,
            });
          }
        });

        this.ulObserver.observe(parentRef.current);
      }
    }
  }

  componentDidUpdate() {
    this.resolveScrollbarSize();

    const { schedulerData } = this.props;
    const { localeDayjs, behaviors } = schedulerData;
    if (
      schedulerData.getScrollToSpecialDayjs() &&
      !!behaviors.getScrollSpecialDayjsFunc
    ) {
      if (
        !!this.schedulerContent &&
        this.schedulerContent.scrollWidth > this.schedulerContent.clientWidth
      ) {
        const start = schedulerData.startDate.startOf("day");
        const end = schedulerData.endDate.endOf("day");
        const specialDayjs = behaviors.getScrollSpecialDayjsFunc(
          schedulerData
          // Does not exists in the function
          // start,
          // end
        );
        if (specialDayjs >= start && specialDayjs <= end) {
          let index = 0;
          schedulerData.headers.forEach((item) => {
            const header = localeDayjs(new Date(item.time));
            if (specialDayjs >= header) index++;
          });
          this.schedulerContent.scrollLeft =
            (index - 1) * schedulerData.getContentCellWidth();

          schedulerData.setScrollToSpecialDayjs(false);
        }
      }
    }
  }

  getSchedulerSizes() {
    const { schedulerData, leftCustomHeader, rightCustomHeader } = this.props;
    const { viewType, renderData, showAgenda, config } = schedulerData;
    const width = schedulerData.getSchedulerWidth();

    const resourceTableWidth = schedulerData.getResourceTableWidth();
    const schedulerContainerWidth =
      width - (config.resourceViewEnabled ? resourceTableWidth : 0);
    const schedulerWidth = schedulerData.getContentTableWidth() - 1;
    const fullSchedulerWidth =
      schedulerData.getContentTableWidth() +
      (config.resourceViewEnabled ? resourceTableWidth : 0);
    const unusedSpace = schedulerContainerWidth - schedulerWidth;

    return {
      resourceTableWidth,
      schedulerContainerWidth,
      schedulerWidth,
      fullSchedulerWidth,
      unusedSpace,
    };
  }

  render() {
    const { schedulerData, leftCustomHeader, rightCustomHeader } = this.props;
    const { viewType, renderData, showAgenda, config } = schedulerData;
    const width = schedulerData.getSchedulerWidth();

    let tbodyContent = <tr />;
    if (showAgenda) {
      tbodyContent = (
        <AgendaView
          schedulerData={this.props.schedulerData}
          eventItemClick={this.props.eventItemClick}
          slotClickedFunc={this.props.slotClickedFunc}
          subtitleGetter={this.props.subtitleGetter}
          viewEvent2Click={this.props.viewEvent2Click}
          viewEvent2Text={this.props.viewEvent2Text}
          viewEventClick={this.props.viewEventClick}
          viewEventText={this.props.viewEventText}
        />
      );
    } else {
      const {
        fullSchedulerWidth,
        resourceTableWidth,
        schedulerContainerWidth,
        schedulerWidth,
        unusedSpace,
      } = this.getSchedulerSizes();

      const DndResourceEvents = this.state.dndContext.getDropTarget(
        config.dragAndDropEnabled
      );
      const eventDndSource = this.state.dndContext.getDndSource();

      const displayRenderData = renderData.filter((o) => o.render);
      const resourceEventsList = displayRenderData.map((item) => (
        <DndResourceEvents
          {...this.props}
          key={item.slotId}
          resourceEvents={item}
          dndSource={eventDndSource}
        />
      ));

      const { contentScrollbarHeight } = this.state;
      const { contentScrollbarWidth } = this.state;
      const { resourceScrollbarHeight } = this.state;
      const { resourceScrollbarWidth } = this.state;
      const contentHeight = config.schedulerContentHeight;
      const resourcePaddingBottom =
        resourceScrollbarHeight === 0 ? contentScrollbarHeight : 0;
      const contentPaddingBottom =
        contentScrollbarHeight === 0 ? resourceScrollbarHeight : 0;
      let schedulerContentStyle: CSSProperties = {
        overflowX: viewType === ViewType.Week ? "hidden" : "auto",
        overflowY: "auto",
        margin: "0px",
        position: "relative",
        height: contentHeight,
        paddingBottom: contentPaddingBottom,
      };
      let resourceContentStyle: CSSProperties = {
        height: contentHeight,
        overflowX: "hidden",
        overflowY: "hidden",
        scrollbarWidth: "none", // For Firefox
        msOverflowStyle: "none", // For Internet Explorer and Edge
        width: resourceTableWidth + resourceScrollbarWidth - 2,
        marginRight: `-${contentScrollbarWidth}px`,
        marginBottom: `-${contentScrollbarHeight}px`,
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

      const resourceName = schedulerData.isEventPerspective
        ? config.taskName
        : config.resourceName;
      tbodyContent = (
        <>
          <tr className="flex justify-center">
            <td
              style={{
                display: config.resourceViewEnabled ? undefined : "none",
                width: resourceTableWidth,
                verticalAlign: "top",
              }}
            >
              <div className="resource-view">
                <div
                  style={{
                    overflow: "hidden",
                    borderBottom: "1px solid #e9e9e9",
                    height: config.tableHeaderHeight,
                  }}
                >
                  <div
                    style={{
                      overflowX: "scroll",
                      overflowY: "hidden",
                      margin: `0px 0px -${contentScrollbarHeight}px`,
                      scrollbarWidth: "none", // For Firefox
                      msOverflowStyle: "none", // For Internet Explorer and Edge
                    }}
                  >
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
                  ref={this.schedulerResourceRef}
                  onMouseOver={this.onSchedulerResourceMouseOver}
                  onMouseOut={this.onSchedulerResourceMouseOut}
                  onScroll={this.onSchedulerResourceScroll}
                >
                  <ResourceView
                    schedulerData={schedulerData}
                    slotClickedFunc={this.props.slotClickedFunc}
                    slotItemTemplateResolver={
                      this.props.slotItemTemplateResolver
                    }
                    toggleExpandFunc={this.props.toggleExpandFunc}
                    contentScrollbarHeight={resourcePaddingBottom}
                  />
                </div>
              </div>
            </td>
            <td className="">
              <div
                className="scheduler-view"
                style={{
                  width:
                    unusedSpace > 0
                      ? schedulerContainerWidth - unusedSpace
                      : schedulerContainerWidth,
                  verticalAlign: "top",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderBottom: "1px solid #e9e9e9",
                    height: config.tableHeaderHeight,
                  }}
                >
                  <div
                    style={{
                      overflowX: "scroll",
                      overflowY: "hidden",
                      margin: `0px 0px -${contentScrollbarHeight}px`,
                      scrollbarWidth: "none", // For Firefox
                      msOverflowStyle: "none", // For Internet Explorer and Edge
                    }}
                    ref={this.schedulerHeadRef}
                    onMouseOver={this.onSchedulerHeadMouseOver}
                    onMouseOut={this.onSchedulerHeadMouseOut}
                    onScroll={this.onSchedulerHeadScroll}
                  >
                    <div
                      style={{
                        paddingRight: `${contentScrollbarWidth}px`,
                        width: schedulerWidth + contentScrollbarWidth,
                      }}
                    >
                      <table className="scheduler-bg-table">
                        <HeaderView
                          schedulerData={this.props.schedulerData}
                          nonAgendaCellHeaderTemplateResolver={
                            this.props.nonAgendaCellHeaderTemplateResolver
                          }
                        />
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  style={schedulerContentStyle}
                  ref={this.schedulerContentRef}
                  onMouseOver={this.onSchedulerContentMouseOver}
                  onMouseOut={this.onSchedulerContentMouseOut}
                  onScroll={this.onSchedulerContentScroll}
                >
                  <div style={{ width: schedulerWidth }}>
                    <div className="scheduler-content">
                      <table className="scheduler-content-table">
                        <tbody>{resourceEventsList}</tbody>
                      </table>
                    </div>
                    <div className="scheduler-bg">
                      <table
                        className="scheduler-bg-table"
                        style={{ width: schedulerWidth }}
                        ref={this.schedulerContentBgTableRef}
                      >
                        <BodyView {...this.props} />
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </>
      );
    }

    let schedulerHeader: React.ReactNode = <div />;
    if (config.headerEnabled) {
      if (this.props?.schedulerHeaderTemplateResolver) {
        schedulerHeader = this.props.schedulerHeaderTemplateResolver({
          onViewChange: this.onViewChange,
          schedulerData,
          onSelectDate: this.onSelect,
          goNext: this.goNext,
          goBack: this.goBack,
          rightCustomHeader,
          leftCustomHeader,
        });
      } else {
        schedulerHeader = (
          <SchedulerHeader
            onViewChange={this.onViewChange}
            schedulerData={schedulerData}
            onSelectDate={this.onSelect}
            goNext={this.goNext}
            goBack={this.goBack}
            rightCustomHeader={rightCustomHeader}
            leftCustomHeader={leftCustomHeader}
          />
        );
      }
    }

    const { fullSchedulerWidth } = this.getSchedulerSizes();

    return (
      <table
        id="RBS-Scheduler-root"
        className="scheduler"
        style={{ width: `${width}px` }}
      >
        <thead>
          <tr>
            <td colSpan={2} className="flex flex-row justify-center">
              <div
                style={{ maxWidth: `${fullSchedulerWidth}px` }}
                className="w-full"
              >
                {schedulerHeader}
              </div>
            </td>
          </tr>
        </thead>
        <tbody>{tbodyContent}</tbody>
      </table>
    );
  }

  resolveScrollbarSize = (): void => {
    const { schedulerData } = this.props;
    let contentScrollbarHeight = 17;
    let contentScrollbarWidth = 17;
    let resourceScrollbarHeight = 17;
    let resourceScrollbarWidth = 17;
    if (this.schedulerContent) {
      contentScrollbarHeight =
        this.schedulerContent.offsetHeight - this.schedulerContent.clientHeight;
      contentScrollbarWidth =
        this.schedulerContent.offsetWidth - this.schedulerContent.clientWidth;
    }
    if (this.schedulerResource) {
      resourceScrollbarHeight =
        this.schedulerResource.offsetHeight -
        this.schedulerResource.clientHeight;
      resourceScrollbarWidth =
        this.schedulerResource.offsetWidth - this.schedulerResource.clientWidth;
    }

    let tmpState: Partial<SchedulerState> = {};
    let needSet = false;
    if (contentScrollbarHeight !== this.state.contentScrollbarHeight) {
      tmpState = { ...tmpState, contentScrollbarHeight };
      needSet = true;
    }
    if (contentScrollbarWidth !== this.state.contentScrollbarWidth) {
      tmpState = { ...tmpState, contentScrollbarWidth };
      needSet = true;
    }
    if (resourceScrollbarHeight !== this.state.resourceScrollbarHeight) {
      tmpState = { ...tmpState, resourceScrollbarHeight };
      needSet = true;
    }
    if (resourceScrollbarWidth !== this.state.resourceScrollbarWidth) {
      tmpState = { ...tmpState, resourceScrollbarWidth };
      needSet = true;
    }
    if (needSet) this.setState(tmpState as SchedulerState);
  };

  schedulerHeadRef = (element: HTMLDivElement | null): void => {
    this.schedulerHead = element;
  };

  onSchedulerHeadMouseOver = (): void => {
    this.currentArea = 2;
  };

  onSchedulerHeadMouseOut = (): void => {
    this.currentArea = -1;
  };

  onSchedulerHeadScroll = (): void => {
    if (
      (this.currentArea === 2 || this.currentArea === -1) &&
      this.schedulerContent &&
      this.schedulerHead &&
      this.schedulerContent.scrollLeft !== this.schedulerHead.scrollLeft
    ) {
      this.schedulerContent.scrollLeft = this.schedulerHead.scrollLeft;
    }
  };

  schedulerResourceRef = (element: HTMLDivElement | null): void => {
    this.schedulerResource = element;
  };

  onSchedulerResourceMouseOver = (): void => {
    this.currentArea = 1;
  };

  onSchedulerResourceMouseOut = (): void => {
    this.currentArea = -1;
  };

  onSchedulerResourceScroll = (): void => {
    if (this.schedulerResource && this.schedulerContent) {
      if (
        (this.currentArea === 1 || this.currentArea === -1) &&
        this.schedulerContent.scrollTop !== this.schedulerResource.scrollTop
      ) {
        this.schedulerContent.scrollTop = this.schedulerResource.scrollTop;
      }
    }
  };

  schedulerContentRef = (element: HTMLDivElement | null): void => {
    this.schedulerContent = element;
  };

  schedulerContentBgTableRef = (element: HTMLTableElement | null): void => {
    this.schedulerContentBgTable = element;
  };

  onSchedulerContentMouseOver = (): void => {
    this.currentArea = 0;
  };

  onSchedulerContentMouseOut = (): void => {
    this.currentArea = -1;
  };

  onSchedulerContentScroll = (): void => {
    if (this.schedulerResource && this.schedulerContent && this.schedulerHead) {
      if (this.currentArea === 0 || this.currentArea === -1) {
        if (this.schedulerHead.scrollLeft !== this.schedulerContent.scrollLeft)
          this.schedulerHead.scrollLeft = this.schedulerContent.scrollLeft;
        if (
          this.schedulerResource.scrollTop !== this.schedulerContent.scrollTop
        )
          this.schedulerResource.scrollTop = this.schedulerContent.scrollTop;
      }
    }

    const {
      schedulerData,
      onScrollLeft,
      onScrollRight,
      onScrollTop,
      onScrollBottom,
    } = this.props;
    if (this.schedulerContent) {
      if (this.schedulerContent.scrollLeft !== this.scrollLeft) {
        if (
          this.schedulerContent.scrollLeft === 0 &&
          onScrollLeft !== undefined
        ) {
          onScrollLeft(
            schedulerData,
            this.schedulerContent,
            this.schedulerContent.scrollWidth -
              this.schedulerContent.clientWidth
          );
        }
        if (
          Math.round(this.schedulerContent.scrollLeft) ===
            this.schedulerContent.scrollWidth -
              this.schedulerContent.clientWidth &&
          onScrollRight !== undefined
        ) {
          onScrollRight(
            schedulerData,
            this.schedulerContent,
            this.schedulerContent.scrollWidth -
              this.schedulerContent.clientWidth
          );
        }
      } else if (this.schedulerContent.scrollTop !== this.scrollTop) {
        if (
          this.schedulerContent.scrollTop === 0 &&
          onScrollTop !== undefined
        ) {
          onScrollTop(
            schedulerData,
            this.schedulerContent,
            this.schedulerContent.scrollHeight -
              this.schedulerContent.clientHeight
          );
        }
        if (
          Math.round(this.schedulerContent.scrollTop) ===
            this.schedulerContent.scrollHeight -
              this.schedulerContent.clientHeight &&
          onScrollBottom !== undefined
        ) {
          onScrollBottom(
            schedulerData,
            this.schedulerContent,
            this.schedulerContent.scrollHeight -
              this.schedulerContent.clientHeight
          );
        }
      }
      this.scrollLeft = this.schedulerContent.scrollLeft;
      this.scrollTop = this.schedulerContent.scrollTop;
    }
  };

  onViewChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const { onViewChange, schedulerData } = this.props;
    // TODO: Needs to be fixed
    const viewType = e.target.value as ViewType;
    const showAgenda = viewType === ViewType.Week;
    const isEventPerspective = viewType === ViewType.Week;
    onViewChange(schedulerData, { viewType, showAgenda, isEventPerspective });
    this.setState({ ...this.state, spinning: false });
  };

  goNext = (): void => {
    const { nextClick, schedulerData } = this.props;
    nextClick(schedulerData);
  };

  goBack = (): void => {
    const { prevClick, schedulerData } = this.props;
    prevClick(schedulerData);
  };

  onSelect = (date: Dayjs): void => {
    const { onSelectDate, schedulerData } = this.props;
    onSelectDate(schedulerData, date);
  };
}

export {
  DATE_FORMAT,
  DATETIME_FORMAT,
  Scheduler,
  SchedulerData,
  ViewType,
  CellUnit,
  SummaryPos,
  DnDSource,
  DnDContext,
  AddMorePopover,
  DemoData,
  wrapperFun,
};
