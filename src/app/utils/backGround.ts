const weatherCodeMap: { [key: number]: string } = {
  0: 'clearSky',
  1: 'clearSky',
  2: 'partlyCloudy',
  3: 'overcast',
  45: 'fog',
  48: 'fog',
  51: 'drizzle',
  53: 'drizzle',
  55: 'drizzle',
  56: 'drizzle2',
  57: 'drizzle2',
  61: 'rain',
  63: 'rain',
  65: 'rain',
  66: 'rain',
  67: 'rain',
  71: 'snow',
  73: 'snow',
  75: 'snow',
  77: 'snow',
  80: 'heavyRain',
  81: 'heavyRain',
  82: 'heavyRain',
  85: 'heavySnow',
  86: 'heavySnow',
  95: 'thunder',
  96: 'thunder',
  99: 'thunder',
};

export function bgSelection(code: number): string {
  return weatherCodeMap[code] || 'clearSky';
}
