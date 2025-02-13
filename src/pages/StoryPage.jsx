import React, { useContext, useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Narration from "../components/Narration";
import Challenge from "../components/Challenge";
import ScoreBoard from "../components/ScoreBoard";
import Timer from "../components/Timer";
import { PlayerContext } from "../context/PlayerContext";
import { storyData } from "../data/story1/storyData";

const storyDataMap = {
  1: storyData,
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
};

const replacePlayerName = (data, playerName) => {
  if (typeof data === "string") {
    return data.replace(/{{name}}/g, playerName);
  } else if (Array.isArray(data)) {
    return data.map(item => replacePlayerName(item, playerName));
  } else if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, replacePlayerName(value, playerName)]),
    );
  }
  return data;
};

const StoryPage = () => {
  const { levelId } = useParams();
  const { player } = useContext(PlayerContext);
  const navigate = useNavigate();
  const storyData = storyDataMap[levelId] || storyData;
  const isLevelEmpty = storyData.length === 0;

  if (isLevelEmpty) {
    return (
      <div className="level-not-available">
        <h2>Nivel en desarrollo</h2>
        <p>Este nivel aun está en desarrollo. ¡La paciencia es el camino de la Fuerza!</p>
      </div>
    );
  }

  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [narrationPlayerText, setNarrationPlayerText] = useState(
    storyData.find(item => item.id === "narration_player_text")?.text || ""
  );

  const personalizedStory = useMemo(() => replacePlayerName(storyData, player.name), [player.name]);
  const [story, setStory] = useState(personalizedStory);

  const handleAnswer = (isCorrect, points) => {
    setScore(prevScore => {
      const newScore = isCorrect ? prevScore + points : prevScore;
      
      const nextStepId = isCorrect ? story[step].correct : story[step].fail;
      const nextStep = story.findIndex(item => item.id === nextStepId);
      
      setStep(nextStep !== -1 ? nextStep : prev => prev + 1);
      
      return newScore;
    });
  };

  const handleNextStep = () => {
    const currentStepData = story[step];
    const nextStep =
      currentStepData?.id === story[step - 1]?.correct && story[step + 1]?.id?.includes("narration_fail")
        ? step + 2
        : step + 1;
    setStep(nextStep);
  };

  useEffect(() => {
    if (step >= story.length) {
      setTimeout(() => {
        navigate("/end-game", { state: { finalScore: score } });
      }, 100);
    }
  }, [step, story.length, score, navigate]);

  const currentStepData = story[step];
  const { type, id, correct, fail, text, time, img } = currentStepData || {};

  useEffect(() => {
    if (type === "challenge" && currentStepData?.timer !== null) {
      setStartTimer(true);
      setIsTimerActive(true);
    } else {
      setStartTimer(false);
      setIsTimerActive(false);
    }
  }, [step, story]);

  return (
    <div>
      <ScoreBoard score={score} />

      {type === "narration" ? (
          <Narration
            text={id === "narration_player_text" ? narrationPlayerText : text}
            img={img}
            onNext={handleNextStep}
        />
      ) : (
        <>
          <Challenge
            challengeData={currentStepData}
            onAnswer={handleAnswer}
            stopTimer={() => setIsTimerActive(false)}
            setNarrationPlayerText={setNarrationPlayerText}
          />
          <Timer
            time={time}
            onTimeUp={() => setStep(prev => prev + 1)}
            isActive={isTimerActive}
            startTimer={startTimer}
          />
        </>
      )}
    </div>
  );
};

export default StoryPage;