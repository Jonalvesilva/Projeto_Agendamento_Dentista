import { formatarData } from "@/app/_functions/date";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  prevWeek: () => void;
  nextWeek: () => void;
  weekDays: Date[];
  date: Date;
  setDate: (date: Date) => void;
}

const DayButton = ({
  day,
  date,
  setDate,
}: {
  day: Date;
  date: Date;
  setDate: (date: Date) => void;
}) => {
  const isActive =
    new Date(day).toLocaleDateString("en-gb") ===
    new Date(date).toLocaleDateString("en-gb");

  return (
    <div
      className={`p-3.5 flex items-center justify-center text-sm font-medium border-l bg-yellow-200/40 border-gray-200 cursor-pointer ${
        isActive ? "text-blue-500" : "text-gray-900"
      }`}
      onClick={() => setDate(day)}
    >
      <span
        className={`flex items-center p-2 justify-center text-center w-16 ${
          isActive ? "font-semibold" : ""
        }`}
      >
        {formatarData(day)}
      </span>
    </div>
  );
};

export default function DesktopWeekDayBar({
  prevWeek,
  nextWeek,
  weekDays,
  date,
  setDate,
}: Props) {
  return (
    <div className="hidden xl:grid grid-cols-8 border border-gray-200 sticky top-0 left-0 w-full">
      <div className="p-3.5 flex items-center justify-center text-sm font-medium text-gray-900 bg-yellow-200/40">
        <IoIosArrowBack
          onClick={prevWeek}
          size={22}
          className="cursor-pointer"
        />
        <IoIosArrowForward
          onClick={nextWeek}
          size={22}
          className="cursor-pointer"
        />
      </div>
      {weekDays.map((day) => (
        <DayButton
          key={day.getTime()}
          day={day}
          date={date}
          setDate={setDate}
        />
      ))}
    </div>
  );
}
