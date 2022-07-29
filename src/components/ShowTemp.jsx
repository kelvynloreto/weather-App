import React from "react";

const ShowTemp = ({temp, degreesKelvin}) => {


  return (
     <p>  <img src="/src/icons/termometro.png" alt="" />
        {temp
          ? Math.round(degreesKelvin - 273.15) + "ºC"
          : Math.round(1.8 * (degreesKelvin - 273) + 32) + " ºF"} 
      </p>
     
   
      
  );
};

export default ShowTemp;
