import React, { useState, useEffect } from "react";

const Timer = () => {
  // Estado para almacenar la hora actual
  const [horaActual, setHoraActual] = useState(new Date());

  useEffect(() => {
    // Función para actualizar la hora actual
    const actualizarHora = () => {
      setHoraActual(new Date());
    };

    // Establecer un intervalo para actualizar la hora cada segundo (1000 milisegundos)
    const idIntervalo = setInterval(actualizarHora, 1000);

    // Función de limpieza para limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(idIntervalo);
    };
  }, []); // El arreglo vacío indica que este efecto no depende de ninguna propiedad o estado, por lo que solo se ejecuta al montar y desmontar el componente

  // Formatear la hora a un string legible. Puedes ajustar el formato como prefieras.
  const horaFormateada = horaActual.toLocaleTimeString();
  return (
    <div className="timer">
      <h2> {horaFormateada}</h2>
    </div>
  );
};

export default Timer;
