import { ImSpinner8 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="w-full h-full bg-black/80 flex items-center justify-center">
      <ImSpinner8 size={30} className="text-white animate-spin" />
    </div>
  );
}
