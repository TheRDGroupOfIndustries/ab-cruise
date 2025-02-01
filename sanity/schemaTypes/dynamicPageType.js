import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const dynamicPageType = defineType({
  name: "dynamicPage",
  title: "Dynamic Pages",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "body",
      title: "Page Contents",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
        }),
        defineArrayMember({
          type: "object",
          name: "link",
          title: "Link",
          fields: [
            { name: "href", type: "url", title: "URL" },
            { name: "text", type: "string", title: "Link Text" },
          ],
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
});

// prepare(selection) {
//   const { author } = selection;
//   return { ...selection, subtitle: author && `by ${author}` };
// },
// defineField({
//   name: "author",
//   type: "reference",
//   to: { type: "author" },
// }),
// defineField({
//   name: "body",
//   type: "blockContent",
// }),

// defineArrayMember({ type: "code" }), // Code blocks
// defineArrayMember({ type: "callout" }), // Custom callout component
// defineArrayMember({ type: "button" }), // Custom button component
// defineArrayMember({ type: "gallery" }), // Image gallery
// defineArrayMember({ type: "video" }), // Video embed
// defineArrayMember({ type: "audio" }), // Audio embed
