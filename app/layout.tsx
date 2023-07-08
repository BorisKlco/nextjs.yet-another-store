import { Navbar } from "@/components";
import "./globals.css";
import { Manrope } from "next/font/google";

const fontManrope = Manrope({ subsets: ["latin"], variable: "--fontManrope" });

export const metadata = {
  title: "Yet another Store",
  description: "next.js learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontManrope.variable} bg-gradient-to-tl from-slate-100 via-white to-slate-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
