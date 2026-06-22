import { defineType, defineField } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "The headline of your blog article — keep it clear and engaging.",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Web Address Link",
      description: "Click 'Generate' to create the link from your title, then feel free to shorten it (e.g., change 'how-to-bake-the-perfect-cake' to just 'how-to-bake').",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Article Photo",
      description: "Upload the main cover picture that people will see first when they open this article.",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Short Summary",
      description: "Write a 1-2 sentence preview to show on the main blog page to catch a reader's attention.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "body",
      title: "Write Your Story Here",
      description: "Type the full recipe, steps, and article content freely here with bolding, links, and text formatting tools...",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "estimatedReadingTime",
      title: "Estimated Reading Time (minutes)",
      type: "number",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "author.name",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `by ${subtitle}` : "",
        media,
      };
    },
  },
});
