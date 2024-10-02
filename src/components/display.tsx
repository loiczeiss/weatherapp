
import { getWeatherData } from "@/actions";
import mock from "@/mockData.json";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import MockIcon from "/public/assets/icons/mockWeather.svg";
import { WeatherDescriptions } from "@/actions/codeDescription";
import { GetCurrentDateInGMT, monthString } from "@/actions/getDate";
import { ModifyTitle } from "@/actions/modifyTitleBasedOnWeatherCode";
import { IconSelection } from "@/actions/icons";
import '@/app/styles.module.css'

export default async function Display() {
  //   const weatherData = await getWeatherData();

  const { hours, minutes, day, month, year } = GetCurrentDateInGMT();

//TO DO: Modify before injecting real API data
console.log(IconSelection(45))

  return (
    <article className="flex flex-col md:w-8/12 lg:w-9/12 h-full p-4 justify-between md:order-first order-last ">
      <section className="flex justify-end w-full ">
        <p className="px-2 border-r border-white/25">
          {" "}
          {day} {monthString[month]} {year}
        </p>
        <p className="px-2">
          {hours}:{minutes}
        </p>
      </section>
      <section className="">
        <h1
          className={`md:text-6xl text-2xl text-end  font-bold  pr-6 `}
          style={ModifyTitle[96]}
        >
          {WeatherDescriptions[96]}
        </h1>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hidden">
  {mock.hourly.time.slice(0, 10).map((time: string, index: number) => (
    <Card
      className="w-20 lg:w-36 m-2 bg-transparent flex-shrink-0 flex flex-col justify-between"
      key={index}
      isBlurred
    >
      <p className="text-center">20:45</p>
      <div className="flex justify-center">
        {/* <MockIcon width={40} className="flex justify-center" /> */}
        {/* <Image src={IconSelection(45)} alt='icon' /> */}
      </div>
      <p className="text-center">
        {mock.hourly.temperature_2m[index]}°C
      </p>
    </Card>
  ))}
</div>
      </section>
    </article>
  );
}
