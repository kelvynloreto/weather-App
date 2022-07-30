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
    const KEY = "7d112c7c96a7acb3fc8b25dabc67f0cd";
    const URL = `http://api.positionstack.com/v1/forward?access_key=${KEY}&query=${filterCity}`;

    axios
      .get(URL)
      .then((res) => setCity(res.data))
      .catch((error) => console.log(error));
    const latlon = {
      lat: city?.data[0].latitude,
      lon: city?.data[0].longitude,
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
