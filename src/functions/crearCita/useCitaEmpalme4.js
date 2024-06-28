import { useEffect, useState } from "react";
import { peinadosApi } from "../../api/peinadosApi";
import { format } from "date-fns-tz";

export const useCitaEmpalme = ({ tiempoCita, fechacita, no_estilista }) => {
  const [dataCitaEmpalme, setdataCitaEmpalme] = useState([]);

  const fetchCitaEmpalme = async (tiempoCitaFetch, fechaCitaFetch, no_estilistaFetch) => {
    try {
      const response = await peinadosApi.get(
        `/sp_citaEmpalme4?tiempoCita=${tiempoCitaFetch ? tiempoCitaFetch : tiempoCita}&fechacita=${format(
          fechaCitaFetch ? fechaCitaFetch : fechacita,
          "yyyy-MM-dd HH:mm"
        )}&no_estilista=${no_estilistaFetch ? no_estilistaFetch : no_estilista}`
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
