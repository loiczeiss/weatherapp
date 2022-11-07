import axios from "axios"
import { useState } from "react"   
import { AsyncPaginate } from "react-select-async-paginate"

import { GEO_API_URL, geoAPIOptions,} from "./GeoAPI"



const [search, setSearch] = useState(null)


const loadOptions = (inputValue) =>{
    return fetch(`${GEO_API_URL}`)
    .then(response => response.json())
    .then(response => console.log(response))


}

const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData)


}

return (
    <AsyncPaginate
    placeholder="search for adress"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />

)
}

export default Search