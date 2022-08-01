import React, {useState } from "react";
import ButtonChangeDegrees from "./ButtonChangeDegrees";
import NavIcon from "./NavIcon";
import ShowTemp from "./ShowTemp";

const Cardsweather = ({ weather }) => {
  const [temp, setTemp] = useState(true);

  const degreesKelvin = weather.main?.temp;
 
  function tempConverter() {
    setTemp(!temp);
  }
     return (
      <div className="card_weather">
       
        <NavIcon weather={weather} />
        <p>
            {weather.name} , {weather.sys?.country}
        </p>
        <p> "{weather.weather?.[0].description}"</p>
        <img
          className="cloud"
          src={
            weather && `http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`
          }
        />
        <ShowTemp temp={temp} degreesKelvin={degreesKelvin} />
        <ButtonChangeDegrees tempConverter={tempConverter} />
      </div>
    );
  
};

export default Cardsweather;
