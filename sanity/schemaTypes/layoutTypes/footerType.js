import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import { socialLinks } from "@/constant/data";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Footer Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "AB Cruisers",
    }),
    defineField({
      name: "description",
      title: "About AB Cruisers Description",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Experience the timeless charm of Varanasi with AB Cruisers, where luxury meets tradition on the serene waters of the Ganges. From private celebrations to tranquil getaways, we create unforgettable memories with impeccable service and unmatched elegance. Sail with us and redefine your journey.",
    }),

    defineField({
      name: "socialLinks",
      title: "Social List",
      type: "array",
      initialValue: socialLinks,
      of: [
        {
          type: "object",
          name: "link",
          title: "Add Link",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Link URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    defineField({
      name: "legalAndSupport",
      title: "Legal & Support List",
      type: "array",
      initialValue: [
        {
          label: "Terms of Service",
          href: "/terms-of-service",
          slug: "terms-of-service",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
          slug: "privacy-policy",
        },
      ],
      of: [
        {
          type: "object",
          name: "link",
          title: "Add Link",
          fields: [
            {
              name: "label",
              title: "Link Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "Link URL",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "slug",
              title: "Link Slug",
              type: "string",
            },
          ],
        },
      ],
    }),

    defineField({
      name: "disclaimer",
      title: "Disclaimer",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue:
        "Disclaimer : Ride schedule is subject to availability. Prior arrangements will be provided for hassle-free ride.",
    }),

    defineField({
      name: "abRights",
      title: "AB Cruisers Rights",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "All rights are reserved by AB Cruise",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
  },
});
