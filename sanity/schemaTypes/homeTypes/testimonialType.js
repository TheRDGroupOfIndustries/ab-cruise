import { testimonials } from "@/constant/data";
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "What our customers says",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "testimonials",
      title: "Testimonials List",
      type: "array",
      initialValue: testimonials || [],
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "pfp",
              title: "Profile Picture",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "role",
              title: "Role",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "testimonial",
              title: "Testimonial",
              type: "text",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
