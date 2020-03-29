const ExtraInfoData = ({casesPerOneMillion, deathsPerOneMillion}) => {
  return (
    <div className="flex flex-col w-full lg:w-1/3 xl:w-1/3 rounded border lg:mx-2 xl:mx-2">
      <div className="text-center text-3xl border-b-2">
        Extra
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-around lg:my-2 xl:my-2">
        <div className="text-xl">
          Cases per 1mill.: <span className="font-bold">{casesPerOneMillion}</span>
        </div>
        <div className="text-xl">
          Deaths per 1mill.: <span className="font-bold">{deathsPerOneMillion}</span>
        </div>
      </div>
    </div>
  );
}

export default ExtraInfoData;
