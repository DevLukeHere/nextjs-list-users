import react, { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Kiratech",
  description: "Kiratech user database",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
