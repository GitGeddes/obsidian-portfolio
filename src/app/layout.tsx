/**
 * A global layout container modelled after the Obsidian interface.
 * @module app/RootLayout
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Metadata about the website.
 */
export const metadata: Metadata = {
  title: "Obsidian Portfolio",
  description: "hi :)",
};

/**
 * Wrap a given screen with a mock of the Obsidian interface.
 * @param children a read-only object of React elements.
 * @returns a React element with the `children` wrapped in a layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="row noteBackground">
            <SideBar/>
            <div className="fillWidth fullHeight column">
              <TopBar/>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
