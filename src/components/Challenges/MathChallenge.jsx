import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../styles/components/MathChallenge.scss"

const generateRandomMathOperations = (numQuestions = 3, min = 1, max = 50) => {
  const operations = [];
  for (let i = 0; i < numQuestions; i++) {
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const operationType = Math.random() > 0.5 ? "sum" : "subtract";
    const operation = operationType === "sum" ? `${num1} + ${num2}` : `${num1} - ${num2}`;
    const correctAnswer = operationType === "sum" ? num1 + num2 : num1 - num2;
    operations.push({ operation, correctAnswer });
  }
  return operations;
};

const MathChallenge = ({ prompt, onAnswer, correctMessage, failMessage, stopTimer, points }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [feedback, setFeedback] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(generateRandomMathOperations());
  }, []);

  const onSubmit = (data) => {
    stopTimer();
    const isCorrect = questions.every(
      (question, index) => parseInt(data[`answer${index}`]) === question.correctAnswer
    );
    setFeedback(isCorrect ? correctMessage : failMessage);
    onAnswer(isCorrect, points);
    reset();
  };

  return (
    <div className="math-container">
      <div className="math-box">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>{prompt}</p>
          {questions.map((question, index) => (
            <div key={question.operation} className="math-question">
              <p>{question.operation}</p>
              <input
                {...register(`answer${index}`, { required: "¡Hey, completa esto!" })}
                type="number"
                className="math-input"
              />
              {errors[`answer${index}`] && <p className="error">{errors[`answer${index}`].message}</p>}
            </div>
          ))}
          <button type="submit" className="math-submit-button">Responder</button>
          {feedback && <p className="feedback">{feedback}</p>}
        </form>
      </div>
    </div>
  );
};

export default MathChallenge;