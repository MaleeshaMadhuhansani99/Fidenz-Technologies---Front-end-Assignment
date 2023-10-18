// import logo from './logo.svg';
// import backgroundImage from './background.jpg'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, RouterProvider, createBrowserRouter } from 'react-router-dom';
import logo from '../src/imgs/weatherapp.png'
import './App.css';
import backgroundImage from '../src/imgs/background.jpg'
import Dashboard from './Components/Dashboard'
import Homepage from './Components/Home';
import Card from './Components/Card';
import Layout from './Layout';
import Home from './Components/Home';
import LocationWeather from './Components/LocationWeather';



function App(){

  const router = createBrowserRouter([
    {
      path: "/card/:id",
      element: <LocationWeather />,
    },
    
    {
      path:"/",
      element:<Home />
    }


  ])

  return (
   
    <div>
      <RouterProvider router={router} />
    </div>
);
}

export default App;
