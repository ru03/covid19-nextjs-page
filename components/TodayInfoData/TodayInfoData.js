const TodayInfoData = ({todayCases, todayDeaths}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 xl:w-1/3 rounded border lg:mx-2 xl:mx-2">
      <div className="text-center text-3xl border-b-2">
        Today
        </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-around lg:my-2 xl:my-2">
        <div className="text-xl">
          Cases: <span className="text-blue-500 font-bold">{todayCases}</span>
        </div>
        <div className="text-xl">
          Deaths: <span className="text-red-500 font-bold">{todayDeaths}</span>
        </div>
      </div>
    </div>
  );
}

export default TodayInfoData;