"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/app/_components/shadcn/ui/button";
import { ArrowUp, ArrowDown } from "lucide-react";

interface IDataColunm {
  tipo: string;
  data: string;
  nome: string;
  id: string;
  hora: string;
}

export const columns: ColumnDef<IDataColunm>[] = [
  {
    accessorKey: "nome",
    header: ({ column }) => {
      const sort = column.getIsSorted();
      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nome
          <ArrowUp className={` ${sort === "asc" && "text-green-500"}`} />
          <ArrowDown
            className={`relative right-2 ${
              sort === "desc" && "text-green-500"
            }`}
          />
        </Button>
      );
    },
  },
  {
    accessorKey: "tipo",
    header: ({ column }) => {
      const sort = column.getIsSorted();

      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tipo
          <ArrowUp className={` ${sort === "asc" && "text-green-500"}`} />
          <ArrowDown
            className={`relative right-2 ${
              sort === "desc" && "text-green-500"
            }`}
          />
        </Button>
      );
    },
  },
  {
    accessorKey: "data",
    header: ({ column }) => {
      const sort = column.getIsSorted();

      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Data
          <ArrowUp className={` ${sort === "asc" && "text-green-500"}`} />
          <ArrowDown
            className={`relative right-2 ${
              sort === "desc" && "text-green-500"
            }`}
          />
        </Button>
      );
    },
  },

  {
    accessorKey: "hora",
    header: ({ column }) => {
      const sort = column.getIsSorted();

      return (
        <Button
          variant="ghost"
          className="px-0 hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Hora
          <ArrowUp className={` ${sort === "asc" && "text-green-500"}`} />
          <ArrowDown
            className={`relative right-2 ${
              sort === "desc" && "text-green-500"
            }`}
          />
        </Button>
      );
    },
  },
];
