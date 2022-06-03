import React, { useState, useEffect, useContext} from "react";
import WeatherCard from "../components/WeatherCard";
import {CityContext} from "../Context/cityContext"
import SecondaryWeatherCard from "../components/SecondaryWeatherCard";
function WeatherAppLandingPage (){
    const [weatherData, setWeatherData] = useState({});
   const {city} = useContext(CityContext);
   const {data} = weatherData
   const {weather} = data || [];
  
  useEffect(()=>{
    if(city){
       fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c040bac52f674084a4670829222705&q=${city}&tp=24&num_of_days=7&format=json`)
       .then(result=> result.json())
       .then(weatherData=>{setWeatherData({...weatherData});});
    }
  },[city])
  return(
      <React.Fragment>
       <div className="grid-container">
       <WeatherCard data={weatherData}/>
       {weather&& weather.map(weather=>{
        return <SecondaryWeatherCard data={weather}></SecondaryWeatherCard>
     })}
       </div>
      
      </React.Fragment>
  )
}
export default WeatherAppLandingPage;