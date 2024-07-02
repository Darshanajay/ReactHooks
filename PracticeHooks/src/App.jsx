
import { useState } from 'react'
import './App.css'
import PracticeUseEffect from './components/PracticeUseEffect'

function App() {
  const [state,setState] = useState(true);
  return (
    <>
    <button onClick={()=>{
      setState(false)
    }}>Toggle</button>
    {state ? <PracticeUseEffect></PracticeUseEffect> : "" }
    
    </>
  )
}

export default App
