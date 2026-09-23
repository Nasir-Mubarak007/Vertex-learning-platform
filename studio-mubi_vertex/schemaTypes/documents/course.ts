import { defineArrayMember, defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: () => '📚',
  groups: [
    {
      name: 'overview',
      title: 'Overview',
      default: true
    },
    {
      name: 'marketing',
      title: 'Marketing'
    },
    {
      name: 'curriculum',
      title: 'Curriculum'
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'overview',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'overview',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'A brief summary of the course content',
      type: 'text',
      group: 'overview',
      rows: 3,
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'overview',
      options: { hotspot: true },
      fields: [
        defineField({
            name: 'alt',
            title: 'Alternative text',
            type: 'string',
            description: 'A short description of the image for accessibility purposes',
            validation: (rule) => rule.required(),
          }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      group: 'marketing',
      options: {
        list: [{ title: 'Beginner', value: 'beginner' }, { title: 'Intermediate', value: 'intermediate' }, { title: 'Advanced', value: 'advanced' }],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    
    defineField({
      name: 'price',
      title: 'Price (USD)',
      description: 'In USD. Use 0 for a free course.',
      type: 'number',
      group: 'marketing',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'popular',
      title: 'Popular',
      description: 'Shows a "Popular" badge in the catalog.',
      type: 'boolean',
      group: 'marketing',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student count',
      description: 'Display only.',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'outcomes',
      title: "What you'll learn",
      type: 'array',
      of: [defineArrayMember({ type: 'outcome' })],
      group:'marketing',
      validation: (rule) => rule.min(1).max(6),
    }),
    defineField({
      name: 'instructor',
      title: 'Instructor',
      type: 'reference',
      to: [{ type: 'instructor' }],
      group: 'overview',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'overview',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [defineArrayMember({ type: 'courseModule' })],
      group: 'curriculum',
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level',
      media: 'coverImage',
      instructor: 'instructor.name',
    },
    prepare(selection) {
      const { title, level, media, instructor } = selection
      return {
        title: title,
        subtitle: [level, instructor].filter(Boolean).join(' . '),
        media: media,
      }
    }
  },
})