import React, { useState, useEffect } from "react";
import "../styles/components/Narration.scss";

const Narration = ({ text, img, onNext }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayedText("");
    setIsComplete(false);
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 25);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="narration-container">
      {img && <img className="narration-image" src={img} alt="Narración" />}
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
