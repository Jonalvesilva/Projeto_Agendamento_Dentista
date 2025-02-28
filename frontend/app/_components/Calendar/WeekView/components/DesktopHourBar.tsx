export default function DesktopHourBar({ hours }: { hours: any }) {
  return (
    <div className="w-full">
      {hours.map((item: any) => (
        <div
          key={`hour_slot_xl_${item}`}
          className="h-32 w-full border-l border-r border-b border-gray-200 flex items-center justify-center transition-all hover:bg-stone-100"
        >
          <span className="text-xs font-semibold text-gray-400">{item}</span>
        </div>
      ))}
    </div>
  );
}
