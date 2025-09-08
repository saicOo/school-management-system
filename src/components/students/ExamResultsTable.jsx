import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";

export default function ExamResultsTable({ results }) {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-base font-semibold">
          All Exam Results
        </CardTitle>
        <MoreHorizontal className="h-5 w-5 text-muted-foreground cursor-pointer" />
      </CardHeader>

      <CardContent>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[50px]">
                  <input type="checkbox" className="h-4 w-4 accent-primary" />
                </TableHead>
                <TableHead>Exam Id</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>%</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {results.map((result, index) => {
                const isActive = index === 0; // الصف الأول selected زي الصورة
                return (
                  <TableRow
                    key={index}
                    className={`transition ${
                      isActive ? "bg-gray-50 font-semibold" : "hover:bg-gray-50"
                    }`}
                  >
                    <TableCell>
                      <input
                        type="checkbox"
                        checked={isActive}
                        readOnly
                        className="h-4 w-4 accent-primary"
                      />
                    </TableCell>
                    <TableCell>{result.id}</TableCell>
                    <TableCell>{result.type}</TableCell>
                    <TableCell>{result.subject}</TableCell>
                    <TableCell>{result.grade}</TableCell>
                    <TableCell>{result.percentage}</TableCell>
                    <TableCell
                      className={`${
                        isActive ? "font-semibold text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {result.date}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">
            Showing 1 to {results.length} of {results.length}
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-lg text-sm bg-gray-100 text-gray-600">
              &lt;
            </button>
            {[1, 2, 10].map((page, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded-lg text-sm ${
                  page === 1
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="px-3 py-1 rounded-lg text-sm bg-gray-100 text-gray-600">
              &gt;
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
