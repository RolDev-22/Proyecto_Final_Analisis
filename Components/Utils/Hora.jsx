import React, { useState, useEffect } from 'react';

const Hora = () => {
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedTime;
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000); // Update time every second

    return () => {
      clearInterval(intervalID); // Clean up the interval on unmounting the component
    };
  }, []);

  return <label>{time}</label>;
};

export default Hora;