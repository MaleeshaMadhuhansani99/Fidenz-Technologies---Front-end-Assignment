import {apiBaseUrl, units} from '../constants.js'

export const getApiUrl = (cityCode) => {
  return `${apiBaseUrl}?id=${cityCode}&units=${units}&appid=${process.env.REACT_APP_WEATHERMAP_KEY}`
}
