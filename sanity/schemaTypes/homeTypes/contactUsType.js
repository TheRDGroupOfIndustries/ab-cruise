import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const contactUsType = defineType({
  name: "contactUs",
  title: "Contact Us Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Contact Us Section Title",
      description: "Main heading for the contact us section",
      type: "string",
      initialValue: "Contact Us",
      validation: (Rule) => Rule.required().min(2).max(50),
    }),

    defineField({
      name: "contactInfo",
      title: "Contact Us Information",
      description: "Information to contact us",
      type: "object",
      fields: [
        {
          name: "heading",
          title: "Contact Us Heading",
          type: "string",
          description: "Main heading for the contact us section",
          initialValue: "Need Quick Response?",
          validation: (Rule) => Rule.required().min(2).max(500),
        },
        {
          name: "subheading",
          title: "Contact Us Subheading",
          type: "string",
          description: "Subheading for the contact us section",
          initialValue: "Feel free to contact us on Phone, Email or Visit us",
          validation: (Rule) => Rule.required().min(2).max(500),
        },
        {
          name: "phone",
          title: "Phone",
          description: "Our phone number",
          type: "object",
          fields: [
            {
              name: "number",
              title: "Phone Number",
              type: "string",
              description: "Our phone number",
              initialValue: "+91 8353936768",
              validation: (Rule) => Rule.required().min(2).max(20),
            },
            {
              name: "link",
              title: "Phone Link",
              type: "string",
              description: "Our phone number",
              initialValue: "https://wa.me/+918353936768",
              validation: (Rule) => Rule.required().min(2).max(100),
            },
          ],
        },
        {
          name: "email",
          title: "Email",
          description: "Our email",
          type: "object",
          fields: [
            {
              name: "emailAddress",
              title: "Email Address",
              type: "string",
              description: "Our email",
              initialValue: "support@abcruisers.com",
              validation: (Rule) => Rule.required().min(2).max(100),
            },
            {
              name: "link",
              title: "Email Link",
              type: "string",
              description: "Our email",
              initialValue: "support@abcruisers.com",
              validation: (Rule) => Rule.required().min(2).max(100),
            },
          ],
        },
        {
          name: "address",
          title: "Address",
          description: "Our address",
          type: "object",
          fields: [
            {
              name: "fullAddress",
              title: "Full Address",
              type: "string",
              description: "Our address",
              initialValue:
                "Hotel Ganga Monastery, Ganga Ghat, Varanasi, Uttar Pradesh, India.",
              validation: (Rule) => Rule.required().min(2).max(500),
            },
            {
              name: "iframe",
              title: "Address embeded map link",
              type: "url",
              description: "Embeded map link",
              initialValue:
                "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hotel%20Ganga%20Monastery,%20Ganga%20Ghat,%20Varanasi,%20Uttar%20Pradesh,%20India.+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https"],
                }),
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
