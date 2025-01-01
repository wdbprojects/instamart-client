import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
import { Toaster } from "@/components/ui/sonner";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    template: `%s - ${APP_NAME}`,
    default: "Instamart",
  },
  description: "Fullstack ecommerce application",
  applicationName: "Instamart",
};

console.log(typeof APP_NAME);

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
