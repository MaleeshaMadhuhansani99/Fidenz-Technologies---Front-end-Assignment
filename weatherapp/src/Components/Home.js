// import React from 'react'
import logo from '../imgs/weatherapp.png'
import Dashboard from './Dashboard'


import React from 'react'

function Home() {
  return (

      <div className="App">
     <div className="header">
           <img src={logo} className="logo"></img>
            <h1 className="headertext">
             Weather App
          </h1>
</div>
         <div>
             <Dashboard/>
         </div>
     </div>
 
  )
}

export default Home

