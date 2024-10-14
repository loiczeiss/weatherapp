

import GeoLocation from "@/actions/geoLocation";
import Intro from "@/components/introPage";
import WeatherPage from "@/app/weather/page";
import { fetchWeather } from "@/actions/weatherAPI";
import { LocationKeeper } from "@/actions/locationKeeper";


export default function Home() {


  return (<>
    <Intro />

    </>
  );
}
