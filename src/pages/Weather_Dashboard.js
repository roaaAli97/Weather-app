import React, {useState, useEffect,useContext} from "react";
import { CityContext } from "../Context/cityContext";
import formatDate from "../utils/formatDate";
import SecondaryWeatherCard from "../components/SecondaryWeatherCard";
import BarChart from "../components/BarChart";

function WeatherDashBoard(){ 
    const [historicalWeatherData, setHistoricalWeatherData] = useState([])
    const {city} = useContext(CityContext);
    const {data} = historicalWeatherData;
    const {weather} =data || []
    const [startDate, endDate]=formatDate()
    const [error, setError] = useState("")
    useEffect(()=>{
       fetch(`https://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=c040bac52f674084a4670829222705&q=${city}&date=${endDate}&enddate=${startDate}&tp=12&format=json`)
       .then(result=>result.json())
       .then(historicalWeatherData=>{
        const {data} = historicalWeatherData
        const {error} = data
        if(error){
          setError(error[0].msg)
        }
        else{
          setHistoricalWeatherData(historicalWeatherData)
          setError("")
        }
       
      }
        )
       
    },[city])
    
   
   return (
       <React.Fragment>

         {error? <h2>{error}</h2>:
         <div>
         <h2 className="text-center">Weather Data for the past 10 days for {city}</h2>
         <div className= "weather-dashboard">
         {weather && <BarChart data={weather}/>}
           {weather&& <div className="grid-container">
            {weather.map(weather=>{
            return <SecondaryWeatherCard data={weather} type="past"></SecondaryWeatherCard>
           })}
           </div>
        }
         
         </div>
         </div>
        }
       </React.Fragment>
   )
}
export default WeatherDashBoard;