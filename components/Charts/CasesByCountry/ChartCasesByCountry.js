import { Line } from 'react-chartjs-2';

const ChartCasesByCountry = ({ data: { data, labels } }) => {
  const colors = { deaths: 'rgba(245, 101, 101, 1)', cases: 'rgba(66, 153, 225, 1)', recovered: 'rgba(72, 187, 120, 1)' };
  const datasets = data.map(data => {
    const [key, values] = Object.entries(data)[0]
    return ({
      label: `${key} in Spain`,
      fill: false,
      lineTension: 0.1,
      backgroundColor: colors[key],
      borderColor: colors[key],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: colors[key],
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: colors[key],
      pointHoverBorderColor: colors[key],
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: values,
    });
  });
  const chartData = {
    labels: labels,
    datasets,
  };


  return (
    <Line data={chartData}></Line>
  );
}

export default ChartCasesByCountry;
