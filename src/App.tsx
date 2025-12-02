
// import Topbar from "./components/Topbar";
// import StatsCards from "./components/StatsCards";
// import MapPanel from "./components/MapPanel";
// import BottomCharts from "./components/BottomCharts";
// import RequestAccess from "./components/RequestAccess";

// export default function App() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Topbar />
//       <RequestAccess />
//       <div className="px-6 py-4 space-y-4">
//         <StatsCards />
//         <MapPanel />
//         <BottomCharts />
//       </div>
//     </div>
//   );
// }




import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequestAccess from "./components/RequestAccess";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RequestAccess onAccess={function (): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/login" element={<Login onAccess={function (): void {
          throw new Error("Function not implemented.");
        } } />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
