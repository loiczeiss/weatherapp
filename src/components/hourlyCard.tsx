import type { StaticImageData } from "next/image";
import  Image from "next/image";
import { Card } from "@heroui/react";
interface HourlyCardProps {
    imgData: StaticImageData;
    index:number;
temperature:number,
time:string
}

export default function HourlyCard(props:HourlyCardProps){
    return(
        <Card
              className="w-20 lg:w-36 m-2 bg-transparent flex-shrink-0 flex flex-col justify-between"
              key={props.index}
              isBlurred
            >
              <p className="text-center">{props.time}</p>
              <div className="flex justify-center">
                {/* <MockIcon width={40} className="flex justify-center" /> */}
             <Image src={props.imgData} alt="icon" className="invert"/> 
              </div>
              <p className="text-center">
                {props.temperature}°C
              </p>
            </Card>)
}