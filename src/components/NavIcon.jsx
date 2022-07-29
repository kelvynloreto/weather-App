import React from "react";

const NavIcon = ({weather}) => {
  return (
    <nav>
      <p>
        <img src="/src/icons/wind.png" alt="" />
        {weather.wind?.speed}m/s
      </p>
      <p>
        <img src="/src/icons/cloud.png" alt="" />
        {weather.clouds?.all}%
      </p>
      <p>
        <img src="/src/icons/humedad.png" alt="" />
        {weather.main?.humidity}%
      </p>
    </nav>
  );
};

export default NavIcon;
