import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Article Categories",
  type: "document",
  icon: () => <span style={{ fontSize: "1.25em" }}>🏷️</span>,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The display name for this category (e.g., 'Recipes', 'Kitchen Tips').",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: "The URL-friendly identifier — auto-generated from the title.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
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
