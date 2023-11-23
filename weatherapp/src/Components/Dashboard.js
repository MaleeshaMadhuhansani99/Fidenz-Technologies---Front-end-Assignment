import React, {useState} from 'react'
// import './Weather.scss'
import './weatherapp.css'
import Card from './Card'
import cityData from '../cities.json'
import arrow from '../imgs/back-arrow.png'

const Dashboard = () => {
  const codes = cityData.List.map((city) => city.CityCode) //map city codes to an array

  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick = (code) => {
    setSelectedCard(code)
  }

  // call all the card in the dashboard
  return (
    <div className="dashboard">
      {!selectedCard && (
        <div>
          <div className="search">
            <input className="addCity" placeholder=" Enter a city" />
            <button className="addCityBtn">Add City</button>
          </div>
          <div className="cards-container">
            <div className="card-grid">
              {codes.map((code, index) => (
                <div
                  key={index}
                  className="card-item"
                  onClick={() => handleCardClick(code)}
                >
                  <Card cityCode={code} isSelected={false}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {selectedCard && (
        <div className="centeredcard">
          <div className="centeredcardcontent">
            <img
              className="arrow"
              src={arrow}
              alt="arrow"
              onClick={() => setSelectedCard(null)}
            />
            <Card cityCode={selectedCard} isSelected={true} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
