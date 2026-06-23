import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The display name for this category (e.g., 'Recipes', 'Kitchen Tips').",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "A brief explanation of what this category covers.",
      type: "text",
      rows: 3,
    }),
  ],
});
