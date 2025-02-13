import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "../../styles/components/DragDropChallenge.scss";

const ItemType = { CONCEPT: "concept" };

const DraggableConcept = ({ concept, id, assignedId }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.CONCEPT,
    item: { id },
    canDrag: !assignedId,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`draggable-concept ${assignedId ? "assigned" : ""}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {concept}
    </div>
  );
};

const DropZone = ({ definition, correctId, onDrop, assignedConcept }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.CONCEPT,
    drop: (item) => onDrop(item.id, correctId),
    canDrop: () => !assignedConcept,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`drop-zone ${assignedConcept ? "assigned" : ""} ${isOver ? "is-over" : ""}`}
    >
      {definition}
    </div>
  );
};

const DragDropChallenge = ({ instructions, challengeData, onAnswer, correctMessage, failMessage, points, stopTimer }) => {
  const [assignedPairs, setAssignedPairs] = useState({});
  const [feedback, setFeedback] = useState("");
  const [shuffledConcepts, setShuffledConcepts] = useState([]);
  const [shuffledDefinitions, setShuffledDefinitions] = useState([]);
  const [isFinalizing, setIsFinalizing] = useState(false);

  useEffect(() => {
    const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
    setShuffledConcepts(shuffleArray(challengeData.pairs.map(pair => pair.concept)));
    setShuffledDefinitions(shuffleArray(challengeData.pairs.map(pair => pair.definition)));
  }, [challengeData]);

  const handleDrop = (conceptId, definitionId) => {
    setAssignedPairs((prev) => ({ ...prev, [definitionId]: conceptId }));
  };

  const checkAnswer = () => {
    stopTimer();
    setIsFinalizing(true);

    const isCorrect = challengeData.pairs.every((pair) => {
      return assignedPairs[pair.definition] === pair.concept;
    });

    setFeedback(isCorrect ? correctMessage : failMessage);

    onAnswer(isCorrect, points);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="drag-drop-challenge">
        <p>{instructions}</p>
        <div className="drag-drop-container">
          <div className="drag-drop-concepts">
            {shuffledConcepts.map((concept, index) => (
              <DraggableConcept
                key={concept + index}
                concept={concept}
                id={concept}
                assignedId={Object.values(assignedPairs).includes(concept)}
              />
            ))}
          </div>

          <div className="drag-drop-definitions">
            {shuffledDefinitions.map((definition, index) => (
              <DropZone
                key={definition + index}
                definition={definition}
                correctId={definition}
                onDrop={handleDrop}
                assignedConcept={assignedPairs[definition]}
              />
            ))}
          </div>
        </div>

        {Object.keys(assignedPairs).length === shuffledDefinitions.length && !isFinalizing && (
          <button className="drag-drop-finalize-button" onClick={checkAnswer}>Finalizar</button>
        )}

        {feedback && <p className="drag-drop-feedback-message">{feedback}</p>}
      </div>
    </DndProvider>
  );
};

export default DragDropChallenge;