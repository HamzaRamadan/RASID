// import { IoIosArrowDown } from "react-icons/io";

// const cardData = [
//   {
//     title: "Risks",
//     main: "167",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "200",
//     change: "+5.7%",
//     uncertainty: "14%",
//     imgTitle: "/images/Frame 65.svg",
//     imgCard: "/images/Group.svg"
//   },
//   {
//     title: "Emerging Risks",
//     main: "892",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "1,000",
//     change: "-8.3%",
//     uncertainty: "67%",
//     imgTitle: "/images/Frame 66.svg",
//     imgCard: "/images/Group.svg"
//   },
//   {
//     title: "Radioactivity",
//     main: "456",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "600",
//     change: "0%",
//     uncertainty: "28%",
//     imgTitle: "/images/Frame 67.svg",
//     imgCard: "/images/Group.svg"
//   },
//   {
//     title: "Risk Regions",
//     main: "10",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "12",
//     change: "+12.5%",
//     uncertainty: "4%",
//     imgTitle: "/images/Frame 68.svg",
//     imgCard: "/images/Group.svg"
//   },
// ];

// export default function RiskTrends() {
//   return (
//     <>
 
//     <div className="w-full flex justify-center px-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">
//         {cardData.map((card, index) => (
//           <div
//              key={index}
//             className={`rounded-3xl p-2 shadow-md flex flex-col justify-between ${
//               index === 0
//                 ? "bg-[#33F3FF52] border-2 border-white"
//                 : "bg-[#36C0C940]"
//             }`}
//           >
//             {/* العنوان + صورة */}
//             <div className="flex justify-between items-center">
//               <div className="font-poppins font-medium text-[18px] leading-[100%] ">
//                 {card.title}
//               </div>
//               <img
//                 src={card.imgTitle}
//                 alt={card.title}
//                 className="w-8 h-8"
//               />
//             </div>

//             {/* البطاقة الفرعية */}
//            <div className="flex  gap-0">
//   {/* الرقم + Active */}
//   <div className="flex-1 flex items-center gap-1">
//     <div className="flex flex-col">
//       <div className="text-2xl font-bold">{card.main}</div>
//       <h3 className="font-poppins font-semibold text-[18px] leading-[1] tracking-[0px]">
//         {card.sub}
//       </h3>
//     </div>
//     <img
//       src={card.imgCard}
//       alt="icon"
//       className="w-10 h-10 -mt-2"
//     />
//   </div>

//   {/* Forecast */}
//   <div className="flex-1 flex items-center gap-1 -ml-20">
//     <div className="flex flex-col">
//       <div className="text-2xl font-bold">{card.forecastMain}</div>
//       <h3 className="font-poppins font-semibold text-[18px] leading-[1] tracking-[0px]">
//         {card.forecast}
//       </h3>
//     </div>
//     <img
//       src={card.imgCard}
//       alt="icon"
//       className="w-10 h-10 -mt-2 -ml-1"
//     />
//   </div>
// </div>

//             {/* التغييرات + Uncertainty + سهم */}
// <div className="mt-2 flex items-center justify-between w-full">
//   {/* التغيير */}
//   <div className="flex items-center gap-2">
//     <img
//       src={
//         card.change.startsWith("+")
//           ? "/images/arrow.svg"
//           : card.change.startsWith("-")
//           ? "/images/arrowdown.svg"
//           : "/images/arow0.svg"
//       }
//       alt="icon"
//       className="w-6 h-6"
//     />
//     <div
//       className={`font-poppins font-medium text-[16px] leading-[14px] ${
//         card.change.startsWith("+")
//           ? "text-[#FF5154]"
//           : card.change.startsWith("-")
//           ? "text-[#26FFB7]"
//           : "text-[#A2A2A2]"
//       }`}
//     >
//       {card.change}
//     </div>
//   </div>

//   {/* Uncertainty */}
//   <div className="font-poppins font-semibold text-[16px] leading-[100%]  flex items-center gap-1">
//     <span className="text-[#36C0C9]">Uncertainty:</span>
//     <span className="text-white">{card.uncertainty}</span>
//   </div>

//   {/* السهم لأسفل */}
// <div className="w-[24px] flex justify-end">
//     {index < 2 && <IoIosArrowDown className="w-6 h-6" />}
//   </div>
// </div>

//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }






// import { useState } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import RiskDropDown from "./SubRisks";

// const cardData = [
//   {
//     title: "Risks",
//     main: "167",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "200",
//     change: "+5.7%",
//     uncertainty: "14%",
//     imgTitle: "/images/Frame 65.svg",
//     imgCard: "/images/Group.svg",
//   },
//   {
//     title: "Emerging Risks",
//     main: "892",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "1,000",
//     change: "-8.3%",
//     uncertainty: "67%",
//     imgTitle: "/images/Frame 66.svg",
//     imgCard: "/images/Group.svg",
//   },
//   {
//     title: "Radioactivity",
//     main: "456",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "600",
//     change: "0%",
//     uncertainty: "28%",
//     imgTitle: "/images/Frame 67.svg",
//     imgCard: "/images/Group.svg",
//   },
//   {
//     title: "Risk Regions",
//     main: "10",
//     sub: "Active",
//     forecast: "Forecast",
//     forecastMain: "12",
//     change: "+12.5%",
//     uncertainty: "4%",
//     imgTitle: "/images/Frame 68.svg",
//     imgCard: "/images/Group.svg",
//   },
// ];

// export default function RiskTrends() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-full flex justify-center px-8">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">

//         {/* الكروت */}
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             onClick={() => index === 0 && setOpen(!open)}
//             className={`rounded-3xl p-2 shadow-md flex flex-col justify-between cursor-pointer transition-all duration-200
//               ${index === 0 ? "bg-[#33F3FF52] border-2 border-white" : "bg-[#36C0C940]"}
//             `}
//           >
//             {/* Title */}
//             <div className="flex justify-between items-center">
//               <div className="font-poppins font-medium text-[18px]">
//                 {card.title}
//               </div>
//               <img src={card.imgTitle} className="w-8 h-8" />
//             </div>

//             {/* Values */}
//             <div className="flex gap-0">
//               <div className="flex-1 flex items-center gap-1">
//                 <div className="flex flex-col">
//                   <div className="text-2xl font-bold">{card.main}</div>
//                   <p className="text-[18px]">{card.sub}</p>
//                 </div>
//                 <img src={card.imgCard} className="w-10 h-10 -mt-2" />
//               </div>

//               <div className="flex-1 flex items-center gap-1 -ml-20">
//                 <div className="flex flex-col">
//                   <div className="text-2xl font-bold">{card.forecastMain}</div>
//                   <p className="text-[18px]">{card.forecast}</p>
//                 </div>
//                 <img src={card.imgCard} className="w-10 h-10 -mt-2 -ml-1" />
//               </div>
//             </div>

//             {/* Change */}
//             <div className="mt-2 flex items-center justify-between">
//               <div className="flex items-center gap-2">
//                 <img
//                   src={
//                     card.change.startsWith("+")
//                       ? "/images/arrow.svg"
//                       : card.change.startsWith("-")
//                       ? "/images/arrowdown.svg"
//                       : "/images/arow0.svg"
//                   }
//                   className="w-6 h-6"
//                 />
//                 <div className="text-[16px]">{card.change}</div>
//               </div>

//               <div className="font-semibold text-[16px] flex items-center gap-1">
//                 <span className="text-[#36C0C9]">Uncertainty:</span>
//                 <span className="text-white">{card.uncertainty}</span>
//               </div>

//               {index === 0 && (
//                 <IoIosArrowDown
//                   className={`w-6 h-6 transition-transform duration-300 ${
//                     open ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </div>
//           </div>
//         ))}

//         {/* ⭐ Dropdown خارج الكارت */}
//         {open && (
//           <div className="col-span-full mt-4">
//             <RiskDropDown />
//           </div>
//         )}

//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import RiskDropDown from "./SubRisks";

const cardData = [
  {
    title: "Risks",
    main: "167",
    sub: "Active",
    forecast: "Forecast",
    forecastMain: "200",
    change: "+5.7%",
    uncertainty: "14%",
    imgTitle: "/images/Frame 65.svg",
    imgCard: "/images/Group.svg",
  },
  {
    title: "Emerging Risks",
    main: "892",
    sub: "Active",
    forecast: "Forecast",
    forecastMain: "1,000",
    change: "-8.3%",
    uncertainty: "67%",
    imgTitle: "/images/Frame 66.svg",
    imgCard: "/images/Group.svg",
  },
  {
    title: "Radioactivity",
    main: "456",
    sub: "Active",
    forecast: "Forecast",
    forecastMain: "600",
    change: "0%",
    uncertainty: "28%",
    imgTitle: "/images/Frame 67.svg",
    imgCard: "/images/Group.svg",
  },
  {
    title: "Risk Regions",
    main: "10",
    sub: "Active",
    forecast: "Forecast",
    forecastMain: "12",
    change: "+12.5%",
    uncertainty: "4%",
    imgTitle: "/images/Frame 68.svg",
    imgCard: "/images/Group.svg",
  },
];

export default function RiskTrends() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-8 relative">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">

        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => index === 0 && setOpen(!open)}
            className={`rounded-3xl p-2 shadow-md flex flex-col justify-between cursor-pointer transition-all duration-200
              ${index === 0 ? "bg-[#33F3FF52] border-2 border-white" : "bg-[#36C0C940]"}
            `}
          >
            {/* Title */}
            <div className="flex justify-between items-center">
              <div className="font-poppins font-medium text-[18px]">
                {card.title}
              </div>
              <img src={card.imgTitle} className="w-8 h-8" />
            </div>

            {/* Values */}
            <div className="flex gap-0">
              <div className="flex-1 flex items-center gap-1">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">{card.main}</div>
                  <p className="text-[18px]">{card.sub}</p>
                </div>
                <img src={card.imgCard} className="w-10 h-10 -mt-2" />
              </div>

              <div className="flex-1 flex items-center gap-1 -ml-20">
                <div className="flex flex-col">
                  <div className="text-2xl font-bold">{card.forecastMain}</div>
                  <p className="text-[18px]">{card.forecast}</p>
                </div>
                <img src={card.imgCard} className="w-10 h-10 -mt-2 -ml-1" />
              </div>
            </div>

            {/* Change */}
            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={
                    card.change.startsWith("+")
                      ? "/images/arrow.svg"
                      : card.change.startsWith("-")
                      ? "/images/arrowdown.svg"
                      : "/images/arow0.svg"
                  }
                  className="w-6 h-6"
                />
                <div className="text-[16px]">{card.change}</div>
              </div>

              <div className="font-semibold text-[16px] flex items-center gap-1">
                <span className="text-[#36C0C9]">Uncertainty:</span>
                <span className="text-white">{card.uncertainty}</span>
              </div>

              {index === 0 && (
                <IoIosArrowDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          </div>
        ))}

      </div>

      {/* ⭐⭐ DROPDOWN فوق الخريطة بدون ما يزق الكروت ⭐⭐ */}
      {open && (
        <div className="absolute left-0 right-0 top-[180px] z-50">
          <RiskDropDown />
        </div>
      )}

    </div>
  );
}
