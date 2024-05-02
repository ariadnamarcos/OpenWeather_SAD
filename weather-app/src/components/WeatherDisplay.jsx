// WeatherDisplay.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import scatteredClouds from './images/scattered_clouds.png';
import rainy from './images/rainy.png';
import sunny from './images/sunny.png';

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
    weatherImage = scatteredClouds;
  } else if (weather.weather[0].main === 'Clear') {
    weatherImage = sunny;
  } else if (weather.weather[0].main === 'Rain') {
    weatherImage = rainy;
  } 

  return (
    <div>
     <img src = {weatherImage} alt="Weather Image" className='image'/>
      <span className='text-format'>{t("date")}: {date.day}/{date.month}/{date.year}</span>
      <span className='text-format'>{t("temperature")} {weather.temp.day}ºC</span>
      <span className='text-format'>{t("main")} {weather.weather[0].main}</span>
      <span className='text-format'>{t("description")}: {weather.weather[0].description}</span>
    </div>
  );
}

export default WeatherDisplay;
