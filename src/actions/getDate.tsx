import Mock from "@/mockData.json"
import { fetchWeather } from "./weatherAPI";

export const GetCurrentDateInGMT = async (searchParams): Promise<{
  hours: number | string;
  minutes: number | string;
  day: number;
  month: number;
  year: number;
}> => {
  const {lat,lon}= searchParams
    const weatherData =await fetchWeather(Number(lat), Number(lon))
    const currentDate = new Date();

    // Get the UTC day, month, and year
    let hours:number|string
    if ( currentDate.getUTCHours()+(weatherData.utcOffsetSeconds/3600)<10){
      hours= `0${currentDate.getUTCHours()+(weatherData.utcOffsetSeconds/3600)}`
        }else{
          hours = currentDate.getUTCHours()+(weatherData.utcOffsetSeconds/3600)
        }
    let minutes:number|string
    if ( currentDate.getUTCMinutes()<10){
  minutes= `0${currentDate.getUTCMinutes()}`
    }else{
      minutes=currentDate.getUTCMinutes()
    }
    const day = currentDate.getUTCDate();
    const month = currentDate.getUTCMonth() + 1; // Months are 0-indexed, so we add 1
    const year = currentDate.getUTCFullYear();

    return { hours, minutes, day, month, year };
  };


  export const monthString: Record<number, string> = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };