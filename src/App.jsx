import axios from 'axios';
import { useEffect, useState } from 'react'
import './App.css'
import Cardswaeter from './components/Cardswaeter';

function App() {
  const [coords, setCoords] = useState({})
  const [city, setCity] = useState()
  const [filterCity, setFilterCity] = useState()

  
useEffect(()=>{
const succes = pos=>{
const latLon ={
  lat:pos.coords.latitude,
  lon:pos.coords.longitude,
}
  setCoords(latLon);
  }
  navigator.geolocation.getCurrentPosition(succes)
}
,[]);
function target(e){
  setFilterCity(e.target.value)
 }

function ChangedCity(){
  const URL=`http://api.positionstack.com/v1/forward?access_key=406d7ff930c289dec70bc39330ba50e8&query=${filterCity}`
  
    axios.get(URL)
    .then((res) => setCity(res.data))
    .catch((error) => console.log(error));
const latlon={
  lat:city?.data[0].latitude,
  lon:city?.data[0].longitude,
}
  setCoords(latlon)
  }



  return (
    <div className="App">
   <Cardswaeter lat={coords.lat} lon={coords.lon}/>
   <input type="text" onChange={target} />
   <button onClick={ChangedCity}>busca otra ciudad</button>
    </div>
  )
}

export default App
