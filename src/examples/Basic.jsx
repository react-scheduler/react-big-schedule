import React, { useEffect, useReducer, useState } from "react";
import * as dayjsLocale from "dayjs/locale/es-mx";
import * as antdLocale from "antd/locale/es_ES";
import { Scheduler, SchedulerData, ViewType, wrapperFun, DemoData } from "../index";
import { jezaApi } from "../api/jezaApi2";
import { peinadosApi } from "../api/peinadosApi";
import Modal from "../components/Modal";
import { format } from "date-fns-tz";
import { set } from "date-fns";
import { DataGrid } from "@mui/x-data-grid";
import Timer from "../components/Timer";
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
  const getCitas = async (fecha) => {
    try {
      console.log(fecha + "GET CITAS");
      const response = await jezaApi.get(`/Cita?cliente=%&f1=${format(fecha ? fecha : datosParametros.fecha, "yyyyMMdd")}&suc=21`);

      setArregloCita(
        response.data.map((item) => ({
          ...item,
          start: item.fechaCita,
          end: item.horaFin,
          resourceId: item.idEstilista,
          title: item.ServicioDescripción,
          type: 2,
          bgColor: "red",
        }))
      );
      return response.data.map((item) => ({
        ...item,
        start: item.fechaCita,
        end: item.horaFin,
        resourceId: item.idEstilista,
        title: item.ServicioDescripción,
        type: 2,
        bgColor: "red",
      }));
    } catch (err) {
      console.error(err);
    }
  };
  const getCitas2 = async () => {
    try {
      const response = await jezaApi.get(`/Cita?cliente=%&f1=${format(datosParametros.fecha, "yyyyMMdd")}&suc=21`);

      setArregloCita(
        response.data.map((item) => ({
          ...item,
          start: item.fechaCita,
          end: item.horaFin,
          resourceId: item.idEstilista,
          title: item.ServicioDescripción,
          type: 2,
          bgColor: "red",
        }))
      );
      return response.data.map((item) => ({
        ...item,
        start: item.fechaCita,
        end: item.horaFin,
        resourceId: item.idEstilista,
        title: item.ServicioDescripción,
        type: 2,
        bgColor: "red",
      }));
    } catch (err) {
      console.error(err);
    }
  };
  const fetchData = async () => {
    await jezaApi
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
    getCitas();
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [inicializarAgenda, setinicializarAgenda] = useState(false);
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
        if (inicializarAgenda == false) {
          dispatch({ type: "INITIALIZE", payload: schedulerData });
        }
        setinicializarAgenda(true);
        return () => dispatch({ type: "REINITIALIZE" });
      }, 1500);
    }
  }, [arreglo, arregloCita]);

  const actualizarAgenda = (response, schedulerData) => {
    schedulerData.setEvents(response);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const actualizarFechayCitas = (schedulerData, dias, fecha) => {
    setDatosParametros((datosParametrosPrevios) => {
      const tempFecha = new Date(fecha ? fecha : datosParametrosPrevios.fecha);
      tempFecha.setDate(tempFecha.getDate() + dias);
      if (dias == 0) tempFecha.setDate(tempFecha.getDate() + 1);
      getCitas(tempFecha).then((response) => {
        if (dias < 0) {
          schedulerData.prev();
        } else if (dias === 0) {
          schedulerData.setDate(format(tempFecha, "yyyy-MM-dd"));
        } else {
          schedulerData.next();
        }
        actualizarAgenda(response, schedulerData);
      });
      return {
        ...datosParametrosPrevios,
        fecha: tempFecha,
      };
    });
  };

  const prevClick = (schedulerData) => {
    actualizarFechayCitas(schedulerData, -1);
  };

  const nextClick = (schedulerData) => {
    actualizarFechayCitas(schedulerData, +1);
  };

  const onSelectDate = (schedulerData, date) => {
    console.log(new Date(date));
    actualizarFechayCitas(schedulerData, 0, date);
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
    console.log({ event });
    console.log({ schedulerData });

    return;
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
    console.log(schedulerData);
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
  const columns = [
    { field: "clave", headerName: "Clave", width: 70 },
    { field: "estilista", headerName: "Modo", width: 130 },
    { field: "hora", headerName: "Hora", width: 130 },
    {
      field: "horaFinal",
      headerName: "HF",
      type: "number",
      width: 90,
    },
    {
      field: "cliente",
      headerName: "Cliente",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    { field: "servicio", headerName: "Servicio", width: 130 },
    { field: "tiempo", headerName: "Tiempo", width: 130 },
    { field: "total", headerName: "Total", width: 130 },
  ];

  const rows = [
    {
      id: 10,
      clave: "180",
      estilista: "susy",
      hora: "10:00am",
      horaFinal: "12:00pm",
      cliente: "Maria Jors",
      servicio: "Peinados",
      tiempo: "30",
      total: "$5000.00",
    },
    {
      id: 11,
      clave: "181",
      estilista: "susy",
      hora: "2:00pm",
      horaFinal: "12:00pm",
      cliente: "Mario",
      servicio: "Corte",
      tiempo: "10",
      total: "$200.00",
    },
  ];
  const ligaPruebas = "http://localhost:5173/";
  const handleOpenNewWindow = () => {
    const url = `${ligaPruebas}miliga/crearcita`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowListaEspera = () => {
    const url = `${ligaPruebas}miliga/listaEspera`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  return (
    <>
      <div>
        <Timer />
        <h2>{datosParametros.fecha.toLocaleDateString()}</h2>
      </div>
      <button
        onClick={() => {
          handleOpenNewWindow();
        }}
      >
        Nueva cita
      </button>
      <button
        onClick={() => {
          handleOpenNewWindowListaEspera();
        }}
      >
        Lista de espera
      </button>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      {state.showScheduler && (
        <div style={{ marginBottom: 15000 }}>
          <Scheduler
            key={1}
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
        </div>
      )}
    </>
  );
}

export default wrapperFun(Basic);
