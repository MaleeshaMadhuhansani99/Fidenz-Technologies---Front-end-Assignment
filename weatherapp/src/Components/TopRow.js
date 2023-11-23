import React from 'react'
import clouds from '../imgs/fewclouds.png'
import './weatherapp.css'

function TopRow({desiredCity, finalFormattedDate, isSelected}) {
  return (
    <table className={`top ${isSelected ? 'selected' : ''}`}>
      <tbody>
        <tr>
          <td className={`left_column ${isSelected ? 'selected' : ''}`}>
            <h2 className={`location2 ${isSelected ? 'selected' : ''}`}>{desiredCity.name}</h2>
            <p className={`date2 ${isSelected ? 'selected' : ''}`}>{finalFormattedDate} </p>
            <img className= {`cloud ${isSelected ? 'selected' : ''}`} src={clouds} alt="clouds" />
            <p className={`cloudp ${isSelected ? 'selected' : ''}`}>Few Clouds</p>
          </td>
          <td className={`right_column ${isSelected ? 'selected' : ''}`}>
            <strong>
              <p className={`temp ${isSelected ? 'selected' : ''}`}>
                {desiredCity.main ? desiredCity.main.temp : ''}°C
              </p>
            </strong>
            <p className={`tempp ${isSelected ? 'selected' : ''}`}>
              Temp Min: {desiredCity.main ? desiredCity.main.temp_min : ''}°C
            </p>
            <p className={`tempp ${isSelected ? 'selected' : ''}`}>
              Temp Max: {desiredCity.main ? desiredCity.main.temp_max : ''}°C
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default TopRow
