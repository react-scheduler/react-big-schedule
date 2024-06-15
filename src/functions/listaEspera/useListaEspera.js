import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useListaEspera = ({ id, sucursal }) => {
  const [dataListaEspera, setDataListaEspera] = useState([]);

  const fetchListaEspera = async () => {
    console.log("AAAAAAAA");
    try {
      const response = await peinadosApi.get(`/ListaEspera?id=${id}&sucursal=${sucursal}`);
      setDataListaEspera(response.data);
      console.log("Fetched data:", response.data); // O usa response.data aquí
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListaEspera();
  }, [id, sucursal]); // Incluye id y sucursal en las dependencias

  return { dataListaEspera, fetchListaEspera };
};
