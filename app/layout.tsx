import { ReactNode } from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "@/lib/constants";
import { Providers } from "@/lib/providers";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: {
    template: `%s - ${APP_NAME}`,
    default: "Instamart",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
