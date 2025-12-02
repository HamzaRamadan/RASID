// Dashboard.tsx
import Topbar from "./Topbar";
import StatsCards from "./StatsCards";
// import MapPanel from "./MapPanel";
import BottomCharts from "./BottomCharts";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className=" py-4 space-y-4">
        
        <StatsCards />
        {/* <MapPanel /> */}
        <BottomCharts />
      </div>
    </div>
  );
}
