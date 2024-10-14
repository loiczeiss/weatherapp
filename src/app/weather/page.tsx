'use server'

import { bgSelection } from "@/actions/backGround";
import { fetchWeather } from "@/actions/weatherAPI";
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";

interface WeatherDataProps {
  weatherData:{  utcOffsetSeconds: number;
    current: {
        time: Date;
        temperature2m: number;
        weatherCode: number;
        windSpeed10m: number;
        windDirection10m: number;
    };
    hourly: {
        time: Date[];
        temperature2m: Float32Array;
        weatherCode: Float32Array;
    };
    daily: {
        time: Date[];
        weatherCode: Float32Array;
        temperature2mMax:Float32Array;
        temperature2mMin: Float32Array
    };}
    searchParams: {
      lat: string;
      lon: string;
    };
  }

export default async function WeatherPage({ searchParams } : WeatherDataProps) {
  const { lat, lon } = searchParams;
  let weatherData;
  console.log(lat, lon)

  // Check if lat and lon are available before fetching
  if (!lat || !lon) {
    console.error("Latitude or longitude is missing.");
    return <div>Error: Latitude or longitude is missing.</div>;
  }

  // Fetch the weather data once, store in weatherData
  if (!weatherData) {

    weatherData = await fetchWeather(lat, lon);
  }

  // Select background image based on weather code
  const x = bgSelection(weatherData.current.weatherCode);

  return (
    <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden ">
      {/* Blurred background */}
      <div
        style={{ backgroundImage: `url(${x})` }}
        className="absolute -inset-4 bg-cover bg-center blur-lg"
      ></div>

      {/* Clear div (window) */}
      <div
        className={`relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed rounded-xl shadow-lg text-white flex md:flex-row outline outline-8 outline-white/25 flex-col my-4 md:my-0`}
        style={{ backgroundImage: `url(${x})` }}
      >
        <Display weatherData={weatherData} searchParams={searchParams}/>
        <SidePanel weatherData={weatherData} />
      </div>
    </div>
  );
}
