"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/shadcn/ui/button";
import { Calendar } from "@/app/_components/shadcn/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/shadcn/ui/popover";
import MaterialDatePicker from "./MaterialDatePicker";

export default function DatePicker() {
  const [date, setDate] = React.useState<Date>();
  const [isMobileHeight, setMobileHeight] = React.useState<boolean>(false);

  React.useEffect(() => {
    window.innerHeight < 700 ? setMobileHeight(true) : setMobileHeight(false);
  }, []);

  if (isMobileHeight) return <MaterialDatePicker />;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal h-[41px]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Escolha uma Data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
