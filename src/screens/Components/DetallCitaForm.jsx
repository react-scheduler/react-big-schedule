import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import LayoutBoxGeneric from "../../Layout/LayoutBoxGeneric";

export default function DetallCitaForm(formCita, setClientesModal, handleOpen) {
  return (
    <>
      <LayoutBoxGeneric>
        <TextField disabled value={formCita.nombreCliente} size="small" id="cliente" label="Cliente" variant="outlined" fullWidth />
        <Button onClick={() => setClientesModal(true)}>Open Clientes Modal</Button>

        <TextField disabled defaultValue={formCita.puntos} size="small" id="puntos" label="Puntos" variant="outlined" fullWidth />
        <Button variant="contained">HP</Button>
        <Button variant="contained">HV</Button>
      </LayoutBoxGeneric>
      <LayoutBoxGeneric>
        <TextField defaultValue={formCita.esPlatino} size="small" siz id="standard-basic" label="PLATINO" variant="outlined" fullWidth />
      </LayoutBoxGeneric>
      <LayoutBoxGeneric>
        <TextField size="small" siz id="standard-basic" label="Observaciones" variant="outlined" fullWidth />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Serv. Domicilio" />
      </LayoutBoxGeneric>
      <LayoutBoxGeneric>
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
        <Button onClick={handleOpen}>Guardar</Button>
      </LayoutBoxGeneric>
    </>
  );
}
