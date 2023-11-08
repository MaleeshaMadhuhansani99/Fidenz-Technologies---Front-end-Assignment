import React from 'react'
import logo from '../imgs/weatherapp.png'

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo"></img>
      <h1 className="headertext">Weather App</h1>
    </div>
  )
}

export default Header
