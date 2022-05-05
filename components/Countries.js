import countries from "utils/countries";
import commanumber from "comma-number";
import router from "next/router";
import Properties from "./Property";

const Countries = ({ query }) => {
  return (
    <div className="flex flex-col w-3/5 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
      {countries.map((country, key) => {
        if (!query || country.name.common.toLowerCase().includes(query))
          return (
            <div
              className="flex flex-col shadow-lg p-4 rounded-lg"
              key={key}
              onClick={() => {
                router.push(`/${country.name.common}?index=${key}`);
              }}
            >
              <img className="w-full h-full px-2" src={country.flags.svg} />
              <div className="flex flex-col gap-1">
                <Properties title="Country" meaning={country.name.common} />
                <Properties title="Region" meaning={country.region} />
                <Properties title="Capital" meaning={country.capital} />
                <Properties
                  title="Population"
                  meaning={commanumber(country.population)}
                />
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Countries;
