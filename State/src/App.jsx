import { useState } from "react";
import Toggle from "./Toggle";
import DataFromApi from "./Componets/DataFromApi";
          
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
  const handleScoreIncreaseSix = () => {
    setScore(score + 6);
  };

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div>
      <h2>Total Score: {score}</h2>

      <button className="btn text-2xl p-4 mx-1 btn-primary rounded-2xl" onClick={handleScoreIncrease}>+1</button>
      <button onClick={handleScoreDecrease}>-1</button>
      <button onClick={handleScoreIncreaseSix}>+6</button>
      <button onClick={handleReset}>RESET</button>

      <Toggle />

      <DataFromApi api={api} />
    </div>
  );
};

export default App;