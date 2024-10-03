'use client'
import { Card, Button, ButtonGroup } from "@nextui-org/react";
import "./styles.module.css"
import Image from "next/image";
import GpsIcon from "/public/assets/icons/localisationIcon.svg";
import MockData from "@/mockData.json";
import WindSvg from "/public/assets/icons/windSVG.svg";
import { WeatherDescriptions } from "@/actions/codeDescription";
import { useState } from "react";
export default function SidePanel() {
const [days, setDays] = useState(5)


  function degreesToCardinal(degrees: number) {
    const directions = [
      "North",
      "NorthEast",
      "East",
      "SouthEast",
      "South",
      "SouthWest",
      "West",
      "NorthWest",
      "North",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  }

  const handleButtonsPress = (days:number):any =>{
  setDays(days)
 
  }

  return (
    <Card className="flex flex-col md:w-5/12 lg:w-3/12 items-center h-screen md:h-full " isBlurred>
      <div className="flex flex-col  w-full items-center my-4 lg:my-8">
        <div className="  flex flex-row w-10/12 border border-white/25 rounded-lg">
          <GpsIcon width={25} className="fill-white/25 ml-2" />
          <input
            placeholder="Enter your location"
            className="my-1 mx-2 bg-transparent w-full text-xs lg:text-xl"
          />
        </div>
        <h1 className="my-4 lg:my-8 text-5xl">{MockData.current.temperature_2m}°C</h1>
        <div className="flex justify-center">
          <WindSvg width={15} height={15} className="fill-white/75" />
          <p className="text-white/75 ml-2 text-xs">
            {degreesToCardinal(MockData.current.wind_direction_10m)}
          </p>{" "}
          <p className="text-white/75 ml-2 text-xs">
            {MockData.current.wind_speed_10m} km/h
          </p>
        </div>
      </div>
      <div className="flex flex-col w-10/12 items-center my-4 md:my-0 lg:my-4 ">
        <h2>The Next Days Forecast</h2>
        <div className="flex lg:flex-row justify-between mb-4 md:mb-0 lg:mb-4 mt-6 md:mt-0 lg:mt-4">
          <Button className={`${days === 5 ? 'bg-black/25':'bg-transparent'}   text-white`} onClick={()=>handleButtonsPress(5)}>5 days</Button>
          <Button className={`${days === 10 ? 'bg-black/25':'bg-transparent'} text-white`} onClick={()=>handleButtonsPress(10)}>10 days</Button>
          <Button className={`${days === 15 ? 'bg-black/25':'bg-transparent'} text-white`} onClick={()=>handleButtonsPress(15)}>15 days</Button>
        </div>
        <div className="h-80 md:h-60 lg:h-80 overflow-y-auto overscroll-y-auto scrollbar-hidden"> {/* Set height for scrolling */}
  {MockData.daily.time.slice(0, days).map((time: string, index: number) => {
    const code = MockData.daily.weather_code[index]; // Corrected the dot before the square bracket
    const minTemp = MockData.daily.temperature_2m_min[index]; // Min temperatures
    const maxTemp = MockData.daily.temperature_2m_max[index]; // Corrected the typo here

    return ( // Ensure to return the JSX from the map function
      <div key={index} className="flex flex-row mt-2 lg:w-60 items-center lg:my-4">
        <div className="flex items-center sm:mx-2 md:mx-0 lg:mx-2 bg-white/5 w-10 h-10 justify-center rounded-lg">
          <WindSvg width={20} height={20} className="fill-white/75" />
        </div>
        <div className="flex flex-col w-28">
          <p className="text-xs">{time}</p>
          <p className="text-xs text-white/25">{WeatherDescriptions[code]}</p> {/* Weather description using code */}
        </div>
        <div className="flex flex-col sm:ml-6 md:ml-2 lg:ml-4 border-l border-l-white/25 px-2 w-16">
          <p className="text-xs">{minTemp}°C</p> {/* Optional: add °C for clarity */}
          <p className="text-xs">{maxTemp}°C</p> {/* Optional: add °C for clarity */}
        </div>
      </div>
    );
  })}
</div>


      </div>
    </Card>
  );
}
