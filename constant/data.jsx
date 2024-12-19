import { FaUtensils } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";

export const aboutUsData = {
  title: "ABOUT US",
  description:
    "At AB Cruise, we redefine luxury and elegance on the waters of the Ganges. Established with a vision to offer unmatched hospitality and exclusive experiences, we pride ourselves on being the first choice for private yacht services in Varanasi. Our passion for excellence is reflected in every detail, from the impeccable design of our yachts to the personalized services we provide.",
  subDescription:
    "We are more than a yacht provider—we are curators of moments, ensuring that your journey with us is memorable, safe, and infused with the charm of Varanasi’s timeless beauty. Whether you seek tranquility, celebration, or adventure, AB Cruise is dedicated to making your time on the Ganges truly extraordinary.",
  services: [
    {
      icon: <FaUtensils className="text-4xl mx-auto" />,
      title: "Gourmet Dining",
      description:
        "Savor delicious meals prepared fresh onboard with a touch of luxury.",
    },
    {
      icon: <GiPartyPopper className="text-4xl mx-auto" />,
      title: "Event Celebrations",
      description:
        "Host memorable events with customized decor and exclusive settings.",
    },
    {
      icon: <BsSoundwave className="text-4xl mx-auto" />,
      title: "Entertainment Systems",
      description:
        "Enjoy a premium music system and entertainment for all occasions.",
    },
    // {
    //   icon: <MdSafetyDivider className="text-4xl mx-auto" />,
    //   title: "Safety Assured",
    //   description: "Equipped with modern safety measures and trained crew for a worry-free journey.",
    // },
    // {
    //   icon: <FiAnchor className="text-4xl mx-auto" />,
    //   title: "Custom Stops",
    //   description: "Plan your journey with exclusive stops to explore iconic ghats and landmarks.",
    // },
  ],
};

export const links = [
  { href: "/", label: "home" },
  { href: "/#about-us", label: "about us" },
  { href: "/#gallery", label: "gallery" },
  { href: "/", label: "AB" },
  { href: "/#booking-info", label: "bookings" },
  { href: "/#contact-us", label: "contact us" },
  { href: "/#blogs", label: "Blogs" },
];

export const bookingOptions = [
  {
    title: "Sunrise cruise",
    href: "https://wa.link/d0r9v3",
    duration: "20 min ride",
    features: [
      "Perfect for photographers",
      "Scenic morning views",
      "Light breakfast included",
      "Best time for wildlife",
    ],
  },
  {
    title: "Noon cruise",
    href: "https://wa.link/d0r9v3",
    duration: "40 min ride",
    features: [
      "Family-friendly atmosphere",
      "Marine life spotting",
      "Guided tour included",
      "Refreshments provided",
    ],
  },
  {
    title: "Evening cruise",
    href: "https://wa.link/d0r9v3",
    duration: "60 min ride",
    features: [
      "Exclusive boat access",
      "Customizable route",
      "Catering available",
      "Perfect for events",
    ],
  },
];

export const privateCharter = {
  title: "Private Charter",
  href: "https://wa.link/d0r9v3",
  duration: "Flexible duration",
  features: [
    "Customized itinerary",
    "Exclusive privacy",
    "Personalized decor for events",
    "Lavish cushioned seating",
    "FREE high-tea service",
    "Double-decker yacht experience",
    "Safety gear provided",
  ],
  highlight:
    "Tailored for exclusive celebrations, corporate events, romantic getaways, and spiritual experiences.",
};

export const galleryImages = [
  "/assets/gallery/g1.jpeg",
  "/assets/gallery/g2.jpeg",
  "/assets/gallery/g3.jpeg",
  "/assets/gallery/g4.jpeg",
  "/assets/gallery/g5.jpeg",
  "/assets/gallery/g6.jpeg",
  "/assets/gallery/g7.jpeg",
  "/assets/gallery/g8.jpeg",
  "/assets/gallery/g9.jpeg",
];

export const testimonials = [
  {
    name: "Adarsh Pandit",
    pfp: "/assets/user.png",
    role: "Family Traveler",
    testimonial:
      "What an incredible experience! The sunrise cruise was absolutely magical. The staff was professional and friendly, making sure our family had the best time possible.",
  },
  {
    name: "Samantha",
    pfp: "/assets/user.png",
    role: "Photography Enthusiast",
    testimonial:
      "As a photographer, I couldn't ask for better views. The morning light on the water was perfect, and the captain knew exactly where to position for the best shots.",
  },
  {
    name: "Rahul Panday",
    pfp: "/assets/user.png",
    role: "Travel Blogger",
    testimonial:
      "This cruise exceeded all expectations. From the moment we stepped aboard, it was clear this wasn't just another tourist attraction - it was a premium experience.",
  },
  {
    name: "Arjun Mehta",
    pfp: "/assets/user.png",
    role: "Business Executive",
    testimonial:
      "Booked the private charter for a corporate event. The team was incredibly accommodating, and our clients were thoroughly impressed. Will definitely book again!",
  },
  {
    name: "Lisa Patel",
    pfp: "/assets/user.png",
    role: "Local Resident",
    testimonial:
      "Having lived here for years, I've tried many boat tours. This one stands out for their attention to detail and knowledge of local marine life and history.",
  },
  {
    name: "Rajiv Kumar",
    pfp: "/assets/user.png",
    role: "Adventure Seeker",
    testimonial:
      "The noon cruise was perfect for spotting wildlife. We saw dolphins and various sea birds. The crew's knowledge about marine life made it educational and fun.",
  },
  {
    name: "Sneha Verma",
    pfp: "/assets/user.png",
    role: "Honeymoon Couple",
    testimonial:
      "My husband and I chose the sunset cruise for our honeymoon. The romantic atmosphere and stunning views created memories we'll cherish forever.",
  },
  {
    name: "Amit Desai",
    pfp: "/assets/user.png",
    role: "Marine Biology Student",
    testimonial:
      "The ecological information provided during the tour was fascinating. It's great to see a company that cares about marine conservation while providing entertainment.",
  },
  {
    name: "Pooja Nair",
    pfp: "/assets/user.png",
    role: "Event Planner",
    testimonial:
      "Organized a birthday celebration on the private charter. The staff went above and beyond to make it special. The setup and service were absolutely perfect.",
  },
  {
    name: "Manoj Gupta",
    pfp: "/assets/user.png",
    role: "Retired Teacher",
    testimonial:
      "The accessibility and comfort of the boat impressed me. Even as a senior citizen, I felt safe and comfortable throughout the journey. A wonderful experience!",
  },
];
