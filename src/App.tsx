
import Topbar from "./components/Topbar";
import StatsCards from "./components/StatsCards";
import MapPanel from "./components/MapPanel";
import BottomCharts from "./components/BottomCharts";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <div className="px-6 py-4 space-y-4">
        <StatsCards />
        <MapPanel />
        <BottomCharts />
      </div>
    </div>
  );
}
