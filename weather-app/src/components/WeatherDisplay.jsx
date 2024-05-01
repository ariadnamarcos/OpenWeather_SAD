// WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ weather }) {
    const date_ms = new Date(weather.dt * 1000);
    const date = {
        year: date_ms.getFullYear(),
        month: date_ms.getMonth(),
        day: date_ms.getDate()
    };
  return (
    <div>
      {/*información del clima */}
        <div>
        
           <p>Date: {date.day}/{date.month}/{date.year}</p>
           <p>Temperature: {weather.temp.day}</p>
           <p>Main: {weather.weather[0].main}</p>
           <p>Description: {weather.weather[0].description}</p> 
        </div>
    </div>
  );
}

export default WeatherDisplay;
