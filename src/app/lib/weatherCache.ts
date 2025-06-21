// lib/weatherCache.ts
export const weatherStore = new Map<string, any>();

export async function storeWeatherData(data: any): Promise<string> {
  const id = crypto.randomUUID();
  weatherStore.set(id, data);
  console.log('Weather data stored with ID:', id, data);
  return id;
}

export async function getWeatherData(id: string) {
  return weatherStore.get(id);
}
