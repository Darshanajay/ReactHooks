import React from 'react'

const Memo = ({exp , inC , count1}) => {
  return (
    <>
    <p>I am learning Memo Hook {exp}{() => count1()}</p>
    <button onClick={()=> inC()}>Click to change</button>
    </>
  )
}

export default Memo