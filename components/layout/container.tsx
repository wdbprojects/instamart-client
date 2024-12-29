import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 xl:max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default Container;
