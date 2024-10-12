'use server';

import { redirect } from "next/navigation";

// Initialize with undefined to distinguish from the default values
let lat: number | undefined = undefined;
let lon: number | undefined = undefined;

export async function LocationKeeper(latChange?: number, lonChange?: number) {
  // If values are provided, update lat/lon
  if (latChange !== undefined && lonChange !== undefined) {
    lat = Number(latChange);
    lon = Number(lonChange);
  }

  // If lat/lon are still undefined, set to defaults
  if (lat === undefined || lon === undefined) {
    lat = 42; // Default latitude
    lon = 2;  // Default longitude
  }


  return { lat, lon };    // Return the current lat/lon
}
