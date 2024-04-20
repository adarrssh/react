import React, { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {

  console.log("navbar is rendered")

  return (
    <div>
         i am a {adjective} navbar
         <button onClick={()=> {getAdjective()}}></button>
    </div>
  )
}

export default memo(Navbar)