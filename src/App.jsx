import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { ButtonChangeCity } from "./components/ButtonChangeCity";
import Cardsweather from "./components/Cardsweather";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [coords, setCoords] = useState({});
  const [weather, setWeater] = useState();
  const [bgWeather, setBgWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const weatherIcon = weather?.weather[0].icon

  useEffect(() => {
    const succes = (pos) => {
      
      const latLon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      };
      setCoords(latLon);
    };
    navigator.geolocation.getCurrentPosition(succes);
  }, []);
  

useEffect(() => {
  if (weatherIcon == "02n" || weatherIcon == "03n"|| weatherIcon == "04n" ) {
    setBgWeather("Night-clouds")
      }
      else if (weatherIcon == "01d"|| weatherIcon == "02d" || weatherIcon == "03d"|| weatherIcon == "04d" )  { 
        setBgWeather("Day-clouds")
      }
  else if (weatherIcon == "01d"  ) { 
    setBgWeather("Day-clear")
  }
  else if (weatherIcon == "01n" ) { 
    setBgWeather("Night-clear")
  }
else if( weatherIcon == "09d"|| weatherIcon == "10d" || weatherIcon == "11d"){
  setBgWeather("Day-rain")
}
else if( weatherIcon == "09n"|| weatherIcon == "10n" || weatherIcon == "11n"){
  setBgWeather("Night-rain")
}
else if( weatherIcon == "13d"|| weatherIcon == "13n"){
  setBgWeather("Snow")
}
}, [weather])

console.log(coords);
  return (
    <div className={`App ${bgWeather}`}>
      {isLoading
      ?  
      <div>
      <LoadingScreen setWeater={setWeater} coords={coords} setIsLoading={setIsLoading}/>
      </div> :
      <div> <Cardsweather weather={weather} />
      {/* <ButtonChangeCity  setCoords={setCoords} /> */}
      </div>
      }
      
    
    </div>
  );
}


export default App;
