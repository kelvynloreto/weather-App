import axios from 'axios';
import React, { useState } from 'react'

export const ButtonChangeCity = ({setCoords}) => {

    const [city, setCity] = useState();
    const [filterCity, setFilterCity] = useState();
    
    function target(e) {
        setFilterCity(e.target.value);
      }
    
    function ChangedCity() {
        const KEY = "jlAWHPwwovjwnPVHPFL9nTmy3GZ6DWgW";
        const URL = `http://www.mapquestapi.com/geocoding/v1/address?key=${KEY}&location=${filterCity}`;
    
        axios
          .get(URL)
          .then((res) => setCity(res.data))
          .catch((error) => console.log(error));
        const latlon = {
          lat: city?.results[0].locations[0].latLng.lat,
          lon: city?.results[0].locations[0].latLng.lng,
        };
        setCoords(latlon);
      }
  return (
    <div className='container_change-city'>
         <input type="text" onChange={target} />
      <button onClick={ChangedCity}>Change City</button>
    </div>
  )
}
