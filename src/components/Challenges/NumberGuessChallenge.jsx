import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../styles/components/NumberGuessChallenge.scss";

const NumberGuessChallenge = ({ prompt, onAnswer, correctMessage, failMessage, points, stopTimer }) => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [feedback, setFeedback] = useState("");
  const [correctNumbers, setCorrectNumbers] = useState([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      return Array.from({ length: 6 }, () => Math.floor(Math.random() * 9) + 1);
    };
    setCorrectNumbers(generateRandomNumbers());
  }, []);

  const onSubmit = (data) => {
    stopTimer();

    const userNumbers = [...Array(6)].map((_, index) => parseInt(data[`number${index + 1}`]));
    const isCorrect = userNumbers.every((num, index) => num === correctNumbers[index]);

    setFeedback(isCorrect ? correctMessage : failMessage);
    onAnswer(isCorrect, points);
    reset();
    setCorrectNumbers(Array.from({ length: 6 }, () => Math.floor(Math.random() * 9) + 1));
  };

  return (
    <form className="number-guess" onSubmit={handleSubmit(onSubmit)}>
      <p className="number-guess__prompt">{prompt}</p>
      <div className="number-guess__inputs">
        {[...Array(6)].map((_, index) => {
          const userInput = watch(`number${index + 1}`);
          const isCorrect = parseInt(userInput) === correctNumbers[index];

          return (
            <input
              key={index}
              type="number"
              min="1"
              max="9"
              {...register(`number${index + 1}`, { required: true })}
              className={`number-guess__input ${isCorrect ? "correct" : ""}`}
              onWheel={(e) => e.target.blur()}
              onInput={(e) => {
                if (e.target.value.length > 1) {
                  e.target.value = e.target.value.slice(0, 1);
                }
              }}
            />
          );
        })}
      </div>
      <button className="number-guess__button" type="submit">Desbloquear</button>
      {feedback && <p className="number-guess__feedback">{feedback}</p>}
    </form>
  );
};

export default NumberGuessChallenge;