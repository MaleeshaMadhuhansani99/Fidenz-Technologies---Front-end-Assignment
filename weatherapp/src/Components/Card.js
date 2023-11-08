import React, {useEffect, useState} from 'react'
import './Weather.css'
import {Link, useLocation} from 'react-router-dom'
import {apiBaseUrl, units} from '../constants.js'
import TopRow from './TopRow.js'
import BottomRow from './BottomRow.js'

const Card = ({cityCode}) => {
  const location = useLocation()
  const [desiredCity, setDesiredCity] = useState({})

  const currentDate = new Date()

  //get date and time
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

  //connecting to the weathermap
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${apiBaseUrl}?id=${cityCode}&units=${units}&appid=${process.env.REACT_APP_WEATHERMAP_KEY}`
        const response = await fetch(apiUrl)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        setDesiredCity(data.list[0])
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchData()
  }, [cityCode])

  return (
    <div className="container">
      <div className="card">
        <div className="top_row">
          <h2 className={'location1'}>{desiredCity.name}</h2>
          <p className="date1">{finalFormattedDate} </p>

          <TopRow
            desiredCity={desiredCity}
            finalFormattedDate={finalFormattedDate}
          />

          <div className="bottom_row">
            <BottomRow desiredCity={desiredCity} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
