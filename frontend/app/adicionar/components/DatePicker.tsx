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
import { ScrollArea, ScrollBar } from "@/app/_components/shadcn/ui/scroll-area";
import { roundToNearestFiveMinutes } from "@/app/_functions/roundToNearestFiveMinutes";

interface Props {
  onChange: (...event: any[]) => void;
}

export default function DatePicker({ onChange }: Props) {
  const [date, setDate] = React.useState<Date>();
  const [isMobileHeight, setMobileHeight] = React.useState<boolean>(false);

  const handleDate = (date: Date | undefined) => {
    if (date) {
      onChange(date);
      setDate(date);
    }
  };

  const handleTime = (date: Date, type: "hour" | "minute", value: string) => {
    const newDate = new Date(date);
    if (type === "hour") {
      const hour = parseInt(value, 10);
      newDate.setHours(hour);
    } else if (type === "minute") {
      newDate.setMinutes(parseInt(value, 10));
    }
    setDate(newDate);
    onChange(newDate);
  };

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
          {date
            ? format(date, "dd/MM/yyyy HH:mm")
            : format(roundToNearestFiveMinutes(new Date()), "dd/MM/yyyy HH:mm")}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="sm:flex">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDate}
            initialFocus
          />
          <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 24 }, (_, i) => i)
                  .reverse()
                  .map((hour) => (
                    <Button
                      key={hour}
                      size="icon"
                      variant={
                        date && date.getHours() === hour ? "default" : "ghost"
                      }
                      className="sm:w-full shrink-0 aspect-square"
                      onClick={() => handleTime(date!, "hour", hour.toString())}
                    >
                      {hour}
                    </Button>
                  ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
            <ScrollArea className="w-64 sm:w-auto">
              <div className="flex sm:flex-col p-2">
                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                  <Button
                    key={minute}
                    size="icon"
                    variant={
                      date && date.getMinutes() === minute ? "default" : "ghost"
                    }
                    className="sm:w-full shrink-0 aspect-square"
                    onClick={() =>
                      handleTime(date!, "minute", minute.toString())
                    }
                  >
                    {minute.toString().padStart(2, "0")}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="sm:hidden" />
            </ScrollArea>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
