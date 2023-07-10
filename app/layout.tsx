import { Navbar } from "@/app/(components)";
import "./globals.css";
import { Manrope } from "next/font/google";
import CartContextProvider from "./(context)/cartContextProvider";

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
        <CartContextProvider>
          <Navbar />
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
