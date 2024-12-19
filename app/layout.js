import localFont from "next/font/local";
import "./globals.css";
import { El_Messiri, DM_Sans } from "next/font/google";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const elMessiri = El_Messiri({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-el",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "AB Cruise",
  description: "AB Cruise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${elMessiri.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
