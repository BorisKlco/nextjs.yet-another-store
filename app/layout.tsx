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
      <body className={`bg-black ${fontManrope.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
