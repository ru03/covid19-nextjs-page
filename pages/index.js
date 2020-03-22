import fetch from 'node-fetch';
import TotalWorldCounter from '../components/TotalWorldCounter/TotalWorldCounter';
import CountriesList from '../components/CountriesList/CountriesList';
const Index = ({ fetchData: { countries, all } }) => {
  const countriesTotal = countries
    .map(({ cases, country, deaths, recovered }) => ({ cases, country, deaths, recovered }));
  const countriesToday = countries
    .map(({ todayCases, country, todayDeaths }) => ({ cases: todayCases, country, deaths: todayDeaths }));
  return (
    <div>
      <TotalWorldCounter
        cases={all.cases}
        deaths={all.deaths}
        recovered={all.recovered}
        updateDate={all.updated}
      />
      <div className="flex flex-row">
        <div className="w-6/12">
          <div className="text-2xl text-center font-bold">TOTAL INFO BY COUNTRY</div>
          <CountriesList countries={countriesTotal} />
        </div>
        <div className="w-6/12">
          <div className="text-2xl text-center font-bold">TOTAL CASES TODAY</div>
          <CountriesList
            countries={countriesToday}
            hasRecovered={false}
          />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const urls = [
    { key: 'countries', url: 'https://corona.lmao.ninja/countries' },
    { key: 'all', url: 'https://corona.lmao.ninja/all' }
  ];
  let allData = {};
  for (const { key, url } of urls) {
    const res = await fetch(url);
    const fetchData = await res.json();
    allData = { ...allData, [key]: fetchData }
  }
  return {
    props: {
      fetchData: allData,
    }
  }
}

export default Index;