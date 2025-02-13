import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/LevelSelection.scss";

const levels = [
  { id: 1, name: "Entrenamiento" },
  { id: 2, name: "Crisis en Wakanda" },
  { id: 3, name: "El mar de los recuerdos" },
  { id: 4, name: "Disney Wars" },
  { id: 5, name: "Glorias Olvidadas" },
  { id: 6, name: "El ataque de Gepetto" },
];

const LevelSelector = () => {
  const navigate = useNavigate();

  const handleLevelSelect = (levelId) => {
    navigate(`/create-player`, { state: { levelId } });
  };

  return (
    <div className="level-selector">
      <h2>Temporada 1</h2>
      <div className="levels-container">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`level level-${level.id} ${level.id !== 1 ? "locked" : ""}`}
            onClick={() => handleLevelSelect(level.id)}
          >
            {`Nivel ${level.id}: ${level.name}`}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;