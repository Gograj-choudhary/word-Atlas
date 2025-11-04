import aboutCountry from "../api/aboutCountry.json";

export const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Key Facts About the Top 6 Countries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {aboutCountry.map((currCountry) => {
          const { id, name, capital, population, gdp, officialLanguage, flag } = currCountry;

          return (
            <div
              key={id}
              className="relative bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)]"
            >
           
              {flag && (
                <img
                  src={flag}
                  alt={`${name} flag`}
                  className="absolute top-4 right-4 w-10 h-6 object-cover rounded-sm shadow"
                />
              )}

            
              <h3 className="text-center text-2xl font-extrabold text-white mb-4 tracking-wide">
                {name}
              </h3>

              <div className="space-y-2 text-white/90 text-sm">
                <p>
                  <span className="font-semibold">Capital:</span> {capital}
                </p>
                <p>
                  <span className="font-semibold">Population:</span> {population} million
                </p>
                <p>
                  <span className="font-semibold">GDP:</span> ${gdp} Trillion
                </p>
                <p>
                  <span className="font-semibold">Official Language:</span> {officialLanguage}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
