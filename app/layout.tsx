import react, { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kiratech Users",
  description: "Kiratech user database",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
