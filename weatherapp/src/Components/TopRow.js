import React from 'react'
import clouds from '../imgs/fewclouds.png'

function TopRow({desiredCity, finalFormattedDate}) {
  return (
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
              Temp Min: {desiredCity.main ? desiredCity.main.temp_min : ''}°C
            </p>
            <p>
              Temp Max: {desiredCity.main ? desiredCity.main.temp_max : ''}°C
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TopRow
