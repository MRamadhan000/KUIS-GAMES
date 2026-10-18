import "./globals.css";
import { SerwistProvider } from "@serwist/next/react";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <SerwistProvider swUrl="/sw.js">
          {children}
        </SerwistProvider>
      </body>
    </html>
  );
}