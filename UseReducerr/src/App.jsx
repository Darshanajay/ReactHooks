import { act, useReducer, useState } from 'react'
import './App.css'


const initialState = 0;
const reducer = (state , action) => {
  console.log(state , action);
  if(action.type === "Increment"){
    return state + 1;
  }else {
    return state -1;
  }
  
}

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //         <p>{count}</p>
  //         <div className="btnStylePosition">
  //           <button onClick={() => setCount(count + 1 )}>Inc</button>
  //           <button onClick={() => setCount(count - 1)}>Dec</button>
  //         </div>
  //     </div>
  //   </>
  // )
  // const [count, setCount] = useState(0)

 const [state, dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <div>
          <p>{state}</p>
          <div className="btnStylePosition">
            <button onClick={() => dispatch({type: "Increment"})}>Inc</button>
            <button onClick={() => dispatch({type: "Decrement"})}>Dec</button>
          </div>
      </div>
    </>
  )  
}

export default App
