import React from 'react';
import './Weather.css';
import Card from './Card';
import cityData from './cities.json';

const Dashboard = () => {
  // const [cityCodes, setCityCodes] = useState([]);
  const codes = cityData.List.map((city) => city.CityCode); //map city codes to an array



// call all the card in the dashboard
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
              {/* call the weather card with the citycode */}
                <Card cityCode={codes[0]} /> 
              </td>
              <td className='column'>
                <Card cityCode={codes[1]} />
              </td>
            </tr>
            <tr className='row'>
              <td className='column'>
                <Card cityCode={codes[2]} />
              </td>
              <td className='column'>
                <Card cityCode={codes[3]} />
              </td>
            </tr>
            <tr className='row'>
              <td className='column'>
                <Card cityCode={codes[4]} />
              </td>
              <td className='column'></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
