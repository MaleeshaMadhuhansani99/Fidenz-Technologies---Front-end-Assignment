import React, {useEffect, useState} from 'react'
// import './Weather.scss'
import './weatherapp.css'
import TopRow from './TopRow.js'
import BottomRow from './BottomRow.js'
import fetchData from './CheckCache.js'

const Card = ({cityCode, isSelected}) => {
  const [desiredCity, setDesiredCity] = useState({})

  const currentDate = new Date()

  // get date and time
  const options = {
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  }

  const formattedDate = currentDate.toLocaleString('en-US', options)
  const amOrPm = currentDate.getHours() >= 12 ? 'pm' : 'am'
  const finalFormattedDate = formattedDate + ' ' + amOrPm

  // connecting to the weathermap
  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const data = await fetchData(cityCode)
        setDesiredCity(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchDataAndUpdateState()
  }, [cityCode])

  return (
    <div className="container">
      <div className={`card ${isSelected ? 'selected' : ''}`}>
        <div className={`top_row ${isSelected ? 'selected' : ''}`}>
          {isSelected && (
            <div>
              <h2 className="location1selected">{desiredCity.name}</h2>
              <p className="date1selected">{finalFormattedDate} </p>
            </div>
          )}
          <TopRow
            desiredCity={desiredCity}
            finalFormattedDate={finalFormattedDate}
            isSelected={isSelected}
          />

          <div className={`bottom_row ${isSelected ? 'selected' : ''}`}>
            <BottomRow desiredCity={desiredCity} isSelected={isSelected} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
