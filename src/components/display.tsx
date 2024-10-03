
import { getWeatherData } from "@/actions";
import mock from "@/mockData.json";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import clearSkyIcon from "public/assets/icons/0-01.png"
import { WeatherDescriptions } from "@/actions/codeDescription";
import { GetCurrentDateInGMT, monthString } from "@/actions/getDate";
import { ModifyTitle } from "@/actions/modifyTitleBasedOnWeatherCode";
import { IconSelection } from "@/actions/icons";
import '@/app/styles.module.css'
import HourlyCard from "./hourlyCard";

export default async function Display() {
  //   const weatherData = await getWeatherData();
const imgData = await IconSelection(45)

  const { hours, minutes, day, month, year } = GetCurrentDateInGMT();

//TO DO: Modify before injecting real API data


  return (
    <article className="flex flex-col md:w-8/12 lg:w-9/12 h-full p-4 justify-between md:order-first ">
      <section className="flex justify-end w-full ">
        <p className="px-2 border-r border-white/25">
          {" "}
          {day} {monthString[month]} {year}
        </p>
        <p className="px-2">
          {hours}:{minutes}
        </p>
      </section>
      <section className="my-4 lg:my-0">
        <h1
          className={`md:text-6xl text-2xl text-end  font-bold pb-6  pr-6 `}
          style={ModifyTitle[96]}
        >
          {WeatherDescriptions[96]}
        </h1>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hidden my-4 md:my-0">
  {mock.hourly.time.slice(0, 10).map((time: string, index: number) => (
    <HourlyCard key={index} imgData={imgData} index={index} temperature={mock.hourly.temperature_2m[index]}/>
  ))}
</div>
      </section>
    </article>
  );
}
