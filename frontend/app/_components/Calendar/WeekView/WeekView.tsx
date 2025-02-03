"use client";
import { DataContext } from "@/app/_contexts/DateContext";
import { useContext } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { hours } from "@/app/_constants/constants";
import { formatarData } from "@/app/_functions/date";
import BadgeItems from "./BadgeItems";
import { dataTest } from "@/app/_constants/constants";
import { Dialog, DialogTrigger } from "../../shadcn/ui/dialog";
import DialogHourItem from "./DialogHourItem";

export default function WeekView() {
  const weekDays = useContext(DataContext)!.weekDays();
  const { prevWeek, nextWeek, date, setDate } = useContext(DataContext)!;

  return (
    <section className="w-full relative bg-stone-50 xl:py-12">
      <div className="w-full max-w-7xl mx-auto overflow-x-auto">
        <div className="relative">
          <div className="hidden xl:grid grid-cols-8 border border-gray-200 sticky top-0 left-0 w-full">
            <div className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900">
              <IoIosArrowBack
                onClick={() => prevWeek()}
                size={22}
                className="cursor-pointer"
              />
              <IoIosArrowForward
                onClick={() => nextWeek()}
                size={22}
                className="cursor-pointer"
              />
            </div>
            {weekDays.map((day: Date) => (
              <div
                key={`weekday_${day}`}
                className="p-3.5 flex items-center justify-center text-sm font-medium border-l border-gray-200 text-gray-900 cursor-pointer"
                onClick={() => setDate(day)}
              >
                {new Date(day).toLocaleDateString("en-gb") ==
                new Date(date).toLocaleDateString("en-gb") ? (
                  <span className="flex items-center text-blue-500 font-semibold p-2 justify-center text-center w-20">
                    {formatarData(day)}
                  </span>
                ) : (
                  <span className="flex items-center  p-2 justify-center text-center w-20">
                    {formatarData(day)}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center xl:hidden p-6">
            <div className="flex items-center justify-center text-sm font-medium  text-gray-900">
              <IoIosArrowBack
                onClick={() => prevWeek()}
                size={22}
                className="cursor-pointer"
              />
              <IoIosArrowForward
                onClick={() => nextWeek()}
                size={22}
                className="cursor-pointer"
              />
            </div>
            <div className="flex w-[55vw] overflow-x-auto">
              {weekDays.map((day: Date) => (
                <div
                  key={`weekday_${day}`}
                  className="p-3.5 flex items-center justify-center text-sm font-medium  text-gray-900 cursor-pointer"
                  onClick={() => setDate(day)}
                >
                  {new Date(day).toLocaleDateString("en-gb") ==
                  new Date(date).toLocaleDateString("en-gb") ? (
                    <span className="flex items-center text-blue-500 font-semibold p-2 justify-center text-center">
                      {formatarData(day)}
                    </span>
                  ) : (
                    <span className="flex items-center  p-2 justify-center text-center">
                      {formatarData(day)}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="hidden  xl:grid grid-cols-[.29fr_2fr] w-full overflow-x-auto  h-[65vh]  overflow-y-auto scrollbar-hide">
            <div className="w-full">
              {hours.map((item) => (
                <div
                  key={`hour_slot_xl_${item}`}
                  className="h-32 w-full border-l border-r border-b border-gray-200 flex items-center justify-center transition-all hover:bg-stone-100"
                >
                  <span className="text-xs font-semibold text-gray-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div>
              {hours.map((hour) => {
                return (
                  <div
                    className="grid grid-cols-7 w-full h-32"
                    key={`slot_hour_xl_${hour}`}
                  >
                    {weekDays.map((day: any) => (
                      <Dialog key={`week_data_xl_${day}`}>
                        <DialogTrigger>
                          <div
                            key={`slot_hour_xl_${hour}`}
                            className="w-full h-32  border-b border-r border-gray-200"
                          >
                            <BadgeItems data={dataTest} day={day} hour={hour} />
                          </div>
                        </DialogTrigger>
                        <DialogHourItem data={dataTest} day={day} hour={hour} />
                      </Dialog>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex xl:hidden border-t border-gray-200 items-center w-full  h-[80vh]  overflow-y-auto">
            <div className="flex flex-col mt-auto">
              {hours.map((item) => (
                <div
                  key={`mob_hour_${item}`}
                  className="w-20 h-24 p-2 flex items-center justify-center text-xs font-semibold text-gray-400 border-b border-r border-gray-200"
                >
                  {String(item)}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 w-full mt-auto">
              {hours.map((item) => (
                <Dialog key={`week_data_${item}`}>
                  <DialogTrigger>
                    <div
                      key={`slot_mob_hour_${item}`}
                      className="w-full h-24 border-b border-gray-200"
                    >
                      <BadgeItems data={dataTest} day={date} hour={item} />
                    </div>
                  </DialogTrigger>
                  <DialogHourItem data={dataTest} day={date} hour={item} />
                </Dialog>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
