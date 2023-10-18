import React from 'react'
import Home from './Components/Home'

const Layout=({children}) =>{
  return (
    <div>
      <Home />
      {children}
    </div>
  )
}

export default Layout
