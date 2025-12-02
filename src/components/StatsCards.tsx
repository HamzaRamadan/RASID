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

      <div className="w-full flex justify-center px-8">
        {activeTab === "risk" && <RiskTrendsCards />}
        {activeTab === "sample" && <SampleOverview />}
      </div>
    </>
  );
}
