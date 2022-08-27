import { useState } from 'react';

import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, FORECAST_API_URL } from './api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split('')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    const forecastFetch = fetch(`${FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({ city: searchData.label , ...weatherResponse })
        setForecast({ city: searchData.label , ...forecastResponse })
      })
      .catch((error) => console.log(error))
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
