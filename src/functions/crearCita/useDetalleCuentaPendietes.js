import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useDetalleCuentaPendietes = ({ no_cliente }) => {
  const [dataCuentasPendientes, setDataCuentasPendientes] = useState([]);

  const fetchDetalleCuentaPendientes = async () => {
    try {
      const response = await peinadosApi.get(`/sp_DetalleCuentaPendiente6?no_cliente=${no_cliente}`);
      setDataCuentasPendientes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (no_cliente == 0 || !no_cliente) return;
    fetchDetalleCuentaPendientes();
  }, [no_cliente]);
  return { dataCuentasPendientes };
};
