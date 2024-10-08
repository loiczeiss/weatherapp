"use client";


import { useState, useEffect } from "react";
import { LocationKeeper } from "./locationKeeper";

export default function GeoLocation() {

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                fetchAndUpdateLoc(pos.coords.latitude, pos.coords.longitude)
                    
                },
                (err) => {
                    setError(`Geolocation error: ${err.message}`);
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