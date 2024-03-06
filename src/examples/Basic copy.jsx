import React, { Component } from "react";
import * as dayjsLocale from "dayjs/locale/pt-br";
import * as antdLocale from "antd/locale/pt_BR";
import { jezaApi } from "../api/jezaApi2";
import { Scheduler, SchedulerData, ViewType, DemoData, wrapperFun } from "../index";

class Basic extends Component {
  constructor(props) {
    super(props);

    const schedulerData = new SchedulerData("2024-03-05", ViewType.Month, false, false, {
      dayMaxEvents: 99,
      weekMaxEvents: 9669,
      monthMaxEvents: 9669,
      quarterMaxEvents: 6599,
      yearMaxEvents: 9956,
      customMaxEvents: 9965,
      eventItemPopoverTrigger: "click",
      schedulerContentHeight: "350px",
    });

    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(this.arreglo ? this.arreglo : DemoData.resources);
    schedulerData.setEvents(DemoData.events);
    this.state = {
      viewModel: schedulerData,
      arreglo: [],
      arregloCita: [],
    };
  }

  render() {
    const { viewModel } = this.state;
    return (
      <>
        <Scheduler
          schedulerData={viewModel}
          prevClick={this.prevClick}
          nextClick={this.nextClick}
          onSelectDate={this.onSelectDate}
          onViewChange={this.onViewChange}
          viewEventClick={this.ops1}
          viewEventText="Ops 1"
          viewEvent2Text="Ops 2"
          viewEvent2Click={this.ops2}
          updateEventStart={this.updateEventStart}
          updateEventEnd={this.updateEventEnd}
          moveEvent={this.moveEvent}
          newEvent={this.newEvent}
          onScrollLeft={this.onScrollLeft}
          onScrollRight={this.onScrollRight}
          onScrollTop={this.onScrollTop}
          onScrollBottom={this.onScrollBottom}
          toggleExpandFunc={this.toggleExpandFunc}
        />
        <button onClick={this.fetchData}>Recargar Datos</button>
      </>
    );
  }

  prevClick = (schedulerData) => {
    this.fetchData();
    setTimeout(() => {
      schedulerData.prev();
      schedulerData.setEvents(this.arreglo);
      this.setState({ viewModel: schedulerData });
    }, 5000);
  };

  nextClick = (schedulerData) => {
    this.fetchData();
    setTimeout(() => {
      schedulerData.next();
      schedulerData.setEvents(this.arreglo);
      this.setState({ viewModel: schedulerData });
    }, 4000);
  };

  onViewChange = (schedulerData, view) => {
    const start = new Date();
    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(DemoData.events);
    this.setState({ viewModel: schedulerData });
    function secondsBetween(date1, date2) {
      const diff = Math.abs(date1.getTime() - date2.getTime());
      return diff / 1000;
    }

    console.log(`Elapsed seconds: ${secondsBetween(start, new Date())}`);
  };

  onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    this.setState({
      viewModel: schedulerData,
    });
  };

  eventClicked = (schedulerData, event) => {
    alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops1 = (schedulerData, event) => {
    alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  ops2 = (schedulerData, event) => {
    alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
  };

  newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      const newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start,
        end,
        resourceId: slotId,
        bgColor: "purple",
      };
      schedulerData.addEvent(newEvent);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  updateEventStart = (schedulerData, event, newStart) => {
    if (confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
      schedulerData.updateEventStart(event, newStart);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  updateEventEnd = (schedulerData, event, newEnd) => {
    if (confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    this.setState({
      viewModel: schedulerData,
    });
  };

  moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      this.setState({
        viewModel: schedulerData,
      });
    }
  };

  onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  onScrollLeft = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
      this.setState({
        viewModel: schedulerData,
      });

      schedulerContent.scrollLeft = 10;
    }
  };

  onScrollTop = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollTop");
  };

  onScrollBottom = (schedulerData, schedulerContent, maxScrollTop) => {
    console.log("onScrollBottom");
  };

  toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    this.setState({
      viewModel: schedulerData,
    });
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    // Fetching Estilistas data
    jezaApi
      .get("/Estilistas?suc=21&fecha=2024-03-01")
      .then((response) => {
        this.setState({
          arreglo: response.data.map((item) => ({
            ...item,
            name: item.nombre,
          })),
        });
      })
      .catch((err) => {
        console.error(err);
      });

    // Fetching Cita data
    jezaApi
      .get("/Cita?cliente=%&f1=20240305&suc=21")
      .then((response) => {
        this.setState({
          arregloCita: response.data.map((item) => ({
            ...item,
            start: item.fechaCita,
            end: item.horaFin,
            resourceId: item.idEstilista,
            title: item.ServicioDescripción,
            type: 3,
          })),
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export default wrapperFun(Basic);
