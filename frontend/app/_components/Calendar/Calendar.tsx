"use client";
import ToggleButton from "./ToggleButton/ToggleButton";
import { useState, useContext } from "react";
import { DataContext } from "@/app/_contexts/DateContext";
import { monthCapitalize } from "@/app/_functions/date";
import MonthYearText from "./MonthYearText/MonthYearText";
import WeekView from "./WeekView/WeekView";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import SuspendedToggleButton from "./ToggleButton/SuspendedToggleButton";

export default function CalendarView() {
  const [view, setView] = useState(<WeekView />);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { date, nextMonth, prevMonth } = useContext(DataContext)!;
  return (
    <section className="h-full relative py-8 lg:mb-2">
      <div className="w-full max-w-screen-2xl mx-auto px-4">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-4">
              <MonthYearText
                monthCapitalize={monthCapitalize(date)}
                year={date.getFullYear().toString()}
              />
              <IoIosArrowBack
                onClick={() => prevMonth()}
                size={22}
                className="cursor-pointer"
              />
              <IoIosArrowForward
                onClick={() => nextMonth()}
                size={22}
                className="cursor-pointer"
              />
            </div>
            <div className="hidden md:flex">
              <ToggleButton setView={setView} />
            </div>
            <div className="flex relative md:hidden">
              <IoIosMenu
                size={30}
                onClick={() => setOpenMenu(!isOpenMenu)}
                className="cursor-pointer"
              />
              {isOpenMenu && (
                <SuspendedToggleButton
                  view={view}
                  setView={setView}
                  setOpenMenu={setOpenMenu}
                />
              )}
            </div>
          </div>
        </div>
        {view}
      </div>
    </section>
  );
}
