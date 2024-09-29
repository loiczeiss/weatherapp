import { Card, Image, CardBody } from "@nextui-org/react";
import { getWeatherData } from "@/actions";
import Display from "@/components/display";
import SidePanel from "@/components/sidePanel";

export default async function Home() {
  const weatherData = await getWeatherData();

  if (!weatherData) {
    return <div>Sad...</div>;
  }
  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
      {/* Blurred background */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg bg-[url('./assets/example.jpg')]"></div>

      {/* Clear div (window) */}
      <div
        className="relative z-10 w-11/12 h-4/5 bg-cover bg-center bg-fixed  rounded-xl 
      shadow-lg text-white flex flex-row bg-[url('./assets/example.jpg')] 
  outline    outline-8  outline-white/25 "
      >
<Display/>
<SidePanel/>
      </div>
    </div>
  );
}
