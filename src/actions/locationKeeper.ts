'use server'
let lat:number=42
let lon:number=2
export async function LocationKeeper (latChange:number, lonChange:number) {
  lat = latChange;
  lon= lonChange;
  console.log(lat,lon)
  return {lat, lon}

}