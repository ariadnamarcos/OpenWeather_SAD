import './App.css';
import { useState, useFetch } from 'react';

const api = {
  key: "d16c1229f85c7e4816d29dcea9e0a4c3",
  base: "https://pro.openweathermap.org/data/2.5/"
};

function App() {

  const [search, setSearch] = useState("");
  const[weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          {/**TextBox*/}
          <input type="text" placeholder="Enter Location"
          
          onChange={(e) => setSearch(e.target.value)}
          />

          {/**Button */}
          <button onClick={searchPressed}>Search</button>
        </div>

        {/*Location*/}
        {weather && weather.main && (
          <div> 
            <p>{weather.name}</p>
            {/*Temperature*/}
            <p>{weather.main.temp}ºC</p>
            <div> {/*Condition*/}
            <p>{weather.weather[0].main}</p>
            <p>{weather.weather[0].description}</p>
            </div>
          </div> )}
      </header>
    </div>
  );
}

export default App;
