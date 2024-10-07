

import GeoLocation from "@/client actions/geoLocation";
import WeatherPage from "@/components/weatherPage";


export default function Home() {
  // const weatherData = await getWeatherData();

  // if (!weatherData) {
  //   return <div>Sad...</div>;
  // }




  //TO DO: Modify before injecting real API data

  return (<>
    <WeatherPage />
<GeoLocation/>
    </>
  );
}
