import "./index.css";
import "./Sidebar.css";
import "./App.css";

const Weather = ({ weather }) => {
  // Day definition for header
  //[FIXME:] refactor me into a fn
  const time = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const timeDisplay = time.toLocaleDateString("en-EN", options);

  return (
    <div
      // style={{background : weathercode === 1 ? "linear-gradient(to top, #fc4a1a, #f7b733)" : null}}
      id="bg"
      className="h-full	flex flex-row place-content-center	items-center	 overflow-hidden 	"
    >
      <div className=" flex flex-col	">
        {/* header */}
        <div
          id="cont"
          className="h-1/2 w-screen flex flex-row place-content- items-center"
        >
          <div className=" flex basis-1/4 justify-center	 mt-4 font-display text-xl	text-white ">
            <svg
              className=" h-8  fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g data-name="weather android app aplication phone">
                <path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zm-2 14.83a6 6 0 0 1-5.28 5.28 63.65 63.65 0 0 1-14.6 0 6 6 0 0 1-5.26-5.28 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28 63.65 63.65 0 0 1 0 14.6z" />
                <path d="M22 24H10a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2zM25 20h-1.07a8 8 0 0 0-15.86 0H7a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2zm-14.92 0a6 6 0 0 1 11.84 0zM16 12a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1zM9.93 13.93a1 1 0 0 0 0-1.42L7.1 9.69a1 1 0 1 0-1.41 1.41l2.82 2.83a1 1 0 0 0 1.42 0zM24.9 9.69l-2.83 2.82a1 1 0 0 0 1.42 1.42l2.82-2.83a1 1 0 0 0-1.41-1.41z" />
              </g>
            </svg>
          </div>

          <p className="self-center text-center font-display text-base	text-white basis-2/4 mt-6">
            {timeDisplay}
          </p>

          <div className="basis-1/4 self-center text-center font-display text-base	text-white mt-6">
            <p>°C</p>
          </div>
        </div>
        {/* Header */}
      </div>
    </div>
  );
};

export default Weather;
