import React from 'react'
import logo from "../../assets/images/logo-black.png"

const Logo = () => {
  return (
    <div className='logo '>
      <img src={logo} alt="logo" width={120} className='border-r pr-6 p-1'/>
    </div>
  )
}

export default Logo
