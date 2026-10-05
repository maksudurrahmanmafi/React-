import  { useState } from "react";
import Toggle from "./Toggle";
import DataFromApi from "./DataFromApi";

const App = () => {
  const [Score,setScore] = useState(0);
  const handleScoreIncrease = () => {
   
    setScore(Score + 1);
  }
  const handleScoreDecrease = () => {
    setScore(Score - 1);
  }
  const handleReset = () =>{
    setScore(0);
  }
 


  return (
    <div>
      {/* <h2>Total Score: {Score}</h2>
      {
        Six>10 && <h2>Congratulations! You have scored more than 10 sixes!</h2>
      }
      <h2>Total Sixes: {Six}</h2>
      <p>Click the button to increase the score.</p>
      <button onClick={handleScoreIncrease}>Increase 1</button>
      <button onClick={handleScoreIncreaseSix}>Increase 6</button> */}

      <h2>Total Score: {Score}</h2>
      <button onClick={handleScoreIncrease}> +1</button>
      <button onClick={handleScoreDecrease}> -1</button>
      <button onClick={handleReset}>RESET</button>
      <Toggle></Toggle>
      <DataFromApi></DataFromApi>
    </div>
  );
};

export default App;