import axios from "axios";
import React, { useEffect } from "react";

const LoadingScreen = ({coords, setWeater,setIsLoading}) => {

  useEffect(() => {
    if (coords) {
      const APIKey = "9b22da207481fe7b36a3b31a6f5fd187";
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`;
      axios.get(URL)
      .then((res) => {setWeater(res.data)
        setTimeout(() => {
          setIsLoading(false);
                }, 1000);
        })
        .catch((error) => console.log(error.response));
       
    }
  }, [coords]);

  return (
    <div className="loadScreen">
      <div className="loader_container">
        <div className="loader"></div>
        <div className="loader2"></div>
        <div className="loader3"></div>
        <div className="loader4"></div>
        <div className="loader5"></div>
        <div className="loader6"></div>      
      </div>
      <p>Loading</p>
    </div>
  );
};

export default LoadingScreen;
