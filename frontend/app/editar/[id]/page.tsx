"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SkeletonForm from "../components/Skeleton/Skeleton";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { editarSchema, IEditarSchema } from "../schema/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../_components/shadcn/ui/select";
import { Input } from "../../_components/shadcn/ui/input";
import DatePicker from "../components/DatePicker/DatePicker";
import { getOneUser } from "@/app/_data/getOneUser";

export default function Editar() {
  const id = Number(useParams().id);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const form = useForm<IEditarSchema>({
    resolver: zodResolver(editarSchema),
    defaultValues: {
      nome: "",
      tipo: "",
      data: undefined,
    },
  });

  const onSubmit = async (data: IEditarSchema) => {
    console.log(data);
  };

  useEffect(() => {
    getOneUser(id).then((item) => {
      if (item) {
        const { id, ...itemWithoutId } = item;

        Object.entries(itemWithoutId).forEach(([name, value]: any) =>
          form.setValue(name, value)
        );

        setIsLoadingData(false);
      }
    });
  }, []);

  return (
    <section className="px-5 min-h-screen">
      <h1 className="mb-6 text-lg font-semibold">Editar</h1>
      {isLoadingData ? (
        <SkeletonForm />
      ) : (
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
                    <FormLabel>Evento</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
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
                      <DatePicker
                        onChange={field.onChange}
                        _date={field.value}
                      />
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
                Editar
              </button>
            </div>
          </form>
        </Form>
      )}
    </section>
  );
}
