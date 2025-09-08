import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function StatCard({ stats }) {
  return (
    <>
      {stats.map(({ title, value }, index) => (
        <div
          key={`stat-${index}`}
          className="p-5 rounded-xl shadow bg-card text-card-foreground"
        >
          <h3 className="text-muted text-sm font-medium">{title}</h3>
          <div className="flex items-center justify-between mt-2">
            <p className="text-2xl font-bold">{value}</p>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
              <MdKeyboardDoubleArrowRight className="h-5 w-5 text-secondary rotate-[335deg]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
