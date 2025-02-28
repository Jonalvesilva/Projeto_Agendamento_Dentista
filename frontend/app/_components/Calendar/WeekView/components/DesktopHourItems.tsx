import { Dialog, DialogTrigger } from "@/app/_components/shadcn/ui/dialog";
import BadgeItems from "../BadgeItems";
import DialogHourItem from "../DialogHourItem";
import { DataTest } from "@/app/_constants/constants";

interface Props {
  weekDays: any;
  hour: any;
  dataTest: DataTest[];
}

export default function DesktopHourItems({ weekDays, hour, dataTest }: Props) {
  return (
    <>
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
    </>
  );
}
