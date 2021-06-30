import commaNumber from 'comma-number'
import countries from 'utils/countries'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const insertCommas = (arr, args) => {
  let data = ''
  arr.forEach((element) => {
    if (args) data += element[args] + ' , '
    else data += element + ' , '
  })
  data = data.slice(0, data.length - 2)
  return data
}

const Country = () => {
  const [country, setcountry] = useState(undefined)
  const router = useRouter()
  useEffect(() => {
    setcountry(countries[router.query.index])
  }, [])

  if (!country) {
    return <span className='center'>Something went wrong</span>
  }

  return (
    <div className="country__container">
      <img src={country.flag} />
      <div>
        <span className="country__title">{country.name}</span>
        <div className="country__details">
          <span>
            <span className="span__title">Native Name</span> :{' '}
            <span className="span__value">{country.nativeName}</span>
          </span>
          <span>
            <span className="span__title">Top Level Domain</span> :{' '}
            <span className="span__value">
              {insertCommas(country.topLevelDomain)}
            </span>
          </span>
          <span>
            <span className="span__title">Population</span> :{' '}
            <span className="span__value">
              {commaNumber(country.population)}
            </span>
          </span>
          <span>
            <span className="span__title">Currencies</span> :{' '}
            <span className="span__value">
              {insertCommas(country.languages, 'name')}
            </span>
          </span>
          <span>
            <span className="span__title">Region</span> :{' '}
            <span className="span__value">{country.region}</span>
          </span>
          <span>
            <span className="span__title">Sub Region</span> :{' '}
            <span className="span__value">{country.subregion}</span>
          </span>
          <span>
            <span className="span__title">Languages</span> :{' '}
            <span className="span__value">
              {insertCommas(country.languages, 'name')}
            </span>
          </span>
          <span>
            <span className="span__title">Capital</span> :{' '}
            <span className="span__value">{country.capital}</span>
          </span>
          <span>
            <span className="span__title">border countries</span> :{' '}
            <span className="span__value">{insertCommas(country.borders)}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Country
