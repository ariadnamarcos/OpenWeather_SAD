// App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LocationDisplay from './components/LocationDisplay';
import LangMenu from './components/LangMenu';
import WeatherNowDisplay from './components/WeatherNowDisplay';
import {useTranslation} from "react-i18next";

const api = {
  key: "d16c1229f85c7e4816d29dcea9e0a4c3",
  geo_base: "https://api.openweathermap.org/geo/1.0/",
  base: "https://pro.openweathermap.org/data/2.5/forecast/",
  current_weather_base: "https://pro.openweathermap.org/data/2.5/"
};



function App() {
  const [t, i18n] = useTranslation(["translation"]);
  const [selectedLang, setSelectedLang] = useState('en');

  const [geo, setGeo] = useState({});
  const [weather, setWeather] = useState({});
  const[currentWeather, setCurrentWeather] = useState({});

  const handleLangChange = (selectedLang) => {
    i18n.changeLanguage(`${selectedLang}`);
    setSelectedLang(`${selectedLang}`);

  };

  const searchPressed = (search) => {
    fetch(`${api.geo_base}direct?q=${search}&units=metric&limit=1&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setGeo(result[0]);
        return Promise.all([
          fetch(`${api.base}daily?units=metric&lat=${result[0].lat}&lon=${result[0].lon}&cnt=14&appid=${api.key}&lang=${selectedLang}`),
          fetch(`${api.current_weather_base}weather?q=${result[0].name},${result[0].state}&units=metric&APPID=${api.key}&lang=${selectedLang}`)
        ]);
      })
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(([weatherResult, currentWeatherResult]) => {
        setWeather(weatherResult);
        setCurrentWeather(currentWeatherResult);
        console.log(currentWeatherResult);
      });
  };

 
  return (
    
    <div className="App">
      <header >
        
        <title>Weather App</title>
        <div className='init'>
        <SearchBar onSearch={searchPressed} /> 

        <span>
        <LangMenu onClicked={handleLangChange} class='select-button'/>
        </span>
        </div>

        <div className='weather-section'>
          <div>
            <h3>{t("weather-now")}</h3>
            {currentWeather && currentWeather.weather && (
              <WeatherNowDisplay weather={currentWeather} /> 
            )} 
           
             <hr />
             <hr />
          </div>
          <div className='weather-prediction'>
          {weather && weather.list && weather.list.slice(1).map(element => (
              <div key={element.dt}>
              <WeatherDisplay weather={element} />
              <hr />
              </div>  
            )) 
          }
          </div>
        </div>

        <div className='location-section'>
          
          {weather && weather.city && (
            <div>
              <h3>{t("location-section")}</h3>
              <LocationDisplay location={geo} weather={weather} /> 
            </div>
          )}

        </div>
      </header>
    </div>
  );
}

export default App;

