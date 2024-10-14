import clearSky from "public/assets/clearSky.jpg"
import drizzle from 'public/assets/drizzle.jpeg'
import drizzle2 from 'public/assets/drizzle1.jpeg'
import fog from 'public/assets/fog.webp'
import heavyRain from 'public/assets/heavyRain.jpeg'
import heavySnow from 'public/assets/heavySnow.jpg'
import overcast from 'public/assets/overcast.webp'
import partlyCloudy from 'public/assets/partlyCloudy.webp'
import rain from 'public/assets/rain.jpeg'
import snow from 'public/assets/snow3.avif'
import thunder from 'public/assets/thunder.webp'

export function bgSelection(code: number) {
    let weather_code: number = code;
    let bgUrl: string = "";
  
    switch (weather_code) {
      case 0:
      case 1:
        bgUrl = clearSky.src; // Fixed extension to .webp
        break;
      case 2:
        bgUrl = partlyCloudy.src; // Fixed to use case 2
        break;
      case 3:
        bgUrl =overcast.src; // Fixed extension to .webp
        break;
      case 45:
      case 48:
        bgUrl = fog.src; // Fixed extension to .webp
        break;
      case 51:
      case 53:
      case 55:
        bgUrl = drizzle.src;
        break;
      case 56:
      case 57:
        bgUrl = drizzle2.src;
        break;
      case 61:
      case 63:
      case 65:
        bgUrl = rain.src;
        break;
      case 66:
      case 67:
        bgUrl = rain.src;
        break;
      case 71:
      case 73:
      case 75:
      case 77:
        bgUrl = snow.src;
        break;
      case 80:
      case 81:
      case 82:
        bgUrl = heavyRain.src;
        break;
      case 85:
      case 86:
        bgUrl = heavySnow.src;
        break;
      case 95:
      case 96:
      case 99:
        bgUrl = thunder.src;
        break;
  
    }
  
    return bgUrl;
  }
  