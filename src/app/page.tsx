

import GeoLocation from "@/actions/geoLocation";
import Intro from "@/components/introPage";
import WeatherPage from "@/app/weather/page";


export default function Home() {
  // const weatherData = await getWeatherData();

  // if (!weatherData) {
  //   return <div>Sad...</div>;
  // }




  //TO DO: Modify before injecting real API data

  return (<>
    <Intro />
<GeoLocation/>
    </>
  );
}
