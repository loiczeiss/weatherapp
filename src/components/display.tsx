
import { WeatherDescriptions } from "@/actions/codeDescription";
import { GetCurrentDateInGMT, monthString } from "@/actions/getDate";
import { ModifyTitle } from "@/actions/modifyTitleBasedOnWeatherCode";
import { IconSelection } from "@/actions/icons";
import '@/app/styles.module.css'
import HourlyCard from "./hourlyCard";
import { StaticImageData } from "next/image";


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
    searchParams?: {
      lat: string;
      lon: string;
    };
  }

export default async function Display({ weatherData, searchParams }:WeatherDataProps) {
  // Log the weather codes to ensure they are being sliced correctly
  const weatherCodes = weatherData.hourly.weatherCode.slice(11, 21);

  // Fetch the icons corresponding to each weather code
  // Fetch the icons corresponding to each weather code
  let ImgData: StaticImageData[]= []
  const imgDataArray = await Promise.all(
    weatherCodes.map(async (code: number) => {
      const iconData = await IconSelection(code);


  ImgData.push(iconData)
    })
  );


  const { hours, minutes, day, month, year } = await GetCurrentDateInGMT(searchParams);

  return (
    <article className="flex flex-col md:w-8/12 lg:w-9/12 h-full p-4 justify-between md:order-first">
      <section className="flex justify-end w-full">
        <p className="px-2 border-r border-white/25">
          {day} {monthString[month]} {year}
        </p>
        <p className="px-2">
          {hours}:{minutes}
        </p>
      </section>

      <section className="my-4 lg:my-0">
        <h1 className={`md:text-6xl text-2xl text-end font-bold pb-6 pr-6`} style={ModifyTitle[weatherData.current.weatherCode]}>
          {WeatherDescriptions[weatherData.current.weatherCode]}
        </h1>

        <div className="flex overflow-x-auto space-x-4 scrollbar-hidden my-4 md:my-0">
          {weatherData.hourly.time.slice(11, 21).map((time: Date, index: number) => (
            <HourlyCard
              key={index}
              imgData={ImgData[index]}  // Use the correct icon data for each time slot
              index={index}
              time={new Date(time).toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
              })}
              temperature={Math.floor(weatherData.hourly.temperature2m[index] * 10) / 10}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
