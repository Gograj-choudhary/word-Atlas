import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getCountryDetails } from "../../api/postApi";
import { Loader } from "./Loader";

export const CountryDetails =()=>{
    const params = useParams();
    const [isPanding, startTransition] = useTransition();
    const [country, setCountry] = useState(null);
    console.log(params);
    useEffect(()=> {
        startTransition( async()=>{
            const res = await getCountryDetails(params.id);
            setCountry(res.data[0]);
            console.log(res.data);
        })
    },[])
    console.log(country);
    if(isPanding || !country) return <Loader/>
    
    const {
    name,
    capital,
    population,
    region,
    subregion,
    flags,
    tld,
    borders,
    currencies,
    languages} = country;

    const currencyNames = currencies? Object.values(currencies).map((c)=> `${c.name} [ ${c.symbol} ] `).join(",")  : "N/A";
    const languageList = languages? Object.values(languages).join(",") : "N/A";
    return (
         <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 flex justify-center items-center">
      <div className="w-full max-w-9xl bg-white dark:bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl p-10 flex flex-col md:flex-row gap-12 transition-all duration-300 min-h-[700px]">
        
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <img
            src={flags?.png}
            alt={flags?.alt || `${name?.common} flag`}
            className="rounded-xl shadow-xl w-full max-w-md object-cover border border-gray-300 dark:border-gray-700"
          />
        </div>

       
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
            {name?.common}
          </h1>
          <div className="grid grid-cols-1 gap-6 text-base md:text-lg">
            <p>
              <span className="font-semibold">Official Name:</span>
              {name?.official}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>
              {capital?.[0] || "N/A"}
            </p>
            <p>
              <span className="font-semibold">Population:</span>
              {population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p>
              <span className="font-semibold">Subregion:</span> {subregion}
            </p>
            <p>
              <span className="font-semibold">Top Level Domain:</span>
              {tld?.join(", ")}
            </p>
            <p>
              <span className="font-semibold">Languages:</span> {languageList}
            </p>
            <p>
              <span className="font-semibold">Currencies:</span>
              {currencyNames}
            </p>
            <p>
              <span className="font-semibold">Borders:</span>
              {borders?.join(", ") || "None"}
            </p>
          </div>

        
          <div className="w-full mt-10 flex justify-center">
            <NavLink to="/country">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
                Go Back
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};