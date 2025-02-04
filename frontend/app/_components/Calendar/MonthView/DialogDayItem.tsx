import { IDataDialogDay } from "@/app/_interfaces/interfaces";
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../../shadcn/ui/dialog";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { formatarHora } from "@/app/_functions/hour";

export default function DialogDayItem({ data, day }: IDataDialogDay) {
  const arr = data.filter(
    (item) =>
      new Date(item.data).toLocaleDateString("en-gb") ==
      new Date(day).toLocaleDateString("en-gb")
  );

  return (
    <DialogContent className="w-[90vw] max-w-screen-md rounded-md" asChild>
      <DialogHeader>
        <DialogTitle className="text-start">
          Eventos {day.toLocaleDateString("en-gb")}
        </DialogTitle>
      </DialogHeader>
      <div className="h-[1px] w-full bg-black mt-1"></div>
      <DialogDescription asChild>
        <div>
          {arr.length > 0 ? (
            <div className="w-full max-h-[400px] overflow-y-auto">
              {arr.map((item, index) => (
                <div key={`dialogday_${index}`}>
                  <div className="flex sm:pb-6 justify-between">
                    <div className="flex flex-col justify-evenly sm:grid sm:grid-cols-[150px_80px_80px] sm:gap-x-6">
                      <h2 className="text-md text-gray-500">{item.nome}</h2>
                      <h2 className="text-md text-gray-500">
                        {String(formatarHora(item.data))}
                      </h2>
                      <h2 className="text-md text-gray-500">{item.tipo}</h2>
                    </div>
                    <div className="flex flex-col gap-y-2 sm:flex-row sm:gap-x-2">
                      <button className="flex items-center justify-center gap-x-2 bg-green-700 p-1 sm:px-2 rounded-full text-white">
                        <FaRegEdit size={20} />
                        <span className="hidden md:flex">Editar</span>
                      </button>
                      <button className="flex items-center justify-center gap-x-2 bg-red-700 p-1 sm:px-2 rounded-full text-white">
                        <MdDelete size={20} />
                        <span className="hidden md:flex">Deletar</span>
                      </button>
                    </div>
                  </div>
                  <div className="h-[1px] bg-gray-200 mt-3 mb-6 sm:hidden"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-between items-center">
              <h2 className="text-[16px]">Sem eventos no dia</h2>
              <button className="text-[16px] bg-green-600 text-white py-1 px-2 rounded-full">
                Adicionar
              </button>
            </div>
          )}
        </div>
      </DialogDescription>
    </DialogContent>
  );
}
