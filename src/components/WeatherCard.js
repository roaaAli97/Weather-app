import React from "react";

function WeatherCard(props){
  
  const {data} = props.data || {}
   const {current_condition} = data || [];
   const {request} = data || []
   const {weather} = data || []
  return (
      <React.Fragment >
           {Object.keys(props.data).length >0 && <div className="weather_card" >
            <img src={`${current_condition[0].weatherIconUrl[0].value}`} alt="weather_icon"></img>
            <h2 >{request[0].query}</h2>
            <div style={{display:"flex" , gap:"2rem",alignItems:"flex-start" ,margin:"1rem 0", justifyContent:"center" }}>
             <div style={{textAlign:"left"}}>
              <p >{current_condition[0].observation_time}</p>
              <p >Feels Like: {current_condition[0].FeelsLikeC} &#8451; </p>
             </div>
             <div style={{textAlign:"left"}}>
               <p >Humidity: {current_condition[0].humidity}%</p>
               <p >{current_condition[0].weatherDesc[0].value}</p>
               <p >{weather[0].mintempC}&#8451; / {weather[0].maxtempC}&#8451;</p>
             </div>
            </div>
            
             
            
            </div>}
      </React.Fragment>
  )
}
export default WeatherCard;