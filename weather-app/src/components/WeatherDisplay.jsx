// WeatherDisplay.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import fewClouds from './images/scattered_clouds.png';
import rainy from './images/rainy.png';
import sunny from './images/sunny.png';
import overcastClouds from './images/overcast_clouds.jpg';
import scatteredClouds from './images/scattered_clouds.png';
import brokenClouds from './images/broken_clouds.png';


function WeatherDisplay({ weather }) {
  const { t } = useTranslation();
  const date_ms = new Date(weather.dt * 1000);
  const date = {
    year: date_ms.getFullYear(),
    month: date_ms.getMonth(),
    day: date_ms.getDate()
  };

  let weatherImage;
  if (weather.weather[0].main === 'Clouds') {
    if(weather.weather[0].description === 'overcast clouds') {
      weatherImage = overcastClouds;
    } else if(weather.weather[0].description === 'few clouds') {
      weatherImage = fewClouds;
    }else  if(weather.weather[0].description === 'scattered clouds'){
      weatherImage = scatteredClouds;
    } else if(weather.weather[0].description === 'broken clouds'){
      weatherImage = brokenClouds;
    }
  } else if (weather.weather[0].main === 'Clear') {
    weatherImage = sunny;
  } else if (weather.weather[0].main === 'Rain') {
    weatherImage = rainy;
  } 

  return (
    <div className='daily-weather'>
      <span className='text-format'>{date.day}/{date.month}/{date.year}</span>
      <img src = {weatherImage} alt="Weather Image" className='image'/>
      <span className='text-format'><em className='text-temperature'> {weather.temp.max}ºC</em> / <i>{weather.temp.min}ºC</i></span> 
      <span className='text-format'>{weather.weather[0].main}</span>
      <span className='text-format'>{weather.weather[0].description}</span>
    </div>
  );
}

export default WeatherDisplay;
