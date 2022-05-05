import commaNumber from "comma-number";
import countries from "utils/countries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Properties from "components/Property";

const insertCommas = (arr) => {
  if (typeof arr !== Array) return arr;
  let data = "";
  arr.forEach((element) => {
    data += element + " , ";
  });
  data = data.slice(0, data.length - 2);
  return data;
};

const Country = () => {
  const [country, setcountry] = useState(undefined);
  const router = useRouter();
  useEffect(() => {
    setcountry(countries[router.query.index]);
  }, []);

  if (!country) {
    return <span className="center">Something went wrong</span>;
  }

  return (
    <div className="flex flex-col shadow-lg m-10 rounded-lg lg:flex-row ">
      <img className="max-w-lg" src={country.flags.svg} />
      <div className="flex flex-col p-6">
        <Properties title="Country" meaning={country.name.common} />
        <Properties title="Official" meaning={country.name.official} />
        <Properties
          title="Independent Country"
          meaning={country.independent.toString()}
        />
        <Properties
          title="Top Level Domain"
          meaning={insertCommas(country.tld)}
        />
        <Properties
          title="Population"
          meaning={commaNumber(country.population)}
        />
        <Properties
          title="Currencies"
          meaning={`${
            country.currencies[Object.keys(country.currencies)[0]]["name"]
          }`}
        />
        <Properties title="Region" meaning={country.region} />
        <Properties title="Sub Region" meaning={country.subregion} />
        <Properties
          title="Languages"
          meaning={insertCommas(Object.values(country.languages))}
        />
        <Properties title="Capital" meaning={country.capital} />
        <Properties
          title="View in maps"
          meaning={<Link href={country.maps.googleMaps}> Google Maps</Link>}
        />
        <Properties
          title="Border countries"
          meaning={insertCommas(country.borders)}
        />
      </div>
    </div>
  );
};

export default Country;
