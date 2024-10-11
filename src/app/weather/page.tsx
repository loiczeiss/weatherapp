import { Card, Image, CardBody } from "@nextui-org/react";
import { getWeatherData } from "@/actions";
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";
import MockData from "@/mockData.json";
import { LocationKeeper } from "@/actions/locationKeeper";
import { fetchWeather } from "@/actions/weatherAPI";
import { bgSelection } from "@/actions/backGround";
export default async function WeatherPage () {
  
    
    const weatherData = await fetchWeather()  //TO DO: Modify before injecting real API data
    let x = await bgSelection(weatherData.current.weatherCode);
return (    <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden ">
    {/* Blurred background */}
    <div
      style={{ backgroundImage: `url(${x})` }}
      className="absolute -inset-4 bg-cover bg-center blur-lg"
    ></div>

    {/* Clear div (window) */}
    <div
      className={`relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed  rounded-xl shadow-lg text-white flex md:flex-row  outline  outline-8  outline-white/25
        flex-col my-4 md:my-0` }
      style={{ backgroundImage: `url(${x})` }}
    >
      <Display weatherData={weatherData} />
      <SidePanel  weatherData={weatherData}/>
    </div>
  </div>)
}