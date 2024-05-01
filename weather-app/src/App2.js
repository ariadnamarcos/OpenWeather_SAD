import './App.css';
import { useState, useFetch } from 'react';

const api = {
  key: "d16c1229f85c7e4816d29dcea9e0a4c3",
  geo_base: "https://api.openweathermap.org/geo/1.0/",
  base: "https://pro.openweathermap.org/data/2.5/forecast/"
};

function App() {

  const [search, setSearch] = useState("");
  const [geo, setGeo] = useState({});
  const[weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.geo_base}direct?q=${search}&units=metric&limit=1&appid=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setGeo(result[0]);
      return fetch(`${api.base}daily?lat=${result[0].lat}&lon=${result[0].lon}&cnt=7&appid=${api.key}`);
    })
    .then(res => res.json())
    .then(weatherResult => {
      // Manejar los resultados de la segunda solicitud
      setWeather(weatherResult);
      console.log(weatherResult)
    })
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
        
        
      </header>
    </div>
  );
}

export default App;
