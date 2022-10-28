import { useEffect, useState } from "react";
import axios from "axios";

import Weather from "./Weather";
import mapData from "./mockMapData.json";

function App() {
  const [lat, setLat] = useState(50.8476);
  const [long, setLong] = useState(4.3572);
  const [weatherIntel, setWeatherIntel] = useState({});
  const [city, setCity] = useState("")

  useEffect(() => {
    // fetchWeather();
    // fetchLatLong()
  }, []);

  const fetchLatLong =  () => {
    
console.log(city)
    console.log('form submitted ✅');
    const response =  axios
      .get(
        `https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=${city}&format=json`
      )
      .then((response) => {
        console.log(response.data);
      });
  };
  

  const fetchWeather = async () => {
    const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`;
    let mounted = true;
    const client = await axios.get(baseURL);

    // });
    if (mounted) {
      setWeatherIntel(client.data);
    }
    return () => (mounted = false);
  };

  return (
    <div className="App h-full">
      <input
      value={city}
    
      onChange={(e) =>  setCity(e.target.value)}
        type="text"
        id="input"
        placeholder="press Ctrl+K"
        className="h-4 self-center border-rounded"
      />
      <button type="submit" onSubmit={ fetchLatLong()}>SUBMIT</button>
      <Weather weather={weatherIntel} />
    </div>
  );
}

export default App;
