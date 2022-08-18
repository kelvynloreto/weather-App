import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const ButtonChangeCity = ({setCoords}) => {

    const [city, setCity] = useState();
    const [filterCity, setFilterCity] = useState();
    const { register, handleSubmit } = useForm();
    function target(e) {
        setFilterCity(e.target.value);
      }
 
  
      const sumit= () =>{
        const APIKey = "9b22da207481fe7b36a3b31a6f5fd187";
        const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${filterCity}&limit=5&appid=${APIKey}`;
             axios
          .get(URL)
          .then((res) => {
            const latlon = {
              lat: city?.[0].lat,
              lon: city?.[0].lon
            };setCity(res.data)    
          setCoords(latlon);     } )
          .catch((error) => console.log(error?.config.url));
       
       
    
      }


  return (
    <form className='container_change-city' onSubmit={handleSubmit(sumit)}>
         <input {...register('city')} type="text" onChange={target} />
      <button >Change City</button>
    </form>
  )
}
