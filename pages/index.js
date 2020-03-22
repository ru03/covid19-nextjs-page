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
    <div className="h-screen">
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
      <div className="flex flex-row justify-center h-16">
        <div className="w-3/12" />
        <div className="w-6/12">
          <ChartCasesByCountry data={chartData} />
        </div>
        <div className="w-3/12" />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const urls = [
    { key: 'all', url: 'https://corona.lmao.ninja/all' },
    { key: 'countries', url: 'https://corona.lmao.ninja/countries' },
    { key: 'spainHistorical', url: 'https://corona.lmao.ninja/historical/spain' },
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