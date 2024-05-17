import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";
import { format } from "date-fns-tz";

export const useHorarioDisponibleEstilistas6 = ({ fecha, cveEmpleado, tiempo }) => {
  const [dataHorarioDisponibleEstilistas, setdataHorarioDisponibleEstilistas] = useState([]);

  const fetchHorarioDisponibleEstilistas = async () => {
    try {
      const response = await peinadosApi.get(
        `/sp_horarioDisponibleEstilistas6?fechaDisponibilidad=${format(fecha, "yyyy-MM-dd HH:mm")}&cveEmpleado=${cveEmpleado}&tiempo=${tiempo}`
      );
      setdataHorarioDisponibleEstilistas(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tiempo == "" || !tiempo) return;
    fetchHorarioDisponibleEstilistas();
  }, [tiempo]);
  return { dataHorarioDisponibleEstilistas, fetchHorarioDisponibleEstilistas };
};
