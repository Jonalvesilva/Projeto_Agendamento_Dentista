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
      key={`weekday_${day}`}
      className="p-3.5 flex items-center justify-center text-sm font-medium cursor-pointer"
      onClick={() => setDate(day)}
    >
      <span
        className={`flex items-center p-2 justify-center text-center w-12   ${
          isActive ? "text-blue-500 font-semibold" : "text-gray-900"
        }`}
      >
        {formatarData(day)}
      </span>
    </div>
  );
};

export default function MobileWeekDayBar({
  prevWeek,
  nextWeek,
  weekDays,
  date,
  setDate,
}: Props) {
  return (
    <div className="flex justify-between items-center bg-yellow-200/40 xl:hidden p-6">
      <div className="flex items-center justify-center text-sm font-medium text-gray-900">
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
      <div className="flex w-[55vw] justify-between overflow-x-auto">
        {weekDays.map((day) => (
          <DayButton
            key={day.getTime()}
            day={day}
            date={date}
            setDate={setDate}
          />
        ))}
      </div>
    </div>
  );
}
