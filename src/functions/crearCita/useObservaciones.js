import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";

export const useObservaciones = ({ idCliente }) => {
  const [dataObservaciones, setdataObservaciones] = useState([]);

  const fetchObservaciones = async (id) => {
    try {
      console.log({ idCliente });
      const response = await peinadosApi.get(`/sp_catObsClintesSel?idCliente=${id ? id : idCliente}`);
      setdataObservaciones(response.data);
      console.log({ dataObservaciones });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idCliente == 0 || !idCliente) return;
    fetchObservaciones();
  }, [idCliente]);

  return { dataObservaciones, fetchObservaciones };
};
