import React from 'react'
import { useEffect, useState } from 'react'

const PracticeUseEffect = () => {
    let [count,setCount] = useState(0);

  const inc = () => { 
    setCount(count=count+1)
   }
  const dec = () => { 
    setCount(count=count-1)
   }

  useEffect(()=>{
    console.log("component mounted");
    
    return function(){
      console.log("cmp UNmounted")
    }
  },[])

  useEffect(()=>{
    console.log("counter changed");
  },[count]);




    
  return (
    <>
    <h1>Number:{count}</h1>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    </>
  )
}

export default PracticeUseEffect