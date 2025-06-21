export async function generateStaticParams() {
  return Object.keys({
    clearSky: '',
    drizzle: '',
    drizzle2: '',
    fog: '',
    heavyRain: '',
    heavySnow: '',
    overcast: '',
    partlyCloudy: '',
    rain: '',
    snow: '',
    thunder: '',
  }).map((imageName) => ({ imageName }));
}
