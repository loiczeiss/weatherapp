import { Card, Button, ButtonGroup } from "@nextui-org/react";
import Image from "next/image";
import GpsIcon from "@/app/assets/icons/localisationIcon.svg";
import MockData from "@/mockData.json";
import WindSvg from "@/app/assets/icons/windSVG.svg";
export default function SidePanel() {
  return (
    <Card className="flex flex-col w-3/12 items-center" isBlurred>
      <div className="flex flex-col  w-full items-center my-4">
        <div className="  flex flex-row w-10/12 border border-white/25 rounded-lg">
          <GpsIcon width={25} className="fill-white/25 ml-2" />
          <input
            placeholder="Enter your location"
            className="my-1 mx-2 bg-transparent w-full"
          />
        </div>
        <h1 className="my-4 text-5xl">{MockData.current.temperature_2m}°C</h1>
        <div className="flex justify-center">
          <WindSvg width={15} height={15} className="fill-white/75" />
          <p className="text-white/75 ml-2 text-xs">NorthEast</p>{" "}
          <p className="text-white/75 ml-2 text-xs">38.5Km/h</p>
        </div>
      </div>
      <div className="flex flex-col w-10/12 items-center my-4 ">
        <h2>The Next Days Forecast</h2>
        <div className="flex justify-between mb-4 mt-6">
          <Button className="bg-transparent text-white">5 days</Button>
          <Button className="bg-transparent text-white">10 days</Button>
          <Button className="bg-transparent text-white">15 days</Button>
        </div>
        {MockData.hourly.time.slice(0, 5).map((time: string, index: number) => (
          <div key={index} className="flex flex-row mt-2">
            <div className="flex items-center mx-2 bg-white/5 w-10 h-10 justify-center rounded-lg">
              {" "}
              <WindSvg width={20} height={20} className="fill-white/75" />
            </div>
            <div className="flex flex-col ">
              <p className="text-xs">date</p>
              <p className="text-xs text-white/25">weather_code</p>
            </div>
            <div className="flex flex-col ml-6 border-l border-l-white/25 px-2">
              <p className="text-xs">14°C</p>
              <p className="text-xs">15°C</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
