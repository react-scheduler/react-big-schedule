import { FormControl, TextField, Button, FormControlLabel, Checkbox, Box, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import Modal from "../components/Modal";
import { DataGrid } from "@mui/x-data-grid";

function CrearCita() {
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
  return (
    <div>
      <h1>Estamos creando la cita</h1>
      <Box marginLeft={6} marginRight={6} display="flex" gap={2} alignItems={"center"} justifyContent={"center"}>
        <TextField defaultValue={formCita.idCliente} size="small" id="cliente" label="Cliente" variant="outlined" fullWidth />
        <Button variant="contained">Buscar</Button>
        <TextField defaultValue={formCita.puntos} size="small" id="puntos" label="Puntos" variant="outlined" fullWidth />
        <Button variant="contained">HP</Button>
        <Button variant="contained">HV</Button>
      </Box>
      <Box marginLeft={6} marginRight={6} marginTop={1} display="flex" justifyContent={"center"}>
        <TextField defaultValue={formCita.esPlatino} size="small" siz id="standard-basic" label="PLATINO" variant="outlined" fullWidth />
      </Box>
      <Box marginLeft={6} marginRight={6} marginTop={1} gap={2} display="flex" justifyContent={"center"} alignItems={"center"}>
        <TextField size="small" siz id="standard-basic" label="Observaciones" variant="outlined" fullWidth />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Serv. Domicilio" />
      </Box>
      <Box marginLeft={6} marginRight={6} marginTop={1} gap={2} display="flex" justifyContent={"center"} alignItems={"center"}>
        <TextField
          size="small"
          type="datetime-local"
          label="Fecha"
          id="outlined-helperText"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField size="small" id="standard-basic" select label="Atiende" variant="outlined" fullWidth />
        <FormControlLabel control={<Checkbox defaultChecked />} label="R" fullWidth />
        <FormControlLabel control={<Checkbox defaultChecked />} label="A" fullWidth />
      </Box>
      <hr />
      <button onClick={() => setAbierto(true)}>Guardar</button>
      <Modal
        isOpen={abierto}
        close={() => {
          setAbierto(false);
        }}
      >
        <Button variant="contained">Ingresar servicios...</Button>
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
      </Modal>
    </div>
  );
}

export default CrearCita;
