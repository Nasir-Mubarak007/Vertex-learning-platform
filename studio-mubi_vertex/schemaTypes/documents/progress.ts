import {defineArrayMember, defineField, defineType} from 'sanity'

export const progress = defineType({
  name: 'progress',
  title: 'Progress',
  type: 'document',
  icon: () => '📈',
  description:
    'Per-learner state keyed by the Clerk user id. Written only through a server route with a write token.',
  fields: [
    defineField({
      name: 'userId',
      title: 'User ID (Clerk)',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'completedLessons',
      title: 'Completed lessons',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'lesson'}]})],
    }),
    defineField({
      name: 'resumePosition',
      title: 'Resume position',
      type: 'object',
      fields: [
        defineField({
          name: 'lesson',
          title: 'Lesson',
          type: 'reference',
          to: [{type: 'lesson'}],
        }),
        defineField({
          name: 'seconds',
          title: 'Seconds',
          type: 'number',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'userId',
    },
  },
})