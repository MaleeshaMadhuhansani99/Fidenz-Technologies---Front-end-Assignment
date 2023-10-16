import React from 'react'
import './Weather.css'
// import WeatherCard from './WeatherCard'
import Card from './Card'

const Dashboard=()=> {
  return (
    <div className='dashboard'>
        <div className='search'>
            <input className='addCity' placeholder=' Enter a city'></input>
            <button className='addCityBtn'>Add City</button>
                
        </div>

        <div className='cards-container'>
        <table className='dashboardtable'>
            <tbody>
                <tr className='row'>
                    <td className='column'>
                        <Card/>
                    </td>
                    <td className='column'>
                    <Card/>
                    </td>
                </tr>

                <tr className='row'>
                    <td className='column'>
                        <Card/>
                    </td>
                    <td className='column'>
                    <Card/>
                    </td>
                </tr>

                <tr className='row'>
                    <td className='column'>
                        <Card/>
                    </td>

                    <td className='column'>
                       
                    </td>
                    
                </tr>
            </tbody>
        </table>

        </div>

    </div>
  )
}

export default Dashboard
