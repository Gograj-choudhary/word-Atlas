import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/UI/CountryCard";
import { Loader } from "../components/UI/Loader";
import { SearchCountry } from "../components/UI/SearchCountry";

export const Country =()=>{
  const [isPanding, startTransition] = useTransition();
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState('All');
 

  useEffect(()=> {
    startTransition(async()=>{
      const res = await getCountryData();
      setCountry(res.data);
    });
  },[]);

  if(isPanding) return <Loader/>
   
  const filterBySearch = (country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  };
  const filterByRegion = (country) => {
    if(filter==="All") return country;
    return (country.region=== filter);
  }

  const filteredCountries = country.filter((c) => filterBySearch(c) && filterByRegion(c));
  
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
    
   
    <div className="w-full p-6 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
      <SearchCountry
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />
    </div>

    
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-700">
      {filteredCountries.map((currCountry, index) => (
        <CountryCard countries={currCountry} key={index} />
      ))}
    </ul>
  </div>
    )
}