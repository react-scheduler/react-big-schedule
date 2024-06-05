import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useDetalleCitasObservaciones = ({ idCliente }) => {
  const [dataCitasObservaciones, setDataCitasObservaciones] = useState([]);

  const fetchDetalleCitasObservaciones = async () => {
    try {
      const response = await peinadosApi.get(`/sp_detalleCitasObservaciones3?idCliente=${idCliente}`);
      setDataCitasObservaciones(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (!idCliente) return;
  //   fetchDetalleCitasObservaciones();
  // }, [idCliente]);

  return { dataCitasObservaciones, fetchDetalleCitasObservaciones };
};
