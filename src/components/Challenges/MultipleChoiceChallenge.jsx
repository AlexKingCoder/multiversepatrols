import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/components/MultipleChoice.scss"

const MultipleChoiceChallenge = ({ question, options, onAnswer, correctAnswer, correctMessage, failMessage, points, stopTimer }) => {
  const { register, handleSubmit, reset } = useForm();
  const [feedback, setFeedback] = useState("");

  const onSubmit = (data) => {
    stopTimer();

    const isCorrect = data.answer === correctAnswer;
    setFeedback(isCorrect ? correctMessage : failMessage);

    onAnswer(isCorrect, points);
    reset();
  };

  return (
    <div className="multi-container">
      <div className="multi-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{question}</p>
          {options.map((option, index) => (
            <div key={index}>
              <input 
                type="radio"
                id={`option${index}`} 
                value={option} 
                {...register("answer", { required: true })} 
              />
              <label htmlFor={`option${index}`}>{option}</label>
            </div>
          ))}
          <button type="submit">Responder</button>
          {feedback && <p className="feedback">{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default MultipleChoiceChallenge;