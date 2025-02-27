import React, { useState, useEffect, useRef } from "react";
import "../styles/components/Narration.scss";

const BASE_SPEED = 25;
const FAST_SPEED = 10;

const Narration = ({ text, img, onNext }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const speedRef = useRef(BASE_SPEED);
  const indexRef = useRef(0);
  const animationFrameRef = useRef(null);
  const lastUpdateRef = useRef(performance.now());

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    indexRef.current = 0;
    lastUpdateRef.current = performance.now();

    const updateText = (timestamp) => {
      const elapsed = timestamp - lastUpdateRef.current;
      if (elapsed >= speedRef.current) {
        indexRef.current += 1;
        setDisplayedText(text.slice(0, indexRef.current));
        lastUpdateRef.current = timestamp;
      }

      if (indexRef.current < text.length) {
        animationFrameRef.current = requestAnimationFrame(updateText);
      } else {
        setIsComplete(true);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateText);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [text]);

  const handleMouseDown = () => {
    speedRef.current = FAST_SPEED;
  };

  const handleMouseUp = () => {
    speedRef.current = BASE_SPEED;
  };

  return (
    <div className="narration-container" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      {img && (
        <img
          className={`narration-image ${imageLoaded ? "loaded" : ""}`}
          src={img}
          alt="Narración"
          onLoad={() => setImageLoaded(true)}
        />
      )}
      <p
        className="narration-text"
        dangerouslySetInnerHTML={{ __html: displayedText.replace(/\n/g, "<br>") }}
      />
      <button className="narration-button" onClick={onNext} disabled={!isComplete}>
        Continuar
      </button>
    </div>
  );
};

export default Narration;
