import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <h1>Score : {score}</h1>

      <div className="btn-section">
        <button onClick={() => setScore(score - 1)}>Decrease</button>
        <button onClick={() => setScore(0)}>Reset</button>
        <button onClick={() => setScore(score + 1)}>Increase</button>
      </div>
    </>
  );
}

export default App;
