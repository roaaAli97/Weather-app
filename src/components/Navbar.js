import React from "react";
import  weatherIcon from "../assets/weather.svg"
import {Link} from "react-router-dom"
import barChart from "../assets/bar-chart-svgrepo-com.svg"
function Navbar(){
   return(
       <React.Fragment>
        <ul className="navbar"> 
         <li>
         <Link to="/">
           <img src={weatherIcon} alt="weather-app-icon"/>
         </Link>
         </li>
         <li><Link to="/dashboard"><img style={{width:'50px'}} src={barChart}/></Link></li>
        </ul>
       </React.Fragment>
   )
}
export default Navbar;