export const GetCurrentDateInGMT = async (weatherData: {
  utcOffsetSeconds: any;
  current?: {
    time: Date;
    temperature2m: number;
    weatherCode: number;
    windSpeed10m: number;
    windDirection10m: number;
  };
  hourly?: {
    time: Date[];
    temperature2m: Float32Array;
    weatherCode: Float32Array;
  };
  daily?: {
    time: Date[];
    weatherCode: Float32Array;
    temperature2mMax: Float32Array;
    temperature2mMin: Float32Array;
  };
}): Promise<{
  hours: number | string;
  minutes: number | string;
  day: number;
  month: number;
  year: number;
}> => {
  const currentDate = new Date();

  // Get the UTC day, month, and year
  let hours: number | string;

  if (currentDate.getUTCHours() + weatherData.utcOffsetSeconds / 3600 < 10) {
    hours = `0${currentDate.getUTCHours() + weatherData.utcOffsetSeconds / 3600}`;
  } else {
    hours = currentDate.getUTCHours() + weatherData.utcOffsetSeconds / 3600;
  }

  let minutes: number | string;
  if (currentDate.getUTCMinutes() < 10) {
    minutes = `0${currentDate.getUTCMinutes()}`;
  } else {
    minutes = currentDate.getUTCMinutes();
  }
  const day = currentDate.getUTCDate();
  const month = currentDate.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
  const year = currentDate.getUTCFullYear();

  return { hours, minutes, day, month, year };
};

export const monthString: Record<number, string> = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
