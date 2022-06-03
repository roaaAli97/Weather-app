import React from "react";
import  weatherIcon from "../assets/weather.svg"
import {Link} from "react-router-dom"
function Navbar(){
   return(
       <React.Fragment>
        <ul className="navbar"> 
         <li>
         <Link to="/">
           <img src={weatherIcon} alt="weather-app-icon"/>
         </Link>
         </li>
         <li><Link to="/dashboard">Weather dashboard</Link></li>
        </ul>
       </React.Fragment>
   )
}
export default Navbar;