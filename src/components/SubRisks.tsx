/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CardsPage() {
  // ==== DATA ARRAY ====
  const cardsData = [
    {
      title: "Health",
      main: "892",
      sub: "Active",
      forecast: "Forecast",
      forecastMain: "1,000",
      change: "-8.3%",
      uncertainty: "67%",
      imgTitle: "/images/Icon (5).svg",
      imgCard: "/images/Group.svg",
    },
    {
      title: "Environmental",
      main: "892",
      sub: "Active",
      forecast: "Forecast",
      forecastMain: "1,000",
      change: "-8.3%",
      uncertainty: "67%",
      imgTitle: "/images/Icon (6).svg",
      imgCard: "/images/Group.svg",
    },
    {
      title: "Security",
      main: "892",
      sub: "Active",
      forecast: "Forecast",
      forecastMain: "1,000",
      change: "-8.3%",
      uncertainty: "67%",
      imgTitle: "/images/Icon (7).svg",
      imgCard: "/images/Group.svg",
    },
  ];

  // ==== SINGLE CARD COMPONENT ====
  const SingleCard = ({ data }: any) => {
    return (
      <div className="w-full flex justify-start px-8">
        <div className="w-[335px] rounded-xl border-2 border-[#1f3b52]  bg-[#152833F2] p-2">
          <div className="rounded-3xl py-3 px-4 shadow-md flex flex-col justify-between cursor-pointer border border-[#1f3b52] bg-[#5B7E9573] transition-all duration-200">

            {/* Title */}
            <div className="flex justify-between items-center">
              <div className="font-poppins font-medium text-[18px] text-white">
                {data.title}
              </div>
              <img src={data.imgTitle} className="w-8 h-8" />
            </div>

            {/* Values */}
            <div className="flex gap-0 mt-2">
              <div className="flex-1 flex items-center gap-2">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-white">{data.main}</div>
                  <p className="text-[16px] text-gray-300">{data.sub}</p>
                </div>
                <img src={data.imgCard} className="w-9 h-9 -mt-1" />
              </div>

              <div className="flex-1 flex items-center gap-2 -ml-20">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold text-white">{data.forecastMain}</div>
                  <p className="text-[16px] text-gray-300">{data.forecast}</p>
                </div>
                <img src={data.imgCard} className="w-9 h-9 -mt-1 -ml-1" />
              </div>
            </div>

            {/* Change & Uncertainty */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={
                    data.change.startsWith("+")
                      ? "/images/arrow.svg"
                      : data.change.startsWith("-")
                      ? "/images/arrowdown.svg"
                      : "/images/arow0.svg"
                  }
                  className="w-5 h-5"
                />
                <div className="text-[15px] text-white">{data.change}</div>
              </div>

              <div className="font-semibold text-[15px] flex items-center gap-1">
                <span className="text-[#36C0C9]">Uncertainty:</span>
                <span className="text-white">{data.uncertainty}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };

  // ==== MAIN RETURN ====
  return (
    <div className="flex flex-col items-center">
      {cardsData.map((item, index) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
}
