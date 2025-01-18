import { TriangleAlert } from "lucide-react";

interface DialogErrorProps {
  message: string;
}

const AlertError = ({ message }: DialogErrorProps) => {
  if (!message) return null;
  return (
    <div className="flex items-center px-2 py-1 text-sm rounded-md bg-destructive/15 gap-x-2 text-destructive">
      <TriangleAlert className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};
export default AlertError;
