import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Calendar from "react-calendar";
import { useState } from "react";

export default function EventsCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Card className="rounded-2xl shadow-sm bg-secondary text-white">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Event Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="day" className="w-ful">
          {/* Tabs Switcher */}
          <TabsList className="grid w-full grid-cols-2 rounded-xl bg-white">
            <TabsTrigger
              value="day"
              className="rounded-lg data-[state=active]:bg-primary"
            >
              Day to Day
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="rounded-lg data-[state=active]:bg-primary"
            >
              Social Media
            </TabsTrigger>
          </TabsList>

          {/* Calendar يظهر مرة واحدة فقط */}
          <div className="mt-4">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full p-3 rounded-xl bg-secondary text-white"
              tileClassName={({ date, view }) => {
                if (view === "month") {
                  return date.toDateString() === new Date().toDateString()
                    ? "bg-primary text-white rounded-lg p-2"
                    : "hover:bg-primary/10 rounded-lg p-2";
                }
              }}
              prev2Label={null}
              next2Label={null}
            />
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
