import fetch from 'node-fetch';
import TotalWorldCounter from '../components/TotalWorldCounter/TotalWorldCounter';
import CountriesList from '../components/CountriesList/CountriesList';
import ChartCasesByCountry from '../components/Charts/CasesByCountry/ChartCasesByCountry';

const Index = ({ fetchData: { all, countries, spainHistorical } }) => {
  const chartData = {
    data: Object.keys(spainHistorical.timeline).map(key => ({ [key]: Object.values(spainHistorical.timeline[key]) })),
    labels: Object.keys(spainHistorical.timeline.cases).map(key => key),
  }
  const countriesTotal = countries
    .map(({ cases, country, deaths, recovered }) => ({ cases, country, deaths, recovered }));
  const countriesToday = countries
    .map(({ todayCases, country, todayDeaths }) => ({ cases: todayCases, country, deaths: todayDeaths }));
  return (
    <>
      <TotalWorldCounter
        cases={all.cases}
        deaths={all.deaths}
        recovered={all.recovered}
        updateDate={all.updated}
      />
      <div className="flex flex-col lg:flex-row xl:flex-row">
        <div className="w-full lg:w-6/12 xl:w-6/12">
          <div className="text-2xl text-center font-bold">TOTAL INFO BY COUNTRY</div>
          <CountriesList countries={countriesTotal} />
        </div>
        <div className="w-full lg:w-6/12 xl:w-6/12">
          <div className="text-2xl text-center font-bold">TOTAL CASES TODAY</div>
          <CountriesList
            countries={countriesToday}
            hasRecovered={false}
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row invisible lg:visible xl:visible justify-center">
        <div className="w-3/12" />
        <div className="w-6/12">
          <ChartCasesByCountry data={chartData} />
        </div>
        <div className="w-3/12" />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const urls = [
    { key: 'all', url: 'https://corona.lmao.ninja/all' },
    { key: 'countries', url: 'https://corona.lmao.ninja/countries' },
    { key: 'spainHistorical', url: 'https://corona.lmao.ninja/v2/historical/Spain' },
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