import { FaShip, FaUserShield, FaEye, FaUsers } from "react-icons/fa";

export const aboutUsData = {
  title: "ABOUT US",
  description:
    "At AB Cruise, we redefine luxury and elegance on the waters of the Ganges. Established with a vision to offer unmatched hospitality and exclusive experiences, we pride ourselves on being the first choice for private yacht services in Varanasi. Our passion for excellence is reflected in every detail, from the impeccable design of our yachts to the personalized services we provide.",
  subDescription:
    "We are more than a yacht provider—we are curators of moments, ensuring that your journey with us is memorable, safe, and infused with the charm of Varanasi’s timeless beauty. Whether you seek tranquility, celebration, or adventure, AB Cruise is dedicated to making your time on the Ganges truly extraordinary.",
  services: [
    {
      icon: <FaShip className="text-4xl mx-auto" />,
      title: "Luxurious Yachts",
      description:
        "Experience a modern touch of luxury for the first time in Varanasi. Our yachts are designed to be luxurious, minimal, and modern - especially for you.",
    },
    {
      icon: <FaUserShield className="text-4xl mx-auto" />,
      title: "Private and Personalized",
      description:
        "Exclusive privacy with customized services to make your journey unforgettable.",
    },
    {
      icon: <FaEye className="text-4xl mx-auto" />,
      title: "Breathtaking Views",
      description:
        "Sail along the sacred river and witness the ghats of Varanasi from a unique perspective.",
    },
    {
      icon: <FaUsers className="text-4xl mx-auto" />,
      title: "Professional Crew",
      description:
        "Trained and courteous crew ensuring a safe, smooth, and delightful journey.",
    },
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
      "Best time for wildlife",
      "Refreshments provided",
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
      "Catering available",
      "Perfect for events",
      "Refreshments provided",
    ],
  },
];

export const privateCharter = {
  title: "Private Charter",
  href: "https://wa.link/d0r9v3",
  duration: "Flexible duration",
  features: [
    "Exclusive privacy",
    "Double-decker yacht experience",
    "Personalized decor for events",
    "Customized itinerary",
    "Lavish cushioned seating",
    "Refreshments provided",
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
