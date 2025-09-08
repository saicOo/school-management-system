import { dashboardStats } from "@/data/dashboard";
import StatCard from "@/components/StatCard";
import EventsCalendar from "@/components/EventsCalendar";
import Chart from "@/components/EarningsChart";

export default function Dashboard() {
  return (
    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
      {/* Main content */}
      <div className="space-y-6 lg:col-span-2">
        {/* Stats */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard stats={dashboardStats} />
        </div>

        {/* Earnings chart */}
        <Chart />
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <EventsCalendar />
      </div>
    </div>
  );
}
