"use client";
import { DataContext } from "@/app/_contexts/DateContext";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { DataTest } from "@/app/_constants/constants";
import { hours } from "@/app/_constants/constants";
import { formatarData } from "@/app/_functions/date";
import BadgeItems from "./BadgeItems";
import { Dialog, DialogTrigger } from "../../shadcn/ui/dialog";
import DialogHourItem from "./DialogHourItem";
import { getAllUsers } from "@/app/_data/getAllUsers";
import DesktopWeekDayBar from "./components/DesktopWeekDayBar";
import MobileWeekDayBar from "./components/MobileWeekDayBar";
import DesktopHourBar from "./components/DesktopHourBar";
import DesktopHourSlot from "./components/DesktopHourSlot";
import MobileHourBar from "./components/MobileHourBar";
import MobileHourItems from "./components/MobileHourItems";

export default function WeekView() {
  const [dataTest, setData] = useState<DataTest[]>([] as DataTest[]);
  const weekDays = useContext(DataContext)!.weekDays();
  const { prevWeek, nextWeek, date, setDate } = useContext(DataContext)!;

  useEffect(() => {
    getAllUsers().then((item) => setData(item));
  }, []);

  return (
    <section className="w-full relative xl:py-6">
      <div className="w-full max-w-8xl mx-auto overflow-x-auto">
        <div className="relative">
          <DesktopWeekDayBar
            date={date}
            setDate={setDate}
            nextWeek={nextWeek}
            prevWeek={prevWeek}
            weekDays={weekDays}
          />
          <MobileWeekDayBar
            date={date}
            setDate={setDate}
            nextWeek={nextWeek}
            prevWeek={prevWeek}
            weekDays={weekDays}
          />

          {/*Desktop Hour and Slots*/}
          <div className="hidden xl:grid grid-cols-[.29fr_2fr] w-full overflow-x-auto h-[65vh] overflow-y-auto scrollbar-hide">
            <DesktopHourBar hours={hours} />
            <DesktopHourSlot
              hours={hours}
              weekDays={weekDays}
              dataTest={dataTest}
            />
          </div>

          {/*Mobile Hour and Slots*/}
          <div className="flex xl:hidden border-t border-l border-gray-200 items-center w-full h-[80vh] overflow-y-auto">
            <MobileHourBar hours={hours} />
            <MobileHourItems hours={hours} dataTest={dataTest} date={date} />
          </div>
        </div>
      </div>
    </section>
  );
}
