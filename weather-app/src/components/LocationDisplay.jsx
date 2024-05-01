// LocationDisplay.js
import React from 'react';

function LocationDisplay({ location, weather }) {
  return (
    <div>
      {/* Mostrar la información de la ubicación */}
        <div>
          <p>{weather.city.name}</p>
        </div>
    </div>
  );
}

export default LocationDisplay;
