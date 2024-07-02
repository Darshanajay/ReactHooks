import React from 'react'
import { memo } from 'react'

const UseMemoH = ({adjective , getAdjective}) => {
    console.log("nav bar rendered")
  return (
    <>
    I am a {adjective} Navbar
    <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </>
  )
}

export default memo(UseMemoH)