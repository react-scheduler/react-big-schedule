import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { peinadosApi } from "../../api/peinadosApi";

export const useNominaTrabajadores = () => {
  const [dataTrabajadores, setDataTrabajadores] = useState([]);

  const fetchNominaTrabajadores = async () => {
    try {
      const response = await peinadosApi.get(`/NomTrabajadores?id=0`);
      setDataTrabajadores(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNominaTrabajadores();
  }, []);

  return { dataTrabajadores, fetchNominaTrabajadores };
};
