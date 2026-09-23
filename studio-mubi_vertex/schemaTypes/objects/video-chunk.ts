import {defineField, defineType} from 'sanity'

export const videoChunk = defineType({
  name: 'videoChunk',
  title: 'Transcript chunk',
  type: 'object',
  fields: [
    defineField({
      name: 'startSeconds',
      title: 'Start (seconds)',
      type: 'number',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 2,
    }),
  ],
})