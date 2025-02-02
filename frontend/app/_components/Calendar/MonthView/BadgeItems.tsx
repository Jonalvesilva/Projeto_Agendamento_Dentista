import { Badge } from "../../shadcn/ui/badge";
import { IDataBagdeItems } from "@/app/_interfaces/interfaces";

export default function BadgeItems({ data, day }: IDataBagdeItems) {
  const arr = data

    .filter(
      (item) =>
        new Date(item.data).toLocaleDateString("en-gb") ==
        new Date(day).toLocaleDateString("en-gb")
    )
    .slice(0, 2);

  const arr2 = data.filter(
    (item) =>
      new Date(item.data).toLocaleDateString("en-gb") ==
      new Date(day).toLocaleDateString("en-gb")
  );

  const more = arr2.length - arr.length;

  const color: { [key: string]: string } = {
    Consulta: "bg-green-700",
    Exame: "bg-blue-700",
    Revisão: "bg-gray-700",
  };
  const bagdes = arr.map((item, index) => (
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
      <div className="hidden lg:flex flex-col items-center">
        {bagdes}
        {more > 2 ? (
          <span className="rounded-full text-sm bg-cyan-900 p-1 text-white w-fit">
            + {more}
          </span>
        ) : (
          <></>
        )}
      </div>
      {arr2.length > 0 ? (
        <div className=" flex flex-col items-center lg:hidden">
          <div className="rounded-full  bg-cyan-900 text-white w-3 h-3 sm:w-fit sm:h-fit sm:p-1">
            <span className="hidden sm:flex sm:text-xs">+ {arr2.length}</span>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
