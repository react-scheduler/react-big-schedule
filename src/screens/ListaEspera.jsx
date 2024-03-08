import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal, TextField } from "@mui/material";
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
    width: "40%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Box m={2}>
        <Button
          variant={"contained"}
          onClick={() => {
            setOpenListaEspera(true);
          }}
        >
          Agregar Lista de espera
        </Button>
      </Box>
      <DataGrid rows={rows} columns={columns} />
      <Modal
        open={openListaEspera}
        onClose={() => setOpenListaEspera(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField size={"small"} label={"Fecha"} type="time"></TextField>
          <Box display="flex" alignItems={"center"} gap={2}>
            <TextField size={"small"} label={"Cliente"} fullwidth></TextField>
            <Button variant={"contained"} fullwidth>
              Agrregar
            </Button>
          </Box>
          <Box fullwidth display="flex" alignItems={"center"} gap={2}>
            <TextField size={"small"} label={"Producto/servicio"}></TextField>
            <Button variant={"contained"}> Agrregar </Button>
          </Box>
          <TextField size={"small"} label={"Servicio"}></TextField>
          <TextField size={"small"} label={"Hora estimida"}></TextField>
          <TextField size={"small"} label={"Estimida"}></TextField>
        </Box>
      </Modal>
    </div>
  );
}

export default ListaEspera;
