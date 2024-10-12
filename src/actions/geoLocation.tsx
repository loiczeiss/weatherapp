"use client";


import { useState, useEffect } from "react";
import { LocationKeeper } from "./locationKeeper";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { fetchWeather } from "./weatherAPI";

export default function GeoLocation() {

    const [error, setError] = useState<string | null>(null);
    const router = useRouter()
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                fetchAndUpdateLoc(pos.coords.latitude, pos.coords.longitude)
                fetchWeather(pos.coords.latitude, pos.coords.longitude)
                    router.push('/weather')
                },
                (err) => {
                    setError(`Geolocation error: ${err.message}`)
              fetchAndUpdateLoc(42, 2)
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
     fetchAndUpdateLoc(42,2)
        }
    }, []); // Empty dependency array to ensure this effect runs only once on mount
const fetchAndUpdateLoc = async (a:number,b:number) => {
    await LocationKeeper(a,b)
}

    return(<></>)
}