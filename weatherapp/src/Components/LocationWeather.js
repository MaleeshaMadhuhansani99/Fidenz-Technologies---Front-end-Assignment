// import logo from './logo.svg';
import React from 'react';
import Card from './Card.js';

import logo from '../imgs/weatherapp.png'
import cityData from './cities.json';
import Footer from './Footer.js';


const LocationWeather = () => {

  const codes = cityData.List.map((city) => city.CityCode);
  return (
<div>
      <div className="App">
     <div className="header">
           <img src={logo} className="logo"></img>
            <h1 className="headertext">
             Weather App
          </h1>
    </div>
         <div>
         <Card cityCode={codes[0]} /> 
         </div>

         <div className='footer'>
            <Footer/>
         </div>
     </div>
     </div>
 
  )
}


export default LocationWeather;

