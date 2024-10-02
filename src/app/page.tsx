import { Card, Image, CardBody } from "@nextui-org/react";
import { getWeatherData } from "@/actions";
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";
import MockData from "@/mockData.json";
import { bgSelection } from "@/actions/backGround";
export default function Home() {
  // const weatherData = await getWeatherData();

  // if (!weatherData) {
  //   return <div>Sad...</div>;
  // }

  let x = bgSelection(3);

  //TO DO: Modify before injecting real API data

  return (
    <div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden ">
      {/* Blurred background */}
      <div
        style={{ backgroundImage: `url(${x})` }}
        className="absolute -inset-4 bg-cover bg-center blur-lg"
      ></div>

      {/* Clear div (window) */}
      <div
        className={`relative z-10 w-11/12 md:h-4/5 bg-cover bg-center bg-fixed  rounded-xl shadow-lg text-white flex md:flex-row  outline  outline-8  outline-white/25
          flex-col my-4 md:my-0` }
        style={{ backgroundImage: `url(${x})` }}
      >
        <Display />
        <SidePanel />
      </div>
    </div>
  );
}
