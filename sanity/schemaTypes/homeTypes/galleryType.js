import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Gallery Section Title",
      description: "Main heading for the gallery section",
      type: "string",
      initialValue: "GALLERY",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),

    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      description:
        "Add images to display in the gallery (recommended: 6-12 images)",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
            metadata: ["palette", "exif"],
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Brief description of the image for accessibility",
              validation: (Rule) => Rule.required().min(5).max(100),
              initialValue: "Gallery Image",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(20),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "galleryImages.0",
    },
  },
});
