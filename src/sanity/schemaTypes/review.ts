import { Rule } from "sanity";

export default {
  name: 'review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule:Rule) => Rule.min(1).max(5),
    },
    {
      name: 'products',
      type: 'reference',
      to: [{ type: 'products' }],
      title: 'Products',
    },
  ],
};