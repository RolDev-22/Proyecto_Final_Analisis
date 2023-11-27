import React, { useState, useEffect } from 'react';

export default function Fecha(){
    const [fechaActual, setFechaActual] = useState('');

  useEffect(() => {
    const obtenerFechaActual = () => {
      const fecha = new Date();
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
      const fechaFormateada = fecha.toLocaleDateString('es-ES', options);
      setFechaActual(fechaFormateada);
    };

    obtenerFechaActual();
    const interval = setInterval(obtenerFechaActual, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <label>{fechaActual}</label>;

}