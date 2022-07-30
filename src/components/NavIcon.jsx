import React from "react";
import wind from '../icons/wind.png'
import cloud from '../icons/cloud.png'
import humedad from '../icons/humedad.png'


const NavIcon = ({weather}) => {
  return (
    <nav>
      <p>
        <img src={wind} alt="" />
        {weather.wind?.speed}m/s
      </p>
      <p>
        <img src={cloud} alt="" />
        {weather.clouds?.all}%
      </p>
      <p>
        <img src={humedad} alt="" />
        {weather.main?.humidity}%
      </p>
    </nav>
  );
};

export default NavIcon;
