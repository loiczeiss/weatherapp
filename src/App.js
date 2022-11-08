// import { useEffect, useState } from "react";
// import axios from "axios";

// import Weather from "./Weather";
import Search from "./Search";

function App({onSearchChange}) {
  // const [lat, setLat] = useState(50.8476);
  // const [long, setLong] = useState(4.3572);
  // const [weatherIntel, setWeatherIntel] = useState({});


  // useEffect(() => {
  //   // fetchWeather();
  //   // fetchLatLong()
  // }, []);

//   
  

//   const fetchWeather = async () => {
//     const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`;
//     let mounted = true;
//     const client = await axios.get(baseURL);

//     // });
//     if (mounted) {
//       setWeatherIntel(client.data);
//     }
//     return () => (mounted = false);
//   };

const handleOnSearchChange = (searchData) => {
  console.log(searchData)
}
  return (
    <div className="App h-full">
<Search onSearchChange={handleOnSearchChange}/>
      {/* <Weather weather={weatherIntel} /> */}
    </div>
  );
}

export default App;
