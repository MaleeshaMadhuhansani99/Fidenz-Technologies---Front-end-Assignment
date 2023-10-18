import React from 'react'
import Home from './Components/Home'
import Footer from './Components/Footer'

const Layout=({children}) =>{
  return (
    <div>
      <Home />
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
