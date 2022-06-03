import React , {useState, useContext} from "react"
import {CityContext} from "../Context/cityContext"
function SearchBar(){
    const {setCity} = useContext(CityContext);
   const [search , setSearch] = useState("")
    return (
        <React.Fragment>
        <div className="search-bar">
         <input placeholder="Enter the name of the city" onChange={(e)=>setSearch(e.target.value)} type="text"/>
         <button className="btn" onClick={()=>{setCity(search)}}>Search</button>
        </div>
        
        </React.Fragment>
    )
}
export default SearchBar