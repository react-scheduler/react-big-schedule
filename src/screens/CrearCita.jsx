import React, { useState, useEffect } from "react";
// import Modal from "../components/Modal";
import { DataGrid } from "@mui/x-data-grid";
import { peinadosApi } from "../api/peinadosApi";
import ModalMui from "../components/ModalMui";
import { FormControl, TextField, FormControlLabel, Checkbox, Box, ButtonGroup, Modal, Typography } from "@mui/material";
import LayoutBoxGeneric from "../Layout/LayoutBoxGeneric";
import { FormGroup, Label, Input, Button, Container, Row, Col, InputGroup, InputGroupText } from "reactstrap";

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
  const styleProducts = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "30%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [formCita, setFormCita] = useState({
    idCliente: 0,
    nombreCliente: "",
    puntos: 0,
    esPlatino: "",
    observaciones: "",
    esServicioDomicilio: false,
    fecha: new Date(),
    atiende: 0,
    nombreAtiende: "",
    r: false,
    a: false,
  });
  const [formCitaServicio, setFormCitaServicio] = useState({
    clave_prod: "",
    descripcion: "",
    precio: 0,
    tiempo: 0,
  });
  const [abierto, setAbierto] = useState(false);
  const [clientesModal, setClientesModal] = useState(false);
  const [productosModal, setProductosModal] = useState(false);
  const [dataClientes, setDataClientes] = useState({});
  useEffect(() => {
    peinadosApi.get("/clientes?id=0").then((response) => {
      setDataClientes(response.data);
    });
    peinadosApi.get("/clientes?id=0").then((response) => {
      setDataClientes(response.data);
    });
  }, []);

  const columns = [
    { field: "clave", headerName: "Clave", width: 70 },
    { field: "descripcion", headerName: "Descripción", width: 130 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "tiempo", headerName: "Tiempo", width: 130 },
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
  // const [open, setOpen] = useState(false);
  // const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setAgregarServicios(true);
  };
  const handleClose = () => setOpen(false);
  function renderButtonClient(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setFormCita({ ...formCita, idCliente: params.row.id, nombreCliente: params.row.nombre });
            console.log(params.row);
            setClientesModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
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
  const [agregarServicios, setAgregarServicios] = useState(false);

  return (
    <div>
      <h1>Estamos creando la cita</h1>
      <Container>
        <Row>
          <Col>
            <FormGroup>
              <Label for="cliente">Cliente</Label>
              <InputGroup>
                <Input bsSize="lg" disabled value={formCita.nombreCliente} type="text" name="cliente" id="cliente" />
                <InputGroupAddon addonType="append">
                  <Button bsSize="lg" onClick={() => setClientesModal(true)}>
                    Buscar
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label for="puntos">Puntos</Label>
              <Input disabled defaultValue={formCita.puntos} type="text" name="puntos" id="puntos" />
            </FormGroup>
            <Button>HP</Button>
            <Button>HV</Button>
          </Col>

          <Col>
            <FormGroup>
              <Label for="atiende">Atiende</Label>
              <Input type="select" name="atiende" id="atiende" />
            </FormGroup>
            <FormGroup>
              <Label for="observaciones">Observaciones</Label>
              <Input type="text" name="observaciones" id="observaciones" />
            </FormGroup>
            <Input type="checkbox" id="servDomicilio" label="Serv. Domicilio" />
          </Col>

          <Col>
            <FormGroup>
              <Label for="fecha">Fecha</Label>
              <Input type="datetime-local" name="fecha" id="fecha" />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={(e) => console.log(e.target.value)} /> <strong>R</strong>
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" onChange={(e) => console.log(e.target.value)} /> <strong>A</strong>
              </Label>
            </FormGroup>
            <Button onClick={handleOpen}>Guardar</Button>
          </Col>
        </Row>
      </Container>
      <hr />

      {agregarServicios ? (
        <Box marginLeft={6} marginRight={6} gap={2} alignItems={"center"} justifyContent={"center"}>
          <Button onClick={() => setProductosModal(true)} variant="contained">
            Ingresar servicios...
          </Button>
          <DataGrid rows={rows} columns={columns} />
          <Box marginLeft={6} marginRight={6} marginTop={1} gap={2} display="flex" justifyContent={"center"} alignItems={"center"}>
            <FormControl>
              <Box marginBottom={2} display="flex">
                <TextField size="small" id="total1" label="Total" variant="outlined" fullWidth disabled />
              </Box>
              <Box marginBottom={2} display="flex">
                <TextField size="small" id="otros" label="Otros" variant="outlined" fullWidth disabled />
              </Box>
              <Box marginBottom={2} display="flex">
                <TextField size="small" id="total2" label="Total" variant="outlined" fullWidth disabled />
              </Box>
            </FormControl>

            <FormControl>
              <Box marginBottom={2} display="flex">
                <TextField size="small" id="minutos" label="Minutos" variant="outlined" fullWidth disabled />
              </Box>
              <Box marginBottom={2} display="flex">
                <TextField size="small" id="horas" label="Horas" variant="outlined" fullWidth disabled />
              </Box>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button fullWidth>Guardar</Button>
                <Button fullWidth color="error">
                  Salir
                </Button>
              </ButtonGroup>
            </FormControl>
          </Box>
        </Box>
      ) : null}
      <Modal open={clientesModal} onClose={() => setClientesModal(false)}>
        <Box sx={style}>
          <Button onClick={() => setClientesModal(false)}> </Button>
          <Typography variant="h4">Agregar cliente</Typography>
          <DataGrid rows={dataClientes} columns={columnsClientes} />
        </Box>
      </Modal>
      <Modal open={productosModal} onClose={() => setProductosModal(false)}>
        <Box sx={styleProducts}>
          <Button onClick={() => setClientesModal(false)}> </Button>
          <Typography variant="h4">Agregar productos</Typography>
          <DataGrid rows={rowsClientes} columns={columnsClientes} />
        </Box>
      </Modal>

      {/* <ModalMui
        open={clientesModal}
        close={() => setClientesModal(false)}
        children={() => (
          <Box>
            <p>ALGO</p>
          </Box>
        )}
      ></ModalMui> */}
    </div>
  );
}

export default CrearCita;
