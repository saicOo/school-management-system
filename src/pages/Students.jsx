import React from "react";
import { studentStats, studentData } from "@/data/students";
import { examResults } from "@/data/exam";
import StatCard from "@/components/StatCard";
import EventsCalendar from "@/components/EventsCalendar";
import BioCard from "@/components/students/BioCard";
import AttendanceChart from "@/components/students/AttendanceChart";
import ExamResultsTable from "@/components/students/ExamResultsTable";

const Students = () => {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column: Bio */}
      <BioCard student={studentData} />

      {/* Right Column */}
      <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inner Left Column */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <StatCard stats={studentStats} />
          </div>
          <AttendanceChart />
        </div>

        {/* Inner Right Column */}
        <div>
          <EventsCalendar />
        </div>

        {/* Full Width Bottom */}
        <div className="lg:col-span-2">
        <ExamResultsTable results={examResults} />
        </div>
      </div>
    </div>
  );
};

export default Students;
