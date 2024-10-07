import { FetchLocationApi } from "@/actions/fetchLocationApi";
import { ChangeEvent, useState, useEffect } from "react";

interface LocationData {
  display_name: string; // Adjust based on the actual response structure
}

export default function SearchInput() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<LocationData[]>([]); // Store array of results
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;
  // const options = {method: 'GET', headers: {accept: 'application/json'}};
  // const data = await FetchLocationApi()
  // // Debounce mechanism to limit fetch calls
  // useEffect(() => {
  //   const handler = setTimeout(() => {
  //     if (searchValue) {
  //       fetchLocation();
  //     } else {
  //       setResults([]); // Clear results if searchValue is empty
  //     }
  //   }, 300); // 300 ms delay

  //   return () => {
  //     clearTimeout(handler); // Clean up the timeout on unmount or change
  //   };
  // }, [searchValue]);



  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value); // Update search value
  };

  return (
    <>
      <input
        placeholder="Enter your location"
        className="my-1 mx-2 bg-transparent w-full text-xs lg:text-xl"
        value={searchValue}
        onChange={handleChangeInput}
      />
   
      <ul>
        {results.map((result, index) => ( // Iterate through results
          <li key={index}>{result.display_name}</li> // Display each result
        ))}
      </ul>
    </>
  );
}
