import type { Metadata } from "next";
import {Manrope} from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme";

const manrope = Manrope({subsets:['latin']})

export const metadata: Metadata = {
  title: "Innerlich",
  description: "Share AI Powered videos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${manrope.className} bg-[#dbdbdb]`}
        // className={`${manrope.className} bg-[#171717]`}

        >
          <ThemeProvider
                  attribute="class"
                  defaultTheme="dark"
                  enableSystem
                  disableTransitionOnChange
          >

        {children}
          </ThemeProvider>
      </body>
    </html>
        </ClerkProvider>
  );
}
