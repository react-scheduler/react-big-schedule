import React, { useEffect, useMemo, useReducer, useState } from "react";
import * as dayjsLocale from "dayjs/locale/es-mx";
import * as antdLocale from "antd/locale/es_ES";
import { Scheduler, SchedulerData, ViewType, wrapperFun, DemoData } from "../index";
import { jezaApi } from "../api/jezaApi2";
import { peinadosApi } from "../api/peinadosApi";
// import Modal from "../components/Modal";
import { format } from "date-fns-tz";
import { isToday } from "date-fns";
import { DataGrid } from "@mui/x-data-grid";
import Timer from "../components/Timer";
import {
  Container,
  Button,
  Badge,
  Label,
  Input,
  Col,
  Row,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  InputGroup,
  ButtonGroup,
  InputGroupText,
} from "reactstrap";
import Swal from "sweetalert2";
import "../css/style.css";
import { es } from "date-fns/locale";
import { MdOutlineFolder } from "react-icons/md";
import { MaterialReactTable } from "material-react-table";
import { LocalizationProvider, DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { startOfToday, setHours, parseISO, isValid } from "date-fns";
import { useDetalleCuentaPendietes } from "../functions/crearCita/useDetalleCuentaPendietes";
import { useDetalleCitasServicios } from "../functions/crearCita/useDetalleCitasServicios";
import { useDetalleSaldosPendientes } from "../functions/crearCita/useDetalleSaldosPendientes";
import { useVentasHistoriales } from "../functions/crearCita/useVentasHistoriales";
import { usesp_ClasificacionSel } from "../functions/crearCita/useDetalleSaldosPendientes copy";
import { useCitaEmpalme } from "../functions/crearCita/useCitaEmpalme4";
import { useHorarioDisponibleEstilistas6 } from "../functions/crearCita/useHorarioDisponibleEstilistas6";
import { useVentasOperaciones } from "../functions/crearCita/useVentasOperaciones";
import { useSucursales } from "../functions/crearCita/useSucursales";
import { useNominaTrabajadores } from "../functions/crearCita/useNominaTrabajadores";
import { useDetalleCitasObservaciones } from "../functions/crearCita/useDetalleCitasObservaciones";
import { AiFillDelete, AiFillEdit, AiOutlineClose, AiOutlineSearch, AiOutlineReload } from "react-icons/ai";
import { useObservaciones } from "../functions/crearCita/useObservaciones";
import { styled } from "@mui/material/styles";
import { Box, Typography, Modal } from "@mui/material";
import Draggable from "react-draggable";
import debounce from "lodash.debounce";

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
  const [isModalActualizarOpen, setIsModalActualizarOpen] = useState(false);
  const [event, setEvent] = useState();
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [datosParametros, setDatosParametros] = useState({
    idUser: 0,
    fecha: new Date(),
    idRec: 0,
    idSuc: 0,
    idCliente: 0,
    nombreCliente: "",
    nombreEstilista: "",
  });
  const [datosParametrosCitaTemp, setDatosParametrosCitaTemp] = useState({});
  const [datosParametrosFechaCitaTemp, setDatosParametrosFechaCitaTemp] = useState({});
  const handleChangeObservaciones = (e) => {
    const debouncedOnChange = debounce(() => {
      setFormCitasObservaciones2(e.target.value);
    }, 300); // 300 milisegundos de retraso

    debouncedOnChange();
  };

  function validarContraseña() {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: "Ingrese su contraseña",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        customClass: {
          popup: "swal2-popup", // Agrega una clase personalizada al cuadro de diálogo
        },
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        showLoaderOnConfirm: true,
        preConfirm: (contraseña) => {
          // Aquí puedes agregar tu lógica de validación de contraseña
          // Por ejemplo, podrías comparar la contraseña ingresada con una contraseña almacenada o realizar una llamada a una API para verificar la contraseña
          return new Promise((resolve) => {
            setTimeout(() => {
              // Supongamos que la contraseña es "password"
              if (contraseña === "1234") {
                resolve();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Contraseña incorrecta",
                  text: "Por favor, ingrese una contraseña correcta.",
                  confirmButtonText: "Entendido",
                }).then((isConfirmed) => {
                  if (isConfirmed.isConfirmed) Swal.close();
                });
              }
            }, 2000);
          });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      })
        .then((result) => {
          if (result.isConfirmed) {
            resolve(true); // Resuelve la promesa con valor true si la contraseña es correcta
          } else {
            resolve(false); // Resuelve la promesa con valor false si el usuario cancela la entrada de contraseña
          }
        })
        .catch((error) => {
          console.error(error);
          resolve(false); // Resuelve la promesa con valor false si ocurre algún error durante la validación de la contraseña
        });
    });
  }
  const [formCitasObservaciones2, setFormCitasObservaciones2] = useState("");
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
    console.log("ESTAMOS");
    if (datosParametrosCitaTemp.no_cliente) {
      putEditarCita();
    }
  }, [datosParametrosCitaTemp]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getCitas = async (fecha) => {
    try {
      const response = await peinadosApi.get(
        `/DetalleAgendaSelv13?fecha=${format(fecha ? fecha : datosParametros.fecha, "yyyyMMdd")}&suc=1&nomberEstilista=${""}&nombreCliente=${""}`
      );
      setArregloCita(
        response.data.map((item) => {
          console.log(item);
          let hora1 = new Date(item.hora1);
          let hora2 = new Date(item.hora2);
          hora1.setFullYear(new Date(item.fecha).getFullYear(), new Date(item.fecha).getMonth(), new Date(item.fecha).getDate());
          hora2.setFullYear(new Date(item.fecha).getFullYear(), new Date(item.fecha).getMonth(), new Date(item.fecha).getDate());
          return {
            ...item,
            start: hora1.toISOString(),
            end: hora2.toISOString(),
            resourceId: item.no_estilista,
            title: "",
            type: 2,
            bgColor:
              item.estadoCita == 1
                ? "#F8C471" // Sandy Orange
                : item.esDomicilio == true
                ? "#DDA0DD" // Plum
                : item.estadoCita == 2
                ? "#AFEEEE" // Pale Turquoise
                : item.estadoCita == 3
                ? "#FFF26C" // Lemon Chiffon
                : item.estadoCita == 4
                ? "#90EE90" // Light Green
                : item.estadoCita == 5
                ? "#DDA0DD" // Plum
                : "#E0E0E0", // Light Gray
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
              ? "#F8C471" // Sandy Orange
              : item.esDomicilio == true
              ? "#DDA0DD" // Plum
              : item.estadoCita == 2
              ? "#AFEEEE" // Pale Turquoise
              : item.estadoCita == 3
              ? "#FFF26C" // Lemon Chiffon
              : item.estadoCita == 4
              ? "#90EE90" // Light Green
              : item.estadoCita == 5
              ? "#DDA0DD" // Plum
              : "#E0E0E0", // Light Gray
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
  };
  const getCitasDia = (elimina) => {
    peinadosApi
      .get(
        `/ClientesCitasDia6?suc=1&cliente=0&fecha=${format(datosParametros.fecha, "yyyyMMdd")}&tipoCita=${
          tipoCita ? tipoCita : "%"
        }&nombreEstilista=${elimina ? "" : datosParametros.nombreEstilista}&nombreCliente=${elimina ? "" : datosParametros.nombreCliente}`
      )
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
    console.log({ date });
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
      estadoCita: event.estadoCita,
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
    openModal();
    setEvent(event);
    return;
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
    if ((event.estadoCita == 2) && slotId != event.no_estilista) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Cita requerida, imposible cambiar de estilista`,
      });
      return;
    }

    const nombreAgendaNuevo = dataTrabajadores.find((item) => item.id === slotId).nombre_agenda;
    const nombreAgendaAnterior = dataTrabajadores.find((item) => item.id === event.no_estilista).nombre_agenda;

    Swal.fire({
      title: "Cambio de Cita",
      html: `
        <p>CLIENTE: Publico en General</p>
        <p>ANTERIOR:<br>Horas: ${format(new Date(event.hora1), "hh:mm a")}   Estilista: ${nombreAgendaAnterior ? nombreAgendaAnterior : ""}</p>
        <p>NUEVA:<br>Horas: ${format(new Date(start), "hh:mm a")}   Estilista: ${nombreAgendaNuevo ? nombreAgendaNuevo : ""}</p>
        <p>Quiere confirmar el cambio?</p>
      `,
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setDatosParametrosFechaCitaTemp({
          fecha: start,
          usuarioEstilista: slotId,
        });
        setDatosParametrosCitaTemp(event);
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
    // if (
    //   confirm(
    //     `Do you want to create a new event? {slotId: ${slotId}, slotName: ${slotName}, start: ${start}, end: ${end}, type: ${type}, item: ${item}}`
    //   )
    // ) {
    //   let newFreshId = 0;
    //   schedulerData.events.forEach((item) => {
    //     if (item.id >= newFreshId) newFreshId = item.id + 1;
    //   });

    //   let newEvent = {
    //     id: newFreshId,
    //     title: "New event you just created",
    //     start: start,
    //     end: end,
    //     resourceId: slotId,
    //     bgColor: "purple",
    //   };
    //   schedulerData.addEvent(newEvent);
    //   dispatch({ type: "UPDATE_SCHEDULER", payload: schedulerData });
    // }
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

  const columns = [
    { field: "id", headerName: "Clave", width: 70, align: "center", sortable: false }, // Esta es la columna del ID único
    { field: "d_stilista", headerName: "Estilista", width: 120, align: "center", sortable: false }, // Esta es la columna del ID único
    {
      field: "stao_estilista",
      headerName: "Modo",
      width: 130,
      options: {
        setCellProps: () => ({ align: "center", justifyContent: "center" }),
      },
      renderCell: (params) => (
        <p style={{ lineHeight: "28px", height: "28px", margin: 0 }}>
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
      headerName: "Hora inicio",
      width: 80,
      align: "center",
      renderCell: (params) => (
        <p style={{ textAlign: "center", lineHeight: "28px", height: "28px", margin: 0 }}>{format(new Date(params.row.hora_cita), "HH:mm")}</p>
      ),
      cellClassName: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      field: "horafinal",
      headerName: "Hora final",
      align: "center",

      type: "number",
      width: 80,
      renderCell: (params) => (
        <p style={{ textAlign: "center", lineHeight: "28px", height: "28px", margin: 0 }}>{format(new Date(params.row.horafinal), "HH:mm")}</p>
      ),
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
    {
      field: "tiempo",
      headerName: "Tiempo",
      width: 130,
      renderCell: (params) => <p style={{ textAlign: "center", lineHeight: "28px", height: "28px", margin: 0 }}>{params.row.tiempo + " min"}</p>,
    },
    {
      field: "importe",
      headerName: "Total",
      width: 130,
      renderCell: (params) => (
        <p style={{ textAlign: "center", lineHeight: "28px", height: "28px", margin: 0 }}>
          {Number(params.row.importe).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}
        </p>
      ),
    },
  ];

  const ligaPruebas = "http://localhost:5173/";
  // const ligaPruebas = "http://cbinfo.no-ip.info:9019/";
  const handleOpenNewWindow = ({ idCita, idUser, idCliente, fecha, flag }) => {
    const url = `${ligaPruebas}miliga/crearcita?idCita=${idCita}&idUser=${idUser}&idCliente=${idCliente}&fecha=${fecha}&idSuc=${1}&idRec=${1}&flag=${flag}`; // Reemplaza esto con la URL que desees abrir
    const width = 390;
    const height = 800;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowEdit = ({ idCita, idUser, idCliente, fecha, flag, estadoCita }) => {
    const url = `${ligaPruebas}miliga/editarcita?idCita=${idCita}&idUser=${idUser}&idCliente=${idCliente}&fecha=${fecha}&idSuc=${1}&idRec=${1}&flag=${flag}&estadoCita=${estadoCita}`; // Reemplaza esto con la URL que desees abrir
    const width = 1200;
    const height = 800;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},toolbar=0,location=0,menubar=0,scrollbars=1,resizable=1`;
    window.open(url, "_blank", features);
  };
  const handleOpenNewWindowNewSchedule = () => {
    const url = `${ligaPruebas}miliga/crearcita?fecha=${datosParametros.fecha}`; // Reemplaza esto con la URL que desees abrir
    const width = 450;
    const height = 800;
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
    console.log({ datosParametrosCitaTemp });
    console.log({ datosParametrosFechaCitaTemp });
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
          dia_cita: format(new Date(datosParametrosFechaCitaTemp.fecha), "yyyy-MM-dd'T'HH:mm:ss"),
          hora_cita: format(new Date(datosParametrosFechaCitaTemp.fecha), "yyyy-MM-dd'T'HH:mm:ss"),
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
          estatus: datosParametrosCitaTemp.modoCita,
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
  {
    /* item.estadoCita == 1
              ? "#F8C471" // Sandy Orange
              : item.estadoCita == 2
              ? "#AFEEEE" // Pale Turquoise
              : item.estadoCita == 3
              ? "#FFFACD" // Lemon Chiffon
              : item.estadoCita == 4
              ? "#90EE90" // Light Green
              : item.estadoCita == 5
              ? "#DDA0DD" // Plum
              : "#E0E0E0", // Light Gray */
  }
  const boxStyles = {
    noDisponible: {
      backgroundColor: "#F8C471",
      padding: "10px",
      color: "black",
    },
    requerido: {
      backgroundColor: "#AFEEEE",
      padding: "10px",
      color: "black",
    },
    asignado: {
      backgroundColor: "#FFF26C",
      padding: "10px",
      color: "black",
    },
    enServicio: {
      backgroundColor: "#90EE90",
      padding: "10px",
      color: "black",
    },
    domicilio: {
      backgroundColor: "#DDA0DD",
      padding: "10px",
      color: "black",
    },
    conflicto: {
      backgroundColor: "#E0E0E0",
      padding: "10px",
      color: "white",
    },
  };
  const editCita2 = async (eventItem) => {
    try {
      // Extraer fecha y crear una nueva fecha sin la hora
      let fechaActual = new Date(eventItem.hora1);
      let año = fechaActual.getFullYear();
      let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
      let día = fechaActual.getDate();
      let fechaSinHora = new Date(año, mes, día);

      // Validar contraseña
      const contraseñaValidada = await validarContraseña();
      if (contraseñaValidada) {
        // Realizar la solicitud PUT
        const response = await peinadosApi.put("/DetalleCitasReducido", null, {
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
        });

        // Mostrar mensaje de éxito
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
      } else {
        Swal.fire({
          title: "Contraseña incorrecta",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      // Manejo de errores
      console.error("Error al cancelar la cita:", error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al cancelar la cita. Por favor, inténtalo de nuevo.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "95%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    height: "95%",
    overflow: "auto", // Añade esta línea
  };
  const styleCrearCita = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    p: 4,
    height: "100%",
    overflow: "auto", // Añade esta línea
  };
  const styleCantidad = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "30%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    overflow: "auto", // Añade esta línea
  };
  const styleObservaciones = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [formCita, setFormCita] = useState({
    cia: 1,
    sucursal: 1,
    no_estilista: 0,
    no_cliente: 0,
    dia_cita: new Date(),
    hora_cita: new Date(),
    fecha: null,
    tiempo: 0,
    user: 1,
    importe: 0,
    cancelada: false,
    stao_estilista: 0,
    nota_canc: "nota cancelacion",
    observacion: null,
    user_uc: 1,
    estatus: 0,
    estatusAsignado: false,
    estatusRequerido: false,
    esServicioDomicilio: false,
    registrada: false,
    cumpleaños: null,
  });
  const [formCitaDescripciones, setFormCitaDescripciones] = useState({
    descripcion_no_estilista: "",
    descripcion_no_cliente: "",
    descripcion_no_cancelacio: "",
  });
  const [formVentaOperaciones, setFormVentaOperaciones] = useState({
    no_venta: 0,
    sucursal: 0,
    idCliente: 0,
  });
  const [formVentaHistoriales, setFormVentaHistoriales] = useState({
    userId: null,
    claveProd: null,
    sucursal: null,
    fechaInicio: null,
    fechaFin: null,
    idCliente: null,
    botonConsultar: false,
    claveProdDescripcion: "",
  });

  const [formVentaTemporal, setFormVentaTemporal] = useState({
    tiempo: 0,
    precioTotal: 0,
    otros: 0,
  });
  const [formCitaServicio, setFormCitaServicio] = useState({
    idCita: null,
    clave_prod: "",
    descripcion: "",
    precio: 0,
    tiempo: 0,
    cantidad: 1,
  });
  const [formPuntosObservaciones, setFormPuntosObservaciones] = useState({
    idMovto: 0,
    sucursal: 0,
    fecha_movto: null,
  });
  const [movableReactPrueba, setMovableReactPrueba] = useState(true);
  const [abierto, setAbierto] = useState(false);
  const [clientesModal, setClientesModal] = useState(false);
  const [ModalClientesPuntos, setModalClientesPuntos] = useState(false);
  const [ModalOperacionesPuntos, setModalOperacionesPuntos] = useState(false);
  const [ModalCantidad, setModalCantidad] = useState(false);
  const [ModalCrear, setModalCrear] = useState(false);
  const [ProductosModalEdicion, setProductosModalEdicion] = useState(false);
  const [modalEdicionServicios, setModalEdicionServicios] = useState(false);
  const [productosModal, setProductosModal] = useState(false);
  const [modalCitasObservaciones, setModalCitasObservaciones] = useState(false);
  const [verificarContraModal, setVerificarContraModal] = useState(false);

  const [puntosModal, setPuntosModal] = useState(false);
  const [ModalVentasHistorial, setModalVentasHistorial] = useState(false);
  const [ModalVentasOperaciones, setModalVentasOperaciones] = useState(false);
  const [ventaTemporal, setVentaTemporal] = useState([]);
  const [dataClientes, setDataClientes] = useState({});
  const [dataClientesPuntos, setDataClientesPuntos] = useState({});

  const [dataProductos, setDataProductos] = useState([]);
  const [dataOperaciones, setDataOperaciones] = useState([]);
  const [dataPuntosporCliente, setDataPuntosPorCliente] = useState({});
  const [dataEstilistaDisponibilidadHorario, setdataEstilistaDisponibilidadHorario] = useState({});
  const [dataEstilistas, setDataEstilistas] = useState([]);
  const [contraseña, setContraseña] = useState("");
  const contraseñaEstática = "1234";
  const [valido, setValido] = useState(false);
  const [totalOperacionesPuntos, settotalOperacionesPuntos] = useState(0);
  useEffect(() => {
    console.log("ESTAMOS");
    const total = dataOperaciones.reduce((a, b) => a + b.precio, 0);
    if (total <= 0) return;
    settotalOperacionesPuntos(total);
  }, [dataOperaciones]);

  const handleChange = (event) => {
    setContraseña(event.target.value);
  };
  const handleCheckboxChange = (name) => {
    setFormCita({
      ...formCita,
      estatusRequerido: name === "estatusRequerido",
      estatusAsignado: name === "estatusAsignado",
    });
  };
  const handleCheckboxChangeDomicilio = (event) => {
    const { name, checked } = event.target;
    setFormCita({
      ...formCita,
      [name]: checked,
    });
  };

  function validarContraseña() {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: "Ingrese su contraseña",
        input: "password",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        showLoaderOnConfirm: true,
        preConfirm: (contraseña) => {
          // Aquí puedes agregar tu lógica de validación de contraseña
          // Por ejemplo, podrías comparar la contraseña ingresada con una contraseña almacenada o realizar una llamada a una API para verificar la contraseña
          return new Promise((resolve) => {
            setTimeout(() => {
              // Supongamos que la contraseña es "password"
              if (contraseña === "1234") {
                resolve();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Contraseña incorrecta",
                  text: "Por favor, ingrese una contraseña correcta.",
                  confirmButtonText: "Entendido",
                }).then((isConfirmed) => {
                  if (isConfirmed.isConfirmed) Swal.close();
                });
              }
            }, 2000);
          });
        },
        allowOutsideClick: () => !Swal.isLoading(),
      })
        .then((result) => {
          if (result.isConfirmed) {
            resolve(true); // Resuelve la promesa con valor true si la contraseña es correcta
          } else {
            resolve(false); // Resuelve la promesa con valor false si el usuario cancela la entrada de contraseña
          }
        })
        .catch((error) => {
          console.error(error);
          resolve(false); // Resuelve la promesa con valor false si ocurre algún error durante la validación de la contraseña
        });
    });
  }

  const idUser = new URLSearchParams(window.location.search).get("idUser");
  const fecha = new URLSearchParams(window.location.search).get("fecha");
  const idRec = new URLSearchParams(window.location.search).get("idRec");
  const idSuc = new URLSearchParams(window.location.search).get("idSuc");
  const minDateTime = setHours(startOfToday(), 8);

  const maxDateTime = setHours(startOfToday(), 20);
  useEffect(() => {
    console.log("actualizando.........");
    setFormCita({ ...formCita, fecha: fecha, no_estilista: idUser, sucursal: idSuc });
  }, [idUser, fecha, idRec, idSuc]);

  useEffect(() => {
    console.log("ESTAMOS");
    getClientes();
    getEstilistas();
    getProductos();
    getEstilistasDisponibilidadHorario();
  }, []);

  useEffect(() => {
    console.log("actualizando.........");
    if (formCita.no_cliente == 0) return;
    getClientesePuntos();
    getOperaciones();
    getPuntos();
    fetchDetalleCitasObservaciones().then((response) => {
      if (response.data.length > 0) setModalCitasObservaciones(true);
    });
  }, [formCita.no_cliente]);
  useEffect(() => {
    console.log("ESTAMOS");
    getOperaciones();
  }, [formPuntosObservaciones]);

  const getEstilistas = () => {
    peinadosApi.get("/estilistas?id=0").then((response) => {
      setDataEstilistas(response.data);
    });
  };
  const getClientes = () => {
    peinadosApi.get("/clientes?id=0").then((response) => {
      setDataClientes(response.data);
    });
  };

  const getClientesePuntos = () => {
    peinadosApi.get(`/sp_detallePuntosSel2?id=1&noCliente=${formCita.no_cliente}`).then((response) => {
      setDataClientesPuntos(response.data);
      console.log("<");
    });
  };

  const getProductos = () => {
    peinadosApi
      .get("/sp_cPSEAC?id=0&cia=1&sucursal=2&almacen=1&marca=%&descripcion=%&verinventariable=0&esServicio=2&esInsumo=0&obsoleto=0")
      .then((response) => {
        setDataProductos(response.data);
      });
  };
  const getOperaciones = () => {
    peinadosApi
      .get(
        `/sp_detalleOperaciones7?noCliente=${formCita.no_cliente}&sucursal=${formPuntosObservaciones.sucursal}&noMovto=${formPuntosObservaciones.idMovto}`
      )
      .then((response) => {
        setDataOperaciones(response.data);
      });
  };
  const getPuntos = () => {
    peinadosApi.get(`/DetallePuntosCliente?noCliente=${formCita.no_cliente}`).then((response) => {
      setDataPuntosPorCliente(response.data);
    });
  };

  const getEstilistasDisponibilidadHorario = () => {
    peinadosApi.get("/CatEstilistasDisponiblidad?sucursal=1").then((response) => {
      setdataEstilistaDisponibilidadHorario(response.data);
    });
  };
  const { dataCitasServicios, fetchDetalleCitasServicios } = useDetalleCitasServicios({
    noCliente: formCita.no_cliente,
    sucursal: 2,
    fecha: formCita.fecha ? format(new Date(formCita.fecha), "yyyy/MM/dd") : new Date(),
    idCita: formCitaServicio.idCita,
  });
  const { dataCuentasPendientes } = useDetalleCuentaPendietes({ no_cliente: formCita.no_cliente });
  const { dataObservaciones, fetchObservaciones } = useObservaciones({ idCliente: formCita.no_cliente });
  const { dataCitasObservaciones, fetchDetalleCitasObservaciones } = useDetalleCitasObservaciones({ idCliente: formCita.no_cliente });
  const { dataClientesSaldosPendientes } = useDetalleSaldosPendientes({ no_cliente: formCita.no_cliente });
  const { dataTrabajadores } = useNominaTrabajadores();
  const { DataVentasOperaciones } = useVentasOperaciones({
    noVenta: formVentaOperaciones.no_venta,
    sucursal: formVentaOperaciones.sucursal,
    idCliente: formCita.no_cliente,
  });
  const { dataClasificacion } = usesp_ClasificacionSel({ idCliente: formCita.no_cliente });
  const { dataSucursales } = useSucursales();
  const { dataVentasHistoriales, fetchVentasHistoriales } = useVentasHistoriales({
    claveProd: formVentaHistoriales.claveProd,
    fechaFin: formVentaHistoriales.fechaFin,
    fechaInicio: formVentaHistoriales.fechaInicio,
    idCliente: formCita.no_cliente,
    sucursal: formVentaHistoriales.sucursal,
    userID: formVentaHistoriales.userId,
  });
  const { dataCitaEmpalme, fetchCitaEmpalme } = useCitaEmpalme({
    fechacita: formCita.fecha,
    no_estilista: formCita.no_estilista,
    tiempoCita: formVentaTemporal.tiempo,
  });
  const { dataHorarioDisponibleEstilistas, fetchHorarioDisponibleEstilistas } = useHorarioDisponibleEstilistas6({
    fecha: formCita.fecha,
    cveEmpleado: formCita.no_estilista,
    tiempo: formVentaTemporal.tiempo,
  });
  const [formCitasObservaciones, setFormCitasObservaciones] = useState({
    id: 0,
    observaciones: null,
  });
  const putCitasObservaciones = (estado, idCita) => {
    setModalCitasObservaciones(false);
    if (estado == 1) {
      Swal.fire({
        title: "Observaciones",
        showConfirmButton: true,
        confirmButtonText: "Ingrese la observacion para cambiarlo",
        input: "text",
        preConfirm: (observaciones) => {
          peinadosApi
            .put(
              `/sp_DetalleCitasObservacionesput?id=${idCita}&observaciones=${observaciones}
          `
            )
            .then((response) => {
              Swal.fire({
                title: "Editaro",
                icon: "success",
                text: "Observacion Editado",
              });
            });
        },
      }).then((result) => {
        // if (result.isConfirmed) {
        // }
      });
    } else {
      peinadosApi.put(`/sp_DetalleCitasObservacionesput?id=${idCita}&observaciones`).then((response) => {
        Swal.fire({
          title: "Eliminado",
          text: "Observacion escondida",
        });
      });
    }
  };
  const comparaFecha = (fecha3, rango) => {
    var fecha1 = new Date();
    var fecha2 = new Date();
    fecha2.setDate(fecha1.getDate() + rango);
    if (fecha3) fecha3.setFullYear(fecha1.getFullYear());
    if (rango == 0) fecha1.setHours(0, 0, 0, 0);
    return fecha3 >= fecha1 && fecha3 <= fecha2;
  };

  useEffect(() => {
    if (dataCuentasPendientes.length > 0) {
      setFormVentaTemporal({ ...formVentaTemporal, otros: dataCuentasPendientes[0].mensaje });
    }
    if (isNaN(formCita.cumpleaños) == false) {
      if (comparaFecha(formCita.cumpleaños, 15)) {
        Swal.fire({
          title: "Cumpleanio cerca",
          text: `Cumpleanios dentro de un intervalo de 15 dias`,
          confirmButtonText: "Entendido",
        });
      }
      if (comparaFecha(formCita.cumpleaños, 0))
        Swal.fire({
          title: "Cumpleanio es hoy",
          text: `Cumpleanios dentro de un intervalo de 0 dias, felicidades`,
          confirmButtonText: "Entendido",
        });
    }
  }, [dataCuentasPendientes]);

  useEffect(() => {
    console.log("ESTAMOS");
    if (dataClientesSaldosPendientes.length > 0 && dataClientesSaldosPendientes[0].saldo > 0) {
      Swal.fire({
        title: "Cuenta pendiente",
        text: `Cuenta pendiente por ${dataClientesSaldosPendientes[0].saldo}`,
        confirmButtonText: "Entendido",
      });
    }
  }, [dataClientesSaldosPendientes]);

  useEffect(() => {
    console.log("EJECUTANDOSE");
    const calculateTotals = () => {
      const totalPrice = dataCitasServicios.reduce((acc, service) => {
        return acc + Number(service.precio) * Number(service.cantidad);
      }, 0);

      const totalTime = dataCitasServicios.reduce((acc, service) => {
        return acc + Number(service.tiempo) * Number(service.cantidad);
      }, 0);

      return { totalPrice, totalTime };
    };

    const { totalPrice, totalTime } = calculateTotals();

    setFormVentaTemporal((prevState) => ({
      ...prevState,
      precioTotal: totalPrice,
      tiempo: totalTime,
    }));
  }, [dataCitasServicios]);

  const columnsCitasServicios = [
    {
      field: "Accion",
      headerName: "Accion",
      width: 50,
      renderCell: (cell) => (
        <>
          <AiFillDelete
            size={20}
            onClick={() => {
              setDataVentaTemporal({ ...dataVentaTemporal, id: cell.row.id });

              putDetalleCitasServiciosUpd4(
                cell.row.id,
                2,
                formCitaServicio.idCita,
                cell.row.tiempo,
                cell.row.idEstilista,
                1,
                cell.row.id_servicio,
                0,
                0,
                cell.row.precio
              );
            }}
          >
            Eliminar
          </AiFillDelete>
          <AiFillEdit
            size={20}
            onClick={() => {
              setModalEdicionServicios(true);

              setFormDetalleCitasServicios({
                ...formCitaServicio,
                cantidad: cell.row.cantidad,
                id: cell.row.id,
                idEstilista: cell.row.idEstilista,
                idServicio: cell.row.id_servicio,
                d_clave_prod: cell.row.observaciones,
                tiempo: cell.row.tiempo,
                precio: cell.row.precio,
                fecha: cell.row.fecha,
              });
            }}
          >
            Editar
          </AiFillEdit>
        </>
      ),
    },
    {
      field: "observaciones",
      headerName: "Descripción",
      width: 120,
      renderCell: (cell) => {
        // Divide el texto en dos partes por el espacio
        const [parte1, parte2] = cell.row.observaciones.split(" ");

        return (
          <div className="centered-cell" style={{ whiteSpace: "normal", lineHeight: "0.2em" }}>
            <p>{parte1}</p>
            <p>{parte2}</p>
          </div>
        );
      },
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 70,
      renderCell: (cell) => <p className="centered-cell">{cell.row.precio.toFixed(2)}</p>,
      cellClassName: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      field: "tiempo",
      headerName: "Tiempo",
      width: 70,
      renderCell: (cell) => <p className="centered-cell">{cell.row.tiempo + " Min"}</p>,
      cellClassName: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    { field: "cantidad", headerName: "Cantidad", width: 70 },
    { field: "nombre_agenda", headerName: "Nombre Estilista", width: 130 },
    {
      field: "fecha",
      headerName: "Hora cita",
      width: 130,
      renderCell: (cell) => <p className="centered-cell">{format(new Date(cell.row.fecha), "hh:mm a")}</p>,
    },
  ];

  const rows = [
    {
      id: 10,
      clave: "180",
      descripcion: "susy",
      precio: "10:00am",
      horaFinal: "12:00pm",
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    postCrearCita();
  };
  const handleClose = () => setOpen(false);
  function renderButtonClient(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setFormCita({ ...formCita, id_cliente: params.row.id, no_cliente: params.row.id });
            setFormCitaDescripciones({ ...formCita, descripcion_no_cliente: params.row.nombre });
            setClientesModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }

  const postCitaServicios = async () => {
    Swal.fire({
      title: "Confirmación de cita",
      text: "¿Desea confirmar esta cita?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        validarContraseña().then(async (contraseñaValidada) => {
          if (!contraseñaValidada) return;
          else {
            ventaTemporal.forEach(async (elemento) => {
              await peinadosApi
                .post("DetalleCitasServicios", null, {
                  params: {
                    id_cita: formCitaServicio.idCita,
                    id_servicio: elemento.clave,
                    cantidad: elemento.cantidad,
                    tiempo: elemento.tiempo,
                    precio: elemento.precio,
                    observaciones: "0",
                    usuarioAlta: 0,
                    usuarioCambio: 0,
                    sucursal: 1,
                    fecha: new Date(),
                    idCliente: formCita.no_cliente,
                    fechaCita: new Date(formCita.fecha),
                    idEstilista: formCita.no_estilista,
                  },
                })
                .then((response) => {
                  Swal.fire({
                    icon: "success",
                    text: "Registro Realizado con éxito, deasea añadir otro servicio con otro estilista?",
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si",
                    cancelButtonText: "No",
                    showCancelButton: true,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setVentaTemporal([]);
                    } else {
                      window.close();
                    }
                  });
                })
                .catch((error) => {
                  Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `Favor de contactase cons sistemas ${error}`,
                    confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
                  });
                });
            });
          }
        });
      }
    });
  };
  const postCrearCita = async () => {
    if (formCitaServicio.idCita) {
      setProductosModal(true);
      return;
    }

    let fechaActual = new Date(formCita.fecha);
    // Extrae el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
    let día = fechaActual.getDate();
    let fechaSinHora = new Date(año, mes, día);
    let entradaSucursal = dataEstilistaDisponibilidadHorario[0].hora_entrada;
    let salidaSucursal = dataEstilistaDisponibilidadHorario[0].hora_salida;

    let horaEntrada = new Date(entradaSucursal).getHours();
    let minutoEntrada = new Date(entradaSucursal).getMinutes();
    let horaSalida = new Date(salidaSucursal).getHours();
    let minutoSalida = new Date(salidaSucursal).getMinutes();

    // Obtener la hora y minutos de la cita a verificar
    let horaCita = new Date(formCita.fecha).getHours();
    let minutoCita = new Date(formCita.fecha).getMinutes();

    // Convertir todo a minutos desde medianoche para facilitar la comparación
    let minutosDesdeMedianocheEntrada = horaEntrada * 60 + minutoEntrada;
    let minutosDesdeMedianocheSalida = horaSalida * 60 + minutoSalida;
    let minutosDesdeMedianocheCita = horaCita * 60 + minutoCita;

    let esValida = minutosDesdeMedianocheCita >= minutosDesdeMedianocheEntrada && minutosDesdeMedianocheCita <= minutosDesdeMedianocheSalida;

    if (new Date(formCita.fecha) < new Date()) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Imposible agregar una cita en el pasado ${formCita.fecha}`,
        confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
      });
      return;
    }
    if (
      formCita.no_estilista == 0 ||
      !formCita.no_estilista ||
      formCita.no_cliente == 0 ||
      (formCita.estatusAsignado == false && formCita.estatusRequerido == false)
    ) {
      console.log("errror");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Faltan por ingresar datos favor de verificar ${
          formCita.estatusAsignado + "" + formCita.estatusRequerido + "" + formCita.esServicioDomicilio
        } `,
        confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
      });
    } else {
      await fetchCitaEmpalme().then(async (res) => {
        if (res && res.data[0].id > 0) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `El estilista no tiene horario disponible, empalme`,
          });
          return;
        } else {
          await fetchHorarioDisponibleEstilistas().then((res) => {
            if (res) {
              console.log(res.data[0].clave_empleado);
              if (res.data[0].clave_empleado == "Cita sin restricciones") {
                console.log(0);
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: `El estilista no tiene horario disponible`,
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Quiere continuar?",
                  showConfirmButton: true,
                  showCancelButton: true,
                }).then((isConfirmed) => {
                  if (!isConfirmed.isConfirmed) return;
                  else {
                  }
                });
              }
            }
          });
        }
      });

      if (esValida === false) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "La hora de la cita está fuera del horario de esta sucursal, ¿desea asignar la cita?",
          confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
          showCancelButton: true,
        }).then(async (result) => {
          if (result.isConfirmed) {
            // Si el usuario confirma, mostrar el modal de verificación de contraseña
            validarContraseña().then(async (contraseñaValidada) => {
              if (contraseñaValidada) {
                try {
                  const response = await peinadosApi.post("/DetalleCitas", null, {
                    params: {
                      cia: 1,
                      sucursal: 1,
                      no_estilista: formCita.no_estilista,
                      no_cliente: formCita.no_cliente,
                      dia_cita: new Date(formCita.fecha),
                      hora_cita: new Date(formCita.fecha),
                      fecha: fechaSinHora,
                      tiempo: 0,
                      user: formCita.no_estilista,
                      importe: 0,
                      cancelada: false,
                      stao_estilista: 1,
                      nota_canc: 0,
                      registrada: true,
                      observacion: formCitasObservaciones2,
                      user_uc: 0,
                      estatus: formCita.estatusAsignado ? 3 : formCita.estatusRequerido ? 2 : 1,
                      servDomicilio: formCita.esServicioDomicilio == false ? 0 : 1,
                    },
                  });
                  setProductosModal(true);
                  setFormCitaServicio({ ...formCitaServicio, idCita: response.data.mensaje2 });
                  setOpen(true);
                  setAgregarServicios(true);

                  return response.data.mensaje2;
                } catch (error) {
                  alert(`Hubo un error, ${error}`);
                }
              } else {
                // La contraseña no es válida, puedes mostrar un mensaje o realizar alguna otra acción
              }
            });

            // validarContraseña();
          } else {
            // Si el usuario cancela, no hacer nada adicional
            return;
          }
        });
      } else {
        try {
          const response = await peinadosApi.post("/DetalleCitas", null, {
            params: {
              cia: 1,
              sucursal: 1,
              no_estilista: formCita.no_estilista,
              no_cliente: formCita.no_cliente,
              dia_cita: formCita.fecha,
              hora_cita: formCita.fecha,
              fecha: fechaSinHora,
              tiempo: 0,
              user: formCita.no_estilista,
              importe: 0,
              cancelada: false,
              stao_estilista: 1,
              nota_canc: 0,
              registrada: true,
              observacion: formCitasObservaciones2,
              user_uc: 0,
              estatus: formCita.estatusAsignado ? 3 : formCita.estatusRequerido ? 2 : 1,
              servDomicilio: formCita.esServicioDomicilio == false ? 0 : 1,
            },
          });
          setProductosModal(true);
          setFormCitaServicio({ ...formCitaServicio, idCita: response.data.mensaje2 });
          setOpen(true);
          setAgregarServicios(true);
          Swal.fire({
            icon: "success",
            text: "Registro creado con éxito",
            confirmButtonColor: "#3085d6",
          });
          return response.data.mensaje2;
        } catch (error) {
          alert(`Hubo un error, ${error}`);
        }
      }
    }
  };

  const formatFecha = (fechaCompleta1) => {
    try {
      const fecha = parseISO(fechaCompleta1);
      if (isValid(fecha)) {
        return format(fecha, "dd/MM");
      }
      return "Fecha inválida";
    } catch (error) {
      console.error("Error al formatear la fecha:", error);
      return "Error";
    }
  };
  const columnsClientes2 = useMemo(() => [
    {
      accessorKey: "acciones",
      header: "Acción",
      size: 100,
      Cell: ({ cell }) => (
        <div>
          <Button
            variant={"contained"}
            onClick={() => {
              setFormCita({
                ...formCita,
                id_cliente: cell.row.original.id,
                no_cliente: cell.row.original.id,
                cumpleaños: new Date(cell.row.original.cumpleaños),
                cve_cliente: cell.row.original.no_cliente,
              });
              setFormCitaDescripciones({ ...formCita, descripcion_no_cliente: cell.row.original.nombre });
              setClientesModal(false);
            }}
          >
            Agregar
          </Button>
        </div>
      ),
    },
    {
      accessorKey: "nombre",
      header: "Nombre",
      size: 100,
    },
    // {
    //   accessorKey: "ap_paterno",
    //   header: "Apellido Paterno",
    //   size: 100,
    // },
    // {
    //   accessorKey: "ap_materno",
    //   header: "Apellido Materno",
    //   size: 100,
    // },

    {
      accessorKey: "telefono",
      header: "Telefono",
      size: 100,
    },
    {
      accessorKey: "cumpleaños",
      header: "Cumpleaños",
      size: 100,
      Cell: ({ cell }) => {
        const fechaCompleta1 = cell.row.original.cumpleaños;
        const fechaFormateada1 = fechaCompleta1 ? formatFecha(fechaCompleta1) : "";

        return <span>{fechaFormateada1}</span>;
      },
    },
  ]);

  const columnsProductosMRT = useMemo(() => [
    {
      accessorKey: "acciones",
      header: "Acción",
      size: 100,
      Cell: ({ cell }) => (
        <div>
          <Button
            variant={"contained"}
            onClick={() => {
              if (ventaTemporal.find((x) => x.clave === cell.row.original.id)) {
                setProductosModal(false);
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: `El producto ya fue agregado`,
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Entendido",
                });
                return;
              }
              if (formVentaHistoriales.botonConsultar) {
                setFormVentaHistoriales({ claveProd: cell.row.original.id, claveProdDescripcion: cell.row.original.descripcion });
              } else {
                setDataVentaTemporal({
                  clave: cell.row.original.id,
                  clave_prod: cell.row.original.clave_prod,
                  descripcion: cell.row.original.descripcion,
                  precio: cell.row.original.precio_lista,
                  tiempo: cell.row.original.tiempox,
                });
                postCitasServicios(cell.row.original.id, cell.row.original.tiempox, cell.row.original.precio);
                setProductosModal(false);
              }
            }}
          >
            Agregar
          </Button>
        </div>
      ),
    },
    {
      accessorKey: "clave_prod",
      header: "Clave_prod",
      size: 100,
    },
    {
      accessorKey: "descripcion",
      header: "Descripcion",
      size: 100,
    },
    {
      accessorKey: "tiempox",
      header: "Tiempo",
      size: 100,
      Cell: ({ cell }) => <p className="centered-cell">{cell.row.original.tiempox + " min"}</p>,
      className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      accessorKey: "precio",
      header: "Precio",
      size: 100,
      Cell: ({ cell }) => (
        <p className="centered-cell">{Number(cell.row.original.precio).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
      ),
      className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    // {
    //   accessorKey: "precioPromocion",
    //   header: "Precio",
    //   size: 100,
    //   Cell: ({ cell }) => (
    //     <p className="centered-cell">{Number(cell.row.original.precioPromocion).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
    //   ),
    //   className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    // },
  ]);

  const columnsProductosMRTEdicion = useMemo(() => [
    {
      accessorKey: "acciones",
      header: "Acción",
      size: 100,
      Cell: ({ cell }) => (
        <div>
          <Button
            variant={"contained"}
            onClick={() => {
              if (ventaTemporal.find((x) => x.clave === cell.row.original.id)) {
                setProductosModal(false);
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: `El producto ya fue agregado`,
                  confirmButtonColor: "#3085d6",
                  confirmButtonText: "Entendido",
                });
                return;
              }
              if (formVentaHistoriales.botonConsultar) {
                setFormVentaHistoriales({ claveProd: cell.row.original.id, claveProdDescripcion: cell.row.original.descripcion });
              } else {
                setFormDetalleCitasServicios({
                  ...formDetalleCitasServicios,
                  idServicio: cell.row.original.id,
                  d_clave_prod: cell.row.original.descripcion,
                  tiempo: cell.row.original.tiempox,
                  precio: cell.row.original.precio,
                  fecha: cell.row.fecha,
                });
                setProductosModalEdicion(false);
              }
            }}
          >
            Agregar
          </Button>
        </div>
      ),
    },
    {
      accessorKey: "clave_prod",
      header: "Clave_prod",
      size: 100,
    },
    {
      accessorKey: "descripcion",
      header: "Descripcion",
      size: 100,
    },
    {
      accessorKey: "tiempox",
      header: "Tiempo",
      size: 100,
      Cell: ({ cell }) => <p className="centered-cell">{cell.row.original.tiempox + " min"}</p>,
      className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      accessorKey: "precio",
      header: "Precio",
      size: 100,
      Cell: ({ cell }) => (
        <p className="centered-cell">{Number(cell.row.original.precio).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
      ),
      className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
    {
      accessorKey: "precioPromocion",
      header: "Precio",
      size: 100,
      Cell: ({ cell }) => (
        <p className="centered-cell">{Number(cell.row.original.precioPromocion).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
      ),
      className: "centered-cell", // Agrega esta línea para aplicar la clase CSS
    },
  ]);

  const columnsProductos = [
    { field: "x", headerName: "Seleccion", renderCell: renderButtonProduct, width: 130 },
    { field: "clave_prod", headerName: "Clave prod", width: 130 },
    { field: "descripcion", headerName: "Descripción", width: 250 },
    { field: "precio_lista", headerName: "Precio", width: 130, renderCell: (params) => <p>{params.row.precio_lista.toFixed(2)}</p> },
    { field: "tiempox", headerName: "Tiempo", width: 130, renderCell: (params) => <p>{params.row.tiempox + " Min"}</p> },
  ];
  const columnsDataVentasHistoriales = [
    { field: "x", headerName: "Seleccion", renderCell: renderButtonVentaHistorial, width: 130 },
    { field: "sucursal", headerName: "Sucursal", width: 130 },
    { field: "fecha", headerName: "Fecha", width: 250 },
    { field: "no_venta2", headerName: "No_venta2", width: 130 },
    { field: "no_venta", headerName: "No_venta", width: 130 },
  ];
  const columnsDataVentasOperaciones = [
    // { field: "x", headerName: "Seleccion", renderCell: renderButtonProduct, width: 130 },
    { field: "nombre", headerName: "Nombre estilista", width: 130 },
    { field: "descripcion", headerName: "Producto", width: 250 },
    { field: "cant_producto", headerName: "Cantidad", width: 250 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "precio", headerName: "Importe", width: 130 },
  ];

  const columnsPuntos = [
    {
      field: "x",
      headerName: "Seleccion",
      renderCell: (params) => (
        <MdOutlineFolder
          size={20}
          onClick={() => {
            setFormPuntosObservaciones({
              idMovto: params.row.folio_movto,
              sucursal: params.row.sucursal,
              fecha: params.row.fecha_movto,
            });
            setModalOperacionesPuntos(true);
          }}
        />
      ),
    },
    { field: "sucursal", headerName: "Sucursal", width: 90 },
    {
      field: "fecha_movto",
      headerName: "Fecha",
      width: 130,
      renderCell: (params) => <p className="centered-cell">{format(new Date(params.row.fecha_movto), "dd/MM/yyyy")}</p>,
    },
    { field: "id", headerName: "folio", width: 90 },
    { field: "puntos", headerName: "Puntos", width: 90 },
    { field: "observaciones", headerName: "Observaciones", width: 270 },
  ];
  const columnsObservaciones = [
    {
      field: "1",
      headerName: "Actualizar",
      width: 80,
      renderCell: (params) => (
        <div>
          <AiFillDelete onClick={() => deleteObservaciones(params.row.id)} size={20} />
          <AiFillEdit
            size={20}
            onClick={() =>
              putObservaciones(
                params.row.id,
                params.row.id_cliente,
                params.row.fecha,
                params.row.observaciones,
                params.row.usr_registro,
                params.row.act_sucursal,
                params.row.visualizar,
                params.row.sucursal
              )
            }
          />
        </div>
      ),
    },
    {
      field: "fecha",
      headerName: "Fecha",
      width: 90,
      renderCell: (params) => <p className="centered-cell">{format(new Date(params.row.fecha), "dd/MM/yyyy")}</p>,
    },
    { field: "observaciones", headerName: "Observaciones", width: 270 },
  ];
  const columnsConultaPuntos = [
    { field: "estilista", headerName: "Estilista", width: 250 },

    { field: "descripcion", headerName: "Producto", width: 250 },
    { field: "cant_producto", headerName: "Cantidad", width: 90 },
    { field: "precio", headerName: "Precio", width: 90 },
    {
      field: "importe",
      headerName: "Importe",
      width: 90,
      renderCell: (params) => (
        <p className="centered-cell">
          {Number(params.row.precio * params.row.cant_producto).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}
        </p>
      ),
    },
  ];

  const [dataVentaTemporal, setDataVentaTemporal] = useState({});
  function renderButtonProduct(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            const newId = ventaTemporal.length > 0 ? ventaTemporal[ventaTemporal.length - 1].id + 1 : 0;
            setDataVentaTemporal({
              clave: params.row.id,
              descripcion: params.row.descripcion,
              precio: params.row.precio_lista,
              tiempo: params.row.tiempox,
            });
            // setModalCantidad(true);
            postCitasServicios(params.row.id, params.row.tiempox, params.row.precio);

            setProductosModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  function renderButtonVentaHistorial(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setFormVentaOperaciones({
              ...formVentaOperaciones,
              no_venta: params.row.no_venta,
              sucursal: params.row.sucursal,
              fecha: params.row.fecha,
            });
            setModalVentasHistorial(false);
            setModalVentasOperaciones(true);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  const [formDetalleCitasServicios, setFormDetalleCitasServicios] = useState({
    cantidad: null,
    id: null,
    idEstilista: null,
    idServicio: null,
    d_clave_prod: null,
    tiempo: null,
    fecha: null,
  });
  const putDetalleCitasServiciosUpd4 = (id, sucursal, idCita, tiempo, idEstilista, mostrar, idServicio, usuario, cantidad, precio, fechaCita) => {
    peinadosApi
      .put(`/sp_DetalleCitasServiciosUpd6`, null, {
        params: {
          id: id,
          sucursal: sucursal,
          idCita: idCita,
          tiempo: tiempo,
          idEstilista: idEstilista,
          mostrar: mostrar,
          idServicio: idServicio,
          usuario: usuario,
          cantidad: cantidad,
          precio: precio,
          fechaCita: fechaCita,
        },
      })
      .then((response) => {
        fetchDetalleCitasServicios();
        Swal.fire({
          icon: "success",
          text: "Registro Realizado ",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
        setModalEdicionServicios(false);
      });
  };

  const putObservaciones = (id, id_cliente, fecha, observaciones, usr_registro, act_sucursal, visualizar, sucursal) => {
    peinadosApi
      .put(`/sp_catObsClintesUpd`, null, {
        params: {
          id: id,
          id_cliente: id_cliente,
          fecha: fecha,
          observaciones: observaciones,
          usr_registro: usr_registro,
          act_sucursal: act_sucursal,
          visualizar: visualizar,
          sucursal: id,
        },
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          text: "Registro Realizado ",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
        fetchObservaciones();
        setModalCitasObservaciones(false);
      });
  };
  const deleteObservaciones = (id) => {
    peinadosApi.delete(`/sp_catObsClintesDel?id=${id}`).then((response) => {
      Swal.fire({
        icon: "success",
        text: "Registro Realizado ",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
      });
      fetchObservaciones();
      setModalCitasObservaciones(false);
    });
  };
  const putCitasServiciosTerminado = () => {
    setModalCrear(false);
    Swal.fire({
      title: "Confirmación de cita",
      text: "¿Desea confirmar esta cita?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        validarContraseña().then(async (contraseñaValidada) => {
          if (!contraseñaValidada) return;
          else {
            await peinadosApi
              .put(`/sp_detalleCitasServiciosTerminado2`, null, {
                params: {
                  idCita: formCitaServicio.idCita,
                },
              })
              .then((response) => {
                Swal.fire({
                  icon: "success",
                  text: "Registro Realizado con éxito, ",
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Cerrar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.close();
                  } else {
                    window.close();
                  }
                });
              })
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: `Favor de contactase cons sistemas ${error}`,
                  confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
                });
              });
          }
        });
      }
    });

    // await fetchCitaEmpalme().then(async (res) => {
    //   if (res && res.data[0].id > 0) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Error",
    //       text: `El estilista no tiene horario disponible, empalme`,
    //     });
    //     return;
    //   } else {
    //     await fetchHorarioDisponibleEstilistas().then((res) => {
    //       if (res) {
    //         console.log(res.data[0].clave_empleado);
    //         if (res.data[0].clave_empleado == "Cita sin restricciones") {
    //           console.log(0);
    //         } else {
    //           Swal.fire({
    //             icon: "error",
    //             title: "Error",
    //             text: `El estilista no tiene horario disponible`,
    //             confirmButtonColor: "#3085d6",
    //             confirmButtonText: "Quiere continuar?",
    //             showConfirmButton: true,
    //             showCancelButton: true,
    //           }).then((isConfirmed) => {
    //             if (!isConfirmed.isConfirmed) return;
    //             else {

    //             }
    //           });
    //         }
    //       }
    //     });
    //   }
    // });
  };
  const [agregarServicios, setAgregarServicios] = useState(false);
  // const postCitasServicios = (clave, tiempo, precio) => {
  //   verificarDisponibilidad().then(async () => {
  //     peinadosApi
  //       .post(`/sp_detalleCitasServiciosAdd6`, null, {
  //         params: {
  //           id_Cita: formCitaServicio.idCita,
  //           id_servicio: clave,
  //           cantidad: formCitaServicio.cantidad ? formCitaServicio.cantidad : 1,
  //           tiempo: tiempo,
  //           precio: precio,
  //           observaciones: formCita.observacion,
  //           usuarioAlta: formCita.no_estilista,
  //           usuarioCambio: formCita.no_estilista,
  //           sucursal: 2,
  //           fecha: new Date(),
  //           idCliente: formCita.no_cliente,
  //           idEstilista: formCita.no_estilista,
  //           fechaCita: formCita.fecha,
  //         },
  //       })
  //       .then((response) => {
  //         fetchDetalleCitasServicios();
  //       });

  //     // if (res && res.data[0].id > 0) {
  //     //   Swal.fire({
  //     //     icon: "error",
  //     //     title: "Error",
  //     //     text: `El estilista no tiene horario disponible, empalme`,
  //     //   });
  //     //   return;
  //     // }

  //     // if (resHorario) {
  //     //   console.log(resHorario);
  //     //   if (resHorario.data[0].clave_empleado == "Cita sin restricciones") {
  //     //     console.log(0);
  //     //   } else {
  //     //     Swal.fire({
  //     //       icon: "error",
  //     //       title: "Error",
  //     //       text: `El estilista no tiene horario disponible`,
  //     //       confirmButtonColor: "#3085d6",
  //     //       confirmButtonText: "Quiere continuar?",
  //     //       showConfirmButton: true,
  //     //       showCancelButton: true,
  //     //     }).then((isConfirmed) => {
  //     //       if (!isConfirmed.isConfirmed) return;
  //     //       else {
  //     //         // Aquí puedes agregar el código que se ejecutará si el usuario confirma
  //     //       }
  //     //     });
  //     //   }
  //     // }
  //   });
  // };
  const postCitasServicios = (clave, tiempo, precio) => {
    verificarDisponibilidad().then((isVerified) => {
      if (isVerified) {
        peinadosApi
          .post(`/sp_detalleCitasServiciosAdd7`, null, {
            params: {
              id_Cita: formCitaServicio.idCita,
              id_servicio: clave,
              cantidad: formCitaServicio.cantidad ? formCitaServicio.cantidad : 1,
              tiempo: tiempo,
              precio: precio,
              observaciones: formCitasObservaciones2 ? formCitasObservaciones2 : "",
              usuarioAlta: formCita.no_estilista,
              usuarioCambio: formCita.no_estilista,
              sucursal: 2,
              fecha: new Date(),
              idCliente: formCita.no_cliente,
              idEstilista: formCita.no_estilista,
              fechaCita: formCita.fecha,
              esDomicilio: formCita.esServicioDomicilio == false ? 0 : 1,
              estatusCita: formCita.estatusAsignado ? 3 : formCita.estatusRequerido ? 2 : 1,
            },
          })
          .then((response) => {
            fetchDetalleCitasServicios();
          });
      }
    });
  };
  const handleChangeFecha = (type, value) => {
    let newDateTime;
    if (type === "fecha") {
      onSelectDate(state.viewModel, format(value, "yyyy-MM-dd"));
      newDateTime = value ? new Date(value) : null;
      if (datosParametros.fecha) {
        const time = new Date(datosParametros.fecha).toTimeString().split(" ")[0];
        newDateTime = new Date(`${value.toDateString()} ${time}`);
      }
    } else {
      newDateTime = datosParametros.fecha ? new Date(datosParametros.fecha) : new Date();
      newDateTime.setHours(value.getHours());
      newDateTime.setMinutes(value.getMinutes());
      console.log(newDateTime);
    }
    setFormCita({ ...formCita, fecha: newDateTime });
  };
  const handleChangeFechaServicio = (type, value) => {
    let newDateTime;
    if (type === "fecha") {
      onSelectDate(state.viewModel, format(value, "yyyy-MM-dd"));
      newDateTime = value ? new Date(value) : null;
      if (formDetalleCitasServicios.fecha) {
        const time = new Date(formDetalleCitasServicios.fecha).toTimeString().split(" ")[0];
        newDateTime = new Date(`${value.toDateString()} ${time}`);
      }
    } else {
      newDateTime = formDetalleCitasServicios.fecha ? new Date(formDetalleCitasServicios.fecha) : new Date();
      newDateTime.setHours(value.getHours());
      newDateTime.setMinutes(value.getMinutes());
      console.log(newDateTime);
    }
    setFormDetalleCitasServicios({ ...formDetalleCitasServicios, fecha: newDateTime });
  };
  // async function verificarDisponibilidad() {
  //   const res = await fetchCitaEmpalme();
  //   const resHorario = await fetchHorarioDisponibleEstilistas();

  //   if (res && res.data[0].id > 0) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: `El estilista no tiene horario disponible, empalme`,
  //     });
  //     return;
  //   } else {
  //     if (resHorario) {
  //       console.log(resHorario);
  //       if (resHorario.data[0].clave_empleado == "Cita sin restricciones") {
  //         console.log(0);
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Error",
  //           text: `El estilista no tiene horario disponible`,
  //           confirmButtonColor: "#3085d6",
  //           confirmButtonText: "Quiere continuar?",
  //           showConfirmButton: true,
  //           showCancelButton: true,
  //         }).then((isConfirmed) => {
  //           if (!isConfirmed.isConfirmed) return;
  //           else {
  //             // Aquí puedes agregar el código que se ejecutará si el usuario confirma
  //           }
  //         });
  //       }
  //     }
  //   }
  //   return { res, resHorario };
  // }

  async function verificarDisponibilidad() {
    const res = await fetchCitaEmpalme();
    const resHorario = await fetchHorarioDisponibleEstilistas();

    if (res && res.data[0].id > 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `El estilista no tiene horario disponible, empalme`,
      });
      return false;
    } else {
      if (resHorario) {
        console.log(resHorario);
        if (resHorario.data[0].clave_empleado == "Cita sin restricciones" || resHorario.data[0].clave_empleado == "Prosiga") {
          console.log(0);
        } else {
          const isConfirmed = await Swal.fire({
            icon: "error",
            title: "Error",
            text: `El estilista no tiene horario disponible`,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Quiere continuar?",
            showConfirmButton: true,
            showCancelButton: true,
          });
          if (!isConfirmed.isConfirmed) return false;
        }
      }
    }
    return true;
  }

  return (
    <>
      <div className="contenedor-principal">
        <div>
          <Timer />
        </div>
        <Row>
          <Col>
            <InputGroup style={{ marginBottom: "5px" }}>
              <Label style={{ fontSize: "0.8rem" }}>Tipo de cita:</Label>
              <Input style={{ fontSize: "0.8rem" }} type="select" size={"sm"} value={tipoCita} onChange={(e) => setTipoCita(e.target.value)}>
                <option value={"%"}>Todos</option>
                <option value={"1"}>Cita</option>
                <option value={"2"}>Servicio</option>
                <option value={"3"}>Pagado</option>
              </Input>
            </InputGroup>
            <div>
              <InputGroup style={{ marginBottom: "5px" }}>
                <Label style={{ fontSize: "0.8rem" }}>Nombre cliente:</Label>
                <Input
                  style={{ fontSize: "0.8rem" }}
                  onChange={(v) => setDatosParametros({ ...datosParametros, nombreCliente: v.target.value })}
                  size={"sm"}
                  value={datosParametros.nombreCliente}
                ></Input>
              </InputGroup>
              <InputGroup style={{ marginBottom: "5px" }}>
                <Label style={{ fontSize: "0.8rem" }}>Nombre estilista:</Label>
                <Input
                  style={{ fontSize: "0.8rem" }}
                  onChange={(v) => setDatosParametros({ ...datosParametros, nombreEstilista: v.target.value })}
                  size={"sm"}
                  value={datosParametros.nombreEstilista}
                ></Input>
                <Button color="primary" size="sm">
                  <AiOutlineSearch size={19} onClick={() => getCitasDia()} />
                </Button>
                <Button color="secondary" size="sm">
                  <AiOutlineReload
                    size={19}
                    onClick={() => {
                      setDatosParametros({ ...datosParametros, nombreCliente: "", nombreEstilista: "" });
                      getCitasDia(1);
                    }}
                  />
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <h2 style={{ marginRight: "10px", backgroundColor: "#ffccfc", padding: "5px" }}>{isToday(datosParametros.fecha) ? "Hoy  " : ""}</h2>
            <h2 style={{ backgroundColor: "#ffccfc", padding: "5px" }}>Fecha: {datosParametros.fecha.toLocaleDateString()}</h2>
          </div>
          <h5 style={{ marginTop: "0", backgroundColor: "#ffccfc", padding: "5px" }}>
            {format(new Date(datosParametros.fecha), "EEEE", { locale: es })}
          </h5>
        </div>

        <div>
          <div></div>
          <Button
            size="sm"
            onClick={() => {
              setModalCrear(true);
              return;
              handleOpenNewWindowNewSchedule();
              setIsModalActualizarOpen(true);
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
      <div style={{ height: "2%", display: "table", tableLayout: "fixed", width: "100%" }}>
        <DataGrid
          rows={arregloCitaDia}
          columns={columns}
          getRowId={(row) => row.id + row.importe + row.tiempo + row.descripcion}
          rowHeight={28}
          columnHeaderHeight={28}
          initialState={{ pagination: { paginationModel: { pageSize: 3 } } }}
          sx={{
            "& .MuiDataGrid-pagination": {
              height: "10px",
            },
          }}
        />
      </div>
      <div style={{ marginLeft: "0%" }}>
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
            viewEvent2Text="Seleccionar opciones"
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
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              ×
            </button>
            <h2>Seleccione la accion</h2>
            <Button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                putDetalleCitasServiciosUpd4(0, event.sucursal, event.idCita, 0, event.no_estilista, 0, 0, 1, 0, 0, new Date());
              }}
            >
              Cancelar cita
            </Button>
            <Button style={{ marginBottom: "10px" }}> Liberar cita </Button>
            <Button style={{ marginBottom: "10px" }}> Alta de servicio </Button>
            <Button
              onClick={() => {
                handleOpenNewWindowEdit({
                  idCita: event.idCita,
                  idUser: event.no_estilista,
                  idCliente: event.no_cliente,
                  fecha: event.hora1,
                  flag: 1,
                  estadoCita: event.estadoCita,
                });
              }}
              style={{ marginBottom: "10px" }}
            >
              {" "}
              Cambio modo de cita{" "}
            </Button>
          </div>
        </div>
      )}
      {isModalActualizarOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={setIsModalActualizarOpen(false)}>
              ×
            </button>
            <br />
            <Button
              style={{ marginBottom: "10px" }}
              onClick={() => {
                window.location.reload();
              }}
            >
              Actualizar agenda
            </Button>
          </div>
        </div>
      )}

      <Modal open={clientesModal} onClose={() => setClientesModal(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setClientesModal(false)} />
          </div>
          <Typography variant="h4">Seleccionar cliente</Typography>
          <MaterialReactTable
            columns={columnsClientes2}
            data={dataClientes}
            initialState={{ density: "compact" }}
            muiTableContainerProps={{ sx: { maxHeight: "250px", overflow: "auto" } }}
          />
        </Box>
      </Modal>
      <Modal open={productosModal} onClose={() => setProductosModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          {/* <DataGrid rows={dataProductos} columns={columnsProductos} /> */}
          {dataProductos ? (
            <MaterialReactTable
              columns={columnsProductosMRT}
              data={dataProductos}
              initialState={{ density: "compact" }}
              muiTableContainerProps={{ sx: { maxHeight: "330px" } }}
            />
          ) : null}
        </Box>
      </Modal>
      <Modal open={modalCitasObservaciones} onClose={() => setModalCitasObservaciones(false)}>
        <Box sx={styleObservaciones}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setModalCitasObservaciones(false)} />
          </div>
          <Typography variant="h4">Observaciones del catalogo</Typography>
          <DataGrid
            autoHeight
            rows={dataObservaciones}
            columns={columnsObservaciones}
            pageSize={3} // Número de filas por página
            rowsPerPageOptions={[3]} // Opciones de filas por página en el dropdown
            pagination
          ></DataGrid>
        </Box>
      </Modal>

      <Modal open={ModalClientesPuntos} onClose={() => setModalClientesPuntos(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setModalClientesPuntos(false)} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Historial de puntos</Typography>
            <h5> Total de puntos: {dataPuntosporCliente[0]?.puntosTotal}</h5>
          </div>
          <hr />
          <Label>Cliente:</Label>
          <Input disabled value={formCitaDescripciones.descripcion_no_cliente}></Input>
          <DataGrid autoHeight rows={dataClientesPuntos} columns={columnsPuntos} />
        </Box>
      </Modal>

      <Modal open={ModalOperacionesPuntos} onClose={() => setModalOperacionesPuntos(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setModalOperacionesPuntos(false)} />
          </div>
          <Typography variant="h4">Consulta de operaciones</Typography>
          <Label>Cliente:</Label>
          <Input style={{ marginBottom: "10px" }} disabled value={formCitaDescripciones.descripcion_no_cliente}></Input>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Label>Suc: {formPuntosObservaciones.sucursal ? formPuntosObservaciones.sucursal : ""}</Label>
            <Label>Fecha: {formPuntosObservaciones.fecha ? format(new Date(formPuntosObservaciones.fecha), "dd/MM/yyyy") : ""} </Label>
            <Label>Hora: {formPuntosObservaciones.fecha ? format(new Date(formPuntosObservaciones.fecha), "HH:mm") : ""}</Label>
          </div>
          <DataGrid autoHeight rows={dataOperaciones} columns={columnsConultaPuntos} />

          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={() => {
                setModalOperacionesPuntos(false);
              }}
            >
              Salir
            </Button>
            <div>
              <Label>Total: </Label>
              <Input value={totalOperacionesPuntos} disabled></Input>
            </div>
          </div>
        </Box>
      </Modal>

      {/* <Modal open={productosModal} onClose={() => setProductosModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          <DataGrid rows={dataProductos} columns={columnsProductos} />
        </Box>
      </Modal> */}

      <Modal open={verificarContraModal} onClose={() => setVerificarContraModal(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setVerificarContraModal(false)} />
          </div>
          <Label>Ingrese su contraseña</Label>
          <Input onChange={handleChange} type="password"></Input>
          <Button onClick={validarContraseña}>Guardar</Button>
        </Box>
      </Modal>

      <Modal open={puntosModal} onClose={() => setPuntosModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          <DataGrid rows={dataClientesPuntos} columns={columnsProductos} />
        </Box>
      </Modal>

      <Modal open={ModalVentasHistorial} onClose={() => setModalVentasHistorial(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setModalVentasHistorial(false)} />
          </div>
          <Typography variant="h4">Historial de ventas</Typography>
          <Row style={{ marginTop: "18px" }}>
            <Col md={1}>
              <Label>Cliente:</Label>
            </Col>

            <Col md={6}>
              <Input
                disabled
                placeholder="nombreCliente"
                value={formCitaDescripciones.descripcion_no_cliente ? formCitaDescripciones.descripcion_no_cliente : ""}
              ></Input>
            </Col>
          </Row>
          <Row style={{ marginTop: "18px", marginBottom: "18px" }}>
            <Col md={1}>
              <Label>Estilista:</Label>
            </Col>
            <Col md={4}>
              <Input
                type="select"
                name="atiende"
                id="atiende"
                value={formVentaHistoriales.userId}
                onChange={(e) => {
                  setFormVentaHistoriales({ ...formVentaHistoriales, userId: e.target.value });
                }}
              >
                <option value="0">Seleccione un estilista</option>

                {dataTrabajadores.map((opcion, index) => {
                  return (
                    <option value={opcion.id} key={index}>
                      {opcion.nombre}
                    </option>
                  );
                })}
              </Input>
            </Col>
            <Col md={1}>
              <Label>Servicio:</Label>
            </Col>
            <Col md={4}>
              <Input
                disabled
                value={formVentaHistoriales.claveProdDescripcion}
                onChange={(e) => setFormVentaHistoriales({ ...formVentaHistoriales, claveProd: e.target.value })}
                placeholder="Escoja un servicio"
              ></Input>
            </Col>
            <Col md={2}>
              <Button
                onClick={() => {
                  setFormVentaHistoriales({ ...formVentaHistoriales, botonConsultar: true });
                  setProductosModal(true);
                }}
              >
                {" "}
                Buscar
              </Button>
            </Col>
          </Row>
          <Row style={{ marginBottom: "18px" }}>
            <Col md={1}>
              <Label>Sucursal:</Label>
            </Col>
            <Col md={4}>
              <Input
                type="select"
                name="sucursal"
                id="sucursal"
                value={formVentaHistoriales.sucursal}
                onChange={(e) => {
                  setFormVentaHistoriales({ ...formVentaHistoriales, sucursal: e.target.value });
                }}
              >
                <option value="0">Seleccione un sucursal</option>

                {dataSucursales.map((opcion, index) => {
                  return (
                    <option value={opcion.sucursal} key={index}>
                      {opcion.descripcion}
                    </option>
                  );
                })}
              </Input>
            </Col>
            <Col md={1}>
              <Label>Del:</Label>
            </Col>
            <Col md={2}>
              <Input
                type="date"
                onChange={(e) => setFormVentaHistoriales({ ...formVentaHistoriales, fechaInicio: e.target.value })}
                placeholder="Del:"
              ></Input>
            </Col>
            <Col md={1}>
              <Label>Al:</Label>
            </Col>
            <Col md={2}>
              <Input
                type="date"
                onChange={(e) => setFormVentaHistoriales({ ...formVentaHistoriales, fechaFin: e.target.value })}
                placeholder="Al:"
              ></Input>
            </Col>
          </Row>
          <Button style={{ marginBottom: "18px" }} color="success" onClick={() => fetchVentasHistoriales()}>
            {" "}
            Consultar
          </Button>

          <DataGrid
            rows={dataVentasHistoriales}
            columns={columnsDataVentasHistoriales}
            getRowId={(row) => Number(row.sucursal) + Number(row.no_venta)}
          />
        </Box>
      </Modal>

      <Modal open={ModalVentasOperaciones} onClose={() => setModalVentasOperaciones(false)}>
        <Box sx={style}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AiOutlineClose onClick={() => setModalVentasOperaciones(false)} />
          </div>
          <Typography variant="h4">Consulta de operaciones</Typography>
          <Row>
            <Col md={1}>
              <Label>Cliente:</Label>
            </Col>
            <Col md={5}>
              <Input disabled placeholder="cveCliente" value={formCita.no_cliente ? formCita.no_cliente : ""}></Input>
            </Col>
            <Col md={6}>
              <Input
                disabled
                placeholder="nombreCliente"
                value={formCitaDescripciones.descripcion_no_cliente ? formCitaDescripciones.descripcion_no_cliente : ""}
              ></Input>
            </Col>
          </Row>
          <Row style={{ marginTop: "18px", marginBottom: "18px" }}>
            <Col md={1}>
              <Label>Sucursal:</Label>
            </Col>
            <Col md={3}>
              <Input disabled value={formVentaOperaciones.sucursal} placeholder="Sucursal"></Input>
            </Col>
            <Col md={1}>
              <Label>Fecha:</Label>
            </Col>
            <Col md={3}>
              <Input
                disabled
                value={format(formVentaOperaciones.fecha ? new Date(formVentaOperaciones.fecha) : new Date(), "yyyy-MM-dd")}
                placeholder="Fecha"
              ></Input>
            </Col>
            <Col md={1}>
              <Label>Folio:</Label>
            </Col>
            <Col md={3}>
              <Input disabled value={formVentaOperaciones.no_venta} placeholder="No_venta"></Input>
            </Col>
          </Row>
          <DataGrid
            rows={DataVentasOperaciones}
            columns={columnsDataVentasOperaciones}
            getRowId={(row) => Number(row.sucursal) + Number(row.no_venta)}
          />
        </Box>
      </Modal>

      <Modal open={ProductosModalEdicion} onClose={() => setProductosModalEdicion(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          {/* <DataGrid rows={dataProductos} columns={columnsProductos} /> */}
          {dataProductos ? (
            <MaterialReactTable
              columns={columnsProductosMRTEdicion}
              data={dataProductos}
              initialState={{ density: "compact" }}
              muiTableContainerProps={{ sx: { maxHeight: "330px" } }}
            />
          ) : null}
        </Box>
      </Modal>
      {/* 
      <Draggable>
        <div>
          <Modal open={movableReactPrueba}>
            <Box sx={style}>
              <Draggable>
                <div>
                  <h1>Hola mundo</h1>
                </div>
              </Draggable>
            </Box>
          </Modal>
        </div>
      </Draggable> */}

      {/* Hazme un modal como lo he estado haciendo para que edite el estilista y el servicio, ingresando a su vez una cantidad */}
      <Modal open={modalEdicionServicios} onClose={() => setModalEdicionServicios(false)}>
        <Box sx={styleObservaciones}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="atiende">Seleccione un estilista</Label>
                <Input
                  type="select"
                  name="atiende"
                  id="atiende"
                  value={formDetalleCitasServicios.idEstilista}
                  onChange={(valor) => {
                    setFormDetalleCitasServicios({ ...formDetalleCitasServicios, idEstilista: valor.target.value });
                  }}
                >
                  <option value="0">Seleccione un estilista</option>
                  {dataEstilistas.map((opcion, index) => {
                    return (
                      <option value={opcion.id} key={index}>
                        {opcion.estilista}
                      </option>
                    );
                  })}
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="cliente">Producto</Label>
                <InputGroup addonType="append">
                  <Input bsSize="sm" disabled value={formDetalleCitasServicios.d_clave_prod} type="text" name="cliente" id="cliente" size={"small"} />
                  <Button size="sm" onClick={() => setProductosModalEdicion(true)}>
                    Buscar
                  </Button>
                </InputGroup>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Ingrese la cantidad a modificiar</Label>
                <Input
                  value={formDetalleCitasServicios.cantidad}
                  onChange={(v) => {
                    setFormDetalleCitasServicios({ ...formDetalleCitasServicios, cantidad: v.target.value });
                  }}
                ></Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                <Row>
                  <Col md={6}>
                    <Label for="fecha" style={{ fontSize: "0.8rem", marginRight: "5px" }}>
                      Fecha cita:
                    </Label>

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        openPickerIcon={<Box />} // Aquí se elimina el ícono
                        slotProps={{ textField: { size: "small" } }}
                        style={{ height: 20 }}
                        value={formDetalleCitasServicios.fecha ? new Date(formDetalleCitasServicios.fecha) : null}
                        onChange={(fecha) => handleChangeFechaServicio("fecha", fecha)}
                        format="dd/MM/yyyy"
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "128px",
                          },
                          "& .MuiPickersDay-dayWithMargin": {
                            // Oculta el ícono del DatePicker
                            display: "none",
                          },
                          "& .MuiSvgIcon-root": {
                            // Aquí se oculta el ícono
                            width: "0.8rem",
                            backgroundColor: "transparent",
                          },
                          "& .MuiIconButton-root": {
                            marginRight: "-16px",
                          },
                        }}
                        renderInput={(props) => (
                          <TextField
                            {...props}
                            size="small"
                            InputProps={{ endAdornment: null }} // Aquí se elimina el ícono
                            sx={{
                              fontSize: "0.8rem",
                              backgroundColor: "#ffccac",
                              "& .MuiInputBase-input": {
                                height: "30px", // Ajusta la altura aquí
                                padding: "0 14px", // Ajusta el padding para centrar el texto
                              },
                              "& .MuiOutlinedInput-root": {
                                height: "30px", // Ajusta la altura aquí
                                padding: "0px", // Remueve el padding interno
                              },
                              "& .MuiOutlinedInput-input": {
                                height: "30px", // Ajusta la altura aquí
                                display: "flex",
                                alignItems: "center",
                              },
                              "& .MuiInputAdornment-root": {
                                height: "30px", // Asegura que los adornos tengan la misma altura
                                "& button": {
                                  height: "30px", // Ajusta la altura del botón del ícono
                                },
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Col>
                  <Col md={6}>
                    <Label for="fecha" style={{ fontSize: "0.8rem", marginRight: "5px" }}>
                      Hora de cita:
                    </Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        timeSteps={15}
                        slotProps={{ textField: { size: "small" } }}
                        value={formDetalleCitasServicios.fecha ? new Date(decodeURIComponent(formDetalleCitasServicios.fecha)) : null}
                        // value={formCita.fecha ? new Date(formCita.fecha).toTimeString().substring(0, 5) : null}
                        onChange={(hora) => handleChangeFechaServicio("hora", hora)}
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "128px",
                          },
                          "& .MuiPickersDay-dayWithMargin": {
                            // Oculta el ícono del DatePicker
                            display: "none",
                          },
                          "& .MuiSvgIcon-root": {
                            // Aquí se oculta el ícono
                            width: "0.8rem",
                            backgroundColor: "#ffccac",
                          },
                        }}
                        renderInput={(props) => (
                          <Input
                            {...props}
                            size="small"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#ffccac",
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Col>
                </Row>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Button
                  onClick={() => {
                    putDetalleCitasServiciosUpd4(
                      formDetalleCitasServicios.id,
                      2,
                      formCitaServicio.idCita,
                      formDetalleCitasServicios.tiempo,
                      formDetalleCitasServicios.idEstilista,
                      1,
                      formDetalleCitasServicios.idServicio,
                      0,
                      formDetalleCitasServicios.cantidad,
                      formDetalleCitasServicios.precio,
                      formDetalleCitasServicios.fecha
                    );
                  }}
                >
                  Guardar
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Box>
      </Modal>

      <Modal open={ModalCantidad} onClose={() => setModalCantidad(false)} size={"sm"}>
        <Box sx={styleCantidad}>
          <Typography variant="h5">Agregue la cantidad</Typography>
          <Input
            type="text"
            name="minutos"
            id="minutos"
            value={formCitaServicio.cantidad}
            onChange={(v) => {
              setFormCitaServicio({ ...formCitaServicio, cantidad: v.target.value });
            }}
          />
          <br />

          <br />
          <Button
            style={{ marginRight: "5px" }}
            onClick={() => {
              setModalCantidad(false);

              setVentaTemporal((prevVentaTemporal) => {
                const newId = prevVentaTemporal.length > 0 ? prevVentaTemporal[prevVentaTemporal.length - 1].id + 1 : 0;
                const newVentaTemporal = [
                  ...prevVentaTemporal,
                  {
                    id: newId,
                    clave: dataVentaTemporal.clave,
                    clave_prod: dataVentaTemporal.clave_prod,
                    descripcion: dataVentaTemporal.descripcion,
                    precio: dataVentaTemporal.precio,
                    tiempo: dataVentaTemporal.tiempo,
                    cantidad: formCitaServicio.cantidad ? formCitaServicio.cantidad : 1,
                  },
                ];
                return newVentaTemporal;
              });
              setDataVentaTemporal({});
            }}
          >
            Guardar
          </Button>
          <Button
            color="danger"
            onClick={() => {
              setModalCantidad(false);
              setDataVentaTemporal({});
            }}
          >
            Cancelar
          </Button>
        </Box>
      </Modal>
      {/*  */}
      <Draggable>
        <Modal open={ModalCrear} style={{ maxWidth: "41%", maxHeight: "95%", overflow: "auto" }} onClose={() => setModalCrear(false)}>
          <Box sx={styleCrearCita}>
            <div style={{ flex: 1, justifyContent: "space-between", alignContent: "right", alignItems: "right", display: "flex" }}>
              <h1>Creación de cita</h1>
              <div>
                <Button
                  size="sm"
                  disabled={!formCitaDescripciones.descripcion_no_cliente}
                  onClick={() => {
                    if (dataClientesPuntos.length == 0) {
                      Swal.fire({
                        icon: "error",
                        title: "Sin puntos",
                        text: `Este cliente todavia no cuenta con puntos`,
                        confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
                      });
                    } else {
                      setModalClientesPuntos(true);
                    }
                  }}
                >
                  Historial puntos
                </Button>
                <Button
                  size="sm"
                  disabled={!formCitaDescripciones.descripcion_no_cliente}
                  color={"primary"}
                  onClick={() => {
                    setModalVentasHistorial(true);
                  }}
                >
                  Historial ventas
                </Button>
              </div>
            </div>
            <div style={{ padding: "2px", maxWidth: "600px", margin: "0 auto" }}>
              <Row form>
                <Col xs="12" style={{ padding: 0, marginBottom: 0 }}>
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label for="cliente" style={{ marginRight: "5px", fontSize: "0.8rem" }}>
                      Cliente:
                    </Label>
                    <InputGroup size="sm" style={{ flexGrow: 1 }}>
                      <Input
                        disabled
                        value={formCitaDescripciones.descripcion_no_cliente}
                        type="text"
                        name="cliente"
                        id="cliente"
                        style={{ fontSize: "0.8rem" }}
                      />
                      <Button size="sm" onClick={() => setClientesModal(true)} style={{ fontSize: "0.8rem" }}>
                        Buscar
                      </Button>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <InputGroup size="sm" style={{ flexGrow: 1 }}>
                    <Label for="cliente" style={{ marginRight: "5px", fontSize: "0.8rem" }}>
                      Observacion:
                    </Label>

                    <Input
                      // onChange={(event) => {
                      //   setFormCita((prev) => ({ ...prev, observacion: event.target.value }));
                      // }}
                      onChange={handleChangeObservaciones}
                      type="text"
                      name="observacion"
                      id="observacion"
                      style={{ fontSize: "0.8rem" }}
                    />
                  </InputGroup>
                </Col>
                <Col xs="6" style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label for="puntos" style={{ marginRight: "5px", fontSize: "0.8rem" }}>
                      Ptos:
                    </Label>
                    <Input
                      bsSize="sm"
                      disabled
                      value={dataPuntosporCliente[0]?.puntosTotal || 0}
                      type="text"
                      name="puntos"
                      id="puntos"
                      style={{ fontSize: "0.8rem" }}
                    />
                  </FormGroup>
                </Col>

                <Col xs="6">
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label style={{ marginRight: "5px", fontSize: "0.8rem" }} for="clasificacion">
                      Clasificacion
                    </Label>
                    <Input
                      disabled
                      value={dataClasificacion[0]?.descripcion ? dataClasificacion[0]?.descripcion : 0}
                      type="text"
                      name="clasificacion"
                      id="clasificacion"
                      style={{ fontSize: "0.8rem" }}
                    />
                  </FormGroup>
                </Col>

                <Col xs="6">
                  <FormGroup check style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label check>
                      <Input
                        name="esServicioDomicilio"
                        type="checkbox"
                        checked={formCita.esServicioDomicilio}
                        onChange={handleCheckboxChangeDomicilio}
                      />
                      <strong style={{ fontSize: "0.8rem" }}>Servicio a domicilio</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label for="fecha" style={{ fontSize: "0.8rem", marginRight: "5px" }}>
                      Fecha cita:
                    </Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        openPickerIcon={<Box />} // Aquí se elimina el ícono
                        slotProps={{ textField: { size: "small" } }}
                        style={{ height: 20 }}
                        value={datosParametros.fecha ? new Date(datosParametros.fecha) : null}
                        onChange={(fecha) => handleChangeFecha("fecha", fecha)}
                        format="dd/MM/yyyy"
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "128px",
                          },
                          "& .MuiPickersDay-dayWithMargin": {
                            // Oculta el ícono del DatePicker
                            display: "none",
                          },
                          "& .MuiSvgIcon-root": {
                            // Aquí se oculta el ícono
                            width: "0.8rem",
                            backgroundColor: "transparent",
                          },
                          "& .MuiIconButton-root": {
                            marginRight: "-16px",
                          },
                        }}
                        renderInput={(props) => (
                          <TextField
                            {...props}
                            size="small"
                            InputProps={{ endAdornment: null }} // Aquí se elimina el ícono
                            sx={{
                              fontSize: "0.8rem",
                              backgroundColor: "#ffccac",
                              "& .MuiInputBase-input": {
                                height: "30px", // Ajusta la altura aquí
                                padding: "0 14px", // Ajusta el padding para centrar el texto
                              },
                              "& .MuiOutlinedInput-root": {
                                height: "30px", // Ajusta la altura aquí
                                padding: "0px", // Remueve el padding interno
                              },
                              "& .MuiOutlinedInput-input": {
                                height: "30px", // Ajusta la altura aquí
                                display: "flex",
                                alignItems: "center",
                              },
                              "& .MuiInputAdornment-root": {
                                height: "30px", // Asegura que los adornos tengan la misma altura
                                "& button": {
                                  height: "30px", // Ajusta la altura del botón del ícono
                                },
                              },
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label for="hora" style={{ fontSize: "0.8rem", marginRight: "5px" }}>
                      Hora cita:
                    </Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <TimePicker
                        timeSteps={{ minutes: 15 }}
                        slotProps={{ textField: { size: "small" } }}
                        value={formCita.fecha ? new Date(decodeURIComponent(formCita.fecha)) : null}
                        // value={formCita.fecha ? new Date(formCita.fecha).toTimeString().substring(0, 5) : null}
                        onChange={(hora) => handleChangeFecha("hora", hora)}
                        sx={{
                          "& .MuiInputBase-input": {
                            width: "128px",
                          },
                          "& .MuiPickersDay-dayWithMargin": {
                            // Oculta el ícono del DatePicker
                            display: "none",
                          },
                          "& .MuiSvgIcon-root": {
                            // Aquí se oculta el ícono
                            width: "0.8rem",
                            backgroundColor: "#ffccac",
                          },
                        }}
                        renderInput={(props) => (
                          <Input
                            {...props}
                            size="small"
                            style={{
                              fontSize: "0.8rem",
                              backgroundColor: "#ffccac",
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <Label for="atiende" style={{ fontSize: "0.8rem", marginRight: "0px" }}>
                      Atiende:
                    </Label>
                    <Input
                      bsSize="sm"
                      type="select"
                      name="atiende"
                      id="atiende"
                      value={formCita.no_estilista}
                      onChange={(e) => setFormCita({ ...formCita, no_estilista: e.target.value })}
                      style={{ fontSize: "0.8rem" }}
                    >
                      <option value="0">Seleccione un estilista</option>
                      {dataEstilistas.map((opcion, index) => (
                        <option value={opcion.id} key={index}>
                          {opcion.estilista}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup style={{ display: "flex", alignItems: "center", marginBottom: "0px" }}>
                    <FormGroup check>
                      <Label check style={{ fontSize: "0.8rem", marginRight: "5px" }}>
                        <Input
                          name="estatus"
                          type="checkbox"
                          checked={formCita.estatusRequerido}
                          onChange={() => handleCheckboxChange("estatusRequerido")}
                        />{" "}
                        <strong>Requerido</strong>
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check style={{ fontSize: "0.8rem" }}>
                        <Input
                          name="estatus"
                          type="checkbox"
                          checked={formCita.estatusAsignado}
                          onChange={() => handleCheckboxChange("estatusAsignado")}
                        />{" "}
                        <strong>Asignado</strong>
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </Col>
              </Row>
            </div>
            <hr />
            <Box marginLeft={0} marginRight={0} gap={2} alignItems={"center"} justifyContent={"center"}>
              <Button
                color={"success"}
                onClick={() => {
                  postCrearCita();
                }}
                variant="contained"
              >
                Ingresar servicios...
              </Button>
              <DataGrid
                autoHeight
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                sx={{ "--DataGrid-overlayHeight": "250px" }}
                rows={dataCitasServicios}
                columns={columnsCitasServicios}
              />
              <Box marginLeft={0} marginRight={0} marginTop={1} gap={1} display="flex" justifyContent={"center"} alignItems={"center"}>
                <Col style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "300px", textAlign: "center", fontWeight: "bold" }}>
                  <Label>Clave de reservación</Label>
                  {/* <Input value={"100-2-75"}> </Input> */}
                  <Input value={formCitaServicio.idCita ? formCitaServicio.idCita + "-" + 1 + "-" + format(new Date(formCita.fecha), "ddM") : ""}>
                    {" "}
                  </Input>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="total2">Total</Label>
                    <Input type="text" name="total2" id="total2" disabled />
                  </FormGroup>

                  <FormGroup>
                    <Label for="otros">Otros</Label>
                    <Input type="text" name="otros" id="otros" disabled placeholder={formVentaTemporal.otros} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="total">Total</Label>
                    <Input type="text" name="total" id="total" placeholder={"$" + formVentaTemporal.precioTotal.toFixed(2)} disabled />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="minutos">Minutos</Label>
                    <Input type="text" name="minutos" id="minutos" placeholder={formVentaTemporal.tiempo + " Min"} disabled />
                  </FormGroup>

                  <FormGroup>
                    <Label for="horas">Horas</Label>
                    <Input type="text" name="horas" id="horas" placeholder={(formVentaTemporal.tiempo / 60).toFixed(2) + " Hrs"} disabled />
                  </FormGroup>

                  <ButtonGroup style={{ marginBottom: "10%" }}>
                    <Button
                      color="primary"
                      block
                      onClick={() => {
                        putCitasServiciosTerminado();
                      }}
                      // disabled={!agregarServicios}
                    >
                      Guardar
                    </Button>
                    <Button color="danger" block onClick={() => window.close()}>
                      Salir
                    </Button>
                  </ButtonGroup>
                </Col>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Draggable>
    </>
  );
}
const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg style={{ flexShrink: 0 }} width="240" height="200" viewBox="0 0 184 152" aria-hidden focusable="false">
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse className="ant-empty-img-5" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path className="ant-empty-img-2" d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z" />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
}
export default wrapperFun(Basic);
