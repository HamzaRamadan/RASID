// import { GiBackwardTime } from "react-icons/gi";
// import { IoIosArrowDown } from "react-icons/io";
// import { MdDateRange } from "react-icons/md";

// export default function Topbar() {
//   return (
//     <>
//     <header className="bg-[#0D212C] ">
//       <div className="max-w-[1400px] mx-auto px-10 py-5 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <img src="/images/logo RASID.png" alt="" />
//           <h1 className="text-white font-poppins text-[34px] leading-[23px] tracking-[0%]">
//             <span className="font-semibold">RASID</span>{" "}
//             <span className="font-light">Platform</span>
//           </h1>
//         </div>
//         <div className="flex items-center gap-4 text-sm text-slate-300">
//           <div className="flex items-center gap-2">
//             <img
//               src="/images/Contact support.svg"
//               alt="contact"
//               className="w-8 h-8"
//             />
//             <img
//               src="/images/Light mode.svg"
//               alt="contact"
//               className="w-8 h-8"
//             />

//             <img
//               src="/images/sara.jpg"
//               alt="avatar"
//               className="w-16 h-16 rounded-2xl"
//             />
//           </div>
//           <div className="">
//             <h2 className="text-[#E3E3E3] font-poppins font-normal text-[16px] leading-[100%] align-middle">
//               Dr. Sarah KH
//             </h2>
//             <div className="flex items-center gap-2 mt-2">
//               <img
//                 src="/images/Local police.svg"
//                 alt="avatar"
//                 className="w-6 h-6 rounded-2xl"
//               />
//               <div className="text-[14px] font-poppins font-normal leading-[100%] text-[#E3E3E3]">
//                 AD Police
//               </div>
//             </div>

//           </div>
//             <IoIosArrowDown className="self-start mt-1 w-6 h-6 " />
//         </div>
//       </div>
//     </header>
//      <div className="bg-[#133943]">
//   <div className="max-w-[1400px] mx-auto px-12 py-3 flex items-center justify-between text-white">

//     {/* Left side */}
//     <div className="flex items-center gap-8">
//    <p className="text-[#E3E3E3] font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] flex items-center gap-2">
//   <GiBackwardTime className="scale-x-[-1] w-7 h-7" />
//   Last Update : March 15, 2025 09:30 AM
// </p>
//     </div>

//     {/* Right side */}
//     <div className="flex items-center gap-8">
//    <p className="text-[#E3E3E3] font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] flex items-center gap-2">
//   <IoIosArrowDown className="scale-x-[-1] w-5 h-5" />
//   <MdDateRange className="scale-x-[-1] w-5 h-5" />
// Date :  Jan 01, 2024 - Jan 01, 2025 </p>

//     </div>

//   </div>
// </div>



// <div className="flex my-5 px-12 ">
//   {/* Risk Trends */}
//   <div className="bg-[#5B7E95] w-[150px] h-[35px] flex items-center justify-center gap-2.5 
//       rounded-tl-[20px] rounded-bl-[20px] opacity-100 px-3 py-1 border-2 border-[#5B7E95] ">
//   <p className="font-poppins font-semibold text-[16px] l text-center text-white">
//     Risk Trends
//   </p>
// </div>


//   {/* Sample Overview */}
//   <div className=" w-[150px] h-[35px] flex items-center justify-center gap-[10px] 
//       rounded-tr-[20px] rounded-br-[20px] px-[5px] py-[4px] border-2 border-[#5B7E95] opacity-100 -ml-[1px]">
//     <p className="font-poppins font-semibold text-[12px] leading-[100%]  text-center text-white">
//       Sample Overview
//     </p>
//   </div>
// </div>


//       </>
//   );
// }


import { GiBackwardTime } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

export default function Topbar() {
  return (
    <>
      {/* Header */}
      <header className="bg-[#0D212C] w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 py-3 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            <img src="/images/logo RASID.png" alt="logo" className="w-48 sm:w-48" />
            <h1 className="text-white font-poppins text-[24px] sm:text-[34px] leading-[23px] sm:leading-[32px] tracking-[0%]">
              <span className="font-semibold">RASID</span>{" "}
              <span className="font-light">Platform</span>
            </h1>
          </div>

          {/* Right: User */}
          <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-slate-300">
            <div className="flex items-center gap-2 sm:gap-4">
              <img src="/images/Contact support.svg" alt="contact" className="w-6 sm:w-8 h-6 sm:h-8" />
              <img src="/images/Light mode.svg" alt="light mode" className="w-6 sm:w-8 h-6 sm:h-8" />
              <img src="/images/sara.jpg" alt="avatar" className="w-12 sm:w-16 h-12 sm:h-16 rounded-2xl" />
            </div>

           <div className="flex flex-col sm:flex-col gap-1">
  <h2 className="text-[#E3E3E3] font-poppins font-normal text-[14px] sm:text-[16px] leading-[100%]">
    Dr. Sarah KH
  </h2>

  {/* AD Police info تحت الـ h2 */}
  <div className="flex items-center gap-2">
    <img
      src="/images/Local police.svg"
      alt="avatar"
      className="w-4 sm:w-6 h-4 sm:h-6 rounded-2xl"
    />
    <div className="text-[12px] sm:text-[14px] font-poppins font-normal text-[#E3E3E3] leading-[100%]">
      AD Police
    </div>
  </div>
</div>
          <IoIosArrowDown className="self-start mt-1 w-6 h-6 " />

          </div>
        </div>
      </header>

      {/* Sub Header */}
      <div className="bg-[#133943] w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-12 py-2 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-8 text-white">
          {/* Left side */}
          <p className="text-[#E3E3E3] font-poppins font-normal text-[12px] sm:text-[16px] leading-[100%] tracking-[0%] flex items-center gap-2">
            <GiBackwardTime className="scale-x-[-1] w-5 sm:w-7 h-5 sm:h-7" />
            Last Update : March 15, 2025 09:30 AM
          </p>

          {/* Right side */}
          <p className="text-[#E3E3E3] font-poppins font-normal text-[12px] sm:text-[16px] leading-[100%] tracking-[0%] flex items-center gap-2 sm:gap-2.5">
            <IoIosArrowDown className="scale-x-[-1] w-4 sm:w-5 h-4 sm:h-5" />
            <MdDateRange className="scale-x-[-1] w-4 sm:w-5 h-4 sm:h-5" />
            Date : Jan 01, 2024 - Jan 01, 2025
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row my-3 sm:my-5 px-4 sm:px-12 gap-2 sm:gap-0">
        {/* Risk Trends */}
        <div className="bg-[#5B7E95] w-full sm:w-[150px] h-[35px] flex items-center justify-center gap-2.5 
            rounded-tl-[20px] rounded-bl-[20px] opacity-100 px-3 py-1 border-2 border-[#5B7E95]">
          <p className="font-poppins font-semibold text-[14px] sm:text-[16px] text-center text-white">
            Risk Trends
          </p>
        </div>

        {/* Sample Overview */}
        <div className="w-full sm:w-[150px] h-[35px] flex items-center justify-center gap-[10px] 
            rounded-tr-[20px] rounded-br-[20px] px-[5px] py-[4px] border-2 border-[#5B7E95] opacity-100 -ml-[1px]">
          <p className="font-poppins font-semibold text-[10px] sm:text-[12px] leading-[100%] text-center text-white">
            Sample Overview
          </p>
        </div>
      </div>
    </>
  );
}
