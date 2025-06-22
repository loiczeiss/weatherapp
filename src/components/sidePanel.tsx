'use client';
import './styles.module.css';
import Image from 'next/image';
import GpsIcon from '/public/assets/icons/localisationIcon.svg';
import WindSvg from '/public/assets/icons/windSVG.svg';
import { SetStateAction, useEffect, useState } from 'react';
import SearchInput from './searchInput';
import { WeatherDescriptions } from '@/utils/codeDescription';
import { Button, Card } from '@heroui/react';
import { StaticImageData } from 'next/dist/shared/lib/get-img-props';
import clearSkyIcon from 'public/assets/icons/0-01.png';
import partlyCloudyIcon from 'public/assets/icons/02-03.png';
import fogIcon from 'public/assets/icons/45-48.png';
import drizzleIcon from 'public/assets/icons/51-53-56.png';
import drizzleIcon2 from 'public/assets/icons/55-57.png';
import rainIcon from 'public/assets/icons/61-63-66.png';
import rainIcon2 from 'public/assets/icons/65-67.png';
import snowIcon from 'public/assets/icons/71-73-85.png';
import snowIcon2 from 'public/assets/icons/75-77-86.png';
import showersIcon from 'public/assets/icons/80-81-82.png';
import thunderIcon from 'public/assets/icons/95-96-97.png';

// Icon selection logic
const iconMap: { [key: number]: StaticImageData } = {
  0: clearSkyIcon,
  1: clearSkyIcon,
  2: partlyCloudyIcon,
  3: partlyCloudyIcon,
  45: fogIcon,
  48: fogIcon,
  51: drizzleIcon,
  53: drizzleIcon,
  56: drizzleIcon,
  55: drizzleIcon2,
  57: drizzleIcon2,
  61: rainIcon,
  63: rainIcon,
  66: rainIcon,
  65: rainIcon2,
  67: rainIcon2,
  71: snowIcon,
  73: snowIcon,
  85: snowIcon,
  75: snowIcon2,
  77: snowIcon2,
  86: snowIcon2,
  80: showersIcon,
  81: showersIcon,
  82: showersIcon,
  95: thunderIcon,
  96: thunderIcon,
  99: thunderIcon,
};

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
  searchParams?: {
    lat: string;
    lon: string;
  };
}

export default function SidePanel({ weatherData }: WeatherDataProps) {
  const [days, setDays] = useState(5);
  const [ulClose, setUlClose] = useState(true);
  const [iconData, setIconData] = useState<string[]>([]); // State for icon data

  useEffect(() => {
    const fetchIcons = () => {
      const weatherCodes = weatherData.daily.weatherCode.slice(0, days);

      const icons: StaticImageData[] = Array.from(weatherCodes).map(
        (code: number) => iconMap[code] || thunderIcon,
      );
      setIconData(icons as unknown as string[]);
    };

    fetchIcons();
  }, [days, weatherData.daily.weatherCode]);

  const degreesToCardinal = (degrees: number) => {
    const directions = [
      'North',
      'NorthEast',
      'East',
      'SouthEast',
      'South',
      'SouthWest',
      'West',
      'NorthWest',
      'North',
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const handleButtonsPress = (days: SetStateAction<number>) => {
    setDays(days);
  };

  return (
    <>
      <Card
        className="flex h-screen flex-col items-center md:h-full md:w-5/12 lg:w-3/12"
        isBlurred
      >
        <div className="z-50 my-4 flex w-full flex-col items-center lg:my-8">
          <div className="z-0 flex w-10/12 flex-row rounded-lg border border-white/25">
            <GpsIcon width={25} className="ml-2 fill-white/25" />
            <SearchInput ulClose={ulClose} setUlClose={setUlClose} />
          </div>
          <h1 className="my-4 text-5xl lg:my-8">
            {Math.floor(weatherData.current.temperature2m * 10) / 10}°C
          </h1>
          <div className="flex justify-center">
            <WindSvg width={15} height={15} className="fill-white/75" />
            <p className="ml-2 text-xs text-white/75">
              {degreesToCardinal(weatherData.current.windDirection10m)}
            </p>
            <p className="ml-2 text-xs text-white/75">
              {Math.floor(weatherData.current.windSpeed10m * 10) / 10} km/h
            </p>
          </div>
        </div>
        <div className="my-4 flex w-10/12 flex-col items-center md:my-0 lg:my-4">
          <h2>The Next Days Forecast</h2>
          <div className="mb-4 mt-6 flex justify-between md:mb-0 md:mt-0 lg:mb-4 lg:mt-4 lg:flex-row">
            <Button
              className={`${
                days === 5 ? 'bg-black/25' : 'bg-transparent'
              } text-white`}
              onPress={() => handleButtonsPress(5)}
            >
              5 days
            </Button>
            <Button
              className={`${
                days === 10 ? 'bg-black/25' : 'bg-transparent'
              } text-white`}
              onPress={() => handleButtonsPress(10)}
            >
              10 days
            </Button>
            <Button
              className={`${
                days === 15 ? 'bg-black/25' : 'bg-transparent'
              } text-white`}
              onPress={() => handleButtonsPress(15)}
            >
              15 days
            </Button>
          </div>
          <div className="lg:h-92 scrollbar-hidden h-80 overflow-y-auto overscroll-y-auto pb-8 md:h-60">
            {weatherData.daily.time.slice(0, days).map((time, index) => {
              const code = weatherData.daily.weatherCode[index]; // Weather code
              const minTemp = weatherData.daily.temperature2mMin[index]; // Min temperatures
              const maxTemp = weatherData.daily.temperature2mMax[index]; // Max temperatures

              return (
                <div
                  key={index}
                  className="mt-2 flex flex-row items-center lg:my-4 lg:w-60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 sm:mx-2 md:mx-0 lg:mx-2">
                    <Image
                      src={iconData[index]} // Use the icon from the state
                      width={20}
                      height={20}
                      alt={`Weather icon for ${WeatherDescriptions[code]}`}
                      className="invert"
                      priority // Load the icon with priority
                    />
                  </div>
                  <div className="flex w-28 flex-col">
                    <p className="pl-2 text-xs text-white/50">
                      {WeatherDescriptions[code]}
                    </p>
                  </div>
                  <div className="flex w-16 flex-col border-l border-l-white/25 px-2 sm:ml-6 md:ml-2 lg:ml-4">
                    <p className="text-xs">{Math.floor(minTemp * 10) / 10}°C</p>
                    <p className="text-xs">{Math.floor(maxTemp * 10) / 10}°C</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </>
  );
}
