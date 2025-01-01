"use client";

import { useEffect, useState } from "react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="flex flex-col justify-center items-start gap-2 space-x-2">
      <Toggle
        className="!data-[state=on]:bg-transparent p-5"
        aria-label="Toggle theme"
        variant="outline"
        pressed={theme === "dark"}
        onPressedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <MoonStar className="h-4 w-4" />
        )}
      </Toggle>
    </div>
  );
};

export default DarkMode;
