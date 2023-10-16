// import logo from './logo.svg';
// import backgroundImage from './background.jpg'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from '../src/imgs/weatherapp.png'
import './App.css';
import backgroundImage from '../src/imgs/background.jpg'
import Dashboard from './Components/Dashboard'
import WeatherCard from './Components/WeatherCard';

const App = ()=>{
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="logo"></img>
        <h1 className="headertext">
          Weather App
        </h1>
      </div>

      <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/card/:id" component={WeatherCard} />
          {/* Define other routes for additional components if needed */}
        </Switch>
    </div>
  );
}

export default App;
