import { dataTest, DataTest } from "@/app/_constants/constants";
import DesktopHourItems from "./DesktopHourItems";

interface Props {
  weekDays: any;
  dataTest: DataTest[];
  hours: any;
}

export default function DesktopHourSlot({ hours, dataTest, weekDays }: Props) {
  return (
    <div>
      {hours.map((hour: any) => {
        return (
          <div className="grid grid-cols-7 w-full h-32" key={`hour_${hour}`}>
            <DesktopHourItems
              dataTest={dataTest}
              hour={hour}
              weekDays={weekDays}
            />
          </div>
        );
      })}
    </div>
  );
}
