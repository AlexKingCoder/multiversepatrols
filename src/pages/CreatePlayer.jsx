import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";
import "../styles/pages/CreatePlayer.scss"

const CreatePlayer = () => {
  const { register, handleSubmit } = useForm();
  const { setPlayer } = useContext(PlayerContext);
  const navigate = useNavigate();
  const location = useLocation();
  const levelId = location.state?.levelId;

  const onSubmit = (data) => {
    setPlayer(data);
    if (levelId) {
      navigate(`/story/${levelId}`);
    } else {
      navigate("/level-selector");
    }
  };

  return (
    <div className="create-player">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Elige tu nombre de personaje:
        <input {...register("name", { required: true })} type="text" autoComplete="off" />
        </label>
        <label>
          ¿Cuál es tu deseo? Te lo concederemos si alcanzas una puntuación digna al final de juego* ☺️
        <input {...register("wish", { required: true })} type="text" autoComplete="off" />
        </label>
        <button type="submit">¡Vamos allá! ¡Por el Multiverso!</button>
      </form>
      <footer>
        <p>*La gestión de los deseos es realizada por nuestros becarios de Irlanda. Por ello, para una mayor satisfacción, es mejor que escribas tu deseo en inglés.</p>
      </footer>
    </div>
    
  );
};

export default CreatePlayer;