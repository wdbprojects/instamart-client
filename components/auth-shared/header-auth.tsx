import { cn } from "@/lib/utils";

interface HeaderProps {
  label: string;
}

const HeaderAuth = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className={cn("text-2xl font-semibold mb-2")}>🔐 Instamart</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
export default HeaderAuth;
