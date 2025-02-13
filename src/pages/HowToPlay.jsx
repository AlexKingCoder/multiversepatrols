import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/HowToPlay.scss";

const HowToPlay = () => {
  const navigate = useNavigate();

  return (
    <div className="how-to-play">
      <h2>Cómo jugar</h2>
      <ul>
        <li>¡Bienvenido, aspirante! En este manual encontrarás todo lo que necesitas para ser un patrullero de primera.</li>
        <li className="important">Avanza en cada nivel completando los distintos desafíos.</li>
        <li>¡Permanece alerta! Hay muchos tipos de desafíos y pueden aparecer en cualquier momento.</li>
        <li className="important">Si resuelves un desafío, obtendrás multicréditos.</li>
        <li>Al iniciar el juego, podrás pedir un deseo. Puede ser cualquier cosa. Una casa en la playa, un coche nuevo...</li>
        <li className="important">Obtén suficientes multicréditos al final del nivel y se te concederá tu deseo ☺️</li>
        <li>¡Bienvenido a Multiverse Patrols!</li>
      </ul>
      <button onClick={() => navigate("/")}>Volver al menú</button>
    </div>
  );
};

export default HowToPlay;