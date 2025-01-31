import { bookingOptions } from "@/constant/data";
import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const bookingInfoType = defineType({
  name: "bookingInfo",
  title: "Booking Information Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Section Title",
      description: "Main title for the booking information section",
      type: "string",
      initialValue: "Booking Information",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "privateCharteredInfo",
      title: "Private Chartered Info",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Private Chartered",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "shortDescription",
          title: "Short Description",
          type: "string",
          initialValue: "Make a booking now!",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "href",
          title: "WhatsApp Link (Book Now button)",
          type: "url",
          initialValue: "https://wa.me/+918353936768",
          validation: (Rule) =>
            Rule.required()
              .uri({
                scheme: ["https"],
              })
              .custom((url) => {
                if (!url.startsWith("https://wa.me/")) {
                  return "URL must be a valid WhatsApp link starting with https://wa.me/";
                }
                return true;
              }),
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          initialValue: [
            "Exclusive privacy",
            "Double-decker yacht experience",
            "Personalized decor for events",
            "Customized itinerary",
            "Lavish cushioned seating",
            "Paid Refreshments provided",
            "Safety gear provided",
          ],
          of: [{ type: "string" }],
          validation: (Rule) => Rule.required().min(3).max(10),
        },
        {
          name: "img",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          // initialValue: {
          //   asset: {
          //     _ref: "image-*",
          //     _type: "reference",
          //   },
          //   _type: "image",
          //   asset: {
          //     _type: "reference",
          //     _ref: "/assets/logo.png",
          //   },
          // },
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              initialValue: "Private Chartered Image",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),

    defineField({
      name: "OtherBookingOptionsHeadline",
      type: "string",
      initialValue: "You can book our boat on lowest price!",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "bookingOptions",
      title: "Booking Options List",
      description: "Add different booking packages and their details",
      type: "array",
      initialValue: bookingOptions || [],
      validation: (Rule) => Rule.required().min(1),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "bookingImage",
              title: "Booking Image",
              type: "image",
              options: {
                hotspot: true,
              },
              initialValue: {
                asset: {
                  _ref: "image-*",
                  _type: "reference",
                },
                _type: "image",
                asset: {
                  _type: "reference",
                  _ref: "/assets/logo.png",
                },
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  validation: (Rule) => Rule.required(),
                  initialValue: "Booking Options Image",
                },
              ],
            },
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "href",
              title: "WhatsApp Link (Book Now button)",
              type: "url",
              validation: (Rule) =>
                Rule.required()
                  .uri({
                    scheme: ["https"],
                  })
                  .custom((url) => {
                    if (!url.startsWith("https://wa.me/")) {
                      return "URL must be a valid WhatsApp link starting with https://wa.me/";
                    }
                    return true;
                  }),
            },
            {
              name: "duration",
              title: "Duration/Time",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.required().min(2).max(8),
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
