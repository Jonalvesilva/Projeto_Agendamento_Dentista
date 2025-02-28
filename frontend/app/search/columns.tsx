"use client";

import { ColumnDef } from "@tanstack/react-table";

interface DataTestColunm {
  tipo: string;
  data: string;
  nome: string;
  id: string;
  hora: string;
}

export const columns: ColumnDef<DataTestColunm>[] = [
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "data",
    header: "Data",
  },

  {
    accessorKey: "hora",
    header: "Hora",
  },
];
