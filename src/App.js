
import './App.css';
import WeatherAppLandingPage from './pages/Weather_App_Landing_page';
import WeatherDashBoard from './pages/Weather_Dashboard';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import {Routes, Route} from "react-router-dom"
import React from 'react';

function App() {

  return (
    <div className="App">
      
      <Navbar/>
      <SearchBar/>
      <Routes>
       <Route path="/" element={<WeatherAppLandingPage/>}/>
       <Route path="/dashboard" element={<WeatherDashBoard/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
