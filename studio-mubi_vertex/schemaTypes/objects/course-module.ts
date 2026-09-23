import {defineArrayMember, defineField, defineType} from 'sanity'

export const courseModule = defineType({
  name: 'courseModule',
  title: 'Module',
  type: 'object',
  description: 'Embedded inside a course. Order in the course array is the module number.',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'lessons',
      title: 'Lessons',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'lesson'}]})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})