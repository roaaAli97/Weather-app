import React, {createContext,useState,useEffect} from "react";
export const CityContext= createContext({
    city:"",
    setCity:""
})
export const CityProvider =({children})=>{
  const [city, setCity] = useState("");
  useEffect(()=>{  
    navigator.geolocation.getCurrentPosition(function(position){
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
        .then(result=>result.json())
        .then(data=>{setCity(`${data.locality},${data.countryName}`);});
        
  }); 
  },[])
  
  
  return(
      <CityContext.Provider value={{city,setCity}}>{children}</CityContext.Provider>
  )
}