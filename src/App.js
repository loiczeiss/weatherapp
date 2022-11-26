import { useState } from "react";
import axios from "axios";
import "./App.css";

import Weather from "./Weather";
import Search from "./Search";
import WeatherS from "./Weather2";
import { useEffect } from "react";

function App({ onSearchChange }) {
  const [weatherFetcho, setWeatherfetcho] = useState({});
  const [weatherCode, setWeatherCode]= useState()
 

console.log(weatherFetcho)
  const HandleOnSearchChange = (
    searchData = {
      value: "50.8465573 4.351697",
      label: "Bruxelles, Bruxelles-Capitale, Belgique",
    }
  ) => {
    const [lat, long] = searchData.value.split(" ");

    const fetchWeather = axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`
    );
    Promise.all([fetchWeather]).then(async (response) => {
      const weatherResponse = await response[0].data;

      setWeatherfetcho(weatherResponse);
      setWeatherCode(weatherFetcho.current_weather && weatherFetcho.current_weather.weathercode)
  
    });
  };
  console.log(weatherFetcho.current_weather && weatherFetcho.current_weather.weathercode)

  function bgColor(){
    switch (weatherFetcho.current_weather && weatherFetcho.current_weather.weathercode)
    {
      case 0:
        return{
          background: "linear-gradient(to top, #fc4a1a, #f7b733)"
        }
     
      case 1: case 2: case 3:
    
    return {
      background: "linear-gradient(to bottom, #5990e3, #1c73ad, #005478, #003547, #00181d)"
    }
    case 45: case 48: case 51: case 53: case 55:
      return{
        background: "linear-gradient(to left bottom, #8cacdd, #83a9ca, #83a3b6, #889ca4, #8f9495)"
      }
      case 56: case 57:
        return{
          background: "radial-gradient(circle, #7da6c1, #7ba7c8, #7ba8d0, #7ca8d7, #7fa8de, #75a1d3, #6b9bc8, #6294bd, #54839c, #4f727e, #4d5f62, #4a4c4c)"
        }
        case 61 : case 63: case 65: case 66: case 67: case 80: case 81: case 82:
          return{
            background :"linear-gradient(to left top, #4f9cb8, #5796b2, #5e8fac, #6489a5, #68839d, #5f788e, #576d7f, #4f6270, #3d4e57, #2e3b3f, #21292a, #151717)"
          }
          case 71: case 73: case 75: case 77: case 85: case 86:
            return{
              background:" linear-gradient(to left top, #8d9a9f, #889399, #828d93, #7d868c, #788086, #7d858c, #828a92, #888f98, #9ba2ad, #aeb5c2, #c2c8d8, #d7dcee)"
            }
    default:
      return{
        background:" linear-gradient(to left top, #8d9a9f, #889399, #828d93, #7d868c, #788086, #7d858c, #828a92, #888f98, #9ba2ad, #aeb5c2, #c2c8d8, #d7dcee)"
      }
      
  }

  }
  console.log(bgColor())
  return (
    <div
      style={bgColor()}
      className="App h-screen	flex flex-col "
    >
      <div className="div h-1/6 flex flex-col	 ">
        <Weather onLoad={HandleOnSearchChange} weather={weatherFetcho} />
      </div>
      <div className=" h-1/8  flex place-content-center	mt-4  justify-center">
        <div className="place-items-center		">
          <Search onSearchChange={HandleOnSearchChange} />
        </div>
      </div>
      <WeatherS weather={weatherFetcho} />
    </div>
  );
}

export default App;
