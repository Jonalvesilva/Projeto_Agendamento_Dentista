"use client";
import { ReactElement, useState } from "react";
import MonthView from "../MonthView/MonthView";
import WeekView from "../WeekView/WeekView";

interface Props {
  view: ReactElement;
  setView: (view: ReactElement) => void;
  setOpenMenu: (open: boolean) => void;
}

export default function SuspendedToggleButton({
  setView,
  setOpenMenu,
  view,
}: Props) {
  const arrayView = [<WeekView />, <MonthView />];
  const currentIndex = arrayView.findIndex((component) => {
    return component.type === view.type;
  });
  const [toggle, setToggle] = useState(currentIndex);

  const handleToggle = (number: number) => {
    setToggle(number);
    setView(arrayView[number]);
    setOpenMenu(false);
  };

  return (
    <div className="flex items-center gap-px p-1 rounded-md bg-gray-100 absolute top-10 right-0 z-20 shadow-xl shadow-gray-200">
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
