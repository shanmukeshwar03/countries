import commaNumber from "comma-number";
import countries from "utils/countries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

const insertCommas = (arr) => {
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
    <div className="country__container">
      <img src={country.flags.svg} />
      <div>
        <span className="country__title">{country.name.common}</span>
        <div className="country__details">
          <span>
            <span className="span__title">Official</span> :{" "}
            <span className="span__value">{country.name.official}</span>
          </span>
          <span>
            <span className="span__title">Independent Country</span> :{" "}
            <span className="span__value">
              {country.independent.toString()}
            </span>
          </span>
          <span>
            <span className="span__title">Top Level Domain</span> :{" "}
            <span className="span__value">{insertCommas(country.tld)}</span>
          </span>
          <span>
            <span className="span__title">Population</span> :{" "}
            <span className="span__value">
              {commaNumber(country.population)}
            </span>
          </span>
          <span>
            <span className="span__title">Currencies</span> :{" "}
            <span className="span__value">
              {country.currencies[Object.keys(country.currencies)[0]]["name"]}
              {` (${
                country.currencies[Object.keys(country.currencies)[0]]["symbol"]
              })`}
            </span>
          </span>
          <span>
            <span className="span__title">Region</span> :{" "}
            <span className="span__value">{country.region}</span>
          </span>
          <span>
            <span className="span__title">Sub Region</span> :{" "}
            <span className="span__value">{country.subregion}</span>
          </span>
          <span>
            <span className="span__title">Languages</span> :{" "}
            <span className="span__value">
              {insertCommas(Object.values(country.languages))}
            </span>
          </span>
          <span>
            <span className="span__title">Capital</span> :{" "}
            <span className="span__value">{country.capital}</span>
          </span>
          <span>
            <span className="span__title">View in maps</span> :
            <span className="span__value">
              {<Link href={country.maps.googleMaps}> Google Maps</Link>}
            </span>
          </span>
          <span>
            <span className="span__title">border countries</span> :{" "}
            <span className="span__value">{insertCommas(country.borders)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Country;
