// LocationDisplay.js
import React from 'react';
import {useTranslation} from 'react-i18next'

function LocationDisplay({ location, weather }) {
  const {t} = useTranslation();
  return (
    <div>
        <div>
          <p>{weather.city.name}</p>
          <p>{t("coord")}: lat: {weather.city.coord.lat}   lon: {weather.city.coord.lon}</p>
        </div>
    </div>
  );
}

export default LocationDisplay;
