export const SearchCountry = ({ search, setSearch, filter, setFilter }) => {
  const handleSearchCountry = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterCountry = (e) => {
    setFilter(e.target.value);
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-4">
    
      <input
        type="text"
        placeholder="🔍 Search Country"
        value={search}
        onChange={handleSearchCountry}
        className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      
      <select
        value={filter}
        onChange={handleFilterCountry}
        className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        <option value="All">🌍 All</option>
        <option value="Africa">🌍 Africa</option>
        <option value="America">🌎 America</option>
        <option value="Asia">🌏 Asia</option>
        <option value="Europe">🌍 Europe</option>
        <option value="Oceania">🌊 Oceania</option>
      </select>
    </section>
  );
};
