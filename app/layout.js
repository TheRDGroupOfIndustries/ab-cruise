import { sanityFetch } from "@/sanity/lib/fetch";
import { navbarLinksQuery } from "@/sanity/lib/queries";
import { El_Messiri, DM_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import "./globals.css";
import Footer from "@/components/layout/Footer";

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

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  keywords:
    "AB Cruises Varanasi, luxury yacht services Varanasi, yacht rental in Varanasi, private yacht Varanasi, Ganga river cruise Varanasi, best yacht service in Varanasi, boat rental Varanasi, Varanasi cruise experience, Ganga yacht tours, premium yacht services Varanasi, sunset yacht cruise Varanasi, Ganga aarti yacht experience, romantic yacht ride Varanasi, luxury river tours Varanasi, private boat ride on Ganga, Varanasi river sightseeing, yacht booking for Ganga aarti, luxury boat ride Ganga Varanasi, best river cruise in Varanasi, yacht party Varanasi, birthday yacht rental Varanasi, wedding yacht services Varanasi, corporate yacht bookings Varanasi, affordable luxury yacht rental in Varanasi, book a private yacht for Ganga aarti, best sunset yacht cruise on the Ganga, experience luxury on the Ganga river with AB Cruises, top-rated yacht services in Varanasi, luxury yacht near Dashashwamedh Ghat, Varanasi yacht tours with AB Cruises, AB Cruises Ganga aarti packages",
  description:
    "AB Cruises offers luxury yacht services in Varanasi. Experience private yacht rides, Ganga aarti cruises, and premium river tours with unmatched hospitality. Book now for a unique Ganga river adventure!",
  title: "AB Cruises | Luxury Yacht Booking in Varanasi",
  author: "AB Cruisers",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "AB Cruisers | Luxury Yacht Booking in Varanasi",
    description:
      "Book luxury yachts effortlessly for your next adventure. Explore our wide range of yachts and enjoy premium services at competitive prices.",
    url: "https://www.abcruisers.com",
  },
};

const Meta = () => (
  <Head>
    <title>AB Cruisers | Luxury Yacht Booking in Varanasi</title>
    <meta
      name="keywords"
      content="
          AB Cruises Varanasi, Luxury yacht services Varanasi, Yacht rental in Varanasi, 
          Private yacht Varanasi, Ganga river cruise Varanasi, Best yacht service in Varanasi, 
          Boat rental Varanasi, Varanasi cruise experience, Ganga yacht tours, 
          Premium yacht services Varanasi, Sunset yacht cruise Varanasi, 
          Ganga aarti yacht experience, Romantic yacht ride Varanasi, Luxury river tours Varanasi, 
          Private boat ride on Ganga, Varanasi river sightseeing, Yacht booking for Ganga aarti, 
          Luxury boat ride Ganga Varanasi, Best river cruise in Varanasi, Yacht party Varanasi, 
          Birthday yacht rental Varanasi, Wedding yacht services Varanasi, Corporate yacht bookings Varanasi, 
          Affordable luxury yacht rental in Varanasi, Book a private yacht for Ganga aarti, 
          Best sunset yacht cruise on the Ganga, Experience luxury on the Ganga river with AB Cruises, 
          Top-rated yacht services in Varanasi, Luxury yacht near Dashashwamedh Ghat, 
          Varanasi yacht tours with AB Cruises, AB Cruises Ganga aarti packages
        "
    />
    <meta
      name="description"
      content="AB Cruises offers luxury yacht services in Varanasi. Experience private yacht rides, Ganga aarti cruises, and premium river tours with unmatched hospitality. Book now for a unique Ganga river adventure!"
    />
    <meta name="author" content="AB Cruises" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <link rel="canonical" href="https://www.abcruisers.com" />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="AB Cruisers | Explore the Varanasi in Ganga"
    />
    <meta
      property="og:description"
      content="Book luxury yachts effortlessly for your next adventure. Explore our wide range of yachts and enjoy premium services at competitive prices."
    />
    <meta property="og:url" content="https://www.abcruisers.com" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default async function RootLayout({ children }) {
  const navData = await sanityFetch({ query: navbarLinksQuery });

  return (
    <html lang="en">
      <Meta />
      <body
        className={`${dmSans.className} ${poppins.className} ${elMessiri.variable} antialiased`}
      >
        <Navbar navData={navData} />
        {children}
        <Footer navData={navData} />
      </body>
    </html>
  );
}
