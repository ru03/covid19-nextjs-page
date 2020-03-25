import fetch from 'node-fetch';
const Country = ({ data }) => {
  return (
    <div className="min-h-screen m-2">
      <div className="flex justify-center">
        <img src={data.countryInfo.flag} alt={data.country} />
      </div>
      <div className="text-5xl text-center">{data.country} Information</div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/3 rounded border mx-2">
          <div className="text-center text-3xl border-b-2">
            Today
        </div>
          <div className="flex flex-row justify-around my-2">
            <div className="text-xl">
              Cases: <span className="text-blue-500 font-bold">{data.todayCases}</span>
            </div>
            <div className="text-xl">
              Deaths: <span className="text-red-500 font-bold">{data.todayDeaths}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 rounded border mx-2">
          <div className="text-center text-3xl border-b-2">
            Total
        </div>
          <div className="flex flex-row justify-around my-2">
            <div className="text-xl">
              Cases: <span className="text-blue-500 font-bold">{data.cases}</span>
            </div>
            <div className="text-xl">
              Deaths: <span className="text-red-500 font-bold">{data.deaths}</span>
            </div>
            <div className="text-xl">
              Recovered: <span className="text-green-500 font-bold">{data.recovered}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3 rounded border mx-2">
          <div className="text-center text-3xl border-b-2">
            Extra
        </div>
          <div className="flex flex-row justify-around my-2">
            <div className="text-xl">
              Cases per 1mill.: <span className="font-bold">{data.casesPerOneMillion}</span>
            </div>
            <div className="text-xl">
              Deaths per 1mill.: <span className="font-bold">{data.deathsPerOneMillion}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://corona.lmao.ninja/countries/${params.country}`);
  const data = await res.json();
  return {
    props: {
      data,
    }
  }
}

export default Country;
