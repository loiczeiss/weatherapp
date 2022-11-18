import {  useState, useEffect } from "react";
import axios from "axios";
import './App.css'

import Weather from "./Weather";
import Search from "./Search";
import WeatherS from "./Weather2";


function App({onSearchChange}) {



// const [weatherBx, setWeatherBx] = useState({})

//   useEffect(() => {
//     axios.get('https://api.open-meteo.com/v1/forecast?latitude=50.8333&longitude=4.35&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto')
// .then((res) => res)
// .then((res) => {
//   setWeatherBx(res.data)
//   console.log(weatherBx)
//   })}, [])
  

  const [weatherFetcho, setWeatherfetcho] = useState({})
  
const HandleOnSearchChange = (searchData={
  "value": "50.8465573 4.351697",
  "label": "Bruxelles, Bruxelles-Capitale, Belgique"
} ) => {
 
  const [lat, long] = searchData.value.split (" ")
  


  const fetchWeather = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`)
Promise.all([fetchWeather ]).then(async (response) =>
{
  const weatherResponse = await response[0].data; 

  setWeatherfetcho(weatherResponse)

})



}


  return (
    <div
    style={{background: "linear-gradient(to top, #fc4a1a, #f7b733)"}}
     className="App h-screen	flex flex-col ">
    

<div className="div h-1/6 flex flex-col	 ">
      <Weather onLoad={HandleOnSearchChange} weather={weatherFetcho} /></div>
      <div className=" h-1/8  flex place-content-center	mt-4  justify-center">
      <div className="place-items-center		">
      <Search  onSearchChange={HandleOnSearchChange}/>
      </div></div>
      <WeatherS weather={weatherFetcho}/>
    </div>
  );
}

export default App;
