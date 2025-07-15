import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
  return (
    <div>
      I am a {adjective} navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
 