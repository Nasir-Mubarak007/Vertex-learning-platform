import {defineArrayMember, defineField, defineType} from 'sanity'
import {PlayIcon} from '@sanity/icons/Play'

/**
 * Playback happens on our own lesson page through the provider's embed, so only providers we
 * can both ingest transcripts from and embed are accepted.
 */
const SUPPORTED_VIDEO_HOSTS = [
  'youtube.com',
  'www.youtube.com',
  'youtu.be',
  'vimeo.com',
  'player.vimeo.com',
  'iframe.mediadelivery.net', // Bunny Stream
  'video.bunnycdn.com',
]



export const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: PlayIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {name: 'video', title: 'Video'},
    {name: 'extras', title: 'Extras'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      group: 'content',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      group: 'video',
      validation: (rule) => rule.required().uri({scheme: ['https']}).custom((value) => {
        if (!value) return true
        try {
          const {hostname} = new URL(value)
          return (
            SUPPORTED_VIDEO_HOSTS.includes(hostname) || 'Only YouTube, Vimeo, and Bunny Stream URLs are supported'
          )
        } catch {
          return 'Must be a valid URL'
        }
      }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Poster / thumbnail',
      description: 'Poster frame shown before playback and on lesson cards.',
      type: 'image',
      group: 'video',
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
      name: 'duration',
      title: 'Duration (seconds)',
      description: 'Stored in seconds. The site formats it for display.',
      type: 'number',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'freePreview',
      title: 'Free preview',
       description: 'Shows a "Free preview" label. This is a badge, not access control.',
      type: 'boolean',
      group: 'video',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student count',
      description: 'Display only.',
      type: 'number',
      group: 'video',
      validation: (rule) => rule.required().integer().min(0),
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
       description: 'The written lesson notes shown beside the video.',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      group: 'content',
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'proTip',
      title: 'Pro tip',
      type: 'text',
      rows: 3,
      group: 'extras',
      validation: (rule) => rule.max(280),
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [defineArrayMember({type: 'resource'})],
      group: 'extras',
    }),
  ],
  preview: {
     select: {title: 'title', media: 'thumbnail', duration: 'duration', freePreview: 'freePreview'},
    prepare({title, media, duration, freePreview}) {
      const minutes = duration ? `${Math.round(duration / 60)} min`: undefined
      return {
        title: title || '(Untitled)',
        subtitle: [minutes, freePreview ? 'Free preview' : undefined].filter(Boolean).join(' • '),
        media,
      }
    }
  },
})