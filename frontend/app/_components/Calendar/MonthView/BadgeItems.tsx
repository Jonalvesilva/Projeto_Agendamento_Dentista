import { Badge } from "../../shadcn/ui/badge";
import { DataTest } from "@/app/_constants/constants";

interface Props {
  data: DataTest[];
  day: Date;
}

export default function BadgeItems({ data, day }: Props) {
  const formattedDay = day.toLocaleDateString("en-gb"); // Formatar o dia uma vez
  const filteredData = data.filter(
    (item) => new Date(item.data).toLocaleDateString("en-gb") === formattedDay
  );

  const arr = filteredData.slice(0, 2);
  const more = filteredData.length - arr.length;

  const color: { [key: string]: string } = {
    Consulta: "bg-green-700",
    Exame: "bg-blue-700",
    Revisão: "bg-gray-700",
  };

  const renderBadges = (arr: DataTest[]) =>
    arr.map((item, index) => (
      <Badge
        key={`badge_${index}`}
        variant="outline"
        className={`flex items-center justify-between flex-col mb-1 w-full ${
          color[item.tipo]
        }`}
      >
        <span className="text-white">{item.tipo}</span>
      </Badge>
    ));

  return (
    <div className="flex flex-col mt-2">
      {/* Desktop view */}
      <div className="hidden lg:flex flex-col items-center">
        {renderBadges(arr)}
        {more > 0 && (
          <span className="rounded-full text-sm bg-cyan-900 p-1 text-white w-fit">
            + {more}
          </span>
        )}
      </div>

      {/* Mobile view */}
      {filteredData.length > 0 && (
        <div className="flex flex-col items-center lg:hidden">
          <div className="rounded-full bg-cyan-900 text-white w-3 h-3 sm:w-fit sm:h-fit sm:p-1">
            <span className="hidden sm:flex sm:text-xs">
              + {filteredData.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
