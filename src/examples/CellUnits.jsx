import React, { Component } from 'react';
import { Scheduler, SchedulerData, ViewType, CellUnit, DemoData, wrapperFun, DATE_FORMAT } from '../components/index';
import '../css/style.css';

class CellUnitComponent extends Component {
  constructor(props) {
    super(props);

    let schedulerData = new SchedulerData(
      '2022-12-10',
      ViewType.Custom,
      false,
      false,
      {
        customCellWidth: 150,
        nonAgendaDayCellHeaderFormat: 'M/D|HH:mm',
        views: [
          { viewName: 'Week', viewType: ViewType.Custom, showAgenda: false, isEventPerspective: false },
          { viewName: 'Month', viewType: ViewType.Custom1, showAgenda: false, isEventPerspective: false },
          { viewName: 'Year', viewType: ViewType.Custom2, showAgenda: false, isEventPerspective: false },
        ],
      },
      { getCustomDateFunc: this.getCustomDate }
    );
    schedulerData.localeDayjs.locale('en');
    schedulerData.setResources(DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = { viewModel: schedulerData };
  }

  render() {
    const { viewModel } = this.state;
    return (
      <div>
        <h3 style={{ textAlign: 'center' }}>Custom time window</h3>
        <Scheduler schedulerData={viewModel} prevClick={this.prevClick} nextClick={this.nextClick} onViewChange={this.onViewChange} onSelectDate={this.onSelectDate} />
      </div>
    );
  }

  prevClick = schedulerData => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  nextClick = schedulerData => {
    schedulerData.next();
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  onViewChange = (schedulerData, view) => {
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.config.customCellWidth = view.viewType === ViewType.Custom ? 30 : 80;
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
  };

  getCustomDate = (schedulerData, num, date = undefined) => {
    const { viewType } = schedulerData;
    let selectDate = schedulerData.startDate;
    if (date != undefined) selectDate = date;

    let startDate =
        num === 0
          ? selectDate
          : schedulerData
              .localeDayjs(selectDate)
              .add(2 * num, 'days')
              .format(DATE_FORMAT),
      endDate = schedulerData.localeDayjs(startDate).add(1, 'week').format(DATE_FORMAT),
      cellUnit = CellUnit.Day;
    if (viewType === ViewType.Custom) {
      let monday = schedulerData.localeDayjs(selectDate).startOf('week').format(DATE_FORMAT);
      startDate =
        num === 0
          ? monday
          : schedulerData
              .localeDayjs(monday)
              .add(2 * num, 'weeks')
              .format(DATE_FORMAT);
      endDate = schedulerData.localeDayjs(startDate).add(12, 'months').endOf('week').format(DATE_FORMAT);
      cellUnit = CellUnit.Week;
    } else if (viewType === ViewType.Custom1) {
      let firstDayOfMonth = schedulerData.localeDayjs(selectDate).startOf('month').format(DATE_FORMAT);
      startDate =
        num === 0
          ? firstDayOfMonth
          : schedulerData
              .local2eMoment(firstDayOfMonth)
              .add(2 * num, 'months')
              .format(DATE_FORMAT);
      endDate = schedulerData.localeDayjs(startDate).add(16, 'months').endOf('month').format(DATE_FORMAT);
      cellUnit = CellUnit.Month;
    } else if (viewType === ViewType.Custom2) {
      let firstDayOfMonth = schedulerData.localeDayjs(selectDate).startOf('month').format(DATE_FORMAT);
      startDate =
        num === 0
          ? firstDayOfMonth
          : schedulerData
              .localeDayjs(firstDayOfMonth)
              .add(2 * num, 'months')
              .format(DATE_FORMAT);
      endDate = schedulerData.localeDayjs(startDate).add(60, 'months').endOf('month').format(DATE_FORMAT);
      cellUnit = CellUnit.Year;
    }
    return { startDate, endDate, cellUnit };
  };
}

export default wrapperFun(CellUnitComponent);
