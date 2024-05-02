import React from 'react';
import { useTranslation } from 'react-i18next';

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

    return (
        <div className='weather-now'>
            <ul className='list'>
                <li className='list-element'>
                    <span>{t("temperature")}: {weather.main.temp}ºC&nbsp;&nbsp;&nbsp;</span>
                    <span>{t("feels-like")}: {weather.main.feels_like}ºC</span>
                </li>
                <li className='list-element'>
                    <span>{t("main")}: {weather.weather[0].main}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>{t("description")}: {weather.weather[0].description}</span>
                </li>
                <li className='list-element'>
                    <span>{t("temp-min")}: {weather.main.temp_min}ºC&nbsp;&nbsp;&nbsp;</span>
                    <span>{t("humidity")}: {weather.main.humidity}</span>
                </li>
                <li className='list-element'>
                    <span>{t("temp-max")}: {weather.main.temp_max}ºC&nbsp;&nbsp;&nbsp;</span>
                    <span>{t("pressure")}: {weather.main.pressure}</span>
                </li>
                <li className='list-element'>
                    <span>{t("sunrise")}:  {sunrise.hour}:{sunrise.minute}:{sunrise.seconds}</span>
                </li>
                <li className='list-element'>
                    <span>{t("sunset")}: {sunset.hour}:{sunset.minute}:{sunset.seconds}</span>
                </li>
            </ul>
        </div>
    );
}

export default WeatherNowDisplay;
