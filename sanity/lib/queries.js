import { groq } from "next-sanity";

// get all posts
export const postsQuery = groq`*[_type == "post"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "authorSlug": author->slug
}`;

// author->name == $author &&
export const singlePostQuery = groq`*[_type == "post" &&  slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  body,
  "authorName": author->name,
  "authorBio": author->bio,
  "authorImage": author->image.asset->url,
  "categoryName": category->title,
  "categorySlug": category->slug.current,
  publishedAt,
  "slug": slug.current,
  "imageURL": mainImage.asset->url,
}`;

// get all what-we-do
export const whatWeDoQuery = groq`*[_type == "what-we-do"] {
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
  "authorSlug": author->slug,
  body,
}`;

// author->name == $author &&
export const singlewhatWeDoQuery = groq`*[_type == "what-we-do" &&  slug.current == $slug][0]{
  _id,
  title,
  mainImage,
  body,
  "authorName": author->name,
  "authorBio": author->bio,
  "authorImage": author->image.asset->url,
  "categoryName": category->title,
  "categorySlug": category->slug.current,
  publishedAt,
  "slug": slug.current,
  "imageURL": mainImage.asset->url,
}`;

export const categoriesQuery = groq`*[_type == "category"] {
  _id,
  title,
  "slug": slug.current
}`;

export const footerQuery = groq`*[_type == "footer"][0] {
  heading,
  description,
  socialLinks[] {
    label,
    href,
    icon
  },
  disclaimer,
  abRights
}`;

export const navbarLinksQuery = groq`*[_type == "navbarLinks"][0] {
  heading,
  links[] {
    label,
    href,
    slug
  }
}`;

export const heroQuery = groq`*[_type == "hero"][0] {
  title,
  heading,
  subheading,
  button {
    text,
    link
  },
  heroBanner,
  "heroImageURL": heroBanner.asset->url,
  "heroImageAlt": heroBanner.alt
}`;

export const aboutUsQuery = groq`*[_type == "aboutUs"][0] {
  title,
  body,
  services[] {
    icon,
    head,
    description
  },
  aboutUsBanner,
  "bannerURL": aboutUsBanner.asset->url,
  "bannerAlt": aboutUsBanner.alt
}`;

export const galleryQuery = groq`*[_type == "gallery"][0] {
  title,
  galleryImages[] {
    "imageUrl": asset->url,
    "alt": alt
  }
}`;

export const testimonialQuery = groq`*[_type == "testimonial"][0] {
  title,
  testimonials[] {
    name,
    pfp,
    role,
    testimonial
  }
}`;

export const bookingInfoQuery = groq`*[_type == "bookingInfo"][0] {
  title,
  privateCharteredInfo {
    title,
    shortDescription,
    href,
    features,
    img {
      "imageUrl": asset->url,
      "alt": alt
    }
  },
  OtherBookingOptionsHeadline,
  bookingOptions[] {
    "imageUrl": bookingImage.asset->url,
    "imageAlt": bookingImage.alt,
    title,
    href,
    duration,
    features
  }
}`;

export const contactUsQuery = groq`*[_type == "contactUs"][0] {
  title,
  contactInfo {
    heading,
    subheading,
    phone {
      number,
      link
    },
    email {
      emailAddress,
      link
    },
    address {
      fullAddress,
      iframe
    }
  }
}`;
