"use server";
import { getWeatherData } from "@/actions";
import mock from "@/mockData.json";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import MockIcon from "@/app/assets/icons/mockWeather.svg";
export default async function Display() {
  //   const weatherData = await getWeatherData();
  const getCurrentDateInGMT = (): {
    hours: number;
    minutes: number;
    day: number;
    month: number;
    year: number;
  } => {
    const currentDate = new Date();

    // Get the UTC day, month, and year
    const hours = currentDate.getUTCHours();
    const minutes = currentDate.getUTCMinutes();
    const day = currentDate.getUTCDate();
    const month = currentDate.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = currentDate.getUTCFullYear();

    return { hours, minutes, day, month, year };
  };

  // Example usage
  const { hours, minutes, day, month, year } = getCurrentDateInGMT();
  const monthString: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  //to delete when passing to real data
  const weatherDescriptions: { [key: number]: string } = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Drizzle: Light intensity",
    53: "Drizzle: Moderate intensity",
    55: "Drizzle: Dense intensity",
    56: "Freezing Drizzle: Light intensity",
    57: "Freezing Drizzle: Dense intensity",
    61: "Rain: Slight intensity",
    63: "Rain: Moderate intensity",
    65: "Rain: Heavy intensity",
    66: "Freezing Rain: Light intensity",
    67: "Freezing Rain: Heavy intensity",
    71: "Snow fall: Slight intensity",
    73: "Snow fall: Moderate intensity",
    75: "Snow fall: Heavy intensity",
    77: "Snow grains",
    80: "Rain showers: Slight intensity",
    81: "Rain showers: Moderate intensity",
    82: "Rain showers: Violent intensity",
    85: "Snow showers: Slight intensity",
    86: "Snow showers: Heavy intensity",
    95: "Thunderstorm: Slight or moderate",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };
  return (
    <article className="flex flex-col w-9/12 h-full p-4 justify-between">
      <section className="flex justify-end w-full ">
        <p className="px-2 border-r border-white/25">
          {" "}
          {day} {monthString[month]} {year}
        </p>
        <p className="px-2">
          {hours}:{minutes}
        </p>
      </section>
      <section className="h-1/3">
        <h1 className="text-6xl text-end  font-bold bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          {weatherDescriptions[mock.current.weather_code]}
        </h1>
        <div className="flex flex-row h-3/4">
          {" "}
          {mock.hourly.time.slice(0, 10).map((time: string, index: number) => (
            <Card
              className="w-1/5 m-2 bg-transparent flex flex-col justify-between"
              key={index}
              isBlurred
            >
              <p className="text-center">21:45</p>
              <div className="flex justify-center">
                <MockIcon width={40} className='flex justify-center'/>
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
