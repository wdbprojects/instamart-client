import { CircleCheckBig } from "lucide-react";

interface DialogSuccessProps {
  message: string;
}

const AlertSuccess = ({ message }: DialogSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center px-2 py-1 text-sm rounded-md bg-emerald-500/15 gap-x-2 text-emerald-500">
      <CircleCheckBig className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
export default AlertSuccess;
