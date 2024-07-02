import { useEffect, useState ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  

  // Use case 1 notreinitialize the variable
  // not rerender the component
  // const a = useRef(0)

  // useEffect(() => {
  //   a.current++
  //   console.log(`"rerendering the value of a is ${a.current}`);
  // })

  const ref = useRef()
  
  useEffect(()=>{
    console.log(`First rendering..`)
    ref.current.style.backgroundColor = "red";
  },[]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
