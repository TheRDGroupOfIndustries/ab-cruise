import { links } from "@/constant/data";
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const navbarLinksType = defineType({
  name: "navbarLinks",
  title: "Navbar Links",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Navbar Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "AB Cruisers",
    }),
    defineField({
      name: "links",
      title: "Link List",
      type: "array",
      initialValue: links,
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
  ],
  preview: {
    select: {
      title: "heading",
    },
  },
});
