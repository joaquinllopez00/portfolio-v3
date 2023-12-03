import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["devanagari"] });
export const metadata: Metadata = {
  title: "Joaquin Lopez",
  description: "",
  icons: [{ url: "/favicon.ico", sizes: "32x32", type: "favicon" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} md:px-24 px-4 overflow-x-hidden md:overflow-visible`}>
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-gradient-to-b from-indigo-600 via-purple-500 to-pink-600 fixed top-0 bottom-0 right-0 w-full opacity-10 z-0" />
          <div className="z-10 relative">
            <NavBar />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
