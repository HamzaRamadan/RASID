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

// export default function DashboardCards() {
//   return (
//     <>
//     {/* Tabs */}
//       <div className="flex flex-col sm:flex-row my-3 sm:my-5 px-4 sm:px-12 gap-2 sm:gap-0">
//         {/* Risk Trends */}
//         <div className="bg-[#5B7E95] w-full sm:w-[150px] h-[35px] flex items-center justify-center gap-2.5
//             rounded-tl-[20px] rounded-bl-[20px] opacity-100 px-3 py-1 border-2 border-[#5B7E95]">
//           <p className="font-poppins font-semibold text-[14px] sm:text-[16px] text-center text-white">
//             Risk Trends
//           </p>
//         </div>

//         {/* Sample Overview */}
//         <div className="w-full sm:w-[150px] h-[35px] flex items-center justify-center gap-[10px]
//             rounded-tr-[20px] rounded-br-[20px] px-[5px] py-[4px] border-2 border-[#5B7E95] opacity-100 -ml-[1px]">
//           <p className="font-poppins font-semibold text-[10px] sm:text-[12px] leading-[100%] text-center text-white">
//             Sample Overview
//           </p>
//         </div>
//       </div>
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

// // بيانات كل Tab لوحده
// const riskTrendsData = [
//   {
//     title: "Risks", main: "167", sub: "Active",
//     forecast: "Forecast", forecastMain: "200",
//     change: "+5.7%", uncertainty: "14%",
//     imgTitle: "/images/Frame 65.svg", imgCard: "/images/Group.svg"
//   },
//   {
//     title: "Emerging Risks", main: "892", sub: "Active",
//     forecast: "Forecast", forecastMain: "1,000",
//     change: "-8.3%", uncertainty: "67%",
//     imgTitle: "/images/Frame 66.svg", imgCard: "/images/Group.svg"
//   },
// ];

// const sampleOverviewData = [
//   {
//     title: "Overview A", main: "120", sub: "Items",
//     forecast: "Predict", forecastMain: "150",
//     change: "+3%", uncertainty: "20%",
//     imgTitle: "/images/Frame 67.svg", imgCard: "/images/Group.svg"
//   },
//   {
//     title: "Overview B", main: "350", sub: "Items",
//     forecast: "Predict", forecastMain: "410",
//     change: "-2%", uncertainty: "11%",
//     imgTitle: "/images/Frame 68.svg", imgCard: "/images/Group.svg"
//   },
// ];

// export default function DashboardCards() {

//   // ⭐ هنا بنحدد الـ Tab المفتوح
//   const [activeTab, setActiveTab] = useState<"risk" | "sample">("risk");

//   // ⭐ نحدد البيانات حسب الـ Tab:
//   const cardData = activeTab === "risk" ? riskTrendsData : sampleOverviewData;

//   return (
//     <>
//       {/* Tabs */}
//       <div className="flex flex-col sm:flex-row my-3 sm:my-5 px-4 sm:px-12 gap-2 sm:gap-0">

//         {/* Risk Trends */}
//         <div
//           onClick={() => setActiveTab("risk")}
//           className={`cursor-pointer w-full sm:w-[150px] h-[35px] flex items-center justify-center gap-2.5
//             rounded-tl-[20px] rounded-bl-[20px] border-2
//             ${activeTab === "risk"
//               ? "bg-[#5B7E95] border-[#5B7E95]"
//               : "bg-transparent border-[#5B7E95]"}`
//           }
//         >
//           <p className="font-poppins font-semibold text-[14px] sm:text-[16px] text-white">
//             Risk Trends
//           </p>
//         </div>

//         {/* Sample Overview */}
//         <div
//           onClick={() => setActiveTab("sample")}
//           className={`cursor-pointer w-full sm:w-[150px] h-[35px] flex items-center justify-center
//             rounded-tr-[20px] rounded-br-[20px] border-2 -ml-[1px]
//             ${activeTab === "sample"
//               ? "bg-[#5B7E95] border-[#5B7E95]"
//               : "bg-transparent border-[#5B7E95]"}`}
//         >
//           <p className="font-poppins font-semibold text-[12px] sm:text-[14px] text-white">
//             Sample Overview
//           </p>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="w-full flex justify-center px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1400px]">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className={`rounded-3xl p-2 shadow-md flex flex-col justify-between
//                 ${index === 0
//                   ? "bg-[#33F3FF52] border-2 border-white"
//                   : "bg-[#36C0C940]"}`}
//             >
//               {/* العنوان */}
//               <div className="flex justify-between items-center mb-2">
//                 <div className="text-[18px] font-poppins font-medium">{card.title}</div>
//                 <img src={card.imgTitle} className="w-8 h-8" />
//               </div>

//               {/* الرقمين */}
//               <div className="flex gap-2">
//                 <div className="flex-1 flex items-center gap-1">
//                   <div>
//                     <div className="text-2xl font-bold">{card.main}</div>
//                     <h3 className="text-[18px] font-semibold">{card.sub}</h3>
//                   </div>
//                   <img src={card.imgCard} className="w-10 -mt-2" />
//                 </div>

//                 <div className="flex-1 flex items-center gap-1">
//                   <div>
//                     <div className="text-2xl font-bold">{card.forecastMain}</div>
//                     <h3 className="text-[18px] font-semibold">{card.forecast}</h3>
//                   </div>
//                   <img src={card.imgCard} className="w-10 -mt-2" />
//                 </div>
//               </div>

//               {/* التغيير */}
//               <div className="mt-2 flex justify-between items-center">
//                 <div className="flex items-center gap-1">
//                   <img
//                     src={
//                       card.change.startsWith("+")
//                         ? "/images/arrow.svg"
//                         : card.change.startsWith("-")
//                         ? "/images/arrowdown.svg"
//                         : "/images/arow0.svg"
//                     }
//                     className="w-6 h-6"
//                   />
//                   <div className="text-[16px] font-medium">
//                     {card.change}
//                   </div>
//                 </div>

//                 <div className="font-semibold text-white">
//                   <span className="text-[#36C0C9]">Uncertainty:</span> {card.uncertainty}
//                 </div>

//                 {index < 2 && <IoIosArrowDown className="w-6 h-6" />}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import RiskTrendsCards from "./RiskTrends";
import SampleOverview from "./SampleOverview";

export default function DashboardCards() {
  const [activeTab, setActiveTab] = useState<"risk" | "sample">("risk");

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row my-3 sm:my-5 px-4 sm:px-12 gap-2 sm:gap-0">
        {/* Risk Trends */}
        <div
          onClick={() => setActiveTab("risk")}
          className={`cursor-pointer w-full sm:w-[150px] h-[35px] flex items-center justify-center
            rounded-l-[20px] border-2 
            ${activeTab === "risk" ? "bg-[#5B7E95]" : "bg-transparent"}`}
        >
          <p className="text-white font-semibold">Risk Trends</p>
        </div>

        {/* Sample Overview */}
        <div
          onClick={() => setActiveTab("sample")}
          className={`cursor-pointer w-full sm:w-[150px] h-[35px] flex items-center justify-center 
            rounded-r-[20px] border-2 -ml-[1px]
            ${activeTab === "sample" ? "bg-[#5B7E95]" : "bg-transparent"}`}
        >
          <p className="text-white font-semibold">Sample Overview</p>
        </div>
      </div>

      {/* 👇 هنا نختار أي كومبوننت يظهر */}
      <div className="w-full flex justify-center px-8">
        {activeTab === "risk" && <RiskTrendsCards />}
        {activeTab === "sample" && <SampleOverview />}
      </div>
    </>
  );
}
