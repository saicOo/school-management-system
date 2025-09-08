import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { earningsLabels, earningsDatasets } from "@/data/earnings";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EarningsChart() {
  const [chartColors, setChartColors] = useState({
    primary: "#3b82f6", // fallback
    secondary: "#f97316", // fallback
  });

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    setChartColors({
      primary: root.getPropertyValue("--color-primary").trim(),
      secondary: root.getPropertyValue("--color-secondary").trim(),
    });
  }, []);

  const data = {
    labels: earningsLabels,
    datasets: earningsDatasets.map((dataset) => ({
      ...dataset,
      backgroundColor:
        dataset.label === "Earnings"
          ? chartColors.primary
          : chartColors.secondary,
      borderRadius: 6,
      barThickness: 20,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { usePointStyle: true, boxWidth: 8, padding: 20 },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        ticks: { callback: (val) => val + "k" },
        grid: { color: "#e5e7eb" },
      },
    },
  };

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Earnings</CardTitle>
        <span className="text-sm text-gray-500">2023 ▼</span>
      </CardHeader>
      <CardContent className="h-[400px]">
        <Bar data={data} options={options} />
      </CardContent>
    </Card>
  );
}
