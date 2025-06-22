import { WeatherDescriptions } from '@/utils/codeDescription';
import { GetCurrentDateInGMT, monthString } from '@/actions/getDate';
import { ModifyTitle } from '@/utils/modifyTitleBasedOnWeatherCode';
import { IconSelection } from '@/actions/icons';
import '@/app/styles.module.css';
import HourlyCard from './hourlyCard';
import { StaticImageData } from 'next/image';

interface WeatherDataProps {
  weatherData: {
    utcOffsetSeconds: number;
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
      temperature2mMax: Float32Array;
      temperature2mMin: Float32Array;
    };
  };
}

export default async function Display({ weatherData }: WeatherDataProps) {
  const { hours, minutes, day, month, year } =
    await GetCurrentDateInGMT(weatherData);
  // Log the weather codes to ensure they are being sliced correctly
  const weatherCodes = Object.values(
    weatherData.hourly.weatherCode as unknown as Record<string, number>,
  ).slice((hours as number) - 2, (hours as number) + 8);

  // Fetch the icons corresponding to each weather code
  // Fetch the icons corresponding to each weather code
  const ImgData: StaticImageData[] = [];

  for (const code of weatherCodes) {
    const iconData = await IconSelection(code);
    ImgData.push(iconData);
  }

  return (
    <article className="flex h-full flex-col justify-between p-4 md:order-first md:w-8/12 lg:w-9/12">
      <section className="flex w-full justify-end">
        <p className="border-r border-white/25 px-2">
          {day} {monthString[month]} {year}
        </p>
        <p className="px-2">
          {hours}:{minutes}
        </p>
      </section>

      <section className="my-4 lg:my-0">
        <h1
          className={`pb-6 pr-6 text-end text-2xl font-bold md:text-6xl`}
          style={ModifyTitle[weatherData.current.weatherCode]}
        >
          {WeatherDescriptions[weatherData.current.weatherCode]}
        </h1>

        <div className="scrollbar-hidden my-4 flex space-x-4 overflow-x-auto md:my-0">
          {Object.entries(weatherData.hourly.time)
            .slice((hours as number) - 2, (hours as number) + 8)
            .map(([key, time]: [string, Date], index: number) => (
              <HourlyCard
                key={key}
                imgData={ImgData[index]}
                index={index}
                time={new Date(time).toLocaleTimeString('en-GB', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
                temperature={
                  Math.floor(weatherData.hourly.temperature2m[index] * 10) / 10
                }
              />
            ))}
        </div>
      </section>
    </article>
  );
}
