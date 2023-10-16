// import logo from './logo.svg';
import React from 'react';
import WeatherCard from './WeatherCard.js';


const LocationWeather = () => {
  return (
    <div className='container'>
      <WeatherCard/>
      <WeatherCard/>
      <WeatherCard/>
    </div>
  );
}

export default LocationWeather;

