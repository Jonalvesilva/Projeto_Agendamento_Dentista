"use client";

import { z } from "zod";

export const adicionarSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "O nome precisa ter no mínimo 3 caracteres" }),
  tipo: z.string(),
  data: z.date(),
});

export type IAdicionarSchema = z.infer<typeof adicionarSchema>;
