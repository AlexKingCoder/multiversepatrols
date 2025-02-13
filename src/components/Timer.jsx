import React, { useState, useEffect } from "react";
import "../styles/components/Timer.scss";

const Timer = ({ time, onTimeUp, isActive, startTimer }) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    let interval;

    if (isActive && startTimer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, startTimer, seconds]);

  useEffect(() => {
    setSeconds(time);
  }, [time]);

  return (
    <div className="timer-container">
      <h3>Tiempo restante: <span className={`time ${seconds <= 5 ? "low-time" : ""}`}>{seconds}</span> segundos</h3>
    </div>
  );
};

export default Timer;