import React from "react";
import "./App.css";
// components

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      Quiz App
      <button className="start" onClick={startTrivia}>
        start
      </button>
      <p className="score">Score: </p>
      <div className="loader"></div>
    </div>
  );
};

export default App;
