'use server'
import { redirect } from "next/navigation";

let lat: number = 42;
let lon: number = 2;

export async function LocationKeeper(latChange?: number, lonChange?: number) {
  // Use the passed values if available, otherwise keep the default values
  if (latChange !== undefined && lonChange !== undefined) {
    lat = latChange;
    lon = lonChange;
  }

  console.log(lat, lon);
  return { lat, lon }; // Return the updated or default lat/lon
}
