import { useState } from "react";
import Toggle from "./Toggle";
import DataFromApi from "./DataFromApi";

const api = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json());

const App = () => {
  const [score, setScore] = useState(0);

  const handleScoreIncrease = () => {
    setScore(score + 1);
  };

  const handleScoreDecrease = () => {
    setScore(score - 1);
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div>
      <h2>Total Score: {score}</h2>

      <button onClick={handleScoreIncrease}>+1</button>
      <button onClick={handleScoreDecrease}>-1</button>
      <button onClick={handleReset}>RESET</button>

      <Toggle />

      <DataFromApi api={api} />
    </div>
  );
};

export default App;