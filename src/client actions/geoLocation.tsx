"use client";

;
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
                   fetchServerGeoLocation()
                }
            );
     
    }}, []); // Empty dependency array to ensure this effect runs only once on mount

    // Fallback function to get geolocation from the server via API route
const fetchServerGeoLocation = async () => {
    try {
      const res = await fetch('/api/geo'); // Fetch from the API route
      const data = await res.json();
      setLat(data.lat);
      setLong(data.lon);
    } catch (error) {
      setError("Unable to fetch geolocation from the server.");
    }
  };

    console.log(lat, long)
    return(<></>)
}