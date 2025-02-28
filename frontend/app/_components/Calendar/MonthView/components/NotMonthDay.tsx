export function NotMonthDay({ month }: { month: any }) {
  return (
    <div
      className={`p-3.5 bg-gray-100 xl:aspect-auto h-full border-b border-r border-gray-200 flex flex-col 
     justify-start min-h-[70px] sm:min-h-[85px] transition-all duration-300 hover:bg-gray-100`}
    >
      <span
        className={`text-xs font-semibold text-gray-500 flex items-center justify-center w-4 h-5 rounded-full `}
      >
        {String(month.data.getDate())}
      </span>
    </div>
  );
}
