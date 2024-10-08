'use client'
import { Card } from "@nextui-org/react";
import WeatherPage from "../app/weather/page";
import HomePic from "public/assets/accueil.jpg";
import SearchInput from "./searchInput";
export default function Intro() {
  let x = HomePic.src;
  return (
    <>
      <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">

        <div
          style={{ backgroundImage: `url(${x})` }}
          className="absolute -inset-4 bg-cover bg-center blur-lg"
        ></div>

        <div
          className={`relative z-10 w-11/12 h-4/5 bg-cover bg-center bg-fixed  rounded-xl shadow-lg text-white flex md:flex-row  outline  outline-8  outline-white/25
        flex-col my-4 md:my-0 justify-center`}
          style={{ backgroundImage: `url(${x})` }}
        >
          <Card isBlurred={true} className="h-4/5 self-center px-8 flex text-left items-center justify-center" >
            {" "}
         <div className="w-8/12">   <h1 className="text-2xl mb-16">Rivière: Your Go-To Weather Companion</h1>
            <SearchInput/>
            <p className="mt-16">Please enable location services  or manually enter your location.</p>
       </div>
          </Card>
        </div>
      </div>
    </>
  );
}
