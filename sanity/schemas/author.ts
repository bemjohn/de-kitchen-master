import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      description: "A professional headshot or portrait — square aspect ratio recommended.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biography",
      description: "A brief professional background, credentials, and area of expertise.",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      description: "E.g., Head Chef, Food Writer, Pastry Specialist.",
      type: "string",
    }),
  ],
});
