import Hero from "./sections/Hero";
import AboutUs from "./sections/AboutUs";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import BookingInfo from "./sections/BookingInfo";
import ContactUs from "./sections/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <BookingInfo />
      <ContactUs />
    </>
  );
}
