'use client'

import { useEffect, useState } from 'react';
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";

import { getWeatherData } from '@/app/lib/weatherCache';

const bgImages: Record<string, string> = {
  clearSky: '/assets/clearSky.jpg',
  drizzle: '/assets/drizzle.jpeg',
  drizzle2: '/assets/drizzle1.jpeg',
  fog: '/assets/fog.webp',
  heavyRain: '/assets/heavyRain.jpeg',
  heavySnow: '/assets/heavySnow.jpg',
  overcast: '/assets/overcast3.jpg',
  partlyCloudy: '/assets/partlyCloudy.webp',
  rain: '/assets/rain.jpeg',
  snow: '/assets/snow3.avif',
  thunder: '/assets/thunder.webp',
};

export default function WeatherTemplate({ params, searchParams }: { params: { imageName: string }; searchParams: { id: string }; }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const bg = bgImages[params.imageName] ?? bgImages.clearSky;

  useEffect(() => {
    async function fetchWeather() {
      const res = await fetch(`/api/weatherCache/${searchParams.id}`);
      if (res.ok) {
        const data = await res.json();
        setWeatherData(data);
      }
      setLoading(false);
    }
    fetchWeather();
  }, [searchParams.id]);
  if (loading) return <div>Loading weather data...</div>;
  if (!weatherData) return <div>Weather data not found</div>;
  console.log('Weather data:', weatherData);
  return (
    <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden ">
      {/* Blurred background */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute -inset-4 bg-cover bg-center blur-lg"
      ></div>

      {/* Clear div (window) */}
      <div
        className={`relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed rounded-xl shadow-lg text-white flex md:flex-row outline outline-8 outline-white/25 flex-col my-4 md:my-0`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Display weatherData={weatherData} />
        <SidePanel weatherData={weatherData} />
      </div>
    </div>
  );
}
