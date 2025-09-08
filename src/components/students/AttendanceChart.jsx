import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
import { MoreHorizontal } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AttendanceChart() {
  const [chartColors, setChartColors] = useState({
    success: "#576086", // fallback
    warning: "#f7b696", // fallback
    orange: "#c6ebbf", // fallback
    danger: "#f2eee9", // fallback
  });

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    setChartColors({
      success: root.getPropertyValue("--color-success").trim() || "#576086",
      warning: root.getPropertyValue("--color-warning").trim() || "#f7b696",
      orange: root.getPropertyValue("--color-orange").trim() || "#c6ebbf",
      danger: root.getPropertyValue("--color-danger").trim() || "#f2eee9",
    });
  }, []);

  const data = {
    labels: ["Present", "Half Day Present", "Late Coming", "Absent"],
    datasets: [
      {
        data: [60, 15, 10, 15],
        backgroundColor: [
          chartColors.success,
          chartColors.warning,
          chartColors.orange,
          chartColors.danger,
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Attendance</CardTitle>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground mb-4">Feb 2023</p>
        <div className="h-[200px] flex items-center justify-center">
          <Doughnut data={data} options={{ maintainAspectRatio: false }} />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {data.labels.map((label, i) => (
            <div key={i} className="flex items-center">
              <span
                className="h-2 w-2 rounded-full mr-2"
                style={{ backgroundColor: data.datasets[0].backgroundColor[i] }}
              ></span>
              {label}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
