import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Instamart",
    default: "Ecommerce store",
  },
  description: "Fullstack ecommerce application",
  applicationName: "Instamart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
