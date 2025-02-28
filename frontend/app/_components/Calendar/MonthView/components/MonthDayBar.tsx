export default function MonthDayBar() {
  return (
    <div className="grid grid-cols-7  divide-gray-200 border-b border-gray-200">
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-r border-white">
        <span className="text-sm font-medium text-black">Dom</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-red-500">
        <span className="text-sm font-medium text-black">Seg</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
        <span className="text-sm font-medium text-black">Ter</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
        <span className="text-sm font-medium text-black">Qua</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
        <span className="text-sm font-medium text-black">Qui</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200 border-l border-white">
        <span className="text-sm font-medium text-black">Sex</span>
      </div>
      <div className="p-3.5 flex flex-col sm:flex-row items-center justify-center bg-gray-200">
        <span className="text-sm font-medium text-black">Sab</span>
      </div>
    </div>
  );
}
