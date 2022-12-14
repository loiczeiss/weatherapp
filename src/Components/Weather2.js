import "../index.css";
import "./Sidebar.css";

import "../App.css";

const WeatherS = ({ weather }) => {
  // Hourly time definition

  let commencons = new Date();
  let dateTemps = commencons.getHours();
  var date2 = new Date(Date.now() + 1000 * 60 * 60 * 1); // Add 2 hours.
  let dateTemps2 = date2.getHours();
  var date3 = new Date(Date.now() + 1000 * 60 * 60 * 2); // Add 3 hours.
  let dateTemps3 = date3.getHours();
  var date4 = new Date(Date.now() + 1000 * 60 * 60 * 3); // Add 4 hours.
  let dateTemps4 = date4.getHours();
  var date5 = new Date(Date.now() + 1000 * 60 * 60 * 4); // Add 5 hours.
  let dateTemps5 = date5.getHours();

  //  Daily time function to display intel

  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Daily time definition

  let dateday = commencons.getDay();
  var dateB = new Date(Date.now() + 1000 * 60 * 60 * 24);
  let dateC = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2);
  let dateD = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3);
  let dateE = new Date(Date.now() + 1000 * 60 * 60 * 24 * 4);

  // [FIXME] refactor into map

  let day0 = weekdays[dateday];
  let day1 = weekdays[dateB.getDay()];
  let day2 = weekdays[dateC.getDay()];
  let day3 = weekdays[dateD.getDay()];
  let day4 = weekdays[dateE.getDay()];

  return (
    <div className="div flex flex-col h-full	">
      <div className="h-1/8	 flex flex-row justify-center pl-4 ">
        {/* <input type="text" id="input" placeholder="press Ctrl+K" className="h-4 self-center border-rounded"/> */}
      </div>

      <div className="h-1/8  flex flex-row">
        <div className=" w-1/3 flex flex-col justify-start pl-4">
          <p className="text-white text-xl md:text-end ">
            {weather.current_weather && weather.current_weather.temperature}°
          </p>

          <div className="flex flex-row justify-around md:justify-end font-extralight text-white">
            <div>
              {" "}
              <p className="md:pr-9">
                ▲{weather.daily && weather.daily.temperature_2m_max[0]}°
              </p>
            </div>
            <div>
              {" "}
              <p className="md:pr-1">
                ▼{weather.daily && weather.daily.temperature_2m_min[0]}°
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex justify-end">
          {/* <svg  className="self-center justify-self-end		mb-6 ml-8 fill-white" xmlns="http:www.w3.org/2000/svg" height="48" width="48"><path d="M22.5 7.5V2h3v5.5Zm0 38.5v-5.5h3V46Zm18-20.5v-3H46v3ZM2 25.5v-3h5.5v3ZM37.1 13l-2.15-2.15 3.3-3.3L40.4 9.7ZM9.75 40.45 7.6 38.3l3.3-3.3 2.15 2.15Zm28.5 0-3.3-3.3L37.1 35l3.3 3.3ZM10.9 13 7.6 9.7l2.15-2.15 3.3 3.3ZM24 35.25q-4.7 0-7.975-3.275Q12.75 28.7 12.75 24q0-4.7 3.275-7.975Q19.3 12.75 24 12.75q4.7 0 7.975 3.275Q35.25 19.3 35.25 24q0 4.7-3.275 7.975Q28.7 35.25 24 35.25Zm0-3q3.45 0 5.85-2.4 2.4-2.4 2.4-5.85 0-3.45-2.4-5.85-2.4-2.4-5.85-2.4-3.45 0-5.85 2.4-2.4 2.4-2.4 5.85 0 3.45 2.4 5.85 2.4 2.4 5.85 2.4ZM24 24Z"/></svg> */}
        </div>
      </div>
      {/* Temperature and min max display  */}
      {/* Feels display  */}
      <div className="h-1/6 w-1/3 flex flex-col justify-center text-center pl-4">
        {/* <p className=" font-display text-white">
          {weather.current_weather && weather.current_weather.weathercode}
        </p> */}
        <p className=" text-sm text-white font-extralight md:text-end md:pr-8 md:text-">
          feels like{" "}
          {weather.current_weather && weather.hourly.apparent_temperature[0]}°
        </p>
      </div>
      {/* Feels display  */}

      {/* Hourly temps */}
      <div className="h-1/8  flex flex-row justify-around 	border-y 	">
        <div className="flex flex-col">
          <p className="  text-sm font-extralight mt-2 text-center self-center  text-white basis-1/4">
            Now
          </p>
          <p className="  font-display text-lg text-center self-center  text-white basis-1/4 my-2 ">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps]}°
          </p>
        </div>
        <div className="flex flex-col border-solid	 border-y-1 border-white">
          <p className=" text-sm font-extralight mt-2  text-center self-center  text-white basis-1/4">
            {dateTemps2}h
          </p>
          <p className="  font-display text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps2]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date3.getHours()}h
          </p>
          <p className="  font-display text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps3]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date4.getHours()}h
          </p>
          <p className="  font-display text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps4]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date5.getHours()}h
          </p>
          <p className="  font-display text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps5]}°
          </p>
        </div>
      </div>
      {/* Hourly temps */}
      {/* Daily Intel  */}

      <div className=" h-full flex flex-row justify-evenly		 ">
        <div className=" flex flex-col  place-content-evenly text-basis align-center text-white ">
          <p>{day0}</p>
          <p>{day1}</p>
          <p>{day2}</p>
          <p>{day3}</p>
          <p>{day4}</p>
        </div>
        <div className=" flex flex-col 	place-content-evenly	 text-basis  text-white">
          <img
            className="h-8"
            alt="img "
            src={
              process.env.PUBLIC_URL +
              `/img/${weather.daily && weather.daily.weathercode[0]}.svg`
            }
          />
          <img
            className="h-8"
            alt="img "
            src={
              process.env.PUBLIC_URL +
              `/img/${weather.daily && weather.daily.weathercode[1]}.svg`
            }
          />
          <img
            className="h-8"
            alt="img "
            src={
              process.env.PUBLIC_URL +
              `/img/${weather.daily && weather.daily.weathercode[2]}.svg`
            }
          />
          <img
            className="h-8"
            alt="img "
            src={
              process.env.PUBLIC_URL +
              `/img/${weather.daily && weather.daily.weathercode[3]}.svg`
            }
          />
          <img
            className="h-8"
            alt="img "
            src={
              process.env.PUBLIC_URL +
              `/img/${weather.daily && weather.daily.weathercode[4]}.svg`
            }
          />
        </div>
        <div className=" flex flex-col place-content-evenly">
          <div className="flex flex-row justify-center	space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[0]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-extralight text-base text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[0]}°
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center  space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[1]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-extralight text-base text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[1]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[2]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-extralight text-base text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[2]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[3]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-extralight text-base text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[3]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className="font-display text-base text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[4]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-extralight text-base text-center self-center  text-white/50 	">
                {weather.daily && weather.daily.temperature_2m_min[4]}°
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Intel  */}
    </div>
  );
};

export default WeatherS;
