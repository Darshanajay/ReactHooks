import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenereter = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]`";

    for (let i = 1; i <= str.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="cont">
        <div className="innercont">
          <input type="password" placeholder="Password" className="inpu" />
          <button className="but">copy</button>

          <input type="range" />
          <p>Length:"12"</p>
          <input type="checkbox" />
          <p>Numbers</p>
          <input type="checkbox" />
          <p>Chracters</p>
        </div>
      </div>
    </>
  );
}

export default App;
