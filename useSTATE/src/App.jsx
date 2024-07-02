import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const addValue = () => {
    if (counter != 20) {
      counter++;
      setCounter(counter);
    }
  };

  const reMove = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  };

  let [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Darshan</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={reMove}> Remove Value</button>
    </>
  );
}

export default App;
