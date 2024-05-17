import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";
import { format } from "date-fns-tz";

export const useCitaEmpalme = ({ tiempoCita, fechacita, no_estilista }) => {
  const [dataCitaEmpalme, setdataCitaEmpalme] = useState([]);

  const fetchCitaEmpalme = async () => {
    try {
      const response = await peinadosApi.get(
        `/sp_citaEmpalme4?tiempoCita=${tiempoCita}&fechacita=${format(fechacita, "yyyy-MM-dd HH:mm")}&no_estilista=${no_estilista}`
      );
      setdataCitaEmpalme(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tiempoCita == "" || !tiempoCita) return;
    fetchCitaEmpalme();
  }, [tiempoCita]);
  return { dataCitaEmpalme, fetchCitaEmpalme };
};
