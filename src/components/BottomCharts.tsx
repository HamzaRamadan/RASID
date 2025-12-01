import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const sampleLine = {
  labels: ['Madinat', 'Al Marfa', 'Bayanounah', 'Ghyaith', 'Al Sila', 'Al Marfa', 'Bayanounah'],
  datasets: [
    {
      label: 'Top 10 Risks by Location',
      data: [20000, 60000, 220000, 300000, 120000, 90000, 50000],
      tension: 0.4,
      fill: true
    }
  ]
}

export default function BottomCharts() {
  return (
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-card rounded-lg p-4 border border-teal-900">
        <h3 className="text-sm font-semibold mb-2">Top 10 Emerging Threats in Abu Dhabi</h3>
        <div className="h-40 bg-[#061e21] rounded" />
      </div>
      <div className="bg-card rounded-lg p-4 border border-teal-900">
        <h3 className="text-sm font-semibold mb-2">Top 10 Risks by Location</h3>
        <div className="h-40">
          <Line data={sampleLine} options={{ plugins: { legend: { display: false } }, scales: { y: { display: false } } }}/>
        </div>
      </div>
    </div>
  );
}
