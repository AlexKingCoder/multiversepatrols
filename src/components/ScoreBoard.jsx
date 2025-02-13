import React, { useState, useEffect } from "react";
import "../styles/components/ScoreBoard.scss";

const AnimatedScore = ({ targetScore }) => {
  const [score, setScore] = useState(0);
  const [isScoring, setIsScoring] = useState(false);

  useEffect(() => {
    if (score < targetScore) {
      setIsScoring(true);
      const interval = setInterval(() => {
        setScore((prev) => {
          const nextScore = prev + 1;
          if (nextScore >= targetScore) {
            clearInterval(interval);
            setTimeout(() => setIsScoring(false), 300);
            return targetScore;
          }
          return nextScore;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [targetScore, score]);

  return <span className={`score ${isScoring ? "scoring" : ""}`}>{score}</span>;
};

const ScoreBoard = ({ score }) => {
  return (
    <div className="score-container">
      <h2>Puntuación: <AnimatedScore targetScore={score}/> multicréditos</h2>
    </div>
  );
};

export default ScoreBoard;