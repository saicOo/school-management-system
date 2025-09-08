import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, ChevronDown, ChevronUp } from "lucide-react";

export default function BioCard({ student }) {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Bio</CardTitle>
        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center pt-4 text-black">
          <div className="relative flex items-center justify-center">
            <div
              className="rounded-full p-[4px]" 
              style={{
                background: `conic-gradient(
       var(--color-secondary) 0deg 68deg,
        transparent 68deg 72deg,

       var(--color-secondary) 72deg 140deg,
        transparent 140deg 144deg,

       var(--color-secondary) 144deg 212deg,
        transparent 212deg 216deg,

       var(--color-secondary) 216deg 284deg,
        transparent 284deg 288deg,

       var(--color-muted) 288deg 356deg,
        transparent 356deg 360deg
      )`,
              }}
            >
              <div className="bg-white rounded-full p-1">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="/placeholder-avatar.jpg"
                    alt={student.name}
                  />
                  <AvatarFallback>
                    {student.name?.charAt(0)}
                    {student.name?.split(" ")[1]?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          <h3 className="mt-4 text-lg font-semibold">
            {student.name}{" "}
            <span className="text-primary text-sm">({student.id})</span>
          </h3>
          <p className="text-sm">{student.email}</p>
          <p className="text-sm">{student.phone}</p>
        </div>

        {/* Personal Details (Collapsible Tab) */}
        <div className="mt-6 border-t pt-4">
          <button
            onClick={() => setOpenDetails(!openDetails)}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-primary text-black"
          >
            <span className="text-md font-semibold">Personal Details</span>
            {openDetails ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>

          {openDetails && (
            <div className="mt-3 bg-white rounded-lg p-4 shadow-inner">
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                {Object.entries(student.details).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div className="capitalize font-medium text-muted">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </div>
                    <div className="text-black">{value}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* About */}
        <div className="mt-6 bg-white rounded-lg p-4">
          <h4 className="text-md text-black font-semibold mb-2">About Student</h4>
          <p className="text-sm text-muted-foreground">{student.about}</p>
        </div>
      </CardContent>
    </Card>
  );
}
