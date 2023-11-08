import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Weatherhome from './pages/weatherhome'
import './App.css'

function App() {
  const Weathermaphome = () => {
    return (
      <div>
        <Weatherhome />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Weathermaphome />,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
