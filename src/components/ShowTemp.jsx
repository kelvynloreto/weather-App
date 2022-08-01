import React from "react";
import termometro from "../icons/termometro.png";

const ShowTemp = ({ temp, degreesKelvin }) => {


  // 
  return (
    <div className="showTemp">
          {temp
          ? <p>{(Math.round(degreesKelvin - 273.15))} <span>ºC</span></p>
          : <p>{ Math.round(1.8 * (degreesKelvin - 273.15) + 32)} <span>ºF</span></p>}
          
      <img src={termometro} alt="" />
      
    </div>
  );
};

export default ShowTemp;
