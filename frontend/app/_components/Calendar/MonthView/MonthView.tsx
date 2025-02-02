"use client";
import { useContext } from "react";
import { DataContext } from "@/app/_contexts/DateContext";
import { dataTest } from "@/app/_constants/constants";
import BadgeItems from "./BadgeItems";
import { Dialog, DialogTrigger } from "../../shadcn/ui/dialog";
import DialogDayItem from "./DialogDayItem";

export default function MonthView() {
  const monthDays = useContext(DataContext)?.monthDays();

  return (
    <div className="border border-gray-300 rounded-md">
      <div className="grid grid-cols-7  divide-gray-200 border-b border-gray-200">
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-r border-white">
          <span className="text-sm font-medium text-black">Dom</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-red-500">
          <span className="text-sm font-medium text-black">Seg</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
          <span className="text-sm font-medium text-black">Ter</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
          <span className="text-sm font-medium text-black">Qua</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
          <span className="text-sm font-medium text-black">Qui</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
          <span className="text-sm font-medium text-black">Sex</span>
        </div>
        <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200">
          <span className="text-sm font-medium text-black">Sab</span>
        </div>
      </div>
      <div className="grid grid-cols-7 divide-gray-200">
        {monthDays.map((month: any) => {
          if (month.isPresentMonth) {
            return (
              <Dialog key={`month_data_${month.data.getTime()}`}>
                <DialogTrigger>
                  <div
                    className={`p-3.5 bg-white xl:aspect-auto h-full border-b border-r border-gray-200 flex flex-col 
                     justify-start min-h-[70px] sm:min-h-[85px] lg:min-h-[140px]  transition-all duration-300 hover:bg-gray-100 cursor-pointer`}
                  >
                    <span
                      className={`text-xs font-semibold text-gray-500 flex items-center justify-center w-4 h-5 rounded-full ${
                        month.active ? "bg-violet-600 text-white" : ""
                      }`}
                    >
                      {String(month.data.getDate())}
                    </span>
                    <BadgeItems data={dataTest} day={month.data} />
                  </div>
                </DialogTrigger>
                <DialogDayItem data={dataTest} day={month.data} />
              </Dialog>
            );
          } else {
            return (
              <div
                key={`month_data_${month.data.getTime()}`}
                className={`p-3.5 bg-gray-100 xl:aspect-auto h-full border-b border-r border-gray-200 flex flex-col 
                     justify-start min-h-[70px] sm:min-h-[85px] transition-all duration-300 hover:bg-gray-100`}
              >
                <span
                  className={`text-xs font-semibold text-gray-500 flex items-center justify-center w-4 h-5 rounded-full `}
                >
                  {String(month.data.getDate())}
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
