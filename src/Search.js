import axios from "axios";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);


  const loadOptions = (inputValue) => {
    console.log("am i here?");
    return axios
      .get(
        `https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=${inputValue}&format=json`
      )
      .then((res) => res)
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.lat} ${city.lon}`,
              label: `${city.display_name}`,
            };
          }),
        };
      })

      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      className="text-basis outline-none w-80"
      placeholder="Type Your city"
      debounceTimeout={600}
    selectRef={"bruxelles"}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
