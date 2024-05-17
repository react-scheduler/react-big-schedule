import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useDetalleSaldosPendientes = ({ no_cliente }) => {
  const [dataClientesSaldosPendientes, setdataClientesSaldosPendientes] = useState([]);

  const fetcClientesSaldosPendientes = async () => {
    try {
      const response = await peinadosApi.get(`/sp_DetalleSaldosPendientes5?no_cliente=${no_cliente}`);
      setdataClientesSaldosPendientes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (no_cliente == 0 || !no_cliente) return;
    fetcClientesSaldosPendientes();
  }, [no_cliente]);
  return { dataClientesSaldosPendientes };
};
