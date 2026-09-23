import {defineArrayMember, defineField, defineType} from 'sanity'

/**
 * Video intelligence: one document per unique video URL, built by the offline ingestion pipeline in
 * `scripts/ingest` (AGENTS.md §9). It is an internal lookup for search — a lesson links to it by
 * video URL, and a matched moment is always reported as the lesson that uses the video, never as a
 * result of its own (§7, §11).
 *
 * Read-only on purpose: hand-editing a chunk would desync it from the transcript it came from.
 * Re-run the pipeline instead.
 */

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  icon: () => '🎬',
  readOnly: true,
  description:
    'Internal lookup built by the ingestion pipeline. One per unique video URL. Never surfaced directly to learners.',
  fields: [
    defineField({
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      description: 'Provider-side id. For Bunny Stream this is `<libraryId>/<videoId>`.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      description: 'The canonical URL of the video, as used in lessons.',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'provider',
      type: 'string',
      options: {
        list: [
          {title: 'YouTube', value: 'youtube'},
          {title: 'Vimeo', value: 'vimeo'},
          {title: 'Bunny Stream', value: 'bunny'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      description: 'Table of contents: start seconds with clean labels. Empty when the source published no markers.',
      type: 'array',
      of: [defineArrayMember({type: 'videoChapter'})],
    }),
    defineField({
      name: 'chunks',
      title: 'Transcript chunks',
      description: 'Short timestamped transcript pieces.',
      type: 'array',
      of: [defineArrayMember({type: 'videoChunk'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      videoId: 'videoId',
      provider: 'provider',
      chunks: 'chunks',
      chapters: 'chapters',
    },
    prepare({videoId, provider, chunks, chapters}) {
      const counts = `${chapters?.length ?? 0} chapters, ${chunks?.length ?? 0} chunks`
      return {
        title: videoId, 
        subtitle: [provider,counts].filter(Boolean).join(' . ')
      }
    },
  },
})