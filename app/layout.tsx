import { ReactNode } from "react";
import "./globals.css";
import { Providers } from "./redux/provider";
import { Open_Sans } from "next/font/google";
import NavBar from "./components/NavBar";

const open_sans = Open_Sans({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Kiratech",
  description: "Kiratech user database",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <NavBar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
