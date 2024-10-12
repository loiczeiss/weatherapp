"use client";

import "./styles.module.css";
import Image from "next/image";
import GpsIcon from "/public/assets/icons/localisationIcon.svg";
import MockData from "@/mockData.json";
import { IconSelection } from "@/actions/icons";
import WindSvg from "/public/assets/icons/windSVG.svg";
import { WeatherDescriptions } from "@/actions/codeDescription";
import { useEffect, useState } from "react";
import SearchInput from "./searchInput";
import { Button, Card } from "@nextui-org/react";

export default function SidePanel({ weatherData }) {
  const [days, setDays] = useState(5);
  const [ulClose, setUlClose] = useState(true);
  const [iconData, setIconData] = useState([]); // State for icon data

  const searchInputModifier = {
    placeholder: "placeholder:text-left",
    position: "absolute",
    topAndWidth: "top-12 w-10/12 md:w-48 lg:top-16  lg:w-10/12",
  };

  useEffect(() => {
    const fetchIcons = async () => {
      const weatherCodes = weatherData.daily.weatherCode.slice(0, days);
      const icons = await Promise.all(weatherCodes.map(code => IconSelection(code)));
      setIconData(icons); // Set icon data in state
    };

    fetchIcons();
  }, [days, weatherData.daily.weatherCode]); // Re-fetch icons if days or weather codes change

  const degreesToCardinal = (degrees) => {
    const directions = [
      "North", "NorthEast", "East", "SouthEast", "South",
      "SouthWest", "West", "NorthWest", "North",
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const handleButtonsPress = (days) => {
    setDays(days);
  };

  return (
    <Card className="flex flex-col md:w-5/12 lg:w-3/12 items-center h-screen md:h-full" isBlurred>
      <div className="flex flex-col w-full items-center my-4 lg:my-8 z-50">
        <div className="flex flex-row w-10/12 border border-white/25 rounded-lg z-0">
          <GpsIcon width={25} className="fill-white/25 ml-2" />
          <SearchInput searchInputModifier={searchInputModifier} ulClose={ulClose} setUlClose={setUlClose} />
        </div>
        <h1 className="my-4 lg:my-8 text-5xl">
          {Math.floor(weatherData.current.temperature2m * 10) / 10}°C
        </h1>
        <div className="flex justify-center">
          <WindSvg width={15} height={15} className="fill-white/75" />
          <p className="text-white/75 ml-2 text-xs">
            {degreesToCardinal(weatherData.current.windDirection10m)}
          </p>
          <p className="text-white/75 ml-2 text-xs">
            {Math.floor(weatherData.current.windSpeed10m * 10) / 10} km/h
          </p>
        </div>
      </div>
      <div className="flex flex-col w-10/12 items-center my-4 md:my-0 lg:my-4">
        <h2>The Next Days Forecast</h2>
        <div className="flex lg:flex-row justify-between mb-4 md:mb-0 lg:mb-4 mt-6 md:mt-0 lg:mt-4">
          <Button className={`${days === 5 ? "bg-black/25" : "bg-transparent"} text-white`} onClick={() => handleButtonsPress(5)}>5 days</Button>
          <Button className={`${days === 10 ? "bg-black/25" : "bg-transparent"} text-white`} onClick={() => handleButtonsPress(10)}>10 days</Button>
          <Button className={`${days === 15 ? "bg-black/25" : "bg-transparent"} text-white`} onClick={() => handleButtonsPress(15)}>15 days</Button>
        </div>
        <div className="h-80 md:h-60 lg:h-80 overflow-y-auto overscroll-y-auto scrollbar-hidden">
          {weatherData.daily.time.slice(0, days).map((time, index) => {
            const code = weatherData.daily.weatherCode[index]; // Weather code
            const minTemp = weatherData.daily.temperature2mMin[index]; // Min temperatures
            const maxTemp = weatherData.daily.temperature2mMax[index]; // Max temperatures

            return (
              <div key={index} className="flex flex-row mt-2 lg:w-60 items-center lg:my-4">
                <div className="flex items-center sm:mx-2 md:mx-0 lg:mx-2 bg-white/5 w-10 h-10 justify-center rounded-lg">
                  <Image src={iconData[index]} width={20} height={20} alt={`Weather icon for ${WeatherDescriptions[code]}`} className="invert"/>
                </div>
                <div className="flex flex-col w-28">
                  <p className="text-xs text-white/25">{WeatherDescriptions[code]}</p>
                </div>
                <div className="flex flex-col sm:ml-6 md:ml-2 lg:ml-4 border-l border-l-white/25 px-2 w-16">
                  <p className="text-xs">{Math.floor(minTemp * 10) / 10}°C</p>
                  <p className="text-xs">{Math.floor(maxTemp * 10) / 10}°C</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
