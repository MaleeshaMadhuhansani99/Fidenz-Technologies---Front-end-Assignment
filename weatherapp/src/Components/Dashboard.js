import React, { useState } from 'react';
import './Weather.css';
import Card from './Card';
import cityData from './cities.json';

const Dashboard = () => {
  // const [cityCodes, setCityCodes] = useState([]);
  const codes = cityData.List.map((city) => city.CityCode); //map city codes to an array

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (code) => {
    setSelectedCard(code);
  };


// call all the card in the dashboard
  return (
    <div className='dashboard'>
      <div className='search'>
        <input className='addCity' placeholder=' Enter a city'></input>
        <button className='addCityBtn'>Add City</button>
      </div>
      {selectedCard ? null : (
      <div className='cards-container'>
        <div className='card-grid'>
          {codes.slice(0,5).map((code,index)=>(
          
            <div key={index} className='card-item' onClick={() => handleCardClick(code)}>
              <Card cityCode={code} />
              
            </div>
          ))}
        </div>
      </div>
      )}
      {selectedCard && (
        <div className="centered-card">
          <div className='centered-card-content'>
          <Card cityCode={selectedCard} />
        </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
