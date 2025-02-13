import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/components/WordChallenge.scss";

const WordChallenge = ({ question, onAnswer, correctAnswer, correctMessage, failMessage, points, stopTimer }) => {
  const { register, handleSubmit, reset } = useForm();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (data) => {
    stopTimer();

    const userAnswer = data.answer.trim().toLowerCase();
    const isCorrect = userAnswer === correctAnswer.toLowerCase();
    setFeedback(isCorrect ? correctMessage : failMessage);

    onAnswer(isCorrect, points);

    reset();
  };

  return (
    <div className="word-container">
      <div className="word-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{question}</p>
          <input {...register("answer", { required: true })} type="text" autoComplete="off" />
          <button type="submit">Responder</button>
          {feedback && <p className="feedback">{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default WordChallenge;