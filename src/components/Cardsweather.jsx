import axios from "axios";
import React, { useEffect, useState } from "react";
import ChangeDegrees from "./ChangeDegrees";
import LoadingScreen from "./LoadingScreen";
import NavIcon from "./NavIcon";
import ShowTemp from "./ShowTemp";


const Cardsweather = ({ lat, lon }) => {
  const [weather, setWeater] = useState({});
  const [temp, setTemp] = useState(true);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (lat) {
      const APIKey = "9b22da207481fe7b36a3b31a6f5fd187";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;
      axios
        .get(URL)
        .then((res) => setWeater(res.data))
        .catch((error) => console.log(error));
        setIsLoading(false)
    }
  }, [lat, lon]);
  const degreesKelvin = weather.main?.temp;

  function tempConverter() { setTemp(!temp)
  }
if (isLoading) {
  <LoadingScreen />
} else{
  return (
    <div className="card_weather">
      <NavIcon weather={weather} />
      <img src={weather && `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}/>
      <p> {weather.name} , {weather.sys?.country}</p>
      <p> "{weather.weather?.[0].description}"</p>
      <ShowTemp temp={temp} degreesKelvin={degreesKelvin} />
      <ChangeDegrees tempConverter={tempConverter} />
    </div>
  );
}};

export default Cardsweather;
