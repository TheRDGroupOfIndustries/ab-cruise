"use server";

import { Suspense } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import {
  aboutUsQuery,
  bookingInfoQuery,
  galleryQuery,
  heroQuery,
  testimonialQuery,
} from "@/sanity/lib/queries";
import Loader from "../ui/loader";
import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import BookingInfo from "./sections/BookingInfo";
import ContactUs from "./sections/ContactUs";

const fetchSectionData = async (query, section) => {
  try {
    return await sanityFetch({ query });
  } catch (error) {
    console.error(`Error fetching ${section} data:`, error);
    return null;
  }
};

const SectionWrapper = ({ children, loading = <Loader /> }) => (
  <Suspense fallback={loading}>{children}</Suspense>
);

export default async function Home() {
  const [
    heroData,
    aboutUsData,
    galleryData,
    testimonialsData,
    bookingInfoData,
  ] = await Promise.all([
    fetchSectionData(heroQuery, "hero"),
    fetchSectionData(aboutUsQuery, "aboutUs"),
    fetchSectionData(galleryQuery, "gallery"),
    fetchSectionData(testimonialQuery, "testimonials"),
    fetchSectionData(bookingInfoQuery, "bookingInfo"),
  ]);

  if (!heroData) return <Loader />;

  console.log("bd", bookingInfoData);

  return (
    <>
      <SectionWrapper>
        <Hero heroData={heroData} />
      </SectionWrapper>
      <SectionWrapper>
        <AboutUs aboutUsData={aboutUsData} />
      </SectionWrapper>
      <SectionWrapper>
        <Gallery galleryData={galleryData} />
      </SectionWrapper>
      <SectionWrapper>
        <Testimonials testimonialsData={testimonialsData} />
      </SectionWrapper>
      <SectionWrapper>
        <BookingInfo bookingInfoData={bookingInfoData} />
      </SectionWrapper>
      <ContactUs />
    </>
  );
}
