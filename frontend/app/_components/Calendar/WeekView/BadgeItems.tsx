"use client";
import { IWeekDataBagdeItems } from "@/app/_interfaces/interfaces";
import { formatarHora } from "@/app/_functions/hour";

export default function BadgeItems({ data, day, hour }: IWeekDataBagdeItems) {
  const slotHour = Number(`${hour[0]}${hour[1]}`);

  const arr = data.filter(
    (item) =>
      new Date(item.data).toLocaleDateString("en-gb") ==
        new Date(day).toLocaleDateString("en-gb") &&
      item.data.getHours() == slotHour
  );

  const color: { [key: string]: string } = {
    Consulta: "bg-green-50 border-green-600",
    Exame: "bg-blue-50 border-blue-600",
    Revisão: "bg-gray-50 border-gray-600",
  };

  const textColor: { [key: string]: string } = {
    Consulta: "text-green-600",
    Exame: "text-blue-600",
    Revisão: "text-gray-600",
  };

  const isMore = arr.length > 2;

  const badges = arr.map((item, index) => {
    if (index >= 3) return;
    return (
      <div
        key={`badge_key_${index}`}
        className="border-t border-r border-gray-200 transition-all hover:bg-stone-100"
      >
        {index == 2 ? (
          <div className="h-full p-1.5 border-l-2 border-gray-600 bg-gray-100/80 text-xs">
            + {arr.length - 2} eventos
          </div>
        ) : (
          <div
            className={`p-1.5 border-l-2 ${color[item.tipo]} ${
              isMore ? "h-8 xl:h-12" : "h-12 xl:h-16"
            }`}
          >
            <div
              className={`grid grid-cols-[2fr_1fr_1fr] xl:grid-cols-[2fr_1fr] max-w-[400px] xl:relative  ${
                isMore ? "xl:top-2" : "xl:top-5"
              }`}
            >
              <p className="text-xs font-normal text-gray-900 mb-px truncate text-ellipsis xl:text-start">
                {item.nome}
              </p>
              <p className="text-xs font-normal text-gray-900 mb-px xl:hidden">
                {String(formatarHora(item.data))}
              </p>
              <p
                className={`text-xs font-semibold ${
                  textColor[item.tipo]
                } xl:text-start`}
              >
                {item.tipo}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  });
  return badges;
}
