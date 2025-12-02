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


  const labels = [
    "Madinat Zayed",
    "Al Marfa",
    "Baynounah",
    "Ghiyahti",
    "Al Sila",
    "Al Marfa",
    "Baynounah",
    "Ramah",
    "Al Hayer",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [60000, 150000, 170000, 300000, 20000, 10000, 130000, 120000, 5000],

        borderColor: "#4deaff",
        backgroundColor: "rgba(77, 234, 255, 0.20)",
        tension: 0.4,
        pointBackgroundColor: "#4deaff",
        pointBorderColor: "#ffffff",
        pointBorderWidth: 2,
        pointRadius: 5,
        fill: true,
      },
    ],
  };


 const options: any = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: "#0d2a35",
      borderColor: "#4deaff",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: { color: "rgba(255,255,255,0.05)" },
      ticks: { color: "#c9e7ff" },
    },
    y: {
      min: 0, // مهم جداً يبدأ من الصفر
      grid: { color: "rgba(255,255,255,0.10)" },
      ticks: { color: "#c9e7ff" },
    },
  },
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

          <div className="flex-1 w-full h-full relative">

            <Line data={data} options={options} />

            {/* الصورة تعلق على آخر محور X */}
            <div className="absolute -right-8 bottom-52 sm:bottom-0">
  <img
    src="/images/Frame 1.svg"
    alt="logo"
    className="w-24 sm:w-24 max-w-[20%]"
  />
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
