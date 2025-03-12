import { Skeleton } from "@/app/_components/shadcn/ui/skeleton";

export default function SkeletonForm() {
  return (
    <div className="min-h-screen max-w-screen-md flex flex-col items-center gap-y-4">
      <div className="w-full">
        <div className="mb-2">Nome</div>
        <div className="w-full">
          <Skeleton className="h-[40px]" />
        </div>
      </div>

      <div className="w-full flex items-center gap-x-4">
        <div className="w-full">
          <div className="mb-2">Evento</div>
          <Skeleton className="h-[40px]" />
        </div>

        <div className="w-full">
          <div className="mb-2">Data</div>
          <Skeleton className="h-[40px]" />
        </div>
      </div>
    </div>
  );
}
