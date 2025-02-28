import { Dialog, DialogTrigger } from "@/app/_components/shadcn/ui/dialog";
import { DataTest } from "@/app/_constants/constants";
import BadgeItems from "../BadgeItems";
import DialogHourItem from "../DialogHourItem";

interface Props {
  hours: any;
  date: Date;
  dataTest: DataTest[];
}
export default function MobileHourItems({ hours, date, dataTest }: Props) {
  return (
    <div className="grid grid-cols-1 w-full mt-auto">
      {hours.map((item: any) => (
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
  );
}
