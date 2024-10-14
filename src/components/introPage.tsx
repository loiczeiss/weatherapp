"use client";
import { Card } from "@nextui-org/react";
import WeatherPage from "../app/weather/page";
import HomePic from "public/assets/accueil.jpg";
import SearchInput from "./searchInput";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GeoLocation from "@/actions/geoLocation";
export default function Intro() {
  const router = useRouter();
  let x = HomePic.src;
  const [ulClose, setUlClose] = useState(true);
  const searchInputModifier = {
    placeholder: "placeholder:text-center",
    topAndWidth: "",
    position: "relative",
    bg: "bg-black/25",
  };

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
          <GeoLocation />
          <Card className="h-4/5 self-center px-8 flex text-center items-center justify-center bg-gray-400/10 w-11/12 md:w-8/12 lg:w-6/12">
            <div className="w-8/12 h-full">
              <div className=" flex flex-col justify-center items-center h-2/6">
                <h2 className="text-3xl font-bold text-white/75">Rivière</h2>
                <h1 className="text-xl text-white/50 rounded-lg pt-4">
                  {" "}
                  Your Go-To Weather Companion
                </h1>
              </div>
              <div className="h-2/6 ">
                <div className="relative top-8">
                  {" "}
                  <SearchInput
                    searchInputModifier={searchInputModifier}
                    ulClose={ulClose}
                    setUlClose={setUlClose}
                  />
                </div>
              </div>
              <div className="h-2/6 flex items-center text-center">
                <p
                  className="text-white/75 "
                  style={{ display: ulClose ? "" : "none" }}
                >
                  Please enable location services or manually enter your
                  location.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
