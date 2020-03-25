import * as moment from 'moment';

const TotalWorldCounter = ({ cases, deaths, recovered, updateDate }) => {
  return (
    <div className="flex flex-row justify-around border rounded m-2">
        <div className="text-xl">Total Cases: <span className="text-xl font-bold text-blue-500">{cases}</span></div>
        <div className="text-xl">Total Deaths: <span className="text-xl font-bold text-red-500">{deaths}</span></div>
        <div className="text-xl">Total Recovereds: <span className="text-xl font-bold text-green-500">{recovered}</span></div>
        <div className="text-xl">Last Update: <span className="text-base">{moment(updateDate).format('DD/MM/YYYY : HH:mm:ss')}</span></div>
    </div>
  );
}

export default TotalWorldCounter;
