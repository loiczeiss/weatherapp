import { Card, Image, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden ">
    {/* Blurred background */}
    <div
      className="absolute inset-0 bg-cover bg-center filter blur-lg bg-[url('./assets/example.jpg')]"
   
    ></div>

    {/* Clear div (window) */}
    <div
      className="relative z-10 w-3/4 h-4/5 bg-cover bg-center bg-fixed p-10 rounded-xl shadow-lg text-white flex flex-col justify-center items-center bg-[url('./assets/example.jpg')]"
  
    >
      <h1 className="text-4xl mb-4">Heavy Rain</h1>
      <p className="text-xl">Tbilisi, Georgia</p>
      <p className="text-xl">11°C</p>
    </div>
  </div>
  );
}
