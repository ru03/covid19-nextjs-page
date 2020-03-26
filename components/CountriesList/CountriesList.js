import Link from 'next/link';

const CountriesList = ({ countries, hasRecovered = true }) => {
  const colWidth = hasRecovered ? 'w-3/12' : 'w-4/12';
  return (
    <div className="border rounded m-2 ">
      <div className="flex flex-row my-1 border-b ">
        <div className={`${colWidth} text-center font-bold`}>Country</div>
        <div className={`${colWidth} text-center font-bold`}>Cases</div>
        <div className={`${colWidth} text-center font-bold`}>Deaths</div>
        {
          hasRecovered && <div className="w-3/12 text-center font-bold">Recovered</div>
        }
      </div>
      <div className="h-64 overflow-auto">
        <ul className="h-48">
          {countries.length > 0 && countries.map(country => (
            <Link key={country.country} href={`/country/${country.country}`}>
              <li className="flex flex-row my-1 cursor-pointer">
                <div className={`${colWidth} text-center`}>{country.country}</div>
                <div className={`${colWidth} text-center text-blue-500`}>{country.cases}</div>
                <div className={`${colWidth} text-center text-red-500`}>{country.deaths}</div>
                {
                  hasRecovered && <div className="w-3/12 text-center text-green-500">{country.recovered}</div>
                }
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div >
  )
}

export default CountriesList;