"use server";
import { db } from "@/lib/prisma";

export const getOneUser = async (id: number) => {
  return await db.user.findUnique({ where: { id } });
};
