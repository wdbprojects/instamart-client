"use client";

import { ReactNode, useState } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ComponentProps } from "react";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const ThemeProvider = ({
  children,
  ...props
}: ComponentProps<typeof NextThemeProvider>) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};
interface TanstackProviderProps {
  children: ReactNode;
}

export const Providers = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        {children}
        <Toaster richColors closeButton />
        <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
