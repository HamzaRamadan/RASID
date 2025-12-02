// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// // DashboardCharts.tsx
// import { Line, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
//   type ChartOptions,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// export default function DashboardCharts() {
//   const maxBarValue = 10;

//   const barData = {
//     labels: [
//       "Air Pollution",
//       "Water Scarcity",
//       "Rising Sea Levels",
//       "Desertification",
//       "Biodiversity Loss",
//       "Waste Management",
//       "Industrial Pollution",
//       "Urban Heat",
//       "Oil Spills",
//       "Coastal Erosion",
//     ],
//     datasets: [
//       {
//         label: "Filled",
//         data: [10, 9, 10, 9, 8, 9, 9, 8, 9, 7],
//         backgroundColor: "#3EC7C2",
//         borderRadius: 6,
//       },
//       {
//         label: "Remaining",
//         data: [10, 9, 10, 9, 8, 9, 9, 8, 9, 7].map((val) => maxBarValue - val),
//         backgroundColor: "#555555",
//         borderRadius: 6,
//       },
//     ],
//   };

//   const lineData = {
//     labels: [
//       "Madinat Zayed",
//       "Al Marfa",
//       "Baynounah",
//       "Ghayathi",
//       "Al Sila",
//       "Al Marfa",
//       "Baynounah",
//       "Ramah",
//       "Al Hayer",
//     ],
//     datasets: [
//   {
//     label: "Risk Index",
//     data: [60000, 150000, 180000, 31000, 20000, 95000, 100000, 98000, 4000],
//     borderColor: "#3EC7C2",
//     backgroundColor: "rgba(62,199,194,0.35)",
//     borderWidth: 3,
//     tension: 0.4,
//     fill: true,   // مهم
//     pointRadius: 4,
//     pointBackgroundColor: "#3EC7C2",
//   },
// ],

//   };

//   const baseOptions: ChartOptions<"line"> & ChartOptions<"bar"> = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: {
//         ticks: {
//           color: "#9FB8C5",
//           font: { size: 10 },
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: false,
//         },
//         grid: { color: "rgba(255,255,255,0.05)" },
//       },
//       y: {
//         ticks: { color: "#9FB8C5", font: { size: 10 } },
//         grid: { color: "rgba(255,255,255,0.05)" },
//       },
//     },
//   };

//   const barChartOptions: ChartOptions<"bar"> = {
//     ...baseOptions,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: {
//         stacked: true,
//         ticks: {
//           color: "#9FB8C5",
//           font: { size: 10 },
//           maxRotation: 0,
//           minRotation: 0,
//           autoSkip: false,
//           callback: function (value) {
//             const label = this.getLabelForValue(Number(value));
//             const maxLength = 10;
//             if (label.length > maxLength) {
//               const regex = new RegExp(`.{1,${maxLength}}`, "g");
//               return label.match(regex);
//             }
//             return label;
//           },
//         },
//         grid: {
//           drawTicks: false,
//           drawOnChartArea: false,
//         },
//         border: {
//           display: true,
//           color: "#9FB8C5",
//           width: 1,
//         },
//       },
//       y: {
//         stacked: true,
//         min: 0,
//         max: maxBarValue,
//         ticks: {
//           color: "#9FB8C5",
//           font: { size: 10 },
//           stepSize: 5,
//         },
//         grid: {
//           drawTicks: false,
//           drawOnChartArea: false,
//         },
//         border: {
//           display: false,
//         },
//       },
//     },
//   };

//   const lineChartOptions: ChartOptions<"line"> = {
//     ...baseOptions,
//     scales: {
//       ...baseOptions.scales,
//       y: {
//         ...baseOptions.scales!.y,
//         min: 0,
//         max: 300000,
//         ticks: {
//           color: "#9FB8C5",
//           font: { size: 10 },
//           stepSize: 100000,
//           callback: function (value) {
//             return value.toLocaleString();
//           },
//         },
//       },
//     },
//   };

//   const areaFillPlugin = {
//   id: "forcedAreaFill",
//   beforeDraw(chart: { ctx: any; data: { datasets: any[]; }; getDatasetMeta: (arg0: number) => any; chartArea: { bottom: any; }; }) {
//     const ctx = chart.ctx;
//     const dataset = chart.data.datasets[0];

//     if (!dataset.fill) return;

//     const meta = chart.getDatasetMeta(0);
//     const points = meta.data;

//     if (!points.length) return;

//     ctx.save();
//     ctx.beginPath();
//     ctx.moveTo(points[0].x, chart.chartArea.bottom);

//     points.forEach((p: { x: any; y: any; }) => {
//       ctx.lineTo(p.x, p.y);
//     });

//     ctx.lineTo(points[points.length - 1].x, chart.chartArea.bottom);

//     ctx.closePath();
//     ctx.fillStyle = dataset.backgroundColor || "rgba(62,199,194,0.35)";
//     ctx.fill();
//     ctx.restore();
//   },
// };

// ChartJS.register(areaFillPlugin);

//   return (
//     <div className="w-full min-h-screen bg-[#0A1A23] text-white p-4 flex flex-col gap-6">
//       <div className="flex gap-3">
//         {["Week", "Month", "Quarter", "Year"].map((t, i) => (
//           <button
//             key={i}
//             className={`px-4 py-2 rounded-md text-sm font-semibold ${
//               i === 0 ? "bg-[#36C0C9] text-white" : "bg-[#EDEDEDB0] text-[#0D212C]"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-[#0F2633] p-4 rounded-xl shadow-xl h-[350px] flex flex-col">
//           <h2 className="text-lg font-semibold mb-2">
//             Top 10 Emerging Threats in Abu Dhabi
//           </h2>
//           <div className="flex-1">
//             <Bar data={barData} options={barChartOptions} />
//           </div>
//         </div>

//         <div className="bg-[#0F2633] p-4 rounded-xl shadow-xl h-[350px] flex flex-col">
//           <h2 className="text-lg font-semibold mb-2">Top 10 Risks by Location</h2>
//           <div className="flex-1 h-full min-h-[300px]">
//     <Line data={lineData} options={lineChartOptions} />
// </div>

//         </div>
//       </div>
//     </div>
//   );
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// DashboardCharts.tsx
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

/* -------------------------------------------------
    Plugin: Fill Area Under Line (Solid Area)
--------------------------------------------------- */
const areaFillPlugin = {
  id: "forcedAreaFill",
  beforeDraw(chart: {
    ctx: any;
    data: { datasets: any[] };
    getDatasetMeta: (arg0: number) => any;
    chartArea: { bottom: any };
  }) {
    const ctx = chart.ctx;
    const dataset = chart.data.datasets[0];
    if (!dataset.fill) return;

    const meta = chart.getDatasetMeta(0);
    const points = meta.data;
    if (!points.length) return;

    const { bottom } = chart.chartArea;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(points[0].x, bottom);

    points.forEach((p: { x: any; y: any }) => ctx.lineTo(p.x, p.y));

    ctx.lineTo(points[points.length - 1].x, bottom);
    ctx.closePath();

    ctx.fillStyle = dataset.backgroundColor || "rgba(62,199,194,0.55)";
    ctx.fill();
    ctx.restore();
  },
};

ChartJS.register(areaFillPlugin);

/* -------------------------------------------------
    Plugin: Glow Around Points (Line Only)
--------------------------------------------------- */
const pointGlowPlugin = {
  id: "pointGlow",
  afterDatasetsDraw(chart: {
    ctx: any;
    getDatasetMeta: (arg0: number) => any;
    config: { type: string };
  }) {
    const ctx = chart.ctx;
    const meta = chart.getDatasetMeta(0);

    // لو الرسمه Bar ما يعملش أي Glow
    if (chart.config.type !== "line") return;

    meta.data.forEach((point: { x: any; y: any }) => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(point.x, point.y, 9, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.fill();
      ctx.restore();
    });
  },
};

ChartJS.register(pointGlowPlugin);

export default function DashboardCharts() {
  const maxBarValue = 10;

  const barData = {
    labels: [
      "Air Pollution",
      "Water Scarcity",
      "Rising Sea Levels",
      "Desertification",
      "Biodiversity Loss",
      "Waste Management",
      "Industrial Pollution",
      "Urban Heat",
      "Oil Spills",
      "Coastal Erosion",
    ],
    datasets: [
      {
        label: "Filled",
        data: [12, 9, 7, 9, 8, 5, 9, 8, 9, 4],
        backgroundColor: "#36C0C9",
        borderRadius: 6,

        // ❌ شيلنا أي points نهائيًا
        pointRadius: 0,
        pointHoverRadius: 0,
      },
      {
        label: "Remaining",
        data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 3].map((v) => maxBarValue - v),
        backgroundColor: "#555555",
        borderRadius: 6,

        // ❌ برضو شيلنا أي نقط
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  };

  const lineData = {
    labels: [
      "Madinat Zayed",
      "Al Marfa",
      "Baynounah",
      "Ghayathi",
      "Al Sila",
      "Al Marfa",
      "Baynounah",
      "Ramah",
      "Al Hayer",
    ],
    datasets: [
      {
        label: "Risk Index",
        data: [60000, 150000, 180000, 31000, 20000, 95000, 100000, 98000, 4000],

        borderColor: "#3EC7C2",
        borderWidth: 3,
        tension: 0.4,
        fill: true,

        backgroundColor: "rgba(130, 242, 238, 0.55)",

        // 🔥 نقط الرسمه اليمين فقط
        pointRadius: 5,
        pointBackgroundColor: "#3EC7C2",
        pointBorderColor: "#FFFFFF",
        pointBorderWidth: 2,
      },
    ],
  };

  const baseOptions: ChartOptions<"line"> & ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: {
        ticks: {
          color: "#9FB8C5",
          font: { size: 10 },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#9FB8C5", font: { size: 10 } },
        grid: { color: "rgba(255, 255, 255, 0.05)" },
      },
    },
  };

  const barChartOptions: ChartOptions<"bar"> = {
    ...baseOptions,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#9FB8C5",
          font: { size: 10 },
          callback(value) {
            const label = this.getLabelForValue(Number(value));
            const maxLength = 10;
            return label.length > maxLength
              ? label.match(new RegExp(`.{1,${maxLength}}`, "g"))
              : label;
          },
        },
        grid: { drawTicks: false, drawOnChartArea: false },
      },
      y: {
        stacked: true,

        min: 0,
        max: maxBarValue,
        grid: { drawTicks: false, drawOnChartArea: false },
        ticks: {
          color: "#9FB8C5",
          font: { size: 10 },
          stepSize: 5,
        },
      },
    },
  };

  const lineChartOptions: ChartOptions<"line"> = {
    ...baseOptions,
    scales: {
      ...baseOptions.scales,
      y: {
        ...baseOptions.scales!.y,
        min: 0,
        max: 300000,
        ticks: {
          color: "#9FB8C5",
          font: { size: 10 },
          stepSize: 100000,
          callback(value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full min-h-screen bg-[#0A1A23] text-white p-4 flex flex-col gap-6">
      <div className="flex gap-3">
        {["Week", "Month", "Quarter", "Year"].map((t, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-md text-sm font-semibold ${
              i === 0
                ? "bg-[#36C0C9] text-white"
                : "bg-[#EDEDEDB0] text-[#0D212C]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ---- Bar Chart ---- */}
        <div className="bg-[#12323D] p-4 rounded-xl shadow-xl h-[350px] flex flex-col">
          <h2 className="text-lg font-semibold mb-2">
            Top 10 Emerging Threats in Abu Dhabi
          </h2>
          <div className="flex-1">
            <Bar data={barData} options={barChartOptions} />
          </div>
        </div>
        {/* ---- Line Chart ---- */}
        <div className="bg-[#12323D] p-4 rounded-xl shadow-xl h-[350px] flex flex-col relative">
          <h2 className="text-lg font-semibold mb-2">
            Top 10 Risks by Location
          </h2>

          <div className="flex-1 h-full min-h-[300px] relative">
            <Line data={lineData} options={lineChartOptions} />

            {/* الصورة تعلق على آخر محور X */}
            <div className="absolute bottom-0 right-0 transform translate-x-[50%]">
              <img
                src="/images/Frame 1.svg"
                alt="logo"
                className="w-20 sm:w-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
