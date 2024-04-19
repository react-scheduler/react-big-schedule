import React, { useState, useEffect } from "react";
// import Modal from "../components/Modal";
import { DataGrid } from "@mui/x-data-grid";
import { peinadosApi } from "../api/peinadosApi";
import { FormControl, TextField, FormControlLabel, Checkbox, Box, ButtonGroup, Modal, Typography } from "@mui/material";
import { FormGroup, Label, Input, Button, Container, Row, Col, InputGroup, InputGroupText, Collapse } from "reactstrap";
import { styled } from "@mui/material/styles";

import { estilistas, productos } from "../data/Data";
import Swal from "sweetalert2";

function CrearCita() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    height: "70%",
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
  };
  const [formCita, setFormCita] = useState({
    cia: 1,
    sucursal: 1,
    no_estilista: 0,
    no_cliente: 0,
    dia_cita: new Date(),
    hora_cita: new Date(),
    fecha: new Date(),
    tiempo: 0,
    user: 1,
    importe: 0,
    cancelada: false,
    stao_estilista: 0,
    nota_canc: "nota cancelacion",
    registrada: false,
    observacion: "OBSERVACIONES",
    user_uc: 1,
    estatus: 0,
    estatusAsignado: false,
    estatusRequerido: false,
  });
  const [formCitaDescripciones, setFormCitaDescripciones] = useState({
    descripcion_no_estilista: "",
    descripcion_no_cliente: "",
    descripcion_no_cancelacio: "",
  });

  const [formVentaTemporal, setFormVentaTemporal] = useState({
    tiempo: 0,
    precioTotal: 0,
    otros: 0,
  });
  const [formCitaServicio, setFormCitaServicio] = useState({
    idCita: 0,
    clave_prod: "",
    descripcion: "",
    precio: 0,
    tiempo: 0,
    cantidad: 0,
  });
  const [abierto, setAbierto] = useState(false);
  const [clientesModal, setClientesModal] = useState(false);
  const [ModalClientesPuntos, setModalClientesPuntos] = useState(false);
  const [ModalCantidad, setModalCantidad] = useState(false);
  const [productosModal, setProductosModal] = useState(false);
  const [ventaTemporal, setVentaTemporal] = useState([]);
  const [dataClientes, setDataClientes] = useState({});
  const [dataClientesPuntos, setDataClientesPuntos] = useState({});

  const [dataProductos, setDataProductos] = useState({});
  const [dataEstilistas, setDataEstilistas] = useState([]);

  const idUser = new URLSearchParams(window.location.search).get("idUser");
  const fecha = new URLSearchParams(window.location.search).get("fecha");
  const idRec = new URLSearchParams(window.location.search).get("idRec");
  const idSuc = new URLSearchParams(window.location.search).get("idSuc");

  useEffect(() => {
    setFormCita({ ...formCita, fecha: fecha, no_estilista: idUser, sucursal: idSuc });
  }, [idUser, fecha, idRec, idSuc]);

  useEffect(() => {
    getClientes();
    getEstilistas();
    getProductos();
  }, []);

  useEffect(() => {
    getClientesePuntos();
  }, [formCita.no_cliente]);

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
    peinadosApi.get(`/DetallePuntosClien?cliente=${formCita.no_cliente}`).then((response) => {
      setDataClientesPuntos(response.data);
      console.log("<");
    });
  };

  const getProductos = () => {
    peinadosApi.get("/productos2?id=0&descripcion=%&verInventariable=2&esServicio=2&esInsumo=2&obsoleto=2&marca=%").then((response) => {
      setDataProductos(response.data);
    });
  };

  useEffect(() => {
    const sumaPrecio = ventaTemporal.reduce((acumulado, objetoActual) => {
      return acumulado + objetoActual.precio * objetoActual.cantidad;
    }, 0); // El 0 inicializa el valor de acumulado

    // Suma de tiempos
    const sumaTiempo = ventaTemporal.reduce((acumulado, objetoActual) => {
      return Number(acumulado) + Number(objetoActual.tiempo) * Number(objetoActual.cantidad);
    }, 0); // El 0 inicializa el valor de acumulado
    setFormVentaTemporal({ precioTotal: sumaPrecio, tiempo: sumaTiempo });
  }, [ventaTemporal]);

  const columns = [
    { field: "clave", headerName: "Clave", width: 70 },
    { field: "descripcion", headerName: "Descripción", width: 130 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "tiempo", headerName: "Tiempo", width: 130 },
    { field: "cantidad", headerName: "Cantidad", width: 130 },
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
    ventaTemporal.forEach((elemento) => {
      peinadosApi
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
          },
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
    Swal.fire({
      icon: "success",
      text: "Registro Realizado con éxito",
      confirmButtonColor: "#3085d6",
    });
  };
  const postCrearCita = async () => {
    let fechaActual = new Date();
    // Extrae el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
    let día = fechaActual.getDate();
    let fechaSinHora = new Date(año, mes, día);

    if (
      formCita.no_estilista == 0 ||
      formCita.no_cliente == 0 ||
      formCita.esServicioDomicilio == false ||
      formCita.estatusAsignado == false ||
      formCita.estatusRequerido == false
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: `Faltan por ingresar datos favor de verificar`,
        confirmButtonColor: "#3085d6", // Cambiar el color del botón OK
      });
    } else {
      await peinadosApi
        .post("/DetalleCitas", null, {
          params: {
            cia: 1,
            sucursal: 1,
            no_estilista: formCita.no_estilista,
            no_cliente: formCita.no_cliente,
            dia_cita: formCita.fecha,
            hora_cita: formCita.fecha,
            fecha: fechaSinHora,
            tiempo: 50,
            user: formCita.no_estilista,
            importe: 0,
            cancelada: false,
            stao_estilista: 1,
            nota_canc: 0,
            registrada: true,
            observacion: 0,
            user_uc: 0,
            estatus: formCita.estatusAsignado ? 3 : formCita.estatusRequerido ? 2 : 4,
          },
        })
        .then((response) => {
          setFormCitaServicio({ ...formCitaServicio, idCita: response.data.mensaje2 });
          setOpen(true);
          setAgregarServicios(true);
          Swal.fire({
            icon: "success",
            text: "Registro creada con éxito",
            confirmButtonColor: "#3085d6",
          });
        })
        .catch((error) => {
          alert(`Hubo un error, ${error}`);
        });
    }
  };

  const columnsClientes = [
    { field: "nombre", headerName: "nombre", width: 250 },
    { field: "telefono", headerName: "telefono", width: 130 },
    { field: "celular", headerName: "celular", width: 130 },
    { field: "cumpleaños", headerName: "cumpleaños", width: 130, renderCell: (params) => <p>{params.row.cumpleaños}</p> },
    { field: "edit", headerName: "edit", renderCell: renderButtonClient, width: 130 },
  ];

  const rowsClientes = [
    {
      id: 10,
      nombre: "180",
      telefono: "susy",
      celular: "10:00am",
      cumpleaños: "12:00pm",
      servicio: "Peinados",
      tiempo: "30",
      total: "$5000.00",
    },
  ];

  const columnsProductos = [
    { field: "x", headerName: "Seleccion", renderCell: renderButtonProduct, width: 130 },
    { field: "id", headerName: "Id", width: 50 },
    { field: "clave_prod", headerName: "Clave prod", width: 130 },
    { field: "descripcion", headerName: "Descripción", width: 250 },
    { field: "precio_lista", headerName: "Precio", width: 130, renderCell: (params) => <p>{params.row.precio_lista}</p> },
    { field: "tiempox", headerName: "Tiempo", width: 130, renderCell: (params) => <p>{params.row.tiempox}</p> },
  ];
  const [dataVentaTemporal, setDataVentaTemporal] = useState({});
  function renderButtonProduct(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            // setformClienteEspera({ ...formClienteEspera, tiempo_servicio: params.row.tiempox, descripcion_clave_prod: params.row.descripcion });
            // return;
            const newId = ventaTemporal.length > 0 ? ventaTemporal[ventaTemporal.length - 1].id + 1 : 0;

            setDataVentaTemporal({
              clave: params.row.id,
              descripcion: params.row.descripcion,
              precio: params.row.precio_lista,
              tiempo: params.row.tiempox,
            });
            setModalCantidad(true);

            setProductosModal(false);
            // setVentaTemporal((prevVentaTemporal) => {
            //   const newId = prevVentaTemporal.length > 0 ? prevVentaTemporal[prevVentaTemporal.length - 1].id + 1 : 0;
            //   const newVentaTemporal = [
            //     ...prevVentaTemporal,
            //     {
            //       id: newId,
            //       clave: params.row.clave_prod,
            //       descripcion: params.row.descripcion,
            //       precio: params.row.precio_lista,
            //       tiempo: params.row.tiempox,
            //     },
            //   ];
            //   return newVentaTemporal;
            // });
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  const [agregarServicios, setAgregarServicios] = useState(false);

  return (
    <div>
      <Container>
        <h1>Creación de cita</h1>
        <div style={{ flex: 1, justifyContent: "right", alignContent: "right", alignItems: "right", display: "flex" }}>
          <Button
            size="sm"
            disabled={!formCitaDescripciones.descripcion_no_cliente}
            onClick={() => {
              if (dataClientesPuntos.length == 0) {
                alert("Este cliente todavia no cuenta con puntos");
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
              if (dataClientesPuntos.length == 0) {
                alert("Este cliente todavia no cuenta con puntos");
              }
            }}
          >
            Historial ventas
          </Button>
        </div>
      </Container>
      <Container>
        <Row>
          <Col>
            <FormGroup>
              <Label for="cliente">Cliente</Label>
              <InputGroup addonType="append">
                <Input
                  bsSize="sm"
                  disabled
                  value={formCitaDescripciones.descripcion_no_cliente}
                  type="text"
                  name="cliente"
                  id="cliente"
                  size={"small"}
                />
                <Button size="sm" onClick={() => setClientesModal(true)}>
                  Buscar
                </Button>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="puntos">Puntos</Label>
              <Input disabled defaultValue={formCita.puntos} type="text" name="puntos" id="puntos" />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="atiende">Atiende</Label>
              <Input
                type="select"
                name="atiende"
                id="atiende"
                value={formCita.no_estilista}
                onChange={(valor) => {
                  setFormCita({ ...formCita, no_estilista: valor.target.value });
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

            <FormGroup>
              <Label for="observaciones">Observaciones</Label>
              <Input
                type="text"
                name="observaciones"
                id="observaciones"
                value={formCita.observacion}
                onChange={(valor) => {
                  setFormCita({ ...formCita, observacion: valor.target.value });
                }}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="fecha">Fecha de la cita</Label>
              <Input
                type="datetime-local"
                name="fecha"
                id="fecha"
                value={formCita.fecha}
                onChange={(e) => {
                  setFormCita({ ...formCita, fecha: e.target.value });
                }}
              />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  name="estatus"
                  type="checkbox"
                  checked={formCita.estatusRequerido}
                  onChange={(e) =>
                    setFormCita({
                      ...formCita,
                      estatusRequerido: !formCita.estatusRequerido,
                      estatusAsignado: formCita.estatusAsignado == true ? !formCita.estatusAsignado : null,
                      esServicioDomicilio: formCita.esServicioDomicilio == true ? !formCita.esServicioDomicilio : null,
                    })
                  }
                />{" "}
                <strong>Requerido</strong>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  name="estatus"
                  type="checkbox"
                  checked={formCita.estatusAsignado}
                  onChange={(e) =>
                    setFormCita({
                      ...formCita,
                      estatusAsignado: !formCita.estatusAsignado,
                      estatusRequerido: formCita.estatusRequerido == true ? !formCita.estatusRequerido : null,
                      esServicioDomicilio: formCita.esServicioDomicilio == true ? !formCita.esServicioDomicilio : null,
                    })
                  }
                />{" "}
                <strong>Asignado</strong>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  checked={formCita.esServicioDomicilio}
                  onChange={(e) =>
                    setFormCita({
                      ...formCita,
                      esServicioDomicilio: !formCita.esServicioDomicilio,
                      estatusAsignado: formCita.estatusAsignado == true ? !formCita.estatusAsignado : null,
                      estatusRequerido: formCita.estatusRequerido == true ? !formCita.estatusRequerido : null,
                    })
                  }
                />{" "}
                <strong>Servicio a domicillio</strong>
              </Label>
            </FormGroup>
            <Button color={"success"} onClick={handleOpen}>
              Guardar
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        {agregarServicios ? (
          <Box marginLeft={6} marginRight={6} gap={2} alignItems={"center"} justifyContent={"center"}>
            <Button color={"success"} onClick={() => setProductosModal(true)} variant="contained">
              Ingresar servicios...
            </Button>
            <Box sx={{ width: "100%" }}>
              <DataGrid
                autoHeight
                slots={{ noRowsOverlay: CustomNoRowsOverlay }}
                sx={{ "--DataGrid-overlayHeight": "250px" }}
                rows={ventaTemporal}
                columns={columns}
              />
            </Box>
            <Box marginLeft={6} marginRight={6} marginTop={1} gap={2} display="flex" justifyContent={"center"} alignItems={"center"}>
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
                  <Input type="text" name="total" id="total" placeholder={formVentaTemporal.precioTotal} disabled />
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

                <ButtonGroup>
                  <Button
                    color="primary"
                    block
                    onClick={() => {
                      postCitaServicios();
                    }}
                  >
                    Guardar
                  </Button>
                  <Button color="danger" block>
                    Salir
                  </Button>
                </ButtonGroup>
              </Col>
            </Box>
          </Box>
        ) : null}
      </Container>
      <Modal open={clientesModal} onClose={() => setClientesModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar cliente</Typography>
          <DataGrid rows={dataClientes} columns={columnsClientes} />
        </Box>
      </Modal>
      <Modal open={productosModal} onClose={() => setProductosModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          <DataGrid rows={dataProductos} columns={columnsProductos} />
        </Box>
      </Modal>

      <Modal open={ModalClientesPuntos} onClose={() => setModalClientesPuntos(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar cliente</Typography>
          <DataGrid rows={dataClientes} columns={columnsClientes} />
        </Box>
      </Modal>
      <Modal open={productosModal} onClose={() => setProductosModal(false)}>
        <Box sx={style}>
          <Typography variant="h4">Agregar productos</Typography>
          <DataGrid rows={dataProductos} columns={columnsProductos} />
        </Box>
      </Modal>
      <Modal open={ModalCantidad} onClose={() => setModalCantidad(false)} size={"sm"}>
        <Box sx={styleCantidad}>
          <Typography variant="h5">Agregue la cantidad</Typography>
          <Input
            type="text"
            name="minutos"
            id="minutos"
            placeholder={formCitaServicio.cantidad}
            onChange={(v) => {
              setFormCitaServicio({ ...formCitaServicio, cantidad: v.target.value });
            }}
          />
          <Button
            color="danger"
            onClick={() => {
              setModalCantidad(false);
              setDataVentaTemporal({});
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => {
              setModalCantidad(false);

              setVentaTemporal((prevVentaTemporal) => {
                const newId = prevVentaTemporal.length > 0 ? prevVentaTemporal[prevVentaTemporal.length - 1].id + 1 : 0;
                const newVentaTemporal = [
                  ...prevVentaTemporal,
                  {
                    id: newId,
                    clave: dataVentaTemporal.clave,
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
        </Box>
      </Modal>
    </div>
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
export default CrearCita;
