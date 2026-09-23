import {defineArrayMember, defineField, defineType} from 'sanity'

export const instructor = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  icon: () => '👨‍🏫',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      description: 'Short topic labels, e.g. "React", "Systems design".',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: {
        layout: 'tags',
      },
      validation: (rule) => rule.required().min(1).max(5),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
      expertise: 'expertise',
    },
    prepare(selection) {
      const {title, media, expertise} = selection
      return {
        title,
        media,
        subtitle: expertise?.join(' . '),
      }
    },
  },
})