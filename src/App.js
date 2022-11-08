import { useEffect, useState } from "react";
import axios from "axios";

import Weather from "./Weather";
import Search from "./Search";
import WeatherS from "./Weather2";


function App({onSearchChange}) {


const [weatherFetcho, setWeatherfetcho] = useState({})


  



const HandleOnSearchChange = (searchData) => {
  const [lat, long] = searchData.value.split (" ")
  console.log(lat, long)

  const fetchWeather = axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`)
Promise.all([fetchWeather ]).then(async (response) =>
{
  const weatherResponse = await response[0].data; 
  console.log(weatherResponse)
  setWeatherfetcho(weatherResponse)

})



}


  return (
    <div className="App h-screen bg-black">
    


      <Weather weather={weatherFetcho} />
      <div className=" h-1/8  flex place-content-center	mt-8  justify-center">
      <div className="place-items-center		">
      <Search onSearchChange={HandleOnSearchChange}/>
      </div></div>
      <WeatherS weather={weatherFetcho}/>
    </div>
  );
}

export default App;
