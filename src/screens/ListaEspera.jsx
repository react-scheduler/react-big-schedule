import React, { useState, useEffect, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label, Col, Row, InputGroup, Container } from "reactstrap";
import { peinadosApi } from "../api/peinadosApi";
import { estilistas, productos } from "../data/Data";
import { format } from "date-fns-tz";
import { MdOutlineDelete, MdFolderOpen, MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import { MaterialReactTable } from "material-react-table";

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
  const [productosModal, setProductosModal] = useState(false);
  const [estilistasModal, setEstilistasModal] = useState(false);

  const [dataClientes, setDataClientes] = useState({});
  const [dataListaEspera, setDataListaEspera] = useState({});
  const [dataEstilistas, setDataEstilistas] = useState({});
  const [dataProductos, setDataProductos] = useState({});

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
    estilista: "",
    tiempo_servicio: 0,
    usuario_registra: 0,
    usuario_cita: 0,
    usuario_servicio: 0,
    usuario_elimina: 0,
  });
  useEffect(() => {
    getClientes();
    getListaEspera();
    getEstilistas();
    getProductos();
  }, []);
  const getClientes = () => {
    peinadosApi.get("/clientes?id=0").then((response) => {
      setDataClientes(response.data);
    });
  };
  const getListaEspera = () => {
    peinadosApi.get("/ListaEspera?id=0").then((response) => {
      setDataListaEspera(response.data);
    });
  };

  const getEstilistas = () => {
    peinadosApi.get("/estilistas?id=0").then((response) => {
      setDataEstilistas(response.data);
    });
  };
  const getProductos = () => {
    peinadosApi.get("/productos2?id=0&descripcion=%&verInventariable=2&esServicio=2&esInsumo=2&obsoleto=2&marca=%").then((response) => {
      setDataProductos(response.data);
    });
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
              setformClienteEspera({ ...formClienteEspera, no_cliente: cell.row.original.id, descripcion_no_cliente: cell.row.original.nombre });
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
    {
      accessorKey: "telefono",
      header: "Telefono",
      size: 100,
    },
    {
      accessorKey: "celular",
      header: "Celular",
      size: 100,
    },
    {
      accessorKey: "cumpleaños",
      header: "Cumpleaños",
      size: 100,
    },
  ]);

  const columnsClientes = [
    { field: "nombre", headerName: "nombre", width: 250 },
    { field: "telefono", headerName: "telefono", width: 130 },
    { field: "celular", headerName: "celular", width: 130 },
    { field: "cumpleaños", headerName: "cumpleaños", width: 150, renderCell: (params) => <p>{params.row.cumpleaños}</p> },
    { field: "edit", headerName: "edit", renderCell: renderButtonClient, width: 130 },
  ];

  function renderButtonClient(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setformClienteEspera({ ...formClienteEspera, no_cliente: params.row.id, descripcion_no_cliente: params.row.nombre });
            setClientesModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  function renderButtonProduct(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setformClienteEspera({
              ...formClienteEspera,
              tiempo_servicio: params.row.tiempox,
              descripcion_clave_prod: params.row.descripcion,
              clave_prod: params.row.clave_prod,
            });
            console.log(params.row);
            setProductosModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  function renderButtonEstilista(params) {
    return (
      <div>
        <Button
          variant={"contained"}
          onClick={() => {
            setformClienteEspera({ ...formClienteEspera, estilista: params.row.id });
            console.log(params.row);
            setEstilistasModal(false);
          }}
        >
          Agregar
        </Button>
      </div>
    );
  }
  function renderDeleteListaEspera(params) {
    return (
      <div>
        <MdOutlineDelete
          title="Eliminar lista de espera"
          size={25}
          onClick={() => {
            Swal.fire({
              title: "ADVERTENCIA",
              text: `¿Está seguro que desea eliminar esta lista de espera del cliente: ${params.row.nombreCompleto}?`,
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Sí, eliminar",
            }).then((result) => {
              if (result.isConfirmed) {
                peinadosApi.delete(`/ListaEspera?id=${params.id}`).then(() => {
                  Swal.fire({
                    icon: "success",
                    text: "Registro eliminado con éxito",
                    confirmButtonColor: "#3085d6",
                  });
                  getListaEspera();
                  // getDescuento();
                });
              }
            });
          }}
        />
        <MdFolderOpen
          title="Eliminar lista de espera"
          size={25}
          onClick={() => {
            console.log(params);
          }}
        />
        <MdCalendarMonth title="Eliminar lista de espera" size={25} />
      </div>
    );
  }

  const columnsProductos = [
    { field: "id", headerName: "id", width: 250 },
    { field: "clave_prod", headerName: "clave_prod", width: 130 },
    { field: "descripcion", headerName: "descripcion", width: 130 },
    { field: "precio", headerName: "precio", width: 130, renderCell: (params) => <p>{params.row.precio}</p> },
    { field: "tiempox", headerName: "tiempox", width: 130, renderCell: (params) => <p>{params.row.tiempox}</p> },
    { field: "x", headerName: "x", renderCell: renderButtonProduct, width: 130 },
  ];
  const columnsEstilistas = [
    // { field: "cia", headerName: "cia", width: 250 },
    // { field: "sucursal", headerName: "sucursal", width: 130 },
    { field: "clave", headerName: "clave", width: 130 },
    { field: "estilista", headerName: "estilista", width: 130, renderCell: (params) => <p>{params.row.estilista}</p> },
    { field: "tc", headerName: "tc", width: 130, renderCell: (params) => <input type="checkbox" value={params.row.tc} disabled /> },
    { field: "pr", headerName: "pr", renderCell: renderButtonEstilista, width: 130 },
  ];
  const columnListaEspera = [
    { field: "Accion", headerName: "Accion", renderCell: renderDeleteListaEspera, width: 130 },

    {
      field: "fecha",
      headerName: "hora",
      width: 130,
      renderCell: (params) => <p>{format(new Date(params.row.fecha), "p")}</p>,
    },
    { field: "nombreCompleto", headerName: "Nombre completo", width: 250 },
    { field: "claveEstilista", headerName: "Clave estilista", width: 130 },
    { field: "descripcion", headerName: "Servicio", width: 130, renderCell: (params) => <p>{params.row.descripcion}</p> },
    {
      field: "hora_estimada",
      headerName: "Hora estimada",
      width: 130,
      renderCell: (params) => <p>{format(new Date(params.row.hora_estimada), "p")}</p>,
    },
    { field: "nombreEstilsta", headerName: "Nombre estilista", width: 200 },
  ];

  const postListaEspera = () => {
    console.log({ formClienteEspera });

    if (
      formClienteEspera.no_cliente == null ||
      formClienteEspera.clave_prod == null ||
      formClienteEspera.hora_estimada == null ||
      formClienteEspera.estilista == null
    ) {
      alert("Favor de ingresar todos los datos esperados");
      return;
    } else {
      peinadosApi.post("/ListaEspera", null, {
        params: {
          sucursal: 1,
          no_cliente: formClienteEspera.no_cliente,
          fecha: new Date(),
          clave_prod: formClienteEspera.clave_prod,
          hora_estimada: formClienteEspera.hora_estimada,
          atendido: 1,
          estilista: formClienteEspera.estilista,
          tiempo_servicio: 0,
          usuario_registra: 1,
          usuario_cita: formClienteEspera.no_cliente,
          usuario_servicio: 0,
          usuario_elimina: 0,
        },
      });
    }
    alert("Lista de espera creado con éxito");
    getListaEspera();
  };
  const postCrearCita = async () => {
    let fechaActual = new Date();
    // Extrae el año, mes y día
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth(); // Nota: getMonth() devuelve un valor de 0 a 11, donde 0 es enero y 11 es diciembre
    let día = fechaActual.getDate();
    let fechaSinHora = new Date(año, mes, día);

    if (formClienteEspera == "2") {
      alert("Faltan por ingresar datos favor de verificar");
    } else {
      await peinadosApi
        .post("/DetalleCitas", null, {
          params: {
            cia: 1,
            sucursal: 1,
            no_estilista: "formCita",
            no_cliente: "formCita",
            dia_cita: "formCita",
            hora_cita: "formCita",
            fecha: fechaSinHora,
            tiempo: 50,
            user: "formCita",
            importe: 0,
            cancelada: false,
            stao_estilista: 1,
            nota_canc: 0,
            registrada: true,
            observacion: 0,
            user_uc: 0,
            estatus: formClienteEspera == "2" ? 3 : formClienteEspera == "3" ? 2 : 4,
          },
        })
        .then((response) => {
          // setFormCitaServicio({ ...formCitaServicio, idCita: response.data.mensaje2 });
          // setOpen(true);
          // setAgregarServicios(true);
          alert("Cita creada con éxito");
        })
        .catch((error) => {
          alert(`Hubo un error, ${error}`);
        });
    }
  };
  return (
    <div>
      <Container>
        <h1>Lista de espera</h1>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "end" }}>
          <Button
            style={{ marginBottom: "10px" }}
            color="success"
            onClick={() => {
              setOpenListaEspera(true);
            }}
          >
            Agregar Lista de espera
          </Button>
        </div>

        <DataGrid rows={dataListaEspera} columns={columnListaEspera} />
      </Container>

      <Modal isOpen={openListaEspera} toggle={() => setOpenListaEspera(false)} size="lg">
        <ModalHeader toggle={() => setOpenListaEspera(false)}>Agregar listas de espera</ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="cliente">Hora</Label>
                {/* <InputGroup>
                  <Input defaultValue={format(formClienteEspera.fecha, "p")} type="text" name="fecha" id="fecha" disabled />
                </InputGroup> */}
              </FormGroup>
              <FormGroup>
                <Label for="cliente">Cliente</Label>
                <InputGroup>
                  <Input value={formClienteEspera.descripcion_no_cliente} type="text" name="cliente" id="cliente" disabled />
                  <Button onClick={() => setClientesModal(true)}>Agregar</Button>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="productoServicio">Producto/Servicio</Label>
                <InputGroup>
                  <Input type="text" name="productoServicio" id="productoServicio" disabled value={formClienteEspera.descripcion_clave_prod} />
                  <Button
                    onClick={() => {
                      setProductosModal(true);
                    }}
                  >
                    Agregar
                  </Button>
                </InputGroup>
              </FormGroup>{" "}
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="tiempoServicio">Tiempo de servicio</Label>
                <Input type="text" name="tiempoServicio" id="tiempoServicio" disabled value={formClienteEspera.tiempo_servicio} />
              </FormGroup>
              <FormGroup>
                <Label for="horaEstimada">Hora estimada</Label>
                <Input
                  type="time"
                  name="hora_estimada"
                  id="hora_estimada"
                  onChange={(param) => {
                    const now = new Date();
                    const [hours, minutes] = param.target.value.split(":").map(Number);
                    now.setHours(hours, minutes, 0); // Asume que los segundos y milisegundos son 0
                    setformClienteEspera({ ...formClienteEspera, hora_estimada: now });
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="cliente">Estilista</Label>
                <InputGroup>
                  <Input value={formClienteEspera.estilista} type="text" name="estilista" id="estilista" disabled />
                  <Button onClick={() => setEstilistasModal(true)}>Agregar</Button>
                </InputGroup>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              postListaEspera();

              setOpenListaEspera(!openListaEspera);
              setformClienteEspera([]);
            }}
          >
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={clientesModal} toggle={() => setClientesModal(!clientesModal)} size="xl">
        <ModalHeader toggle={() => setClientesModal(!clientesModal)}>Agregar cliente</ModalHeader>
        <ModalBody>
          {/* <DataGrid rows={dataClientes} columns={columnsClientes} /> */}

          <MaterialReactTable
            columns={columnsClientes2}
            data={dataClientes}
            initialState={{ density: "compact" }}
            muiTableContainerProps={{ sx: { maxHeight: "350px" } }}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setClientesModal(!clientesModal)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={productosModal} toggle={() => setProductosModal(!productosModal)} size="xl">
        <ModalHeader toggle={() => setProductosModal(!productosModal)}>Agregar producto</ModalHeader>
        <ModalBody>
          <DataGrid rows={dataProductos} columns={columnsProductos} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setProductosModal(!productosModal)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={estilistasModal} toggle={() => setEstilistasModal(!estilistasModal)} size="lg">
        <ModalHeader toggle={() => setEstilistasModal(!estilistasModal)}>Agregar estilista</ModalHeader>
        <ModalBody>
          <DataGrid rows={dataEstilistas} columns={columnsEstilistas} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setEstilistasModal(!estilistasModal)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ListaEspera;
