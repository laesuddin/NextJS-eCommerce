import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const addressType = defineType({
  name: "address",
  title: "Address",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Address Name",
      type: "string",
      description: "A friendly name for the address (e.g., Home, Work)",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "email",
      title: "User Email",
      type: "email",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      description: "Street address including house number",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "city",
      type: "string",
      title: "City",
      description: "Two letter state code (e.g., NY, CA)",
      validation: (Rule) => Rule.required().length(2).uppercase(),
    }),
    defineField({
      name: "zip",
      type: "string",
      title: "ZIP Code",
      description: "Format: 12345 or 12345-6789",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\d{5}(-\d{4})?$/, {
            name: "zipCode",
            invert: false,
          })
          .custom((zip: string | undefined) => {
            if (!zip) {
              return "ZIP Code is required";
            }
            if (!zip.match(/^\d{5}(-\d{4})?$/)) {
              return "Please enter a valid ZIP Code (e.g., 12345 or 12345-6789)";
            }
            return true;
          }),
    }),
    defineField({
      name: "default",
      title: "Default Address",
      type: "boolean",
      description: "Is this the default shipping address?",
      initialValue: false,
    }),
    defineField({
      name: "cratedAT",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      city: "city",
      state: "state",
      type: "datetime",
      isDefault: "default",
    },
    prepare({ title, subtitle, city, state, isDefault }) {
      return {
        title: `${title} ${isDefault ? "(Default)" : ""}`,
        subtitle: `${subtitle}, ${city}, ${state}`,
      };
    },
  },
});
