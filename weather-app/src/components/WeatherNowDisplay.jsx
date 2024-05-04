import React from 'react';
import { useTranslation } from 'react-i18next';
import scatteredClouds from './images/scattered_clouds.png';
import rainy from './images/rainy.png';
import sunny from './images/sunny.png';

function WeatherNowDisplay({ weather }) {
  const { t } = useTranslation();
  const sunrise_ms = new Date(weather.sys.sunrise * 1000);
  const sunset_ms = new Date(weather.sys.sunset * 1000);

  const sunrise = {
    hour: sunrise_ms.getHours(),
    minute: sunrise_ms.getMinutes(),
    seconds: sunrise_ms.getSeconds()
  };
  const sunset = {
    hour: sunset_ms.getHours(),
    minute: sunset_ms.getMinutes(),
    seconds: sunset_ms.getSeconds()
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
    <div className='weather-now'>
      <ul className='list'>
      <span><img src={weatherImage} alt="Weather Image" className='weather-now-image' align='left'/></span>

        <li className='list-element'>
          <span className='list-text'>{t("temperature")}: <em className='text-temperature'>{weather.main.temp}ºC</em>&nbsp;&nbsp;&nbsp;</span>
          <span className='list-text'>{t("feels-like")}: {weather.main.feels_like}ºC</span>
        </li>
        <li className='list-element'>
          <span className='list-text'>{t("main")}: {weather.weather[0].main}&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className='list-text'>{t("description")}: {weather.weather[0].description}</span>
        </li>
        <li className='list-element'>
          <span className='list-text'>{t("temp-min")}: {weather.main.temp_min}ºC&nbsp;&nbsp;&nbsp;</span>
          <span className='list-text'>{t("humidity")}: {weather.main.humidity}</span>
        </li>

        <li className='list-element'>
          <span className='list-text'>{t("temp-max")}: {weather.main.temp_max}ºC&nbsp;&nbsp;&nbsp;</span>
          <span className='list-text'>{t("pressure")}: {weather.main.pressure}</span>
        </li>
        <li className='list-element'>
          <span className='list-text'>{t("sunrise")}:  {sunrise.hour}:{sunrise.minute}:{sunrise.seconds}</span>
        </li>
        <li className='list-element'>
          <span className='list-text'>{t("sunset")}: {sunset.hour}:{sunset.minute}:{sunset.seconds}</span>
        </li>
      </ul>
    </div>
  );
}

export default WeatherNowDisplay;
