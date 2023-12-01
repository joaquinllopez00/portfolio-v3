import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NavBar } from "./components/NavBar";
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
      <body className={`${poppins.className} md:px-24 px-4`}>
        <NavBar />
        <div className="max-w-5xl mx-auto">{children}</div>
      </body>
    </html>
  );
}
