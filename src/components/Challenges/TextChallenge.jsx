import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/components/TextChallenge.scss";

const TextChallenge = ({ prompt, onAnswer, correctMessage, failMessage, stopTimer, points, setNarrationPlayerText }) => {
  const { register, handleSubmit, reset } = useForm();
  const [feedback, setFeedback] = useState("");
  const [playerText, setPlayerText] = useState("");

  const onSubmit = (data) => {
    stopTimer();
    const inputText = data.answer.trim();
    const isCorrect = inputText.length >= 10;

    if (isCorrect) {
      setNarrationPlayerText(inputText);
    }

    setFeedback(isCorrect ? correctMessage : failMessage);
    onAnswer(isCorrect, points);
    reset();
    setPlayerText("");
  };

  return (
    <>
    <div className="container">
      <form className="challenge" onSubmit={handleSubmit(onSubmit)}>
        <p className="challenge__prompt">{prompt}</p>
          <textarea
          {...register("answer")}
          className="challenge__input"
          onChange={(e) => setPlayerText(e.target.value)}
          value={playerText}
          placeholder="Escribe tu historia aquí ;)"
          />
        <button type="submit" className="challenge__button">Crear historia</button>
        {feedback && <p className="challenge__feedback">{feedback}</p>}
    </form>
    </div>
    </>

  );
};

export default TextChallenge;