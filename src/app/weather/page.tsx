'use server'

import {bgSelection} from "@/components/backGround";
import {fetchWeather} from "@/actions/weatherAPI";
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";

interface SearchParams {
    lat: string;
    lon: string;
}

type weatherDataType = {
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
        temperature2m: number[];
        weatherCode: number[];
    };
    daily: {
        time: Date[];
        weatherCode: number[];
        temperature2mMax: number[];
        temperature2mMin: number[];

    }
}

export default async function WeatherPage({searchParams}: { searchParams: SearchParams }) {
    const {lat, lon} = searchParams;
    const weatherData: weatherDataType = await fetchWeather(Number(lat), Number(lon));


    // Select background image based on weather code
    const bg = bgSelection(weatherData.current.weatherCode);

    return (
        <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden ">
            {/* Blurred background */}
            <div
                style={{backgroundImage: `url(${bg})`}}
                className="absolute -inset-4 bg-cover bg-center blur-lg"
            ></div>

            {/* Clear div (window) */}
            <div
                className={`relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed rounded-xl shadow-lg text-white flex md:flex-row outline outline-8 outline-white/25 flex-col my-4 md:my-0`}
                style={{backgroundImage: `url(${bg})`}}
            >
                <Display weatherData={weatherData}/>
                <SidePanel weatherData={weatherData}/>
            </div>
        </div>
    );
}
