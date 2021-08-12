import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./useWordGame";
import "./styles.css";

function App() {
  const {
    text,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textBoxRef,
    handleChange,
    startGame
  } = useWordGame(15);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
