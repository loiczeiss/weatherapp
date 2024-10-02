
'use server'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clearSkyIcon from "public/assets/icons/0-01.svg";
import partlyCloudyIcon from "public/assets/icons/02-03.svg";
import fogIcon from "public/assets/icons/45-48.svg";
import drizzleIcon from "public/assets/icons/51-53-56.svg";
import drizzleIcon2 from 'public/assets/icons/55-57.svg';
import rainIcon from 'public/assets/icons/61-63-66.svg';
import rainIcon2 from "public/assets/icons/65-67.svg"
import snowIcon from 'public/assets/icons/71-73-85.svg'
import snowIcon2 from 'public/assets/icons/75-77-86.svg'
import showersIcon from 'public/assets/icons/80-81-82.svg'
import thunderIcon from 'public/assets/icons/95-96-97.svg'
export async function  IconSelection(code: number) {
  let iconUrl:string | StaticImport=""

  switch (code) {
    case 0:
    case 1:
      iconUrl = clearSkyIcon.src; // Fixed extension to .webp
      break;
    case 2:
    case 3:
      iconUrl = partlyCloudyIcon.src; // Fixed to use case 2
      break;
    case 45:
    case 48:
      iconUrl = fogIcon.src; // Fixed extension to .webp
      break;
    case 51:
    case 53:
    case 56:
      iconUrl = drizzleIcon.src;
      break;
    case 55:
    case 57:
      iconUrl = drizzleIcon2.src;
      break;
    case 61:
    case 63:
    case 66:
      iconUrl = rainIcon.src;
      break;
    case 65:
    case 67:
      iconUrl = rainIcon2.src;
      break;
    case 71:
    case 73:
    case 85:
    
      iconUrl = snowIcon.src;
      break;
    case 75:
    case 77:
    case 86:
      iconUrl = snowIcon2.src;
      break;
    case 80:
    case 81:
        case 82:
      iconUrl = showersIcon.src;
      break;
    case 95:
    case 96:
    case 99:
      iconUrl = thunderIcon.src;
      break;
  }

  return iconUrl;
}
