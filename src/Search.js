
import axios from "axios"
import { useState } from "react"   
import { AsyncPaginate } from "react-select-async-paginate"


const Search = ({onSearchChange}) => {

const [search, setSearch] = useState(null)

// const geoAPIOptions = {
    
//     "crossDomain": true,
//     "url": `https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=${inputValue}&format=json`,
//     "method": "GET"
//   }



const loadOptions = (inputValue) =>{
    console.log("am i here?")
 axios.get(`https://us1.locationiq.com/v1/search?key=pk.b0c72dd0f13fc709afc8117de2444250&q=${inputValue}&format=json`)
.then(res => console.log(res.data[0]) )
    .then( res => {
        return {
            options: res.data.map((city) => {
                return {
                    value: `${city.lat} ${city.lon}`,
                    label: `${city.display_name}`
                }
            } )
        }
    })


}

const handleOnChange = (searchData) => {
    setSearch(searchData);
   onSearchChange(searchData)


}
;
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