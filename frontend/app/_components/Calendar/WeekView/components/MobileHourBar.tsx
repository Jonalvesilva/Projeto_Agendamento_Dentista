export default function MobileHourBar({ hours }: { hours: any }) {
  return (
    <div className="flex flex-col mt-auto">
      {hours.map((item: any) => (
        <div
          key={`mob_hour_${item}`}
          className="w-20 h-24 p-2 flex items-center justify-center text-xs font-semibold text-gray-400 border-b border-r border-gray-200"
        >
          {String(item)}
        </div>
      ))}
    </div>
  );
}
