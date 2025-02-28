import { Dialog, DialogTrigger } from "@/app/_components/shadcn/ui/dialog";
import BadgeItems from "../BadgeItems";
import { DataTest } from "@/app/_constants/constants";
import DialogDayItem from "../DialogDayItem";

interface IMonthDayDialogProps {
  month: any;
  dataTest: DataTest[];
}
export default function MonthDayDialog({
  month,
  dataTest,
}: IMonthDayDialogProps) {
  return (
    <Dialog>
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
}
