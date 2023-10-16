// import logo from './logo.svg';
import backgroundImage from './background.jpg'
import logo from './weatherapp.png'
import './App.css';
import WeatherCard from './Components/WeatherCard.js'

const App = ()=>{
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo"></img>
        <h1 className="headertext">
          Weather App
        </h1>
      </div>

      <div className='container'>
          <WeatherCard/>
      </div>

    </div>
  );
}

export default App;
