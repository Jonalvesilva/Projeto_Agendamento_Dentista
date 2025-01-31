"use client";
import { useState } from "react";
import MonthView from "../MonthView/MonthView";
import WeekView from "../WeekView/WeekView";
import { IToggleButton } from "@/app/_interfaces/interfaces";

export default function ToggleButton({ setView }: IToggleButton) {
  const [toggle, setToggle] = useState(0);
  const arrayView = [<WeekView />, <MonthView />];

  const handleToggle = (number: number) => {
    setToggle(number);
    setView(arrayView[number]);
  };

  return (
    <div className="flex items-center gap-px p-1 rounded-md bg-gray-100">
      <button
        onClick={() => handleToggle(0)}
        className={`py-2.5 px-5 rounded-lg ${
          toggle == 0 ? "bg-white" : "bg-gray-100"
        } text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white`}
      >
        Semana
      </button>
      <button
        onClick={() => handleToggle(1)}
        className={`py-2.5 px-5 rounded-lg ${
          toggle == 1 ? "bg-white" : "bg-gray-100"
        } text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white`}
      >
        Mês
      </button>
    </div>
  );
}
