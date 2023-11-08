import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Dashboard from '../Components/Dashboard'

function Weatherhome() {
  return (
    <div className="App">
      <Header />
      <div>
        <Dashboard />
      </div>
      <Footer />
    </div>
  )
}

export default Weatherhome
