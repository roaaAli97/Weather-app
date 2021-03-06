import React, { useState, useEffect, useContext} from "react";
import WeatherCard from "../components/WeatherCard";
import {CityContext} from "../Context/cityContext"
import SecondaryWeatherCard from "../components/SecondaryWeatherCard";
function WeatherAppLandingPage (){
    const [weatherData, setWeatherData] = useState({});
   const {city} = useContext(CityContext);
   const {data} = weatherData
   const {weather} = data || [];
   const [error, setError] = useState("");
  useEffect(()=>{
    if(city){
       fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=c040bac52f674084a4670829222705&q=${city}&tp=24&num_of_days=7&format=json`)
       .then(result=> result.json())
       .then(weatherData=>{
         const {data} = weatherData;
         const {error} = data;
         
         if(error){
           setError(error[0].msg)
         }
         else{
          setWeatherData({...weatherData});
          setError("")
         }
        
        });
    }
  },[city])
  return(
      <React.Fragment>
      
       {error? <h2 className="text-center">{error}</h2> : 
       <div className="grid-container"> 
        <WeatherCard data={weatherData}/>
       {weather&& weather.map(weather=>{
        return <SecondaryWeatherCard data={weather}></SecondaryWeatherCard>
     })}
     
       </div>}
      
      </React.Fragment>
  )
}
export default WeatherAppLandingPage;