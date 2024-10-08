import { FetchLocationApi } from "@/actions/fetchLocationApi";

import { ChangeEvent, useState, useEffect, Key } from "react";
import { LocationKeeper } from "@/actions/locationKeeper";
import CloseIcon from "public/assets/icons/closeIcon.png";
import Image from "next/image";
import styles from "./styles.module.css";

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<any>();
  const [ulClose, setUlClose] = useState(true);

  // Debounce mechanism to limit fetch calls
  useEffect(() => {
    const fetchData = async () => {
      const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };
      const url = `https://eu1.locationiq.com/v1/search?key=${token}&q=${searchValue}&format=json`;

      try {
        const data = await FetchLocationApi(url, options);
        setResults(data.data); // Assuming the data is an array of LocationData
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    const handler = setTimeout(() => {
      if (searchValue) {
        fetchData(); // Call the fetch function
        console.log(results);
      } else {
        setResults([]); // Clear results if searchValue is empty
        setUlClose(true);
      }
    }, 300); // 300 ms delay for debouncing

    return () => {
      clearTimeout(handler); // Clean up the timeout on unmount or change
    };
  }, [searchValue]);

  // Handle input changes
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value); // Update search value
    setUlClose(false);
  };

  // handle click on li elements
  const handleClick = (value: string, lat: number, lon: number) => {
    setSearchValue(value), fetchAndUpdateLoc(lat, lon), handleClose();
    console.log(lat, lon);
  };

  //close the ul element
  const handleClose = () => {
    setUlClose(true);
  };

  // update lat & lon on the server side
  const fetchAndUpdateLoc = async (a: number, b: number) => {
    await LocationKeeper(a, b);
  };

  return (
    <>
      <input
        placeholder="Enter your location"
        className="my-1 mx-2 bg-transparent w-full text-xs lg:text-xl"
        value={searchValue}
        onChange={handleChangeInput}
      />

      <ul
        style={{ display: ulClose ? "none" : "block" }}
        className={`${styles.customScrollbar} relative bg-gray-400/50  z-100  md:top-0 lg:top-0 lg:mt-2  rounded-lg overflow-y-auto overscroll-y-auto max-h-80 `}
      >
        <li
          className="flex justify-end p-2 hover:bg-gray-800/75 rounded-lg"
          onClick={() => handleClose()}
        >
          <Image
            src={CloseIcon}
            alt="close-icon"
            width={20}
            className="invert"
          />
        </li>
        {results &&
          results.map(
            (
              result: { display_name: string; lat: number; lon: number },
              index: Key | null | undefined
            ) => (
              <li
                key={index}
                className="border-y rounded-lg p-2 text-xs hover:bg-gray-800/75 "
                onClick={() =>
                  handleClick(result.display_name, result.lat, result.lon)
                }
              >
                {result.display_name}
              </li>
            )
          )}
      </ul>
    </>
  );
}
