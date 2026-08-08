import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { AuthenticationRouteGate } from "@/src/components/auth/AuthenticationRouteGate";
import { AuthenticationProvider } from "@/src/context/AuthenticationContext";
import { KingdomProvider } from "@/src/context/KingdomContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K.I.N.G.S.",
  description: "King's Intelligent Network of Grading & Stewardship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-950">
        <AuthenticationProvider>
          <AuthenticationRouteGate>
            <KingdomProvider>
              {children}
            </KingdomProvider>
          </AuthenticationRouteGate>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
