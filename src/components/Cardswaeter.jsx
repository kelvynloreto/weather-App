import axios from "axios";
import React, { useEffect, useState } from "react";
import ChangeDegrees from "./ChangeDegrees";
import NavIcon from "./NavIcon";
import ShowTemp from "./ShowTemp";

const Cardswaeter = ({ lat, lon }) => {
  const [weather, setWeater] = useState({});
  const [temp, setTemp] = useState(true);
  useEffect(() => {
    if (lat) {
      const APIKey = "9b22da207481fe7b36a3b31a6f5fd187";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
      axios
        .get(URL)
        .then((res) => setWeater(res.data))
        .catch((error) => console.log(error));
    }
  }, [lat, lon]);
  const degreesKelvin = weather.main?.temp;

  function tempConverter() {
    temp ? setTemp(false) : setTemp(true);
  }

  return (
    
    <div className="card_weather">
     <NavIcon weather={weather} />
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
      />
      <p>
        {weather.name} , {weather.sys?.country}
      </p>
      <p> {weather.weather?.[0].description}</p>
      
      <ShowTemp temp={temp} degreesKelvin={degreesKelvin} />
      <ChangeDegrees tempConverter={tempConverter} />
      
    </div>
  );
};

export default Cardswaeter;
