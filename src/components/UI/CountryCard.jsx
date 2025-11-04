import {NavLink} from 'react-router-dom';

export const CountryCard = ({ countries }) => {
  const { flags, name, capital, region, population } = countries;

  return (
    <li className="bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md border border-gray-200 dark:border-gray-600 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300 p-4">
      <div className="flex flex-col items-center text-center space-y-2">
        <img
          src={flags.svg}
          alt={`${name.common} flag`}
          className="w-50 h-40 object-cover rounded-md shadow"
        />
        <h1 className="text-lg font-bold text-gray-800 dark:text-white">{name.common}</h1>
        <h2 className="text-sm text-gray-600 dark:text-gray-300">Capital: {capital}</h2>
        <h2 className="text-sm text-gray-600 dark:text-gray-300">Region: {region}</h2>
        <h2 className="text-sm text-gray-600 dark:text-gray-300">Population: {population.toLocaleString()}</h2>
        <NavLink to={`/country/${name.common}`} className="mt-4 inline-block bg-gray-900 text-white px-10 py-2 rounded hover:bg-gray-700 transition-colors">
          View Details 
        </NavLink>
      </div>
    </li>
  );
};
