import DarkTheme from "@/components/shared/dark-theme";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <h2>Welcome to abundance!!</h2>
      <div>
        <Link href="/store">
          <h2>Instamart Store</h2>
        </Link>
      </div>
      <div>
        <Link href="/dashboard">
          <h2>Dashboard</h2>
        </Link>
      </div>
      <DarkTheme />
    </div>
  );
}
