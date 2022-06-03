import React from "react"
import formatDate, {convertDateToDay} from "../utils/formatDate"
function SecondaryWeatherCard({type,...props}){
    const {maxtempC, mintempC, date, astronomy,avgtempC} = props.data;
   return(
    
         <div className="weather_card">
          <h3 className="p-small">({type === "past"? date :convertDateToDay(date)})</h3>
          <p className="p-small">Max Temp: {maxtempC} &#8451;</p>
          <p className="p-small">Min Temp: {mintempC} &#8451;</p>
          <p className="p-small">Sun Rise: {astronomy[0].sunrise}</p>
          <p className="p-small">Sun Set : {astronomy[0].sunset}</p>
          <p className="p-small">Average Temp :{avgtempC} &#8451;</p>
         </div>
   )
}
export default SecondaryWeatherCard