import React, { useMemo } from "react";
import MathChallenge from "./Challenges/MathChallenge";
import TextChallenge from "./Challenges/TextChallenge";
import MultipleChoiceChallenge from "./Challenges/MultipleChoiceChallenge";
import WordChallenge from "./Challenges/WordChallenge";
import NumberGuessChallenge from "./Challenges/NumberGuessChallenge";
import DragDropChallenge from "./Challenges/DragDropChallenge";

const Challenge = ({ challengeData = {}, onAnswer, stopTimer, setNarrationPlayerText }) => {

  const {
    correct = "",
    fail = "",
    timer = null,
    challengeType = "",
    prompt = "",
    instructions = "",
    question = "",
    options = [],
    correctAnswer = "",
    pairs = [],
    points = ""
  } = challengeData;

  const isTimerActive = timer !== null;

  const renderChallenge = useMemo(() => {
    switch (challengeType) {
      case "math":
        return (
          <MathChallenge 
            prompt={prompt}
            onAnswer={onAnswer}
            correctMessage={correct}
            failMessage={fail}
            stopTimer={stopTimer}
            points={points}
          />
        );
      case "text":
        return (
          <TextChallenge 
            prompt={prompt}
            onAnswer={onAnswer}
            correctMessage={correct}
            failMessage={fail}
            stopTimer={stopTimer}
            points={points}
            setNarrationPlayerText={setNarrationPlayerText}
          />
        );
      case "multiple-choice":
        return (
          <MultipleChoiceChallenge 
            question={question}
            options={options}
            onAnswer={onAnswer}
            correctAnswer={correctAnswer}
            correctMessage={correct}
            failMessage={fail}
            points={points}
            stopTimer={stopTimer}
          />
        );
      case "word":
        return (
          <WordChallenge
            question={question}
            onAnswer={onAnswer}
            correctAnswer={correctAnswer}
            correctMessage={correct}
            failMessage={fail}
            points={points}
            stopTimer={stopTimer}
          />
        );
      case "number-guess":
        return (
          <NumberGuessChallenge
            prompt={prompt}
            onAnswer={onAnswer}
            correctMessage={correct}
            failMessage={fail}
            points={points}
            stopTimer={stopTimer}
          />
        );
      case "drag-and-drop":
        return (
          <DragDropChallenge
            instructions={instructions}
            challengeData={{ pairs }}
            onAnswer={onAnswer}
            correctAnswer={correctAnswer}
            correctMessage={correct}
            failMessage={fail}
            stopTimer={stopTimer}
            points = {points}
          />
        );
      default:
        return <p>Ups! Este tipo de desafío no existe. Revisa los datos, colega.</p>;
    }
  }, []);

  return <div>{renderChallenge}</div>;
};

export default Challenge;