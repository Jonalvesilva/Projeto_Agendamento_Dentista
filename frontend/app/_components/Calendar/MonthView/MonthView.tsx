"use client";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "@/app/_contexts/DateContext";
import { getAllUsers } from "@/app/_data/getAllUsers";
import { DataTest } from "@/app/_constants/constants";
import MonthDayBar from "./components/MonthDayBar";
import MonthDayDialog from "./components/MonthDayDialog";
import { NotMonthDay } from "./components/NotMonthDay";

export default function MonthView() {
  const [dataTest, setData] = useState<DataTest[]>([] as DataTest[]);
  const monthDays = useContext(DataContext)?.monthDays();

  useEffect(() => {
    getAllUsers().then((item) => setData(item));
  }, []);

  return (
    <div className="border border-gray-300 rounded-md">
      <MonthDayBar />
      <div className="grid grid-cols-7 divide-gray-200">
        {monthDays.map((month: any) => {
          return month.isPresentMonth ? (
            <MonthDayDialog
              key={`month_data_${month.data.getTime()}`}
              month={month}
              dataTest={dataTest}
            />
          ) : (
            <NotMonthDay
              month={month}
              key={`month_data_${month.data.getTime()}`}
            />
          );
        })}
      </div>
    </div>
  );
}
