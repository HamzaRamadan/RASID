
const cardData = [
  {
    title: "Total Samples Collected",
    main: "3,473,185",
    imgTitle: "/images/Icon (3).svg",
  },
  {
    title: "Total Samples Tested",
    main: "2,847,392",    
    imgTitle: "/images/Frame 65 (1).svg",
  },
  {
    title: "Total Days of Sample Collection",
    main: "245",    
    imgTitle: "/images/Icon (4).svg",
  },
  {
    title: "Collection Points",
    main: "198",
    imgTitle: "/images/Frame 65 (2).svg",
  },
];

export default function SampleOverview() {
  return (
    <>
 
    <div className="w-full flex justify-center px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">
        {cardData.map((card, index) => (
          <div
             key={index}
            className={`rounded-3xl p-2 h-32 shadow-md flex flex-col justify-between ${
              index === 0
                ? "bg-[#33F3FF52] border-2 border-white"
                : "bg-[#36C0C940]"
            }`}
          >
            {/* العنوان + صورة */}
            <div className="flex justify-between items-center">
              <div className="font-poppins font-medium text-[18px] leading-[100%] ">
                {card.title}
              </div>
              <img
                src={card.imgTitle}
                alt={card.title}
                className="w-8 h-8"
              />
            </div>

            {/* البطاقة الفرعية */}
           <div className="flex  gap-0">
  {/* الرقم + Active */}
  <div className="flex-1 flex items-center gap-1">
    <div className="flex flex-col">
      <div className="text-2xl font-bold mb-5">{card.main}</div>
    
    </div>
 
  </div>


</div>



          </div>
        ))}
      </div>
    </div>
    </>
  );
}


