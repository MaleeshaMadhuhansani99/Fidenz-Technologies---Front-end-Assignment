import React from 'react'
import './Weather.css'
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import clouds from '../imgs/fewclouds.png'
import direction from '../imgs/direction.png'
import cross from '../imgs/cross.png'
import WeatherCard from './WeatherCard'

const Card=()=> {

    const cardId = "Colombo";

    // const handleClick = () => {
    //     // const history=useHistory();
    // }
  return (
    <Link to={`/card/${cardId}`}>
<div className='container' > 
<div className='card'>
    <img className='cross' src={cross}></img>
    <div className='top_row'> 
    <table className='top'>     
        <tbody>
        <tr>
        <td className='left_column'> 
        <h2 className='location'>Colombo, LK</h2>
        <p>09:19, February 08</p>
        <img src={clouds}></img>
        <p>Few Clouds</p>
       </td>
       <td className='right_column'>
        <h1>27 C</h1>
        <p>Temp Min: 25 C</p>
        <p>Temp Max: 28 C</p>
       </td>
        </tr>
        </tbody>
        
       
      </table>
    </div>

    <div className='bottom_row'>
      <table className='bottom'>
        <tbody>

          <tr>
            <td className='column1'>
              <p>pressure:1018hPa</p>
              <p>Humadity:78%</p>
              <p>Visibility:8.0km</p>
            </td>

            <td className='column2'>
              <img src={direction}></img>
              <p>4.0m/s 120 Degree</p>
            </td>

            <td className='column3'>
              <p>Sunrise:6.05am</p>
              <p>Sunset:6.05am</p>
            </td>
            
          </tr>
        </tbody>
      </table>

    </div>
  </div>
  </div>
  </Link>
  )
}

export default Card;
