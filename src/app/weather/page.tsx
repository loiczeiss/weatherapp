import { redirect } from 'next/navigation';
import { fetchWeather } from '@/actions/weatherAPI';
import { bgSelection } from '@/app/utils/backGround';
import { storeWeatherData } from '@/app/lib/weatherCache';


export default async function WeatherRedirectPage({ searchParams }: { searchParams: { lat: string; lon: string } }) {
  const { lat, lon } = searchParams;

  const weatherData = await fetchWeather(Number(lat), Number(lon));

  const imageName = bgSelection(weatherData.current.weatherCode); // return key like 'fog', not image src

  const id = await storeWeatherData(weatherData); // returns a unique ID for cache

  redirect(`/weather/${imageName}?id=${id}&lat=${lat}&lon=${lon}`);

}