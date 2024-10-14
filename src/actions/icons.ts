'use server'
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import clearSkyIcon from "public/assets/icons/0-01.png";
import partlyCloudyIcon from "public/assets/icons/02-03.png";
import fogIcon from "public/assets/icons/45-48.png";
import drizzleIcon from "public/assets/icons/51-53-56.png";
import drizzleIcon2 from 'public/assets/icons/55-57.png';
import rainIcon from 'public/assets/icons/61-63-66.png';
import rainIcon2 from "public/assets/icons/65-67.png"
import snowIcon from 'public/assets/icons/71-73-85.png';
import snowIcon2 from 'public/assets/icons/75-77-86.png';
import showersIcon from 'public/assets/icons/80-81-82.png';
import thunderIcon from 'public/assets/icons/95-96-97.png';

const iconMap: { [key: number]: StaticImageData } = {
  0: clearSkyIcon,
  1: clearSkyIcon,
  2: partlyCloudyIcon,
  3: partlyCloudyIcon,
  45: fogIcon,
  48: fogIcon,
  51: drizzleIcon,
  53: drizzleIcon,
  56: drizzleIcon,
  55: drizzleIcon2,
  57: drizzleIcon2,
  61: rainIcon,
  63: rainIcon,
  66: rainIcon,
  65: rainIcon2,
  67: rainIcon2,
  71: snowIcon,
  73: snowIcon,
  85: snowIcon,
  75: snowIcon2,
  77: snowIcon2,
  86: snowIcon2,
  80: showersIcon,
  81: showersIcon,
  82: showersIcon,
  95: thunderIcon,
  96: thunderIcon,
  99: thunderIcon,
};

export async function IconSelection(code: number): Promise<StaticImageData> {
  return iconMap[code] || thunderIcon; // Fallback to thunderIcon if code is not found
}
