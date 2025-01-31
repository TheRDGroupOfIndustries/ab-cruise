import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const aboutUsType = defineType({
  name: "aboutUs",
  title: "About Us Section",
  type: "document",
  icon: DocumentTextIcon,
  description: "About Us section configuration for the homepage",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Section title",
      initialValue: "ABOUT US",
      validation: (Rule) => Rule.required().max(50),
    }),

    defineField({
      name: "body",
      title: "Body Paragraphs",
      description: "Main content paragraphs for the about section",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "At AB Cruisers, we redefine luxury and elegance on the waters of the Ganges. Established with a vision to offer unmatched hospitality and exclusive experiences, we pride ourselves on being the first choice for private yacht services in Varanasi. Our passion for excellence is reflected in every detail, from the impeccable design of our yachts to the personalized services we provide.",
        "We are more than a yacht provider—we are curators of moments, ensuring that your journey with us is memorable, safe, and infused with the charm of Varanasi's timeless beauty. Whether you seek tranquility, celebration, or adventure, AB Cruisers is dedicated to making your time on the Ganges truly extraordinary.",
      ],
      validation: (Rule) =>
        Rule.required().min(1).max(4).warning("Recommended: 2-3 paragraphs"),
    }),

    defineField({
      name: "services",
      title: "Services List",
      description: "Key services offered by AB Cruisers",
      type: "array",
      validation: (Rule) =>
        Rule.required().min(2).max(6).warning("Recommended: 4 services"),
      initialValue: [
        {
          icon: "FaShip",
          head: "Luxurious Yachts",
          description:
            "Experience a modern touch of luxury for the first time in Varanasi. Our yachts are designed to be luxurious, minimal, and modern - especially for you.",
        },
        {
          icon: "FaUserShield",
          head: "Private and Personalized",
          description:
            "Exclusive privacy with customized services to make your journey unforgettable.",
        },
        {
          icon: "FaEye",
          head: "Breathtaking Views",
          description:
            "Sail along the sacred river and witness the ghats of Varanasi from a unique perspective.",
        },
        {
          icon: "FaUsers",
          head: "Professional Crew",
          description:
            "Trained and courteous crew ensuring a safe, smooth, and delightful journey.",
        },
      ],
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "React Icon component name (e.g., FaShip)",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "head",
              title: "Heading",
              type: "string",
              validation: (Rule) => Rule.required().max(30),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required().max(150),
            }),
          ],
        },
      ],
    }),

    defineField({
      name: "aboutUsBanner",
      title: "About Us Banner Image",
      type: "image",
      description:
        "Banner image for the about section (recommended: 1920x1080)",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Description of the image for accessibility",
          validation: (Rule) => Rule.required().min(10).max(120),
          initialValue: "About Us Banner",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "aboutUsBanner",
    },
  },
});
