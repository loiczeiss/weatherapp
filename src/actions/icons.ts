
'use server'
import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";
import clearSkyIcon from "public/assets/icons/0-01.png";
import partlyCloudyIcon from "public/assets/icons/02-03.png";
import fogIcon from "public/assets/icons/45-48.png";
import drizzleIcon from "public/assets/icons/51-53-56.png";
import drizzleIcon2 from 'public/assets/icons/55-57.png';
import rainIcon from 'public/assets/icons/61-63-66.png';
import rainIcon2 from "public/assets/icons/65-67.png"
import snowIcon from 'public/assets/icons/71-73-85.png'
import snowIcon2 from 'public/assets/icons/75-77-86.png'
import showersIcon from 'public/assets/icons/80-81-82.png'
import thunderIcon from 'public/assets/icons/95-96-97.png'
export async function  IconSelection(code: number) {
  let iconUrl:StaticImageData

  switch (code) {
    case 0:
    case 1:
      iconUrl = clearSkyIcon; // Fixed extension to .webp
      break;
    case 2:
    case 3:
      iconUrl = partlyCloudyIcon; // Fixed to use case 2
      break;
    case 45:
    case 48:
      iconUrl = fogIcon; // Fixed extension to .webp
      break;
    case 51:
    case 53:
    case 56:
      iconUrl = drizzleIcon;
      break;
    case 55:
    case 57:
      iconUrl = drizzleIcon2;
      break;
    case 61:
    case 63:
    case 66:
      iconUrl = rainIcon;
      break;
    case 65:
    case 67:
      iconUrl = rainIcon2;
      break;
    case 71:
    case 73:
    case 85:
    
      iconUrl = snowIcon;
      break;
    case 75:
    case 77:
    case 86:
      iconUrl = snowIcon2;
      break;
    case 80:
    case 81:
        case 82:
      iconUrl = showersIcon;
      break;
    case 95:
    case 96:
    case 99:
      iconUrl = thunderIcon;
      break;
      default: iconUrl = thunderIcon
      break
  }

  return iconUrl;
}
