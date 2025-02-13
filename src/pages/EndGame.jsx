import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import useFetchImage from "../hooks/useFetchImage";
import "../styles/pages/EndGame.scss";

const EndPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { player } = useContext(PlayerContext);
  const finalScore = location.state?.finalScore || 0;
  const imageUrl = finalScore > 600 ? useFetchImage(player.wish) : "";

  return (
    <div className="end-page">
      <h2>¡Has completado el nivel!</h2>
      <h3>Multicréditos: {finalScore}</h3>

      {finalScore < 600 ? (
        <p>No has conseguido suficientes multicréditos para obtener tu deseo. ¡No te desanimes, camarada!</p>
      ) : (
        <>
          <p>¡Enhorabuena, has conseguido suficientes multicréditos para obtener tu deseo! ¡Aquí lo tienes!</p>
          {imageUrl && <img src={imageUrl} alt={player.wish} className="wish-image" />}
        </>
      )}

      <button onClick={() => navigate("/level-selector")}>Terminar</button>
    </div>
  );
};

export default EndPage;
