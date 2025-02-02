import { IMonthYearText } from "@/app/_interfaces/interfaces";

export default function MonthYearText({
  monthCapitalize,
  year,
}: IMonthYearText) {
  return (
    <div className="flex items-center pl-1">
      <h5 className="text-xl leading-8 font-semibold text-gray-900">
        {`${monthCapitalize} ${year}`}
      </h5>
    </div>
  );
}
