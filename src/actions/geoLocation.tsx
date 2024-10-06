"use client";


import { useState, useEffect } from "react";

export default function GeoLocation() {
    const [lat, setLat] = useState<number | null>(null);
    const [long, setLong] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLat(pos.coords.latitude);
                    setLong(pos.coords.longitude);
                    
                },
                (err) => {
                    setError(`Geolocation error: ${err.message}`);
                    setLat(42); // default latitude in case of error
                    setLong(2.56); // default longitude in case of error
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
            setLat(42); // default latitude
            setLong(2.56); // default longitude
        }
    }, []); // Empty dependency array to ensure this effect runs only once on mount

    console.log(lat, long)
    return(<></>)
}