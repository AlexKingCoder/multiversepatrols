import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/pages/MainMenu.scss';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
      <div id="title">
        <button onClick={() => navigate("/level-selector")}>Comenzar</button>
        <button onClick={() => navigate("/how-to-play")}>Cómo jugar</button>
        <footer>
        <p>Idea original de Alex Gil (King Coder) - El creador no posee los derechos de los nombres de las marcas mencionadas en el juego. Amén.</p>
      </footer>
      </div>
  );
};

export default MainMenu;