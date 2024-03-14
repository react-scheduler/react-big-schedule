import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Col, Row } from "reactstrap";
import { peinadosApi } from "../api/peinadosApi";
function ListaEspera() {
  const [openListaEspera, setOpenListaEspera] = useState(false);
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
  };
  const [clientesModal, setClientesModal] = useState(false);

  const [dataClientes, setDataClientes] = useState({});
  const [formClienteEspera, setformClienteEspera] = useState({
    id: "",
    sucursal: "",
    no_cliente: "",
    descripcion_no_cliente: "",
    fecha: new Date(),
    clave_prod: "",
    descripcion_clave_prod: "",
    hora_estimada: 0,
    atendido: 0,
    estilista: 0,
    tiempo_servicio: 0,
    usuario_registra: 0,
    usuario_cita: 0,
    usuario_servicio: 0,
    usuario_elimina: 0,
  });
  useEffect(() => {
    peinadosApi.get("/clientes?id=0").then((response) => {
      setDataClientes(response.data);
    });
  }, []);
  const columnsClientes = [
    { field: "nombre", headerName: "nombre", width: 250 },
    { field: "telefono", headerName: "telefono", width: 130 },
    { field: "celular", headerName: "celular", width: 130 },
    { field: "cumpleaños", headerName: "cumpleaños", width: 130, renderCell: (params) => <p>{params.row.cumpleaños}</p> },
    { field: "edit", headerName: "edit", renderCell: renderButtonClient, width: 130 },
  ];

  function renderButtonClient(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setformClienteEspera({ ...formClienteEspera, no_cliente: params.row.id, descripcion_no_cliente: params.row.nombre });
            console.log(params.row);
            setClientesModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  return (
    <div>
      <Button
        onClick={() => {
          setOpenListaEspera(true);
        }}
      >
        Agregar Lista de espera
      </Button>

      <Table>
        <thead>
          <tr>
            <th>Clave</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.clave}</td>
              <td>{row.descripcion}</td>
              <td>{row.precio}</td>
              <td>{row.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={openListaEspera} toggle={() => setOpenListaEspera(false)} size="lg">
        <ModalHeader toggle={() => setOpenListaEspera(false)}>Agregar listas de espera</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="hora">Hora</Label>
                <Input type="time" name="hora" id="hora" />
              </FormGroup>
              <FormGroup>
                <Label for="cliente">Cliente</Label>
                <Input value={formClienteEspera.descripcion_no_cliente} type="text" name="cliente" id="cliente" disabled />
              </FormGroup>
              <Button onClick={() => setClientesModal(true)} block>
                Agregar
              </Button>
              <FormGroup>
                <Label for="productoServicio">Producto/Servicio</Label>
                <Input type="text" name="productoServicio" id="productoServicio" disabled />
              </FormGroup>
                <Button block>Agregar</Button>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="tiempoServicio">Tiempo de servicio</Label>
                <Input type="text" name="tiempoServicio" id="tiempoServicio" disabled />
              </FormGroup>
              <FormGroup>
                <Label for="horaEstimada">Hora estimada</Label>
                <Input type="text" name="horaEstimada" id="horaEstimada" disabled />
              </FormGroup>
              <FormGroup>
                <Label for="estimada">Estimada</Label>
                <Input type="text" name="estimada" id="estimada" />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setOpenListaEspera(!openListaEspera)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={clientesModal} toggle={() => setClientesModal(!clientesModal)} size="xl">
        <ModalHeader toggle={() => setClientesModal(!clientesModal)}>Agregar cliente</ModalHeader>
        <ModalBody>
          {" "}
          <DataGrid rows={dataClientes} columns={columnsClientes} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setClientesModal(!clientesModal)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListaEspera;
