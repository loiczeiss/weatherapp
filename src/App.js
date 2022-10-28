import { useEffect, useState } from "react";
import axios from "axios";

import Weather from "./Weather";
import mapData from "./mockMapData.json"




function App() {

 
const [lat, setLat] = useState(50.8476)
const [long , setLong] = useState(4.3572)
const [weatherIntel, setWeatherIntel] = useState({})

// axios.get("https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=brussels&format=json")
// .then((response) => {
//   console.log(response.data)
// })




useEffect(() => {
 
fetchWeather();
  },
 []);

const fetchWeather = async () => {

  const  baseURL= `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`
let mounted = true;
  const client = await axios.get(baseURL);
//  client.then(( response) => {
//     console.log(response.data);
//     setWeatherIntel(response.data)
 
// });
if (mounted){
  setWeatherIntel(client.data)
}
return () => mounted = false;

}

// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=Empire%20State%20Building&format=json",
//   "method": "GET"
// }










//  useEffect(() => {
//   console.log('before fetcho')
//  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`, {
//           "method": "GET",
//         "headers": {
//           }
//         })
//         .then(response => {
 
//    return response.json();
//         })
//         .then(data => {
       
//           setWeatherIntel(data);
//         console.log(data, "data, im inside youseEffect")
      
         
//    })
//    console.log( "data, im outside fetch")
//  }, []);





  return (
    <div className="App h-full" 
    >
 <Weather  weather={weatherIntel}/>
	
    </div>
  )
}

export default App