import fetch from 'node-fetch';
import { Bar } from 'react-chartjs-2';
import TodayInfoData from '../../../components/TodayInfoData/TodayInfoData';
import TotalInfoData from '../../../components/TotalInfoData/TotalInfoData';
import ExtraInfoData from '../../../components/ExtraInfoData/ExtraInfoData';
const Country = ({ data }) => {
  const chart = {
    labels: ['Cases', 'Deaths'],
    datasets: [
      {
        label: 'Total',
        backgroundColor: 'rgba(52, 128, 235,0.2)',
        borderColor: 'rgba(52, 128, 235)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(52, 128, 235,0.4)',
        hoverBorderColor: 'rgba(52, 128, 235)',
        data: [data.cases, data.deaths]
      },
      {
        label: 'Today',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [data.todayCases, data.todayDeaths]
      },
    ]
  };

  return (
    <div className="min-h-screen m-2">
      <div className="flex justify-center">
        <img src={data.countryInfo.flag} alt={data.country} />
      </div>
      <div className="text-5xl text-center">{data.country} Information</div>
      <div className="flex flex-col lg:flex-row xl:flex-row">
        <TodayInfoData
          todayCases={data.todayCases}
          todayDeaths={data.todayDeaths}
        />
        <TotalInfoData
          cases={data.cases}
          deaths={data.deaths}
          recovered={data.recovered}
        />
        <ExtraInfoData
          casesPerOneMillion={data.casesPerOneMillion}
          deathsPerOneMillion={data.deathsPerOneMillion}
        />
      </div>
      <div>
        <Bar
          data={chart}
          width={100}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        />
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
