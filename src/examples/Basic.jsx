import React, { useEffect, useReducer, useState } from "react";
import * as dayjsLocale from "dayjs/locale/es-mx";
import * as antdLocale from "antd/locale/es_ES";
import { Scheduler, SchedulerData, ViewType, wrapperFun, DemoData } from "../index";
import { jezaApi } from "../api/jezaApi2";
import Modal from "../components/Modal";
import { format } from "date-fns-tz";

let schedulerData;

const initialState = {
  showScheduler: false,
  viewModel: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "INITIALIZE":
      return { showScheduler: true, viewModel: action.payload };
    case "UPDATE_SCHEDULER":
      return { ...state, viewModel: action.payload };
    case "REINITIALIZE":
      return { ...state, showScheduler: false };
    default:
      return state;
  }
}

function Basic() {
  const [arreglo, setArreglo] = useState([]);
  const [arregloCita, setArregloCita] = useState([]);
  const [verificador, setVerificador] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datosParametros, setDatosParametros] = useState({
    idUser: 0,
    fecha: new Date(),
    idRec: 0,
    idSuc: 0,
    idCliente: 0,
  });

  const [formServicio, setFormServicio] = useState({
    id_Cita: 0,
    idServicio: 0,
    cantidad: 0,
    precio: 0,
    observaciones: "",
    usuario: 0,
    d_servicio: "",
    id: 0,
    tiempo: 0,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const fetchData = () => {
    jezaApi
      .get(`/Estilistas?suc=21&fecha=${format(datosParametros.fecha, "yyyy-MM-dd")}`)
      .then((response) => {
        setArreglo(
          response.data.map((item) => {
            const newItem = {
              ...item,
              name: item.nombre,
            };
            delete newItem.toggleExpandStatus;
            return newItem;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    jezaApi
      .get(`/Cita?cliente=%&f1=${format(datosParametros.fecha, "yyyyMMdd")}&suc=21`)
      .then((response) => {
        setArregloCita(
          response.data.map((item) => {
            const newItem = {
              ...item,
              start: item.fechaCita,
              end: item.horaFin,
              resourceId: item.idEstilista,
              title: item.ServicioDescripción,
              type: 2,
              bgColor: "red",
            };
            delete newItem.toggleExpandStatus;
            return newItem;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    schedulerData = new SchedulerData(datosParametros.fecha, ViewType.Day, false, false, {
      besidesWidth: window.innerWidth <= 1600 ? 100 : 350,
      dayMaxEvents: 99,
      weekMaxEvents: 9669,
      monthMaxEvents: 9669,
      quarterMaxEvents: 6599,
      yearMaxEvents: 9956,
      customMaxEvents: 9965,
      eventItemPopoverTrigger: "click",
      schedulerContentHeight: "100%",
    });

    schedulerData.setSchedulerLocale(dayjsLocale);
    schedulerData.setCalendarPopoverLocale(antdLocale);
    schedulerData.setResources(arreglo);
    schedulerData.setEvents(arregloCita);
    if (arreglo.length > 0 && arregloCita.length > 0) {
      setTimeout(() => {
        dispatch({ type: "INITIALIZE", payload: schedulerData });
        return () => dispatch({ type: "REINITIALIZE" });
      }, 1500);
    }
  }, [arreglo, arregloCita]);

  const prevClick = (schedulerData) => {
    schedulerData.prev();
    schedulerData.setEvents(DemoData.events);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const nextClick = (schedulerData) => {
    // schedulerData.next();
    schedulerData.next();

    setDatosParametros({
      fecha: datosParametros.fecha.setDate(datosParametros.fecha.getDate() + 1),
    });
    fetchData();
    schedulerData.setEvents(arregloCita);
    // dispatch({ type: "REINITIALIZE", payload: schedulerData });
  };

  const onSelectDate = (schedulerData, date) => {
    schedulerData.setDate(date);
    schedulerData.setEvents(DemoData.events);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const onViewChange = (schedulerData, view) => {
    const start = new Date();

    schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
    schedulerData.setEvents(arregloCita);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });

    const secondsBetween = (date1, date2) => {
      const diff = Math.abs(date1.getTime() - date2.getTime());
      return diff / 1000;
    };
    console.log("Elapsed seconds: " + secondsBetween(start, new Date()));
  };

  const ops1 = (schedulerData, event) => {
    setDatosParametros({
      fecha: fecha.setDate(fecha.getDate() + 1),
    });
    dispatch({ type: "REINITIALIZE", payload: schedulerData });

    jezaApi
      .get(`/Estilistas?suc=21&fecha=${format(datosParametros.fecha + 1, "yyyy-MM-dd")}`)
      .then((response) => {
        setArreglo(
          response.data.map((item) => {
            const newItem = {
              ...item,
              name: item.nombre,
            };
            delete newItem.toggleExpandStatus;
            return newItem;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    jezaApi
      .get(`/Cita?cliente=%&f1=${format(datosParametros.fecha, "yyyyMMdd")}&suc=21`)
      .then((response) => {
        setArregloCita(
          response.data.map((item) => {
            const newItem = {
              ...item,
              start: item.fechaCita,
              end: item.horaFin,
              resourceId: item.idEstilista,
              title: item.ServicioDescripción,
              type: 3,
              bgColor: "red",
            };
            delete newItem.toggleExpandStatus;
            return newItem;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ops2 = (schedulerData, event) => {
    setIsModalOpen(true);
  };

  const updateEventStart = (schedulerData, event, newStart) => {
    if (confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
      schedulerData.updateEventStart(event, newStart);
    }
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const updateEventEnd = (schedulerData, event, newEnd) => {
    if (confirm(`Do you want to adjust the end of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newEnd: ${newEnd}}`)) {
      schedulerData.updateEventEnd(event, newEnd);
    }
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const moveEvent = (schedulerData, event, slotId, slotName, start, end) => {
    if (
      confirm(
        `Do you want to move the event? {eventId: ${event.id}, eventTitle: ${event.title}, newSlotId: ${slotId}, newSlotName: ${slotName}, newStart: ${start}, newEnd: ${end}`
      )
    ) {
      schedulerData.moveEvent(event, slotId, slotName, start, end);
      dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
    }
  };

  const newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    if (
      confirm(
        `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
      )
    ) {
      let newFreshId = 0;
      schedulerData.events.forEach((item) => {
        if (item.id >= newFreshId) newFreshId = item.id + 1;
      });

      let newEvent = {
        id: newFreshId,
        title: "New event you just created",
        start: start,
        end: end,
        resourceId: slotId,
        bgColor: "purple",
      };
      schedulerData.addEvent(newEvent);
      dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
    }
  };

  const onScrollLeft = (schedulerData, schedulerContent) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.prev();
      schedulerData.setEvents(DemoData.events);
      dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
      schedulerContent.scrollLeft = 10;
    }
  };
  const onScrollRight = (schedulerData, schedulerContent, maxScrollLeft) => {
    if (schedulerData.ViewTypes === ViewType.Day) {
      schedulerData.next();
      schedulerData.setEvents(DemoData.events);
      dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
      schedulerContent.scrollLeft = maxScrollLeft - 10;
    }
  };

  const onScrollTop = () => console.log("onScrollTop");

  const onScrollBottom = () => console.log("onScrollBottom");

  const toggleExpandFunc = (schedulerData, slotId) => {
    schedulerData.toggleExpandStatus(slotId);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const postCita = async () => {
    try {
      const response = await jezaApi.post(
        `/Cita?cia=26&sucursal=${21}&fechaCita=${datosParametros.fecha ? datosParametros.fecha : "2024-02-29"}&idCliente=${
          datosParametros.idCliente
        }&tiempo=0&idEstilista=${2135}&idUsuario=${2135}&estatus=1`
      );
      setFormServicio({
        ...formServicio,
        id_Cita: Number(response.data[0].mensaje2),
        cantidad: 1,
      });
      setVerificador(true);
    } catch (error) {
      console.log(error);
    }
  };

  const postServicio = async (schedulerData) => {
    await jezaApi
      .post(
        `/CitaServicio?id_Cita=${formServicio.id_Cita ? formServicio.id_Cita : formServicio.id_Cita}&idServicio=${formServicio.idServicio}&cantidad=${
          formServicio.cantidad
        }&precio=${250}&observaciones=${formServicio.observaciones ? formServicio.observaciones : "."}&usuario=${2135}`
      )
      .then(() => {
        setTextSuccessInfo("Se agendó la cita correctamente...");
        setTimeout(() => {
          setSuccessInfo(true);
        }, 1000);
        getCitaServicios(formServicio.id_Cita);
        setFormServicio({
          ...formServicio,
          d_servicio: "",
          cantidad: 1,
          observaciones: "",
          idServicio: 0,
          id_Cita: 0,
        });
      });
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  return (
    <>
      {state.showScheduler && (
        <Scheduler
          schedulerData={state.viewModel}
          prevClick={prevClick}
          nextClick={nextClick}
          onSelectDate={onSelectDate}
          onViewChange={onViewChange}
          viewEventClick={ops1}
          viewEventText="Ops 1"
          viewEvent2Text="Ops 2"
          viewEvent2Click={ops2}
          updateEventStart={updateEventStart}
          updateEventEnd={updateEventEnd}
          moveEvent={moveEvent}
          newEvent={newEvent}
          onScrollLeft={onScrollLeft}
          onScrollRight={onScrollRight}
          onScrollTop={onScrollTop}
          onScrollBottom={onScrollBottom}
          toggleExpandFunc={toggleExpandFunc}
        />
      )}
      <Modal isOpen={isModalOpen} close={toggleModal}>
        <p>Fecha</p>
        <input
          onChange={(value) => {
            setDatosParametros({
              ...datosParametros,
              fecha: value.target.value,
            });
          }}
          type="datetime-local"
        />
        <p>Cliente</p>
        <input
          onChange={(value) => {
            setDatosParametros({
              ...datosParametros,
              idCliente: value.target.value,
            });
          }}
          type="number"
        />
        <button onClick={() => postCita()}>Guardar</button>
        {verificador ? (
          <div>
            <p>Ingresar Cantidad</p>
            <input
              type="text"
              onChange={(value) => {
                setFormServicio({
                  ...formServicio,
                  cantidad: value.target.value,
                });
              }}
            />
            <p>Ingresar Servicio</p>
            <input
              type="text"
              onChange={(value) => {
                setFormServicio({
                  ...formServicio,
                  idServicio: value.target.value,
                });
              }}
            />
            <p>Ingresar Observación</p>
            <input
              type="text"
              onChange={(value) => {
                setFormServicio({
                  ...formServicio,
                  observaciones: value.target.value,
                });
              }}
            />
            <button
              onClick={() => {
                postServicio(schedulerData);
              }}
            >
              Guardado
            </button>
          </div>
        ) : null}
      </Modal>
    </>
  );
}

export default wrapperFun(Basic);
