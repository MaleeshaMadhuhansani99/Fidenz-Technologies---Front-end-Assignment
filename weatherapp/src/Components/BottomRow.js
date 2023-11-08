import React from 'react'
import direction from '../imgs/direction.png'

function BottomRow({desiredCity}) {
  return (
    <table className="bottom">
      <tbody>
        <tr>
          <td className="column1">
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
          <td className="column2">
            <img src={direction} alt="direction" />
            <p> 4.0 m / s 120 Degree </p>
          </td>
          <td className="column3">
            <p> Sunrise: 6.05 am </p> <p> Sunset: 6.05 am </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default BottomRow
