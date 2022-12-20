import "./index.css";
import "./Sidebar.css";
import "./App.css";

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
          <p className="text-white text-xl text-center">
            {weather.current_weather && weather.current_weather.temperature}°
          </p>

          <div className="flex flex-row justify-around lg:justify-centerfont-extralight text-white">
            <div>
              {" "}
              <p className="lg:pr-4 lg:text-lg">
                ▲{weather.daily && weather.daily.temperature_2m_max[0]}°
              </p>
            </div>
            <div>
              {" "}
              <p className="lg:text-lg">
                ▼{weather.daily && weather.daily.temperature_2m_min[0]}°</p>
            </div>
          </div>
        </div>
     
      </div>
      {/* Temperature and min max display  */}
      {/* Feels display  */}
      <div className="h-1/6 w-1/3 flex flex-col justify-center text-center pl-4">
      <img 
      className="w-8 self-center"
      src={process.env.PUBLIC_URL +
              `/img/${weather.current_weather && weather.current_weather.weathercode}.svg`
        } 
        alt="conditions"

        />
        <p className=" text-sm lg:text-m text-white font-extralight">
          feels like{" "}
          {weather.current_weather && weather.hourly.apparent_temperature[0]}°
        </p>
      </div>
      {/* Feels display  */}

      {/* Hourly temps */}
      <div className="h-1/8  flex flex-row justify-around 	border-y 	">
        <div className="flex flex-col">
          <p className="  text-sm lg:text-m font-extralight mt-2 text-center self-center  text-white basis-1/4">
            Now
          </p>
          <p className="  font-display text-m lg:text-lg text-center self-center  text-white basis-1/4 my-2 ">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps]}°
          </p>
        </div>
        <div className="flex flex-col border-solid	 border-y-1 border-white">
          <p className=" text-sm lg:text-m font-extralight mt-2  text-center self-center  text-white basis-1/4">
            {dateTemps2}h
          </p>
          <p className="  font-display text-m lg:text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps2]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm lg:text-m font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date3.getHours()}h
          </p>
          <p className="  font-display text-m   lg:text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps3]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm lg:text-m font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date4.getHours()}h
          </p>
          <p className="  font-display text-m lg:text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps4]}°
          </p>
        </div>
        <div className="flex flex-col">
          <p className="  text-sm lg:text-m font-extralight mt-2 text-center self-center  text-white basis-1/4">
            {date5.getHours()}h
          </p>
          <p className="  font-display text-m lg:text-lg text-center self-center  text-white basis-1/4 my-2">
            {weather.hourly && weather.hourly.temperature_2m[dateTemps5]}°
          </p>
        </div>
      </div>
      {/* Hourly temps */}




      
      {/* Daily Intel  */}

      <div className=" h-full flex flex-row justify-evenly		 ">
        <div className=" flex flex-col  place-content-evenly text-basis align-center text-white ">
          <p className="lg:text-m">
          {day0}</p>
          <p className="lg:text-m">{day1}</p>
          <p className="lg:text-m">{day2}</p>
          <p className="lg:text-m">{day3}</p>
          <p className="lg:text-m">{day4}</p>
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
              <p className=" font-display text-base lg:text-m text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[0]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-display font-extralight text-base lg:text-m text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[0]}°
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center  space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base lg:text-m text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[1]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-display font-extralight text-base lg:text-m text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[1]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base lg:text-m text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[2]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-display font-extralight text-base lg:text-m text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[2]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className=" font-display text-base lg:text-m  text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[3]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className=" font-display font-extralight text-base lg:text-m lg:font-normal text-center self-center  text-white/50 border-solid">
                {weather.daily && weather.daily.temperature_2m_min[3]}°
              </p>
            </div>
          </div>{" "}
          <div className="flex flex-row justify-center space-x-3">
            <div className="flex flex-col">
              {" "}
              <p className="font-display text-base lg:text-m  text-center self-center  text-white">
                {weather.daily && weather.daily.temperature_2m_max[4]}°
              </p>
            </div>
            <div className="flex flex-col">
              {" "}
              <p className="font-display font-extralight text-base lg:text-m lg:font-light text-center self-center  text-white/50 	">
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
