import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";
import { format } from "date-fns-tz";

export const useDetalleCitasServicios = ({ fecha, noCliente, sucursal, idCita }) => {
  const [dataCitasServicios, setdataCitasServicios] = useState([]);

  const fetchDetalleCitasServicios = async () => {
    try {
      const response = await peinadosApi.get(`/DetalleCitasServicios?fecha=${fecha}&no_cliente=${noCliente}&sucursal=${sucursal}&idCita=${idCita}`);
      setdataCitasServicios(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!idCita || !fecha || !noCliente || !sucursal) return;
    fetchDetalleCitasServicios();
  }, [idCita, noCliente, fecha, sucursal]); // Agrega todas las dependencias relevantes aquí

  return { dataCitasServicios, fetchDetalleCitasServicios, setdataCitasServicios };
};
