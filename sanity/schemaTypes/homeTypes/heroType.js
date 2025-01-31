import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: DocumentTextIcon,
  description: "Main hero section configuration for the homepage",
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "AB Cruisers",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heading",
      type: "string",
      initialValue: "Experience comfort and luxury on the trails of Ganges!",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      type: "string",
      initialValue:
        "Discover the timeless charm of Varanasi with AB Cruise, blending luxury and tradition on the serene Ganges. From private celebrations to tranquil getaways, we offer unmatched elegance and unforgettable memories.",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "button",
      title: "Book Now Button",
      type: "object",
      description: "Configuration for the call-to-action button",
      fields: [
        defineField({
          name: "text",
          title: "Button Text",
          type: "string",
          initialValue: "Book now",
          validation: (Rule) => Rule.required().max(20),
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
          initialValue: "/#booking-info",
          validation: (Rule) =>
            Rule.required().regex(/^[/#].*/, "Must start with / or #"),
        }),
      ],
    }),

    defineField({
      name: "heroBanner",
      title: "Hero Banner Image",
      type: "image",
      description: "Main hero image (recommended: 1920x1080)",
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
          initialValue: "AB Cruisers Hero Banner",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroBanner",
    },
  },
});
