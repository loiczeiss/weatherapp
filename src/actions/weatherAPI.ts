"use server";

import { fetchWeatherApi } from "openmeteo";

export async function fetchWeather(lat: number, lon: number) {
  lat = Number(lat);
  lon = Number(lon);

  const params = {
    latitude: lat,
    longitude: lon,
    current: [
      "temperature_2m",
      "weather_code",
      "wind_speed_10m",
      "wind_direction_10m",
    ],
    hourly: ["temperature_2m", "weather_code"],
    daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
    timezone: "auto",
    forecast_days: 16,
  };

  const url = "https://api.open-meteo.com/v1/forecast";
  const responses = await fetchWeatherApi(url, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
      Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds()!;
  const current = response.current()!;
  const hourly = response.hourly()!;
  const daily = response.daily()!;

  const weatherData = {
    utcOffsetSeconds: utcOffsetSeconds,
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0)!.value(),
      weatherCode: current.variables(1)!.value(),
      windSpeed10m: current.variables(2)!.value(),
      windDirection10m: current.variables(3)!.value(),
    },
    hourly: {
      time: range(
          Number(hourly.time()),
          Number(hourly.timeEnd()),
          hourly.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      temperature2m: Array.from(hourly.variables(0)!.valuesArray()!),
      weatherCode: Array.from(hourly.variables(1)!.valuesArray()!),
    },
    daily: {
      time: range(
          Number(daily.time()),
          Number(daily.timeEnd()),
          daily.interval()
      ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
      weatherCode: Array.from(daily.variables(0)!.valuesArray()!),
      temperature2mMax: Array.from(daily.variables(1)!.valuesArray()!),
      temperature2mMin: Array.from(daily.variables(2)!.valuesArray()!),
    },
  };

  return weatherData;
}
