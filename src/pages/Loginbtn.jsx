import React, { useState } from 'react'
import Home from './Home'

function Loginbtn() {
    let [up,setUP]=useState("")
    let upHandler = ()=>{
        setUP()
    }
  return (
    <>
      <Home/>
    </>
  )
}

export default Loginbtn
