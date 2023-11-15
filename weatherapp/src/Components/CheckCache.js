import {getApiUrl} from './APIHelper.js'

const fetchData = async (cityCode) => {
  try {
    const storedData = localStorage.getItem(`weather_${cityCode}`)
    const storedTimestamp = localStorage.getItem(
      `weather_${cityCode}_timestamp`
    )
    const currentTime = new Date().getTime()

    if (
      storedData &&
      storedTimestamp &&
      currentTime - parseInt(storedTimestamp) < 300000
    ) {
      // If data is found in the localStorage, parse and return it
      // console.log('fetch data from local storage')
      return JSON.parse(storedData)
    } else {
      const apiUrl = getApiUrl(cityCode)
      const response = await fetch(apiUrl)
      // console.log('fetch data from api call')

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      // Store the fetched data in localStorage with a 5-minute expiration
      localStorage.setItem(`weather_${cityCode}`, JSON.stringify(data.list[0]))
      localStorage.setItem(
        `weather_${cityCode}_timestamp`,
        currentTime.toString()
      )

      return data.list[0]
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error // Propagate the error to the caller
  }
}

export default fetchData
