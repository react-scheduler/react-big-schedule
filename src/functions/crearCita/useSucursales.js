import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useSucursales = () => {
  const [dataSucursales, setDataSucursales] = useState([]);

  const fetchSucursales = async () => {
    try {
      const response = await peinadosApi.get("/sucursales?id=%");
      setDataSucursales(response.data);
      console.log({ dataSucursales });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSucursales();
  }, []);

  return { dataSucursales, fetchSucursales };
};
