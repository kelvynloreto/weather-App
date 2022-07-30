import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cardsweather from "./components/Cardsweather";


function App() {
  const [coords, setCoords] = useState({});
  const [city, setCity] = useState();
  const [filterCity, setFilterCity] = useState();



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
    <div className="App">

  <Cardsweather lat={coords.lat} lon={coords.lon} />
      <input type="text" onChange={target} />
      <button onClick={ChangedCity}>busca otra ciudad</button>


    </div>
  );
}

export default App;
