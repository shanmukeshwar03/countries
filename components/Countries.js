import countries from 'utils/countries'
import commanumber from 'comma-number'
import router from 'next/router'

const Countries = ({ query }) => {
  return (
    <div className="countries__container">
      {countries.map((country, key) => {
        if (!query || country.name.toLowerCase().includes(query))
          return (
            <div
              className="countries__country"
              key={key}
              onClick={() => {
                router.push(`/${country.name}?index=${key}`)
              }}
            >
              <img src={country.flag} />
              <div>
                <span>{country.name}</span>
                <span>Population : {commanumber(country.population)}</span>
                <span>Region : {country.region}</span>
                <span>Capital : {country.capital}</span>
              </div>
            </div>
          )
      })}
    </div>
  )
}

export default Countries
