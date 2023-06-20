import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import { Open_Sans } from "next/font/google";
import NavBar from "./components/NavBar";
import Head from "next/head";

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

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
      <body className={open_sans.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
