import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const usesp_ClasificacionSel = ({ idCliente }) => {
  const [dataClasificacion, setDataClasificacion] = useState([]);

  const fetchClasificacionCliente = async () => {
    try {
      const response = await peinadosApi.get(`/sp_ClasificacionSel?idCliente=${idCliente}`);
      setDataClasificacion(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idCliente == 0 || !idCliente) return;
    fetchClasificacionCliente();
  }, [idCliente]);
  return { dataClasificacion };
};
