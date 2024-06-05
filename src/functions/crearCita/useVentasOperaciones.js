import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";
import { format } from "date-fns-tz";

export const useVentasOperaciones = ({ noVenta, sucursal, idCliente }) => {
  const [DataVentasOperaciones, setDataVentasOperaciones] = useState([]);

  const fetchDataOperaciones = async () => {
    try {
      const response = await peinadosApi.get(`/sp_DetalleVentasOperacionesSel?noVenta=${noVenta}&sucursal=${sucursal}&idCliente=${idCliente}`);
      setDataVentasOperaciones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataOperaciones();
  }, [idCliente, noVenta]);
  return { DataVentasOperaciones };
};
