// app/weather/page.tsx
import Display from '@/components/display';
import SidePanel from '@/components/sidePanel';
import { fetchWeather } from '@/actions/weatherAPI';

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

function mapCodeToImageName(code: number): keyof typeof bgImages {
  if ([0].includes(code)) return 'clearSky';
  if ([1, 2].includes(code)) return 'partlyCloudy';
  if ([3].includes(code)) return 'overcast';
  if ([45, 48].includes(code)) return 'fog';
  if ([51, 53, 55].includes(code)) return 'drizzle';
  if ([56, 57].includes(code)) return 'drizzle2';
  if ([61, 63, 65].includes(code)) return 'rain';
  if ([66, 67, 80, 81, 82].includes(code)) return 'heavyRain';
  if ([71, 73, 75, 77, 85, 86].includes(code)) return 'snow';
  if ([95, 96, 99].includes(code)) return 'thunder';
  return 'clearSky';
}

export default async function WeatherPage({
                                            searchParams,
                                          }: {
  searchParams: { lat?: string; lon?: string };
}) {
  const lat = Number(searchParams.lat);
  const lon = Number(searchParams.lon);

  if (!lat || !lon) {
    return <div className="text-white">Missing coordinates.</div>;
  }

  const weatherData = await fetchWeather(lat, lon);
  if (!weatherData) return <div className="text-white">Weather data not found.</div>;

  const code = weatherData.current?.weatherCode ?? 0;
  const imageName = mapCodeToImageName(code);
  const bg = bgImages[imageName];

  return (
    <div className="relative flex w-screen items-center justify-center overflow-hidden md:h-screen">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="absolute -inset-4 bg-cover bg-center blur-lg"
      />
      <div
        className={`relative z-10 my-4 flex w-11/12 flex-col rounded-xl bg-cover bg-fixed bg-center text-white shadow-lg outline outline-8 outline-white/25 md:my-0 md:h-4/5 md:flex-row`}
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Display weatherData={weatherData} />
        <SidePanel weatherData={weatherData} />
      </div>
    </div>
  );
}
