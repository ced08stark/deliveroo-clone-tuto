export default {
  name: "restaurant",
  title: "restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restaurant name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short description ",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      title: "Image of the restaurant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of the restaurant",
      type: "number",
    },
    {
      name: "long",
      title: "longitude of the restaurant",
      type: "number",
    },
    {
      name: "address",
      title: "restaurant address",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "enter a rating from (1 - 5 Stars)",
      type: "number",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("please enter a value between 1 and 5"),
    },
    {
      name: "type",
      title: "category",
      type: "string",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
