"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { adicionarSchema, IAdicionarSchema } from "./schema/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../_components/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../_components/shadcn/ui/select";
import { Input } from "../_components/shadcn/ui/input";
import DatePicker from "./components/DatePicker";

export default function Adicionar() {
  const form = useForm<IAdicionarSchema>({
    resolver: zodResolver(adicionarSchema),
    defaultValues: { nome: "", tipo: "Consulta", data: new Date() },
  });

  const onSubmit = async () => {};

  return (
    <section className="px-5 min-h-screen">
      <h1 className="mb-6 text-lg font-semibold">Adicionar</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-screen-md flex flex-col items-center gap-y-4"
        >
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Nome</FormLabel>
                <FormControl className="w-full">
                  <Input
                    {...field}
                    className="focus:ring-0 focus-visible:ring-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center gap-x-4">
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tipo de Evento</FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="focus:ring-0 focus-visible:ring-0">
                        <SelectValue placeholder="Consulta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Consulta">Consulta</SelectItem>
                        <SelectItem value="Exame">Exame</SelectItem>
                        <SelectItem value="Revisão">Revisão</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="data"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Data</FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex mt-4">
            <button
              type="submit"
              className="bg-green-600 text-white p-2 rounded-xl"
            >
              Adicionar
            </button>
          </div>
        </form>
      </Form>
    </section>
  );
}
