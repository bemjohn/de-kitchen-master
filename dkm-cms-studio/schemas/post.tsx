import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Blog Articles",
  type: "document",
  icon: () => <span style={{ fontSize: "1.25em" }}>📄</span>,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The headline of the blog article — keep it clear and engaging.",
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
      name: "mainImage",
      title: "Main Image",
      description: "The hero image displayed at the top of the article (16:9 ratio recommended).",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "A short summary shown on blog listing cards.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Body",
      description: "The full article content.",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      description: "The writer or chef who created this article.",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      description: "Article categories (e.g., Recipes, Tips, Stories).",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      description: "Relevant keywords for filtering and discovery.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      description: "Promote this article to the featured section on the blog.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "estimatedReadingTime",
      title: "Estimated Reading Time (minutes)",
      description: "How long it takes to read this article.",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      description: "When this article was or will be published.",
      type: "datetime",
    }),
  ],
});
