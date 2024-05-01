// App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LocationDisplay from './components/LocationDisplay';
import LangMenu from './components/LangMenu';
import {useTranslation} from "react-i18next";
import { Suspense } from 'react';

const api = {
  key: "d16c1229f85c7e4816d29dcea9e0a4c3",
  geo_base: "https://api.openweathermap.org/geo/1.0/",
  base: "https://pro.openweathermap.org/data/2.5/forecast/"
};



function App() {
  const [t, i18n] = useTranslation(["names"]);

  const [geo, setGeo] = useState({});
  const [weather, setWeather] = useState({});

  const handleLangChange = (selectedLang) => {
    console.log(`Selected language: ${selectedLang}`);
    i18n.changeLanguage(`${selectedLang}`);
    // Aquí puedes realizar cualquier acción adicional según el idioma seleccionado
  };

  const searchPressed = (search) => {
    fetch(`${api.geo_base}direct?q=${search}&units=metric&limit=1&appid=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setGeo(result[0]);
        return fetch(`${api.base}daily?units=metric&lat=${result[0].lat}&lon=${result[0].lon}&cnt=7&appid=${api.key}`);
      })
      .then(res => res.json())
      .then(weatherResult => {
        // Manejar los resultados de la segunda solicitud
        setWeather(weatherResult);
        console.log(weatherResult.list[0].weather[0].main)
      });
  };

 
  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <LangMenu onClicked={handleLangChange} />
        <SearchBar onSearch={searchPressed} /> 
        <div className='weather-section'>
          <h2>{t("title")}</h2>
          {weather && weather.list && weather.list.map(element => (
              <div key={element.dt}>
              <WeatherDisplay weather={element} />
              <hr />
              </div>  
            )) 
          }
        </div>

        <div className='location-section'>
          <h3>Location Information</h3>
          {weather && weather.city && <LocationDisplay location={geo} weather={weather} /> }
        </div>
      </header>
    </div>
  );
}

export default App;

