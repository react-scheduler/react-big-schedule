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
import { Container, Button, Badge, Label, Input, Col, Row } from "reactstrap";
import Swal from "sweetalert2";
import "../css/style.css";
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

  const [arregloCitaDia, setArregloCitaDia] = useState([]);
  const [arregloCita, setArregloCita] = useState([]);
  const [tipoCita, setTipoCita] = useState("");
  const [verificador, setVerificador] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [datosParametros, setDatosParametros] = useState({
    idUser: 0,
    fecha: new Date(),
    idRec: 0,
    idSuc: 0,
    idCliente: 0,
  });
  const [datosParametrosCitaTemp, setDatosParametrosCitaTemp] = useState({});
  const [datosParametrosFechaCitaTemp, setDatosParametrosFechaCitaTemp] = useState({});

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

  useEffect(() => {
    if (datosParametrosCitaTemp.no_cliente) {
      putEditarCita();
      console.log({ datosParametrosCitaTemp });
    }
  }, [datosParametrosCitaTemp]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getCitas = async (fecha) => {
    try {
      const response = await peinadosApi.get(`/DetalleAgendaSelv7?fecha=${format(fecha ? fecha : datosParametros.fecha, "yyyyMMdd")}&suc=1`);
      setArregloCita(
        response.data.map((item) => {
          let hora1 = new Date(item.hora1);
          let hora2 = new Date(item.hora2);
          let fechaBase = new Date(item.fecha);
          hora1.setFullYear(fechaBase.getFullYear(), fechaBase.getMonth(), fechaBase.getDate());
          hora2.setFullYear(fechaBase.getFullYear(), fechaBase.getMonth(), fechaBase.getDate());
          return {
            ...item,
            start: hora1.toISOString(),
            end: hora2.toISOString(),
            resourceId: item.no_estilista,
            title: "",
            type: 2,
            // bgColor: "red",
            bgColor:
              item.estadoCita == 1
                ? "#FFA500"
                : item.estadoCita == 2
                ? "#00FFFF"
                : item.estadoCita == 3
                ? "#FFFF00"
                : item.estadoCita == 4
                ? "#008000"
                : item.estadoCita == 5
                ? "#800080"
                : "#000000",
          };
        })
      );

      return response.data.map((item) => {
        let hora1 = new Date(item.hora1);
        let hora2 = new Date(item.hora2);
        let fechaBase = new Date(item.fecha);
        hora1.setFullYear(fechaBase.getFullYear(), fechaBase.getMonth(), fechaBase.getDate());
        hora2.setFullYear(fechaBase.getFullYear(), fechaBase.getMonth(), fechaBase.getDate());
        return {
          ...item,
          start: hora1.toISOString(),
          end: hora2.toISOString(),
          resourceId: item.no_estilista,
          title: "",
          type: 2,
          // bgColor: "red",
          bgColor:
            item.estadoCita == 1
              ? "#FFA500"
              : item.estadoCita == 2
              ? "#00FFFF"
              : item.estadoCita == 3
              ? "#FFFF00"
              : item.estadoCita == 4
              ? "#008000"
              : item.estadoCita == 5
              ? "#800080"
              : "#000000",
        };
      });
    } catch (err) {
      console.error(err);
    }
  };

  const fetchData = async () => {
    await peinadosApi
      .get(`/Estilistas?id=0`)
      .then((response) => {
        setArreglo(
          response.data.map((item) => {
            const newItem = {
              ...item,
              name: item.estilista,
              id: item.clave,
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
    console.log(getCitas());
  };
  const getCitasDia = () => {
    peinadosApi
      .get(`/ClientesCitasDia4?suc=1&cliente=0&fecha=${format(datosParametros.fecha, "yyyyMMdd")}&tipoCita=${tipoCita ? tipoCita : "%"}`)
      .then((response) => {
        setArregloCitaDia(response.data);
      });
  };
  useEffect(() => {
    fetchData();
    getCitasDia();
  }, []);
  useEffect(() => {
    getCitasDia();
  }, [tipoCita, datosParametros.fecha]);

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
    console.log(arregloCita);
  }, [arreglo, arregloCita]);

  const actualizarAgenda = (response, schedulerData) => {
    console.log({ response });
    console.log("AQUI ANDAMOS");
    schedulerData.setEvents(response);
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const actualizarFechayCitas = (schedulerData, dias, fecha) => {
    setDatosParametros((datosParametrosPrevios) => {
      const tempFecha = new Date(fecha ? fecha : datosParametrosPrevios.fecha);
      tempFecha.setDate(tempFecha.getDate() + dias);
      if (dias == 0) tempFecha.setDate(tempFecha.getDate() + 1);
      getCitas(tempFecha).then((response) => {
        console.log(response);
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

    handleOpenNewWindowEdit({
      idCita: event.idCita,
      idUser: event.no_estilista,
      idCliente: event.no_cliente,
      fecha: event.hora1,
      flag: 0,
    });
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
    // setIsModalOpen(true);
    console.log(event);
    // return;
    editCita2(event);
  };

  const updateEventStart = (schedulerData, event, newStart) => {
    if (confirm(`Do you want to adjust the start of the event? {eventId: ${event.id}, eventTitle: ${event.title}, newStart: ${newStart}}`)) {
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
    console.log(start);
    console.log(slotId);
    const start2 = new Date();

    Swal.fire({
      title: `Esta segur de hacer este cambio a la estilista: ${slotName} a las ${start}?`,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setDatosParametrosFechaCitaTemp({
          fecha: start,
          usuarioEstilista: slotId,
        });
        setDatosParametrosCitaTemp(event);
        // schedulerData.moveEvent(event, slotId, slotName, start, end);
        // actualizarFechayCitas(schedulerData, 0.01);
        window.location.reload();
      }
    });
  };

  const newEvent = (schedulerData, slotId, slotName, start, end, type, item) => {
    console.log(schedulerData);

    handleOpenNewWindow({
      idCita: 0,
      idUser: slotId,
      idCliente: 0,
      fecha: start,
      flag: 0,
    });
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
    console.log({ schedulerData });
    console.log({ slotId });
    alert("PEPE");
    dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
  };

  const columns = [
    { field: "id", headerName: "Clave", width: 70, align: "center" },
    {
      field: "stao_estilista",
      headerName: "Modo",
      width: 130,
      align: "center",
      flex: 1,

      options: {
        setCellProps: () => ({ align: "center", justifyContent: "center" }),
      },
      renderCell: (params) => (
        <p>
          {params.row.stao_estilista == 1
            ? "No disponible"
            : params.row.stao_estilista == 2
            ? "Requerido"
            : params.row.stao_estilista == 3
            ? "Asignado"
            : params.row.stao_estilista == 4
            ? "En servicio"
            : params.row.stao_estilista == 5
            ? "A domicilio"
            : ""}
        </p>
      ),
    },
    {
      field: "hora_cita",
      headerName: "Hora2",
      width: 50,
      renderCell: (params) => <p>{format(new Date(params.row.hora_cita), "HH:mm")}</p>,
      cellClassName: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      field: "horafinal",
      headerName: "HF",
      type: "number",
      width: 50,
      renderCell: (params) => <p>{format(new Date(params.row.horafinal), "HH:mm")}</p>,
      cellClassName: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      field: "d_cliente",
      headerName: "Cliente",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 250,
    },
    { field: "descripcion", headerName: "Servicio", width: 250 },
    { field: "tiempo", headerName: "Tiempo", width: 130, renderCell: (params) => <p>{params.row.tiempo + " min"}</p> },
    {
      field: "importe",
      headerName: "Total",
      width: 130,
      renderCell: (params) => <p>{Number(params.row.importe).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>,
    },
  ];

  const ligaPruebas = "http://localhost:5173/";
  // const ligaPruebas = "http://cbinfo.no-ip.info:9019/";
  const handleOpenNewWindow = ({ idCita, idUser, idCliente, fecha, flag }) => {
    const url = `${ligaPruebas}miliga/crearcita?idCita=${idCita}&idUser=${idUser}&idCliente=${idCliente}&fecha=${fecha}&idSuc=${1}&idRec=${1}&flag=${flag}`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowEdit = ({ idCita, idUser, idCliente, fecha, flag }) => {
    const url = `${ligaPruebas}miliga/editarcita?idCita=${idCita}&idUser=${idUser}&idCliente=${idCliente}&fecha=${fecha}&idSuc=${1}&idRec=${1}&flag=${flag}`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowNewSchedule = () => {
    const url = `${ligaPruebas}miliga/crearcita?idCita`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowListaEspera = () => {
    const url = `${ligaPruebas}miliga/listaEspera`; // Reemplaza esto con la URL que desees abrir

    // confirm(
    //   `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
    // )
    const width = 1200;
    const height = 600;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };

  const putEditarCita = async () => {
    let fechaActual = new Date();
    // Extrae el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
    let día = fechaActual.getDate();
    let fechaSinHora = new Date(año, mes, día);
    peinadosApi
      .put("/DetalleCitas", null, {
        params: {
          id: datosParametrosCitaTemp.idCita,
          cia: datosParametrosCitaTemp.cia,
          sucursal: datosParametrosCitaTemp.sucursal,
          clave_cita: "000",
          no_cita: 1,
          no_estilista: datosParametrosFechaCitaTemp.usuarioEstilista,
          no_cliente: datosParametrosCitaTemp.no_cliente,
          dia_cita: datosParametrosCitaTemp.fecha,
          hora_cita: datosParametrosFechaCitaTemp.fecha,
          fecha: fechaSinHora,
          tiempo: datosParametrosCitaTemp.tiempo,
          user: datosParametrosFechaCitaTemp.usuarioEstilista,
          tipo_servicio: "1",
          serv: "1",
          importe: 100,
          cancelada: false,
          stao_estilista: datosParametrosCitaTemp.modoCita,
          nota_canc: 0,
          registrada: true,
          observacion: 0,
          user_uc: 0,
          estatus: datosParametrosCitaTemp.estadoCita,
        },
      })
      .then((response) => {
        Swal.fire("Saved!", "", "success");
      });
  };

  const statusBoxStyle = {
    display: "flex",
    gap: "10px",
  };

  const boxStyles = {
    noDisponible: {
      backgroundColor: "#FFA500",
      padding: "10px",
      color: "black",
    },
    requerido: {
      backgroundColor: "#00FFFF",
      padding: "10px",
      color: "black",
    },
    asignado: {
      backgroundColor: "#FFFF00",
      padding: "10px",
      color: "black",
    },
    enServicio: {
      backgroundColor: "#008000",
      padding: "10px",
      color: "white",
    },
    domicilio: {
      backgroundColor: "#800080",
      padding: "10px",
      color: "white",
    },
    conflicto: {
      backgroundColor: "#000000",
      padding: "10px",
      color: "white",
    },
  };
  const editCita2 = (eventItem) => {
    let fechaActual = new Date(eventItem.hora1);
    // Extrae el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
    let día = fechaActual.getDate();
    let fechaSinHora = new Date(año, mes, día);
    peinadosApi
      .put("/DetalleCitasReducido", null, {
        params: {
          id: eventItem.idCita,
          no_estilista: eventItem.no_estilista,
          no_cliente: eventItem.no_cliente,
          dia_cita: eventItem.hora1,
          hora_cita: eventItem.hora1,
          fecha: fechaSinHora,
          user: eventItem.no_estilista,
          cancelada: true,
          stao_estilista: 1,
          nota_canc: 0,
          registrada: false,
          observacion: 1,
          user_uc: 0,
          estatus: 0,
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Cita cancelada",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });
  };
  return (
    <>
      <div style={{ flex: 1, justifyContent: "space-between", alignContent: "space-between", alignItems: "start", display: "flex" }}>
        <div style={{ display: "flex" }}>
          <h4>Fecha: {datosParametros.fecha.toLocaleDateString()}</h4>
          <h4>´ y Hora: </h4>
          <Timer />
        </div>
        <Row>
          <Col>
            <Label>Tipo de cita:</Label>
          </Col>
          <Col>
            <Input type="select" size={"sm"} value={tipoCita} onChange={(e) => setTipoCita(e.target.value)}>
              <option value={"%"}>Todos</option>
              <option value={"1"}>Cita</option>
              <option value={"2"}>Servicio</option>
              <option value={"3"}>Pagado</option>
            </Input>
          </Col>
        </Row>
        <div>
          <Button
            size="sm"
            onClick={() => {
              handleOpenNewWindowNewSchedule();
            }}
          >
            Nueva Cita
          </Button>
          <Button
            size="sm"
            color={"primary"}
            onClick={() => {
              handleOpenNewWindowListaEspera();
            }}
          >
            Lista de espera
          </Button>
          <Button
            size="sm"
            color={"success"}
            onClick={() => {
              window.location.reload();
            }}
          >
            Actualizar sitio
          </Button>
        </div>
      </div>

      <div style={{ flex: 1, justifyContent: "right", alignContent: "right", alignItems: "right", display: "flex" }}></div>
      <div style={{ height: 170, width: "100%" }}>
        <DataGrid
          rows={arregloCitaDia}
          columns={columns}
          rowHeight={28}
          columnHeaderHeight={28}
          hideFooterPagination
          hideFooter
          sx={{
            "& .MuiDataGrid-pagination": {
              display: "none",
            },
          }}
        />
      </div>
      <div style={{ marginLeft: "1%" }}>
        {state.showScheduler && (
          <Scheduler
            key={1}
            schedulerData={state.viewModel}
            prevClick={prevClick}
            nextClick={nextClick}
            onSelectDate={onSelectDate}
            onViewChange={onViewChange}
            viewEventClick={ops1}
            viewEventText="Editar cita:"
            viewEvent2Text="Cancelar cita"
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
      </div>
      <div style={{ marginBottom: "10%", marginTop: "2%", display: "flex", justifyItems: "center", alignItems: "center", flexDirection: "column" }}>
        <div style={statusBoxStyle}>
          <div style={boxStyles.noDisponible}>NO DISPONIBLE</div>
          <div style={boxStyles.requerido}>REQUERIDO</div>
          <div style={boxStyles.asignado}>ASIGNADO</div>
          <div style={boxStyles.enServicio}>EN SERVICIO</div>
          <div style={boxStyles.domicilio}>DOMICILIO</div>
          <div style={boxStyles.conflicto}>CONFLICTO</div>
        </div>
      </div>
    </>
  );
}

export default wrapperFun(Basic);
