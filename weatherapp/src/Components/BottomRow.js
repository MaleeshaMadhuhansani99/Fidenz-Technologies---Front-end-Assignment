import React from 'react'
import direction from '../imgs/direction.png'
import './weatherapp.css'

function BottomRow({desiredCity, isSelected}) {
  return (
    <table className={`bottom ${isSelected ? 'selected' : ''}`}>
      <tbody>
        <tr>
          <td className={`column1 ${isSelected ? 'selected' : ''}`}>
            <p>
              Pressure: {desiredCity.main ? desiredCity.main.pressure : ''}
              hPa{' '}
            </p>
            <p>
              Humidity: {desiredCity.main ? desiredCity.main.humidity : ''} %
            </p>
            <p>
              Visibility:{' '}
              {desiredCity.visibility ? desiredCity.visibility / 1000 : ''}
              km{' '}
            </p>
          </td>
          <td className={`column2 ${isSelected ? 'selected' : ''}`}>
            <img className="column2img" src={direction} alt="direction" />
            <p className="column2p"> 4.0 m / s 120 Degree </p>
          </td>
          <td className={`column3 ${isSelected ? 'selected' : ''}`}>
            <p> Sunrise: 6.05 am </p> <p> Sunset: 6.05 am </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BottomRow
