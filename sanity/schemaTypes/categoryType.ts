import { TagIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "range",
      type: "number",
      title: "Range Value",
      description: "Numeric value to define category range",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured Category",
      description: "Mark as featured to display prominently",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});

