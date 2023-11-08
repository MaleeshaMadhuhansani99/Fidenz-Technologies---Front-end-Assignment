import React, {useEffect, useState} from 'react'
import './Weather.css'
import {Link, useLocation} from 'react-router-dom'
import clouds from '../imgs/fewclouds.png'
import direction from '../imgs/direction.png'
import cross from '../imgs/cross.png'
import {apiBaseUrl, units} from '../constants.js'
// require('dotenv').config();

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

          <table className="top">
            <tbody>
              <tr>
                <td className="left_column">
                  <h2 className="location2">{desiredCity.name}</h2>
                  <p className="date2">{finalFormattedDate} </p>
                  <img src={clouds} alt="clouds" />
                  <p>Few Clouds</p>
                </td>
                <td className="right_column">
                  <strong>
                    <p className="temp">
                      {desiredCity.main ? desiredCity.main.temp : ''}°C
                    </p>
                  </strong>
                  <p>
                    Temp Min:{' '}
                    {desiredCity.main ? desiredCity.main.temp_min : ''}°C
                  </p>
                  <p>
                    Temp Max:{' '}
                    {desiredCity.main ? desiredCity.main.temp_max : ''}°C
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="bottom_row">
            <table className="bottom">
              <tbody>
                <tr>
                  <td className="column1">
                    <p>
                      Pressure:{' '}
                      {desiredCity.main ? desiredCity.main.pressure : ''}hPa
                    </p>
                    <p>
                      Humidity:{' '}
                      {desiredCity.main ? desiredCity.main.humidity : ''}%
                    </p>
                    <p>
                      Visibility:{' '}
                      {desiredCity.visibility
                        ? desiredCity.visibility / 1000
                        : ''}
                      km
                    </p>
                  </td>
                  <td className="column2">
                    <img src={direction} alt="direction" />
                    <p>4.0m/s 120 Degree</p>
                  </td>
                  <td className="column3">
                    <p>Sunrise: 6.05am</p>
                    <p>Sunset: 6.05am</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
