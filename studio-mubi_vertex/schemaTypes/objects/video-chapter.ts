import {defineField, defineType} from 'sanity'

export const videoChapter = defineType({
  name: 'videoChapter',
  title: 'Chapter',
  type: 'object',
  fields: [
    defineField({
      name: 'startSeconds',
      title: 'Start (seconds)',
      type: 'number',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
  ],
})